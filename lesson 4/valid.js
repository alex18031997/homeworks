const makeError = require('./error');
module.exports = {
    validationOfRoman: (body) => {
        if (body.input === undefined)
            throw makeError("Input can not be empty");
        if (typeof body.input !== 'string')
            throw makeError('Value is not a string, value should be a string');
    },
    validationOfPalindrome: (body) => {
        if (body.input === undefined)
            throw makeError("Input can not be empty");
        if (typeof body.input !== 'number')
            throw makeError('Value is not a number, value should be a number');
    },
    validationOfBrackets: (body) => {
        if (body.input === undefined)
            throw makeError("Input can not be empty");
        if (typeof body.input !== 'string')
            throw makeError('Value is not a string, value should be a string');

    },
    validationOfArraySort: (body) => {
        if (body.arr1 === 'undefined') throw makeError("arr1 can not be empty");
        if (body.arr2 === 'undefined') throw makeError("arr2 can not be empty");
        if (typeof body.input.arr1 !== 'object') throw makeError('arr1 is not array, arr1 should be an array');
        if (typeof body.input.arr2 !== 'object') throw makeError('arr2 is not array, arr2 should be an array');
    },
    validationOfNextIndex: (body) => {
        if (body.input.nums === 'undefined') throw makeError("nums can not be empty");
        if (body.input.target === 'undefined')
            throw makeError("target can not be empty");
        if (typeof body.input.nums !== 'object') throw makeError('nums is not array, nums should be an array');
    }
}
