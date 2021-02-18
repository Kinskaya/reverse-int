module.exports = function reverse (num) {
    let numNew = num.toString();
    let result = '';
    for (let i = 0; i < numNew.length; i++) {
        if (numNew[i] !== '-') {
            result = numNew[i] + result;
        }
    }
    return +result;
}
