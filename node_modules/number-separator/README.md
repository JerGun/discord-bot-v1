# number-separator

with number-separator you can set a separator each thousands of your integer or float to give it more readable

[![travis build](https://img.shields.io/travis/jeromequeyrou/number-separator.svg)](https://travis-ci.org/jeromequeyrou/number-separator/builds/266726936?utm_source=github_status&utm_medium=notification)
[![GitHub release](https://img.shields.io/github/release/jeromequeyrou/number-separator.svg)]()
[![license](https://img.shields.io/github/license/jeromequeyrou/number-separator.svg)]()
[![Github file size](https://img.shields.io/github/size/jeromequeyrou/number-separator/src/index.js.svg)]()
[![Codecov](https://img.shields.io/codecov/c/github/jeromequeyrou/number-separator.svg)]()

## Installation

you install it with npm : 

    npm i number-separator

## Usage

You can include it easly :

### ES6
```javascript
	import numberSeparator from "number-separator";
```
### ES5
```javascript
	var numberSeparator = require("number-separator");
```
### Syntaxe

```javascript
	numberSeparator(10000); // return "10 000"
	numberSeparator(10000,","); // return "10,000"
	numberSeparator(10000.1234, ",",","); // return "10,000.1,234"
	numberSeparator(10000.1234, "",""); // return "10000.1234"
```