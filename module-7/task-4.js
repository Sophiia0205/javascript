'use strict';
const buttonInc = document.querySelector("[data-action='increment']");
const buttonDec = document.querySelector('[data-action="decrement"]');

let counterValue = 0;
buttonInc.addEventListener('click', increment);
buttonDec.addEventListener('click', decrement);

function increment() {
  counterValue += 1;
  document.getElementById('value').innerHTML = counterValue;
}
function decrement() {
  counterValue -= 1;
  document.getElementById('value').innerHTML = counterValue;
}
