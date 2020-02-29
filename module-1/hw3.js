'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let message;

const quantity = prompt ('Введите количество желаемых дронов');
const totalPrice = quantity * pricePerDroid;

if (quantity === null) {
  message = 'Отменено пользователем!';
  console.log (message);
} else if (totalPrice > credits) {
  message = 'Недостаточно кредитов на счету!';
  console.log (message);
} else {
  const creditsLeft = credits - quantity * pricePerDroid;
  console.log (
    `Вы купили ${quantity} дроидов, на счету осталось ${creditsLeft} кредитов `
  );
}
