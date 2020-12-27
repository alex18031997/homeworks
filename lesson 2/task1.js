module.exports = (input) => {
    let romanNum = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let romanNumKeys = Object.keys(romanNum);

    input = input.toUpperCase();
    let res = 0;

    for (let i = 0; i < input.length; i++) {
        if (romanNumKeys.indexOf(input[i]) < romanNumKeys.indexOf(input[i+1])) {
            res -= romanNum[input[i]];
        } else {
            res += romanNum[input[i]];
        }
    }
    return res;
}




