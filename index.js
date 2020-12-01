const day01 = require('./01')
const fs = require('fs')

const inp = fs.readFileSync('input/01.txt', 'utf-8')
    .split('\n')
    .map(Number)

console.log(day01.two_sum(2020, inp).reduce((x, y) => x * y));
console.log(day01.three_sum(2020, inp).reduce((x, y) => x * y));
