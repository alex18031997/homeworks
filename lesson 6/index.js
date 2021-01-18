const express = require('express');
const fs = require('fs');
const jsonParser = express.json();
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const mongoose = require('./models/db');
const async = require('async');
const User = require('./models/users').User;
const Result = require('./models/result').Result;


app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    if(req.cookies.isAuth === 'yes') {
        res.sendFile(__dirname + '/client/game.html');
    } else {
        res.sendFile(__dirname + '/client/login.html');
    }
});

app.post('/login', ((req, res) => {
    async.waterfall([
        (callback) => {
            User.findOne({username: req.body.login}, callback);
        },
        (user, callback) => {
            if (user.username === req.body.login && user.password === req.body.pass) {
                res.cookie('isAuth', 'yes', {expires: new Date(Date.now() + 9000000)});
                res.status(200).send({ message: 'successful' })
                callback(null, user);

            } else {
                res.status(400).send({ message: 'Invalid login or password' });
            }
        },
    ], function (err, user){

    })
}));

app.post('/logout', ((req, res) => {
    if(req.cookies.isAuth === 'yes'){
        res.clearCookie("isAuth");
        res.status(200).send({ message: 'successful' });
        res.redirect('/');
    }
}));

app.get('/showreg', ((req, res) => {
    res.sendFile(__dirname + '/client/reg.html');

}))

app.post('/reg', ((req,res) => {
    require('./models/valid').reg(req.body.login, req.body.pass, req.body.PassСon, req.body.DataReg);
    res.cookie('isAuth', 'yes', {expires: new Date(Date.now() + 9000000)});
    res.status(200).send({ message: 'successful' });

}));

app.get('/result', (req, res) => {
    async.waterfall([
    (callback) => {
        Result.find({}, callback).sort({ result: -1 });
    },
        (result, callback) => {
            if(result.length < 10){
                res.send(result);
            } else {
               res.send(result.slice(0, 10));
            };
        }
    ], (err, callback) => {
        if(err) {
            res.status(400);
        }

    })

});

app.post("/form", (req, res) => {
    require('./models/valid').form(req.body[0].name, req.body[0].result);
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/404.html');
});

app.use((error, _, res, next) => {
    if (error.name === 'An error has occurred') {
        res.send({result: 'этот логин уже занят'});
        console.log('test');
    }
});


app.listen(3000);