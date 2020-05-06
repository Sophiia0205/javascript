'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const array = ingredients.map (ingridient => {
  const li = document.createElement ('li');
  li.textContent = ingridient;

  return li;
});

const parentEl = document.querySelector ('#ingredients');
parentEl.append (...array);
