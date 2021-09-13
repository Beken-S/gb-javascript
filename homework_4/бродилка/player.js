/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним.
 * @property {int} x Позиция по X-координате.
 * @property {int} y Позиция по Y-координате.
 */
const player = {
  x: 0,
  y: 0,

  /**
   * Изменяет координаты игрока в зависимости от нажатой клавиши.
   * @param {string} key Код нажатой клавиши.
   * @param {int} mapSizeX Размер карты по оси X.
   * @param {int} mapSizeY Размер карты по оси Y.
   */
  move(key, mapSizeX, mapSizeY) {
    switch (key) {
      case "KeyA":
        if (this.x > 0) this.x--;
        break;
      case "KeyD":
        if (this.x < --mapSizeX) this.x++;
        break;
      case "KeyW":
        if (this.y > 0) this.y--;
        break;
      case "KeyS":
        if (this.y < --mapSizeY) this.y++;
        break;
    }
  },

  /**Сбрасывает положение игрока в положение по умолчанию */
  reset() {
    this.x = 0;
    this.y = 0;
  },
};
