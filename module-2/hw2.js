'use strict';
const findLongestWord = function (string) {
  const array = string.split (' ');
  let longestWord = array[0];

  for (const x of array) {
    if (x.length > longestWord.length) {
      longestWord = x;
    }
  }
  return longestWord;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log (findLongestWord ('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log (findLongestWord ('Google do a roll')); // 'Google'

console.log (findLongestWord ('May the force be with you')); // 'force'
