'use strict';
let input;
const numbers = [];
let total = 0;
do {
  input = prompt('Введите число!');
  if (isNaN(input) === false) {
    numbers.push(input);
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }
} while (input !== null);
for (const x of numbers) {
  total = Number(total) + Number(x);
}

console.log(`Общая сумма чисел равна ${total}`);
