const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);
setTimeout(() => console.log(numbers), 3000);
//assert.deepEqual(numbers, [1, 2, 3]); // essa validação falha
