'use strict';
const country = prompt ('Введите название Вашей страны');
const countryUpperCased = country.toUpperCase ();
let credits;

switch (countryUpperCased) {
  case 'КИТАЙ':
    credits = 100;
    break;
  case 'ЧИЛИ':
    credits = 250;
    break;
  case 'АВСТРАЛИЯ':
    credits = 170;
    break;
  case 'ИНДИЯ':
    credits = 80;
    break;
  case 'ЯМАЙКА':
    credits = 120;
    break;
  default:
    alert ('В вашей стране доставка не доступна');
    credits = 'UNKNOWN';
    break;
}
console.log (
  `Доставка в ${countryUpperCased} будет стоить ${credits} кредитов`
);
