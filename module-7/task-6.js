'use strict';
const valInput = document.querySelector ('#validation-input');
valInput.addEventListener ('blur', () => {
  if (valInput.getAttribute ('data-length') <= valInput.value.length) {
    valInput.classList.remove ('valid');
    valInput.classList.add ('invalid');
  } else {
    valInput.classList.remove ('invalid');
    valInput.classList.add ('valid');
  }
});
