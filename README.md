<h1 align="center" style="border-bottom: none;">AsyncArray</h1>
<h3 align="center">Run array higher order functions asynchronously</h3>
<p align="center">
  <a href="https://www.npmjs.com/package/@sebastianowy/async-array"><img alt="npm latest version" src="https://img.shields.io/npm/v/@sebastianowy/async-array/latest.svg"></a>
  <a href="https://github.com/sebastianowy/async-array/actions?query=workflow%3ATest+branch%3Amain"><img alt="Build states" src="https://github.com/sebastianowy/async-array/workflows/Test/badge.svg"></a>
  <a href="https://github.com/semantic-release/semantic-release"><img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg"></a>
</p>

## Installation

```bash
npm install --save @sebastianowy/async-array
# or
yarn add @sebastianowy/async-array
```

## Usage

### Examples

- async sorting

```js
import { AsyncArray } from "@sebastianowy/async-array";

const array = [3, 5, 1, 2, 4];
const asyncArray = new AsyncArray(array);
asyncArray
  .sort((left, right) => Promise.resolve(left - right))
  .then(console.log);
```

will produce:

```bash
[1, 2, 3, 4, 5]
```
