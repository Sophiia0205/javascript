'use strict';

import users from './users.js';

const getSortedUniqueSkills = (users) => {
  return [...new Set(users.map((user) => user.skills).flat())].sort();
  // твой код
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
