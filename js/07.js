const fs = require('fs');

const inp = fs.readFileSync('./input/07.txt', 'utf8')
	.replaceAll('no other bags', '')
	.replaceAll('.', '')
	.replaceAll('bags', '')
	.replaceAll('bag', '')
	.split('\n')
	.filter(w => w !== '')
	.map(u => u.split('contain'))
	.map(([source, target]) => 
		[source?.trim(), target?.split(',')
			.map(w => w.trim())])
	.map(([source, target]) => ({
		'source': source,
		'arcs': target?.map(s => {
			const [n, ...col] = s.split(' ');
			return ({
				'num': Number(n),
				'color': col.join(' ')
			})
		})
	}))

class Graph {
	map = new Map();

	constructor(map) {
		this.map = map;
	}

	static fromInput(inp) {
		const map = new Map();
		for (const o of inp) {
			for (const n of o.arcs) {
				map.set(o.source, (map.get(o.source) ?? []).concat({
					'color': n.color,
					'num': n.num
				}));
			}
		}
		return new Graph(map);
	}

	static reverseFromInput(inp) {
		const map = new Map();
		for (const o of inp) {
			for (const n of o.arcs) {
				map.set(n.color, (map.get(n.color) ?? []).concat({
					'color': o.source,
					'num': n.num
				}));
			}
		}
		return new Graph(map);
	}

	reachabilitySet(x) {
		const gray = new Set(x);
		const black = new Set();
		while (gray.size !== 0) {
			const node = [...gray][0];
			gray.delete(node);
			if (this.map.has(node)) {
				for (const arc of this.map.get(node)) {
					!black.has(arc.color) && gray.add(arc.color);
				}
			}
			black.add(node);
		}
		return black;
	}

	recursiveWeight(x) {
		const gray = new Set();
		let totalBlack = 0;
		gray.add({'node': x, 'num': 1});
		while (gray.size !== 0) {
			const el = [...gray][0];
			gray.delete(el);
			if (this.map.has(el.node)) {
				for (const arc of this.map.get(el.node)) {
					gray.add({
						'node': arc.color,
						'num': Number(arc.num * el.num)
					});
				}
				totalBlack += el.num;
			}
		}
		return totalBlack - 1;
	}
}

function solve() {
	console.log(Graph.reverseFromInput(inp).reachabilitySet(['shiny gold']).size - 1);
	console.log(Graph.fromInput(inp).recursiveWeight('shiny gold'));
}

module.exports = {
	inp,
	solve,
	Graph,
}
