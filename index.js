const {comparatorAscending} = require('./utils');

const heapify = function (array, l, i, compare) {
	const left = (i * 2) + 1;
	const right = left + 1;
	let largest = i;

	if (left < l && compare(array[left], array[largest]) > 0) {
		largest = left;
	}

	if (right < l && compare(array[right], array[largest]) > 0) {
		largest = right;
	}

	if (largest !== i) {
		[array[i], array[largest]] = [array[largest], array[i]];

		heapify(array, l, largest, compare);
	}

	return array;
};

const sort = function (array, compare = comparatorAscending) {
	const copy = array.slice();
	const l = copy.length;
	let i = Math.floor((l / 2) - 1);
	let k = l - 1;

	while (i >= 0) {
		heapify(copy, l, i, compare);
		i--;
	}

	while (k >= 0) {
		[copy[0], copy[k]] = [copy[k], copy[0]];
		heapify(copy, k, 0, compare);
		k--;
	}

	return copy;
};

module.exports = sort;
