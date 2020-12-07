const fs = require('fs');

function countUnion(alphabet, l) {
    return [...alphabet].filter(c => 
		l.some(s => s === '' || s.includes(c))).length;

}
function countIntersection(alphabet, l) {
    return [...alphabet].filter(c => 
		l.every(s => s === '' || s.includes(c))).length;
}

function solve() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const inp = fs.readFileSync('input/06.txt', 'utf-8')
        .split('\n\n');

    console.log(inp.map(u => countUnion(alphabet, u.split('\n')))
        .reduce((x, y) => x + y));

    console.log(inp.map(u => countIntersection(alphabet, u.split('\n')))
        .reduce((x, y) => x + y));
}

module.exports = {
    countIntersection,
    countUnion,
    solve
}
