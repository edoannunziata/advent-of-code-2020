const fs = require('fs');
const dayFive = require('./05');

const inp = fs.readFileSync('input/05.txt', 'utf-8')
    .split('\n')

dayFive.solve();