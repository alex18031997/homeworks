const {assert} = require('chai');
const got = require('got');
const HOST = 'http://localhost';
const PORT = 9090;
const fixtures = require('./fixtures');
const testErrors = require('./testErrors');

fixtures.forEach(({route, name, input, value}) => {
    describe(`test route: ${route}`, () => {
        it(name, async () => {
            const res = await got.post(`${HOST}:${PORT}/${route}`, {
                json: {
                    input: input
                },
                responseType: 'json',
                throwHttpErrors: false,
            });
            assert.deepEqual(res.body.result, value);
        });
    });
});

// тест для ошибок 400, 500

testErrors.forEach(({route, name, input, value}) => {
    describe(`Error test route: ${route}`, () => {
        it(name, async () => {
            const res = await got.post(`${HOST}:${PORT}/${route}`, {
                json: {
                    input: input
                },
                responseType: 'json',
                throwHttpErrors: false,
            });
            assert.deepEqual(res.body.result, value);
        });
    });
});


