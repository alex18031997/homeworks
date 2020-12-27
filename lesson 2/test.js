// test for task1

const assertTask1 = require("assert");
const resolveTask1 = require("./task1.js");
assertTask1.strictEqual(resolveTask1("III"), 3);
assertTask1.strictEqual(resolveTask1("IV"), 4);
assertTask1.strictEqual(resolveTask1("IX"), 9);

// test for task2

const assertTask2 = require("assert");
const resolveTask2 = require("./task2.js");
assertTask2.strictEqual(resolveTask2("121"), true);
assertTask2.strictEqual(resolveTask2("126"), false);

// test for task3

const assertTask3 = require("assert");
const resolveTask3 = require("./task3.js");
assertTask3.strictEqual(resolveTask3("()"), true);
assertTask3.strictEqual(resolveTask3("(]"), false);
assertTask3.strictEqual(resolveTask3("([)]"), false);
assertTask3.strictEqual(resolveTask3("{[]}"), true);

// test for task4

const assertTask4 = require("assert");
const resolveTask4 = require("./task4.js");
assertTask4.deepEqual(resolveTask4([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]), [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]);

// test for task5

const assertTask5 = require("assert");
const resolveTask5 = require("./task5.js");
assertTask5.deepEqual(resolveTask5([1,3,5,6], 5), 2);
assertTask5.deepEqual(resolveTask5([1,3,5,6], 2), 1);
assertTask5.deepEqual(resolveTask5([1,3,5,6], 7), 4);
assertTask5.deepEqual(resolveTask5([1,3,5,6], 0), 0);
assertTask5.deepEqual(resolveTask5([1], 0), 0);