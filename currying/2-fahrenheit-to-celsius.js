const R = require('ramda');

const fahreinheitToCelsiusF = R.pipe(
    R.subtract(R.__, 32),
    R.multiply(5),
    R.divide(R.__, 9)
);

console.log(fahreinheitToCelsiusF(80));