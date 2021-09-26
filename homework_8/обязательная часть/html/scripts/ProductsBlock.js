"use strict";

class ProductsBlock {
  /**
   * Создает объект блока карточек товаров.
   * @param {[]} products массив содержащий товары.
   * @param {{}} cartObj объект корзины.
   */
  constructor(products, cartObj) {
    this.products = products;

    // Массив карточек товаров.
    this.cards = this.createCards(this.products);

    // Ссылка на блок в документе содержащий карточки товаров.
    this.productsBlock = document.querySelector(".catalog-page__product-block");

    // Добавление карточек на страницу.
    this.addProductCards(cartObj);
  }

  /**
   * Метод создает массив из карточек товаров.
   * @param {[]} products массив содержащий товары
   * @returns {[]} массив карточек товаров.
   */
  createCards(products) {
    let cards = [];
    products.forEach((product) => cards.push(new ProductCard(product)));
    return cards;
  }

  /**
   * Метод добавляет девять карточек товаров на страницу.
   * @param {{}} cart объект корзины.
   * @param {number} step шаг задающий выборку товаров из корзины, целое число (значение по умолчанию 0).
   */
  addProductCards(cart, step = 0) {
    for (let i = 9 * step; i < 9 * (step + 1); i++) {
      if (i > this.cards.length) {
        break;
      }
      this.productsBlock.insertAdjacentElement("beforeend", this.cards[i].card);
    }

    // Получение ссылок на кнопки добавления в корзину.
    const addToCartButtons = this.productsBlock.querySelectorAll(
      ".product-card__button-cart"
    );

    // Добавление события клика для кнопок.
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        this.addToCart(event, cart);
      });
    });
  }

  /**
   * Метод добавляет продукт в корзину при клике на кнопку добавления в корзину.
   * @param {{}} event объект вызвавший событие.
   * @param {{}} cartObj объект корзины.
   */
  addToCart(event, cartObj) {
    // Получаем id продукта в виде целого числа удаляя префикс у id кнопки
    const id = Number(event.target.id.slice(this.cards[0].idPrefix.length));

    /* Проверяем наличие товара с таким id в массиве товаров и возвращаем его положение*/
    const index = this.products.findIndex((product) => product.pId === id);

    // Если товар существует добавляем его в массив корзины и сортируем ее.
    if (index >= 0) {
      cartObj.cart.push(this.products[index]);
      cartObj.cart.sort((a, b) => {
        if (a.pId < b.pId) {
          return -1;
        }
        if (a.pId > b.pId) {
          return 1;
        }
        return 0;
      });

      // Обновляем поля в корзине.
      cartObj.update();
    }

    // Сбрасываем фокус с кнопки.
    event.target.blur();
  }
}

// Подкласс карточки товаров
class ProductCard {
  /**
   * Создает объект карточки товаров
   * @param {[]} product массив содержащий товары.
   */
  constructor(product) {
    // Префикс для id кнопок.
    this.idPrefix = "product-";
    this.card = document.createElement("figure");
    this.card.classList = "product-card";
    this.card.insertAdjacentHTML("afterbegin", this.getCardMarkup(product));
  }

  /**
   * Метод возвращает разметку в виде строки для карточки товара.
   * @param {{}} product объект товара.
   * @returns {string} строка внутренней для карточки товара разметки.
   */
  getCardMarkup(product) {
    const {
      pId: id,
      pName: name,
      pImg: img,
      pDescription: description,
      pPrice: price,
      pUrl: url,
    } = product;

    return `
          <img
            class="product-card__img"
            src="${img}"
            alt="${description}"
          />
          <figcaption class="product-card__info">
            <h3 class="product-card__name">${name}</h3>
            <p class="product-card__description">
              ${description}
            </p>
            <p class="product-card__price">$${price.toFixed(2)}</p>
            <a
              class="product-card__button button button_kind_link"
              href="${url}"
            >
              Go to this item
            </a>
            <button
              id="${this.idPrefix + id}"
              class="product-card__button-cart button"
              type="button"
            >
              <svg
                class="
                  product-card__icon-cart
                  product-card__icon-cart_color_white
                "
                fill="none"
                height="23.97"
                viewBox="0 0 32 29"
                width="25.99"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="inherit"
                  d="M26.201 29c-.648-.026-1.259-.305-1.704-.777s-.686-1.099-.673-1.748.28-1.265.743-1.719 1.085-.708 1.734-.708 1.271.254 1.734.708.73 1.071.743 1.719-.229 1.276-.673 1.748-1.056.751-1.704.777h-.2zM6.753 26.32a2.68 2.68 0 0 1 1.654-2.476 2.68 2.68 0 0 1 2.921.581 2.68 2.68 0 0 1 .581 2.921A2.68 2.68 0 0 1 9.433 29a2.68 2.68 0 0 1-1.896-.784 2.68 2.68 0 0 1-.786-1.896h.002zm3.8-5.634c-.26.001-.512-.084-.719-.24s-.357-.377-.426-.627L4.575 2.364H1.182A1.18 1.18 0 0 1 0 1.182 1.18 1.18 0 0 1 .346.346 1.18 1.18 0 0 1 1.182 0h4.281c.259-.001.512.084.719.241s.356.377.425.627l4.833 17.455h13.178l4.383-10.048h-14.6c-.158.005-.316-.023-.463-.08s-.282-.144-.396-.254a1.18 1.18 0 0 1-.265-.388c-.062-.146-.093-.302-.093-.461s.032-.315.093-.461a1.18 1.18 0 0 1 .265-.388c.114-.11.248-.197.396-.254s.305-.085.463-.08h16.413a1.18 1.18 0 0 1 .986.533 1.19 1.19 0 0 1 .1 1.122l-5.405 12.412c-.092.211-.244.39-.437.516s-.418.193-.647.193H10.553z"
                />
              </svg>
              Add to Cart
            </button>
          </figcaption>
      `;
  }
}
