"use strict";

function DigitsOfNumber(number) {
  if (Number.isInteger(number) && number >= 0 && number < 1000) {
    this.number = number;
    this.units = number % 10;
    this.tens = Math.trunc(number / 10) % 10;
    this.hundreds = Math.trunc(number / 100);
  } else {
    console.log("Переданы некорректные данные.");
  }
}

DigitsOfNumber.prototype.show = function () {
  if (this.number !== undefined) {
    console.log(`Число ${this.number}:`);
    console.log(` - единицы ${this.units};`);
    if (this.tens > 0) {
      console.log(` - десятки ${this.tens};`);
    }
    if (this.hundreds > 0) {
      console.log(` - сотни ${this.hundreds}.`);
    }
  }
};

let number1 = new DigitsOfNumber(568);
number1.show();

let number2 = new DigitsOfNumber(42);
number2.show();

let number3 = new DigitsOfNumber(5);
number3.show();

let number4 = new DigitsOfNumber(0);
number4.show();

let number5 = new DigitsOfNumber(-45);
number5.show();

let number6 = new DigitsOfNumber(2.43);
number6.show();

let number7 = new DigitsOfNumber("45");
number7.show();

let number8 = new DigitsOfNumber(1000);
number8.show();
