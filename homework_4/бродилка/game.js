let game = {
  handleEvent: function (event) {
    switch (event.code) {
      case "Enter":
        renderer.clear();
        renderer.render();

        //Создаем еще один обработчик нажатий клавиш с функцией run()
        document.addEventListener("keydown", this.run);
        break;
      case "Escape":
        renderer.clear();
        player.reset();
        console.log("Игра окончена.");
        console.log("Чтобы начать новую игру нажмите Enter.");

        //Удаляем обработчик нажатий клавиш с функцией run()
        document.removeEventListener("keydown", this.run);
        break;
    }
  },

  run(event) {
    player.move(event.code, config.colsCount, config.rowsCount);
    renderer.clear();
    renderer.render();
    return;
  },

  // Этот метод выполняется при открытии страницы.
  init() {
    console.log(
      "ИГРА БРОДИЛКА\nВаше положение на поле будет отображаться в виде о.\nУправление:\n   идти влево - клавиша A;\n   идти вправо - клавиша D;\n   идти вверх - клавиша W;\n   идти вниз - клавиша S;\n   идти по диагонали - нажать две клавиши.\n Чтобы начать игру нажмите Enter. \n Для выхода из игры нажмите Escape."
    );

    /* Указываем на то что обработка нажатий клавиш будет выполнятся функцией handleEvent в объекте game */
    document.addEventListener("keydown", game);
  },
};

game.init();
