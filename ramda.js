const R = require('ramda');

const data = ['A', 'B', 'C', 'D'];
const data2 = ['E', 'F', 'G', 'H'];

const getArray = R.nth(0);

console.log(R.nth(1, data));

const answer = [
    getArray(data),
    getArray(data2),
];

console.log(answer);