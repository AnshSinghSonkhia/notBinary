const notBinary = require("./index");

console.log(notBinary("101010")); // false (binary)
console.log(notBinary("123abc")); // true (not binary)
console.log(notBinary("0101012")); // true (not binary)
console.log(notBinary("")); // true (empty string is not binary)
console.log(notBinary("0000")); // false (binary)