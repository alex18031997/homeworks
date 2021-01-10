module.exports = [
    {
        route: 'api/tasks/nextIndex',
        name: 'Must be equal 500',
        input: {
            nums: {test: 'test 500'}, // предаем объект вместо массива, валидация пропустит,
            // но сервер не сможет корректно работать и будет ошибка 500
            target: 2,
        },
        value: 1,
    }
]