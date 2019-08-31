# Heapsort
[![NPM](https://img.shields.io/npm/v/@alvarocastro/heapsort.svg)](https://www.npmjs.com/package/@alvarocastro/heapsort)
[![Build Status](https://travis-ci.org/alvarocastro/heapsort.svg?branch=master)](https://travis-ci.org/alvarocastro/heapsort)
[![codebeat badge](https://codebeat.co/badges/8d141f39-73a6-42a2-9611-afa144119289)](https://codebeat.co/projects/github-com-alvarocastro-heapsort-master)
[![Coverage Status](https://coveralls.io/repos/github/alvarocastro/heapsort/badge.svg?branch=master)](https://coveralls.io/github/alvarocastro/heapsort?branch=master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

Yet another implementation of heapsort in JavaScript aimed to be flexible, lightweight and fast.

- [Install](#install)
- [Usage](#usage)
- [Performance](#performance)
- [More examples](#more-examples)

## Install

```bash
npm install @alvarocastro/heapsort
```

## Usage

```js
const sort = require('@alvarocastro/heapsort');

const elements = [8, -1, 3, 0.5, 200];
sort(elements);
// => [-1, 0.5, 3, 8, 200]
```

### sort(elements[, compare])

Returns a new sorted array based on the `compare` function criteria.

#### elements

Type: `Array`

List of elements to sort.

#### compare

Type: `Function`<br>
Default: [comparatorAscending](utils.js#L2)

The function to use to compare two elements and find their sorting order.
The expected return of the function is:
* `-1` to sort the element to the left.
* `1` to sort the element to the right.
* `0` when the elements are the same, no sorting is made.

A descending function is also provided in [utils.js](utils.js).

## Performance

Want to test the performance?

Included is the command `npm run performance` that will run a battery of profiled tests for your needs.

Here is an example of the output (YMMV depending your hardware)
```
Sorting random numbers generated in the range [-1,1]:
#1 - 10 numbers
> Heapsort: 1ms
> Array.sort: 1ms
#2 - 100 numbers
> Heapsort: 0ms
> Array.sort: 1ms
#3 - 1000 numbers
> Heapsort: 16ms
> Array.sort: 12ms
#4 - 10000 numbers
> Heapsort: 20ms
> Array.sort: 44ms
#5 - 100000 numbers
> Heapsort: 174ms
> Array.sort: 506ms
#6 - 1000000 numbers
> Heapsort: 2578ms
> Array.sort: 6424ms
```

## More examples

### Reverse order

```js
const sort = require('@alvarocastro/heapsort');
const {comparatorDescending} = require('@alvarocastro/heapsort/utils');

const elements = [8, -1, 3, 0.5, 200];
sort(elements, comparatorDescending);
// => [200, 8, 3, 0.5, -1]
```

### Custom elements

```js
const sort = require('@alvarocastro/heapsort');

const elements = [
	{name: 'Sarah Connor', firstAppearance: 'The Terminator'},
	{name: 'T-800', firstAppearance: 'The Terminator'},
	{name: 'Kyle Reese', firstAppearance: 'The Terminator'},
	{name: 'John Connor', firstAppearance: 'Terminator 2: Judgement Day'},
	{name: 'T-1000', firstAppearance: 'Terminator 2: Judgement Day'}
];
const comparator = function (a, b) {
	if (a.name < b.name) {
		return -1;
	} else if (a.name > b.name) {
		return 1;
	}
	return 0;
};
sort(elements, comparator);
// => [
// {name: 'John Connor', firstAppearance: 'Terminator 2: Judgement Day'},
// {name: 'Kyle Reese', firstAppearance: 'The Terminator'},
// {name: 'Sarah Connor', firstAppearance: 'The Terminator'},
// {name: 'T-800', firstAppearance: 'The Terminator'},
// {name: 'T-1000', firstAppearance: 'Terminator 2: Judgement Day'}
// ]
```
