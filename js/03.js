const fs = require('fs');

function count_trees(map, slope) {
    let trees = 0;
    let [x, y] = [0, 0];
    const [dx, dy] = [...slope];
    const xmax = map[0].length;
    const ymax = map.length;

    while (y < ymax) {
        if (map[y][x % xmax] === '#') {
            ++trees;
        }
        y += dy;
        x += dx;
    }
    return trees;
}

function solve() {
    const inp = fs.readFileSync('input/03.txt', 'utf-8')
        .split('\n')
        .map(u => [...u])

    console.log(count_trees(inp, [3, 1]));
    console.log([[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]
        .map(w => count_trees(inp, w))
        .reduce((x, y) => x*y))
}

module.exports = {
    count_trees,
    solve
}