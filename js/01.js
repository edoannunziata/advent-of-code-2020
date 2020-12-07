const fs = require('fs');

function two_sum(sum, arr) {
    u = new Set()
    for (const x of arr) {
        if (x) {
            if (u.has(sum - x)) {
                return [x, (sum - x)];
            }
            u.add(x);
        }
    }
    return [undefined, undefined];
}

function three_sum(sum, arr) {
    for (const [n, x] of [...arr.entries()]) { 
        const [a, b] = [...two_sum(sum - x, 
            arr.map((y, m) => m === n ? undefined : y))];
        if (a && b) {
            return [x, a, b];
        }
    }
    return [undefined, undefined, undefined];
}

function solve() {
    const inp = fs.readFileSync('input/01.txt', 'utf-8')
        .split('\n')
        .map(Number)

    console.log(two_sum(2020, inp).reduce((x, y) => x*y));
    console.log(three_sum(2020, inp).reduce((x, y) => x*y));
}

module.exports = {
    two_sum,
    three_sum,
    solve
};
