"use strict";

const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

//Все товары, у которых есть фотографии
let productsWithPhotos = products.filter((product) => {
  if ("photos" in product) {
    return product.photos.length > 0;
  }
  return false;
});
console.log(productsWithPhotos);

//Товары отсортированные по цене
let productsSortByPrice = products.sort((product1, product2) => {
  if (product1.price < product2.price) {
    return -1;
  }
  if (product1.price > product2.price) {
    return 1;
  }
  return 0;
});
console.log(productsSortByPrice);
