module.exports = [
    {
        route: 'api/tasks/nextIndex',
        name: 'Must be equal ERROR 400 - Bad Request',
        input: {
            nums: 1, // ошибка 400 - передаем неверные данные на сервер
            target: 2,
        },
        value: 'ERROR 400 - Bad Request',
    },
    {
        route: 'api/tasks/nextIndex',
        name: 'Must be equal ERROR 500 - Internal Server Error',
        input: {
            nums: {test:1}, // ошибка 500 - передаем данные типа object, но не массив,
            // валидатор пропустит, но сервер не сможет отработать и вернет ошибку
            target: 2,
        },
        value: 'ERROR 500 - Internal Server Error',
    }
]