const {comparatorAscending} = require('./utils');

const heapify = function (arr, l, i, compare) {
	const left = (i * 2) + 1;
	const right = left + 1;
	let largest = i;

	if (left < l && compare(arr[left], arr[largest]) > 0) {
		largest = left;
	}

	if (right < l && compare(arr[right], arr[largest]) > 0) {
		largest = right;
	}

	if (largest !== i) {
		[arr[i], arr[largest]] = [arr[largest], arr[i]];

		heapify(arr, l, largest, compare);
	}

	return arr;
};

const sort = function (arr, compare = comparatorAscending) {
	const copy = arr.slice();
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
