"use strict";

const products = [
  {
    pId: 1,
    pName: "Product 1",
    pImg: "images/item-1.jpg",
    pDescription:
      "Known for her sculptural takes on traditional tailoring,    Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    pPrice: 52,
    pUrl: "product.html",
  },
  {
    pId: 2,
    pName: "Product 2",
    pImg: "images/item-2.jpg",
    pDescription:
      "Known for her sculptural takes on traditional tailoring,    Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    pPrice: 49.99,
    pUrl: "product.html",
  },
  {
    pId: 3,
    pName: "Product 3",
    pImg: "images/item-3.jpg",
    pDescription:
      "Known for her sculptural takes on traditional tailoring,    Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    pPrice: 32,
    pUrl: "product.html",
  },
  {
    pId: 4,
    pName: "Product 4",
    pImg: "images/item-4.jpg",
    pDescription:
      "Known for her sculptural takes on traditional tailoring,    Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    pPrice: 45,
    pUrl: "product.html",
  },
  {
    pId: 5,
    pName: "Product 5",
    pImg: "images/item-5.jpg",
    pDescription:
      "Known for her sculptural takes on traditional tailoring,    Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    pPrice: 55.74,
    pUrl: "product.html",
  },
  {
    pId: 6,
    pName: "Product 6",
    pImg: "images/item-6.jpg",
    pDescription:
      "Known for her sculptural takes on traditional tailoring,    Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    pPrice: 21.33,
    pUrl: "product.html",
  },
  {
    pId: 7,
    pName: "Product 7",
    pImg: "images/item-7.jpg",
    pDescription:
      "Known for her sculptural takes on traditional tailoring,    Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    pPrice: 59.99,
    pUrl: "product.html",
  },
  {
    pId: 8,
    pName: "Product 8",
    pImg: "images/item-8.jpg",
    pDescription:
      "Known for her sculptural takes on traditional tailoring,    Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    pPrice: 32.11,
    pUrl: "product.html",
  },
  {
    pId: 9,
    pName: "Product 9",
    pImg: "images/item-9.jpg",
    pDescription:
      "Known for her sculptural takes on traditional tailoring,    Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    pPrice: 11.34,
    pUrl: "product.html",
  },
];

let cart = new Cart();
let pBlock = new ProductsBlock(products, cart);
