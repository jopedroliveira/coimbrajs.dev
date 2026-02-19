type Pos = { x: number; y: number };

function randInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sections = [
	{
		x: [0, 15],
		y: [0, 96],
		count: 7
	},
	{
		x: [20, 80],
		y: [0, 20],
		count: 3
	},
	{
		x: [20, 80],
		y: [85, 96],
		count: 3
	},
	{
		x: [80, 96],
		y: [0, 96],
		count: 7
	}
];

const gridSize = 4;
function snapToGrid(val: number) {
	return Math.floor(val / gridSize) * gridSize;
}

const slack = 10;
function overlaps(pos: Pos, pool: Pos[]) {
	return pool.find(
		(item) =>
			(pos.x > item.x &&
				pos.x < item.x + slack &&
				pos.y > item.y &&
				pos.y < item.y + slack) ||
			(pos.x + slack > item.x &&
				pos.x + slack < item.x + slack &&
				pos.y + slack > item.y &&
				pos.y + slack < item.y + slack)
	);
}

export function genPositions() {
	const res: Array<Pos> = [];

	for (const section of sections) {
		const sectionPool: Array<Pos> = [];

		do {
			const pos = {
				x: snapToGrid(randInt(section.x[0], section.x[1])),
				y: snapToGrid(randInt(section.y[0], section.y[1]))
			};

			if (!overlaps(pos, res)) {
				sectionPool.push(pos);
			}
		} while (sectionPool.length < section.count);
		res.push(...sectionPool);
	}

	return res;
}
