const mongoose = require('./models/db');
const async = require('async');
const Result = require('./models/result').Result;


const result = new Result ({
    name: 'Alex1',
    result: '12',
});


result.save(function (err) {
    if (err) {

    }

});







