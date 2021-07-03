const R = require('ramda');

let items = 'A,Test a Thing Here,2\r\nB,Another Test,1\r\nC,Test,8';

/**
 * 
 * @param {string} data 
 * @returns 
 */
const parser = data => 
    data.split('\r\n')
    .map(x => x.split(','))
    .filter(x => parseInt(x[2]) >= 1)
    .map(x => x[1]);

// console.log(parser(items));

const fParser2 = R.pipe(
    R.split('\r\n'),
    R.map(R.split(',')),
    R.filter(x => parseInt(x[2]) >= 2),
    R.map(R.nth(1))
);

console.log(fParser2(items));
