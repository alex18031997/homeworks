const makeError = require('../error');
module.exports = (x) => {
    if (typeof x !== 'number') {
        throw makeError(`${x} is invalid character`)
    } else {
        const value = x.toString();
        return value === Array.from(value).reverse().join('');
    }
}
