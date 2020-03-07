'use strict';
const formatString = function(string) {
  const array = string.split('');
  let stringOfArray;
  let newString;
  if (array.length > 40) {
    stringOfArray = array.join('');
    newString = stringOfArray.slice(0, 41) + '...';
  } else {
    newString = string;
  }
  return newString;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
  )
);
// вернется форматированная строка
