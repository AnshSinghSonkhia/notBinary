function notBinary(str) {
    return !/^[01]+$/.test(str);
}

module.exports = notBinary;
