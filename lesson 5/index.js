const express = require('express');
const fs = require('fs');
const jsonParser = express.json();
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();


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
    const login = fs.readFileSync('login.json', "utf8");
    const user = JSON.parse(login);
   if(req.body.login === user.login && req.body.pass === user.pass){
        res.cookie('isAuth', 'yes', {expires: new Date(Date.now() + 9000000)});
       res.status(200).send({ message: 'successful' });
    }
       res.status(400).send({ message: 'Invalid login or password' });
}));

app.post('/logout', ((req, res) => {
    if(req.cookies.isAuth === 'yes'){
        res.clearCookie("isAuth");
        res.status(200).send({ message: 'successful' });
        res.redirect('/');
    }
}))



app.get('/result', (req, res) => {
    const dataBase = fs.readFileSync('result.json', "utf8");
    const arr = JSON.parse(dataBase);
    if (arr.length < 10) {
        res.send(dataBase);
    } else {
        const top10 = JSON.stringify(arr.slice(0, 10));
        res.send(top10);
    }
});

app.post("/form", jsonParser, (req, res) => {
    const dataBase = fs.readFileSync('result.json', "utf8");
    const setData = JSON.parse(dataBase).concat(req.body).sort((a, b) => {
        if (a.result < b.result) return 1;
        if (a.result > b.result) return -1;
        return 0;
    });
    fs.writeFileSync('result.json', JSON.stringify(setData));
    if (!req.body) return res.sendStatus(400);
    return res.json(setData);
});

app.post("/clean", jsonParser, (req, res) => {
    fs.writeFileSync('result.json', '[]');
    if (!req.body) return res.sendStatus(400);
    return res.json();
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/404.html');
});

app.listen(3000);