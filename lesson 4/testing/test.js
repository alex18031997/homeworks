const {assert} = require('chai');
const got = require('got');
const HOST = 'http://localhost';
const PORT = 9090;
const fixtures = require('./fixtures');
const fail = require('./fail');

fixtures.forEach(({route, name, input, value}) => {
    describe(`test route: ${route}`, () => {
        it(name, async () => {
            const res = await got.post(`${HOST}:${PORT}/${route}`, {
                json: {
                    input: input
                },
                responseType: 'json'
            });
            assert.deepEqual(res.body.result, value)
        });
    });
});

// тест для 500 ошибки, оставляю закомменченым

/*
fail.forEach(({route, name, input, value}) => {
    describe(`negative route: ${route}`,  () => {
           it(name, async() =>{
               const res = await got.post(`${HOST}:${PORT}/${route}`, {
                   json: {
                       input: input
                   },
                   responseType: 'json'
               });
               assert.deepEqual(res.body.result,value)
           });
    });
});*/
