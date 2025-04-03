function notBinary(binStr) {
    return !/^[01]+$/.test(binStr);
}

console.log(notBinary("101010")); // Output: false (it is binary)
console.log(notBinary("12345"));  // Output: true (it is not binary)
