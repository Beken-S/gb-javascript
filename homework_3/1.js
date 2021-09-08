"use strict";

for (let num = 0; num <= 10; num++) {
  if (num === 0) {
    console.log(`${num} – это ноль`);
  } else if (num % 2 === 0) {
    console.log(`${num} – четное число`);
  } else {
    console.log(`${num} – нечетное число`);
  }
}
