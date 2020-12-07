const fs = require('fs');
const runner = require('./runner');

const inp = fs.readFileSync('input/06.txt', 'utf-8')
    .split('\n\n');

runner.solve(process.argv[2]);