module.exports = function reverse (n) {
    result = parseFloat(Math.abs(n).toString().split('').reverse().join(''));
    return result;
}
