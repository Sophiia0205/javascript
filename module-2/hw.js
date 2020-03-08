'use strict';

const logItems = function (array) {
  let nextIndex;
  for (const x of array) {
    const index = array.indexOf (x);
    nextIndex = index + 1;
    console.log (`${nextIndex} - ${x}`);
  }
  // return;
};
console.log (logItems (['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
console.log (logItems ([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));
