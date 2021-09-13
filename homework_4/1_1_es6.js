"use strict";

class Product2 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  make25PercentDiscount() {
    this.price = this.price - this.price * 0.25;
  }
}

let product2 = new Product2("Lorem", 200);
console.log(product2);
product2.make25PercentDiscount();
console.log(product2);
