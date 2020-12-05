const fs = require('fs');

function find_missing(a) {
    let seen = a[0];
    for (const x of a) {
        if (x > 1 + seen) {
            return seen + 1;
        } else {
            seen = x;
        }
    }
}

function to_binary(str) {
    let acc = 0;
    while (str != '') {
        const c = str.charAt(0);
        switch (c) {
            case 'B':
                acc = 2 * acc + 1;
                break;
            case 'F':
                acc = 2 * acc;
                break;
            case 'R':
                acc = 2 * acc + 1;
                break;
            case 'L':
                acc = 2 * acc;
                break;
        }
        str = str.substring(1);
    }
    return acc;
}

function solve() {
    const inp = fs.readFileSync('input/05.txt', 'utf-8')
        .split('\n')
        .map(u => ({pass: u, id: to_binary(u)}))

    console.log(inp.reduce((x, y) => x.id > y.id ? x : y))
    console.log(find_missing(inp.sort((x, y) => (x.id - y.id))
        .map(u => u.id)));
}

module.exports = {
    find_missing,
    to_binary,
    solve
}