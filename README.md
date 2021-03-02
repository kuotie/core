# @kuotie/core

Core functions for Kuotie Conversational AI.

## Installation

```sh
npm i @kuotie/core
```

## Usage

Normalize a text:

```javascript
const { normalize } = require('@kuotie/core');
console.log(normalize('àñÍS'));
// anis
```

Tokenize a text:

```javascript
const { tokenize } = require('@kuotie/core');
console.log(tokenize('this Should,  , be.splitted'));
// ['this', 'Should', 'be', 'splitted']
```

Stem a text: this is a mock, so it returns exactly the input.

```javascript
const { stem } = require('@kuotie/core');
console.log(stem(['this', 'should', 'be', 'stemmed']));
// ['this', 'should', 'be', 'stemmed']
```

Generate an uuid: for compatibility with browsers.
```javascript
const { uuid } = require('@kuotie/core');
console.log(uuid());
// 1e74bd9c-1cf6-14b6-0452-aee99ba87dab
```