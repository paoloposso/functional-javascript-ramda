const R = require('ramda');

const isDivisibleBy = num => R.pipe(R.mathMod(R.__, num), R.equals(0));

const calcFizzBuzzString = R.pipe(
    R.ifElse(isDivisibleBy(3), R.always('fizzbuzz'), R.identity),
    R.ifElse(isDivisibleBy(3), R.always('fizz'), R.identity),
    R.ifElse(isDivisibleBy(5), R.always('buzz'), R.identity),
)

const calcFizzBuzz = num => R.map(calcFizzBuzzString, R.range(1, num));

console.log(calcFizzBuzz(10));
