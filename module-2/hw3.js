'use strict';
const formatString = function (string) {
  let newString;
  if (string.length > 40) {
    newString = string.slice (0, 41) + '...';
  } else {
    newString = string;
  }
  return newString;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log (formatString ('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log (
  formatString ('Vestibulum facilisis, purus nec pulvinar iaculis.')
);
// вернется форматированная строка

console.log (formatString ('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log (
  formatString (
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
  )
);
// вернется форматированная строка
