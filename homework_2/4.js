"use strict";

/**
 * Функция находит сумму двух чисел.
 * @param {number} num1 первое слагаемое.
 * @param {number} num2 второе слагаемое.
 * @returns возвращает сумму чисел.
 */
function getAddition(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return NaN;
  } else {
    return num1 + num2;
  }
}

/**
 * Функция находит разность двух чисел.
 * @param {number} num1 уменьшаемое число.
 * @param {number} num2 вычитаемое число.
 * @returns возвращает разность чисел.
 */
function getSubtraction(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return NaN;
  } else {
    return num1 - num2;
  }
}

/**
 * Функция находит произведение двух чисел.
 * @param {number} num1 первый множитель.
 * @param {number} num2 второй множитель.
 * @returns возвращает произведение чисел.
 */
function getMultiplication(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return NaN;
  } else {
    return num1 * num2;
  }
}

/**
 * Функция находит частное от деления двух чисел.
 * @param {number} num1 делимое.
 * @param {number} num2 делитель.
 * @returns возвращает частное от деления двух чисел.
 */
function getDivision(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return NaN;
  } else {
    return num1 / num2;
  }
}

console.log(getAddition(2, 3));
console.log(getSubtraction(4, 2));
console.log(getMultiplication(9, 3));
console.log(getDivision(25, 5));
console.log(getAddition("2", 3));
