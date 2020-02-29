'use strict';
const total = 100;

const ordered = prompt ('Введите необходимое количество единиц');
if (ordered <= total) {
  console.log ('Заказ оформлен, с вами свяжется менеджер');
} else {
  console.log ('На складе недостаточно товаров!');
}
