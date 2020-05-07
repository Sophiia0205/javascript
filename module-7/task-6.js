'use strict';
const valInput = document.querySelector('#validation-input');
valInput.addEventListener('blur', () => {
  console.log(valInput.value.length);
  if (Number(valInput.dataset.length) === valInput.value.length) {
    valInput.classList.add('valid');
    valInput.classList.remove('invalid');
  } else {
    valInput.classList.add('invalid');
    valInput.classList.remove('valid');
  }
});
