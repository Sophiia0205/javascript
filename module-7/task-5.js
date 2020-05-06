'use strict';
const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');
input.addEventListener('input', handleInputChange);
function handleInputChange(e) {
  output.textContent = e.currentTarget.value;
  if (e.currentTarget.value === '') {
    output.textContent = 'Незнакомец';
  }
}
