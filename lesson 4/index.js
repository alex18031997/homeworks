const express = require('express');
const app = express();
const HOST = 'http://localhost';
const PORT = 9090;

app.use(express.json());

app.post('/api/tasks/roman', (req, res) => {
    require('./valid').validationOfRoman(req.body);
    const result = require('./source/roman')(req.body.input);
    res.send({result})
});

app.post('/api/tasks/palindrome', (req, res) => {
    require('./valid').validationOfPalindrome(req.body);
    const result = require('./source/palindrome')(req.body.input);
    res.send({result})
});

app.post('/api/tasks/brackets', (req, res) => {
    require('./valid').validationOfBrackets(req.body);
    const result = require('./source/brackets')(req.body.input);
    res.send({result})
});

app.post('/api/tasks/arraySort', (req, res) => {
    require('./valid').validationOfArraySort(req.body);
    const result = require('./source/arraySort')(req.body.input.arr1, req.body.input.arr2);
    res.send({result})
});

app.post('/api/tasks/nextIndex', (req, res) => {
    require('./valid').validationOfNextIndex(req.body);
    const result = require('./source/nextIndex')(req.body.input.nums, req.body.input.target);
    res.send({result})
});

app.use((error, _, res, next) => {
    if (error.name === 'An error has occurred') {
        res.status(400).send({message: error.message})
    } else res.status(500).send('Internal Server Error')
    console.log(error.message);
});

app.listen(PORT, () => {
    console.log(`Server started at ${HOST}:${PORT}`);
});


