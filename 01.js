function two_sum(sum, arr) {
    u = new Map()
    for (const x of arr) {
        if (x) {
            if (u.get(sum - x) === 'found') {
                return [x, (sum - x)];
            }
            u.set(x, 'found');
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
}

module.exports = {
    two_sum,
    three_sum
};
