"use strict";

let a = Number(prompt("Введите число 1: "));
let b = Number(prompt("Введите число 2: "));

if (a >= 0 && b >= 0) {
  alert(`Разность чисел равна: ${a - b}`);
} else if (a < 0 && b < 0) {
  alert(`Произведение чисел равно: ${a * b}`);
} else {
  alert(`Сумма чисел равна: ${a + b}`);
}
