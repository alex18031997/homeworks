const express = require('express');
const fs = require('fs');
const jsonParser = express.json();
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const User = require('./models/users').User;
const Result = require('./models/result').Result;
const asyncHandler = require('express-async-handler');
const session = require('express-session');
const sessionParams = {
    secret: 'keyboard cat',
    cookie: {}
}
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.urlencoded({extended: true}));
app.use(session(sessionParams));

const isUserAuth = (req) => {
    return req.session.userId;
}

app.use((req, res, next) => {
    if (isUserAuth(req)) {
        req.userAuth = true;
    }
    return next();
})

app.get('/', (req, res) => {
    if (req.userAuth) {
        res.sendFile(__dirname + '/client/game.html');
    } else {
        res.sendFile(__dirname + '/client/login.html');
    }
});

app.post('/login', ((req, res) => {
    const login = req.body.login;
    const password = req.body.pass;
    User.findOne({login: login}, (err, user) => {
        if (user) {
            if (user.checkPassword(password)) {
                req.session.userId = user._id;
                res.status(200).send({message: 'successful'})
            } else {
                res.status(403).send({message: 'Invalid password'});
            }
        } else {
            res.status(403).send({message: 'Invalid login or password'});
        }
    })
}));

app.post('/logout', ((req, res) => {
    req.session.destroy();
    res.redirect('/');
}));

app.get('/showreg', ((req, res) => {
    if (req.userAuth) {
        res.sendFile(__dirname + '/client/404.html');
    } else {
        res.sendFile(__dirname + '/client/reg.html');
    }
}));

app.post('/reg', asyncHandler((req, res, next) => {
    const user = require('./models/valid').reg(req.body.name, req.body.login, req.body.pass, req.body.PassСon, req.body.DataReg);
    user.save((err, callback) => {
        if (err) {
            res.status(400).send({message: 'this login is busy'})
        } else {
            req.session.userId = user._id;
            res.status(200).send({message: 'successful'});
        }

    });
}));

app.post('/getUserName', asyncHandler((req, res, next) => {
    const id = req.session.userId;
    User.findOne({_id: id}, (err, user) => {
        res.status(200).send({message: user});
    });
}));

app.get('/result', (req, res) => {
    Result.find({}, (err, result) => {
        if (result.length < 10) {
            res.send(result);
        } else {
            res.send(result.slice(0, 10));
        }
    }).sort({result: -1});
});

app.post("/form", (req, res) => {
    require('./models/valid').result(req.body[0].name, req.body[0].result);
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/404.html');
});

app.use((err, req, res, next) => {
    console.log('err', err);
});


app.listen(3000);