const fs = require('fs');
const dayFour = require('./04')

const inp = fs.readFileSync('input/04.txt', 'utf-8')
    .split('\n')

dayFour.solve();