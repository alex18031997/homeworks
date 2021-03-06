const Result = require('./result').Result;
const User = require('./users').User;
const makeError = require('../error');


module.exports = {
    result: (name, result) => {
        const NewResult = new Result({
            name: name,
            result: result,
        });

        NewResult.save(function (err) {

        });
    },
    reg: (name, login, password, PassСon, DataReg,) => {
        const user = new User({
            name: name,
            login: login,
            password: password,
            PassСon: PassСon,
            DataReg: DataReg
        });
        return user;
    }
};
