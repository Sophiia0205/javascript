'use strict';

const changeSize = document.querySelector ('#font-size-control');
const span = document.querySelector ('#text');
changeSize.setAttribute ('min', 12);
changeSize.setAttribute ('max', 50);
changeSize.addEventListener ('input', e => {
  span.style.fontSize = e.currentTarget.value + 'px';
});
