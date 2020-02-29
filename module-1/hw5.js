'use strict';
let total = 0;
let input;

do {
  input = prompt ('Введите число!');
  total = Number (total) + Number (input);
  //   console.log (Number (total));
} while (input !== null);

alert (`Общая сумма чисел равна ${total}`);
