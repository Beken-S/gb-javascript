"use strict";

class Cart {
  /**
   * Создает объект корзины.
   */
  constructor() {
    //Содержит объекты товаров добавленные в корзину.
    this.cart = [];
    this.itemCount = this.cart.length;
    this.penultItem = this.itemCount - 1;
    this.totalPrice = this.calcCartTotalPrice();

    //Содержимое корзины в виде таблицы.
    this.dataTable = this.getDataTable();

    //Ссылка на разметку корзины в документе.
    this.cartMenu = document.querySelector(".cart-menu");

    //Ссылка на элемент отображающий количество товаров в корзине.
    this.itemCountEl = this.cartMenu.querySelector(".button__cart-item-count");

    this.popUpMenu = new CartPopUpBlock(this.cartMenu);
    this.menuButton = new CartMenuButton(this.cartMenu, this.popUpMenu);
  }

  /**
   * Метод возвращает содержимое корзины в виде массива, который представляет
   * из себя таблицу данных. Каждый элемент массива это объект строки.
   * @returns массив данных в виде таблицы.
   */
  getDataTable() {
    const table = [];
    let id = null;
    for (let i = 0, row = 0; i < this.itemCount; i++) {
      if (i < this.penultItem && this.cart[i].pId === this.cart[i + 1].pId) {
        continue;
      }
      table[row++] = {
        // Имя товара
        pName: this.cart[i].pName,

        // Общее количество таких товаров в корзине
        pQuantity: this.calcProductQuantity(this.cart[i].pId),

        // Стоимость единицы товара
        pPrice: this.cart[i].pPrice,

        // Общая стоимость таких товаров
        pTotalPrice: this.calcProductTotalPrice(this.cart[i].pId),
      };
    }
    return table;
  }

  /**
   * Метод вычисляет количество товаров в корзине с определенным id.
   * @param {number} id идентификатор товара.
   * @returns {number} количество товаров в корзине с переданным id.
   */
  calcProductQuantity(id) {
    let quantity = null;
    for (let i = 0; i < this.itemCount; i++) {
      if (this.cart[i].pId === id) {
        quantity++;
      }
    }
    return quantity;
  }

  /**
   * Метод вычисляет общую стоимость товаров с определенным id.
   * @param {number} id идентификатор товара.
   * @returns {number} общая стоимость товаров в корзине с переданным id.
   */
  calcProductTotalPrice(id) {
    let tPrice = null;
    for (let i = 0; i < this.itemCount; i++) {
      if (this.cart[i].pId === id) {
        tPrice += this.cart[i].pPrice;
      }
    }
    return tPrice;
  }

  /**
   * Метод вычисляет общую стоимость товаров в корзине.
   * @returns {number} общая стоимость товаров в корзине.
   */
  calcCartTotalPrice() {
    let totalPrice = 0;
    this.cart.forEach((product) => (totalPrice += product.pPrice));
    return totalPrice;
  }

  /**
   * Метод отображает или скрывает элемент с количеством товаров в корзине.
   */
  showItemCountElement() {
    if (this.itemCount > 0) {
      this.itemCountEl.textContent = this.itemCount;
      this.itemCountEl.style.display = "block";
    } else {
      this.itemCountEl.style.display = "none";
    }
  }

  /**
   * Метод обновляет поля корзины.
   */
  update() {
    this.itemCount = this.cart.length;
    this.penultItem = this.itemCount - 1;
    this.dataTable = this.getDataTable();
    this.totalPrice = this.calcCartTotalPrice();
    this.popUpMenu.updateTable(this.dataTable, this.totalPrice);
    this.showItemCountElement();
  }
}

//Подкласс кнопки корзины.
class CartMenuButton {
  /**
   * Создает объекта кнопки корзины.
   * @param {Element} menu ссылка на разметку корзины в документе.
   * @param {CartPopUpBlock} popUp ссылка на объект всплывающего при клике блока.
   */
  constructor(menu, popUp) {
    this.button = menu.querySelector(".cart-menu__button");
    this.button.addEventListener("click", () => {
      this.showPopUpMenu(popUp, menu);
      this.button.blur();
    });
  }

  /**
   * Метод отображает или скрывает всплывающий блок корзины.
   * @param {{}} popUp ссылка на объект всплывающего при клике блока.
   * @param {Element} menu ссылка на разметку корзины в документе.
   */
  showPopUpMenu(popUp, menu) {
    if (!popUp.visibility) {
      popUp.body.style.visibility = "visible";
      popUp.body.style.opacity = 1;
      popUp.visibility = true;

      // Смещение элемента относительно корзины
      popUp.body.style.top = `${menu.getBoundingClientRect().height}px`;
    } else {
      popUp.body.style.visibility = "collapse";
      popUp.visibility = false;
    }
  }
}

//Подкласс всплывающего блока корзины
class CartPopUpBlock {
  /**
   * Создает объект всплывающего блока корзины.
   * @param {Element} menu ссылка на разметку корзины в документе.
   */
  constructor(menu) {
    // Ссылка на разметку всплывающего блока.
    this.body = menu.querySelector(".cart-menu__pop-up-menu");

    // Ссылка на тело таблицы.
    this.tBody = menu.querySelector(".products-table__body");

    // Ссылка на ячейку с общей стоимостью товаров.
    this.cartPrice = menu.querySelector(".cart-total-price");
    this.visibility = false;
  }

  /**
   * Метод создает внутреннюю разметку для таблицы.
   * @param {[]} data массив таблицы с данными.
   * @returns {string} разметка.
   */
  getTbodyMarkup(data) {
    let markup = "";
    if (data.length > 0) {
      data.forEach((row) => {
        markup += `
          <tr>
            <td class="products-table__cell">
              ${row.pName}
            </td>
            <td class="products-table__cell">
              ${row.pQuantity}
            </td>
            <td class="products-table__cell">
              $${row.pPrice.toFixed(2)}
            </td>
            <td class="products-table__cell">
              $${row.pTotalPrice.toFixed(2)}
            </td>
          </tr>
        `;
      });
    }
    return markup;
  }

  /**
   * Метод обновляет таблицу.
   * @param {[]} data массив таблицы с данными.
   * @param {number} cartPrice общая стоимость корзины.
   */
  updateTable(data, cartPrice) {
    this.tBody.innerHTML = this.getTbodyMarkup(data);
    this.cartPrice.textContent = `$${cartPrice.toFixed(2)}`;
  }
}
