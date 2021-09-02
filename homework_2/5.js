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

/**
 * Функция выполняет 4 арифметические операции (+, -, /, *).
 * @param {number} arg1 первое число.
 * @param {number} arg2 второе число.
 * @param {string} operation символ операции (+, -, /, *).
 * @returns возвращает результат арифметической операции.
 */
function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "+":
      return getAddition(arg1, arg2);
    case "-":
      return getSubtraction(arg1, arg2);
    case "*":
      return getMultiplication(arg1, arg2);
    case "/":
      return getDivision(arg1, arg2);
    default:
      throw "Такая операция не предусмотрена";
  }
}

let num1 = Number(prompt("Введите первое число: "));
let num2 = Number(prompt("Введите второе число: "));
let operation = prompt("Введите символ арифметической операции (+, -, /, *): ");
let result = mathOperation(num1, num2, operation);
alert(`Результат равен: ${result}`);
