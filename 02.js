function valid_part1(inp) {
    let count = 0;
    for (const [lim, char, pw] of [...inp.map(u => u.split(" "))]) {
        const [lo, hi] = [...lim.split('-')];
        const letter = [...char][0];
        const n = [...pw].filter(u => u === letter).length;
        if (n >= lo && n <= hi) {
            count++;
        }
    }
    return count;
}

function valid_part2(inp) {
    let count = 0;
    for (const [lim, char, pw] of [...inp.map(u => u.split(" "))]) {
        const [lo, hi] = [...lim.split('-').map(x => x-1)];
        const letter = [...char][0];
        if ((pw[lo] === letter) + (pw[hi] === letter) === 1) {
            count++;
        }
    }
    return count;
}

module.exports = {
    valid_part1,
    valid_part2,
};
