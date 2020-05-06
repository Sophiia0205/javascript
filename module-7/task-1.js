'use strict';

const quantityOfCategories = document.querySelector ('#categories');
console.log (`В списке ${quantityOfCategories.children.length} категории`);

const items = document.querySelectorAll ('.item');
items.forEach (el => {
  let categoryName = el.querySelector ('h2').textContent;
  let quantityOfEl = el.querySelectorAll ('li').length;
  console.log (
    `Категория ${categoryName}, Количество элементов ${quantityOfEl}`
  );
});
