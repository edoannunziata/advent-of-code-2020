const fs = require('fs');
const day02 = require('./02.js');

const inp = fs.readFileSync('input/02.txt', 'utf-8')
    .split('\n')

console.log(day02.valid_part1(inp));
console.log(day02.valid_part2(inp));
