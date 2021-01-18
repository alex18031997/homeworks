const Result = require('./result').Result;
const async = require('async');
const User = require('./users').User;
const makeError = require('../error');


module.exports = {
    form: (name, result) => {
        const NewResult = new Result ({
            name: name,
            result: result,
        });

        NewResult.save(function (err) {

        });
    },
    reg: (username, password, PassСon, DataReg) => {
            const user = new User ({
                username: username,
                password: password,
                PassСon: PassСon,
                DataReg: DataReg
            });

            user.save(function (err) {
                if (err) {
                    throw err;
                }
            });
        }
}