# not-binary

Returns true, if not a binary number (string).

# Installation

Install via npm

```sh
npm i not-binary
```

Install via yarn

```sh
yarn add not-binary
```

# Usage

```js
const notBinary = require("not-binary");

console.log(notBinary("101010")); // false (binary)
console.log(notBinary("hello123")); // true (not binary)
console.log(notBinary("123abc")); // true (not binary)
console.log(notBinary("0101012")); // true (not binary)
console.log(notBinary("")); // true (empty string is not binary)
console.log(notBinary("0000")); // false (binary)
```