"use strict";

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
  this.price = this.price - this.price * 0.25;
};

let product1 = new Product("Lorem", 100);
console.log(product1);
product1.make25PercentDiscount();
console.log(product1);
