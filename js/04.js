const fs = require('fs');

const rules_part_1 = [
    u => u.has('byr'),
    u => u.has('eyr'),
    u => u.has('iyr'),
    u => u.has('hgt'),
    u => u.has('ecl'),
    u => u.has('pid'),
    u => u.has('hcl')
]

const rules_part_2 = [
    u => Number(u.get('byr')) >= 1920,
    u => Number(u.get('byr')) <= 2002,
    u => Number(u.get('eyr')) >= 2020,
    u => Number(u.get('eyr')) <= 2030,
    u => Number(u.get('iyr')) >= 2010,
    u => Number(u.get('iyr')) <= 2020,
    u => {
        const str = u.get('hgt');
        if (str === undefined) {
            return false;
        }
        if (str.endsWith('in')) {
            const value = Number(str.substring(0, str.length - 2));
            return value >= 59 && value <= 76;
        } else if (str.endsWith('cm')) {
            const value = Number(str.substring(0, str.length - 2));
            return value >= 150 && value <= 193;
        } else {
            return false;
        }
    },
    u => ['amb', 'blu', 'brn', 'grn', 'gry', 'hzl', 'oth']
        .filter(w => w === u.get('ecl'))
        .length !== 0,
    u => {
        if (u.get('pid') === undefined) {
            return false;
        }
        return u.get('pid').length === 9 &&
            [...u.get('pid')].every(u => u >= '0' && u <= '9');
    },
    u => {
        const str = u.get('hcl');
        if (str === undefined) {
            return false;
        }
        if (str.startsWith('#')) {
            col = str.substring(1);
            return col.length == 6 &&
                [...col].every(u => u >= '0' && u <= 'f');
        } else {
            return false;
        }
    }
]

function count_valid(pss, rules) {
    return pss.filter(ps => validate(
        new Map(Array.from([...ps.split(/[ \n]+/)], (w => [...w.split(':')]))),
            rules)).length;
}

function validate(f, r) {
    return r.every(u => u(f));
}

function solve() {
    const inp = fs.readFileSync('input/04.txt', 'utf-8')
        .split('\n\n');
    console.log(count_valid(inp, rules_part_1));
    console.log(count_valid(inp, rules_part_2));
}

module.exports = {
    solve,
    validate,
    count_valid,
    rules_part_2,
    rules_part_1
};