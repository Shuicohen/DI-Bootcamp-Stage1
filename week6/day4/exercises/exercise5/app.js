const {add, multiply} = require('./math.js')
const _ = require('lodash');

const sum = add(5, 10);
const product = multiply(3, 7);

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);

// Use lodash to find the maximum number in an array
const numbers = [3, 7, 2, 9, 5];
const max = _.max(numbers);

console.log(`Max value: ${max}`);
