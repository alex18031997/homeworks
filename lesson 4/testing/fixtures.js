module.exports = [
    {
        route: 'api/tasks/roman',
        name: 'Must be equal 4',
        input: 'IV',
        value: 4,
    },
    {
        route: 'api/tasks/roman',
        name: 'Must be equal 10',
        input: 'X',
        value: 10,
    },
    {
        route: 'api/tasks/roman',
        name: 'Must be equal 1',
        input: 'I',
        value: 1,
    },
    {
        route: 'api/tasks/roman',
        name: 'Must be equal 6',
        input: 'VI',
        value: 6,
    },
    {
        route: 'api/tasks/roman',
        name: 'Must be equal 7',
        input: 'VII',
        value: 7,
    },
    {
        route: 'api/tasks/roman',
        name: 'Must be equal 2',
        input: 'II',
        value: 2,
    },
    {
        route: 'api/tasks/palindrome',
        name: 'Must be equal true',
        input: 121,
        value: true,
    },
    {
        route: 'api/tasks/palindrome',
        name: 'Must be equal true',
        input: 123,
        value: false,
    },
    {
        route: 'api/tasks/palindrome',
        name: 'Must be equal true',
        input: 222,
        value: true,
    },
    {
        route: 'api/tasks/palindrome',
        name: 'Must be equal false',
        input: 123,
        value: false,
    },
    {
        route: 'api/tasks/palindrome',
        name: 'Must be equal true',
        input: 1111,
        value: true,
    },
    {
        route: 'api/tasks/brackets',
        name: 'Must be equal false',
        input: "([)]",
        value: false,
    },
    {
        route: 'api/tasks/brackets',
        name: 'Must be equal true',
        input: "[]",
        value: true,
    }, {
        route: 'api/tasks/arraySort',
        name: 'Must be equal [2,2,2,1,4,3,3,9,6,7,19]',
        input: {
            arr1: [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
            arr2: [2, 1, 4, 3, 9, 6],
        },
        value: [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19],
    }, {
        route: 'api/tasks/nextIndex',
        name: 'Must be equal 1',
        input: {
            nums: [1, 3, 5, 6],
            target: 2,
        },
        value: 1,
    }
]