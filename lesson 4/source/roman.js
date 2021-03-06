const makeError = require('../error');
module.exports = (input) => {
    const romanNum = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    const romanNumKeys = Object.keys(romanNum);
    const inputClone = input.toUpperCase();
    let res = 0;
    for (let i = 0; i < inputClone.length; i++) {
        if (romanNumKeys.indexOf(inputClone[i]) === -1) {
            throw makeError(`${inputClone} is invalid character`);
            break;
        }
        if (romanNumKeys.indexOf(input[i]) < romanNumKeys.indexOf(inputClone[i + 1])) {
            res -= romanNum[inputClone[i]];
        } else {
            res += romanNum[inputClone[i]];
        }
    }
    return res;
}