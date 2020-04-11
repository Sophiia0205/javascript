'use strict';

import users from './users.js';

const getNamesSortedByFriendsCount = [...users]
  .sort((a, b) => a.friends.length - b.friends.length)
  .map((user) => user.name);

console.log(getNamesSortedByFriendsCount);
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
