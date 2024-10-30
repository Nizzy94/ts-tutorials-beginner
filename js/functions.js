"use strict";
// basic functions
function add(x, y) {
    return x + y;
}
const addRes = add(3, 4);
// optional arguments
function makeName(firstName, lastName, middleName) {
    // here middleName is optional
    return `${firstName} ${middleName ? middleName : ''} ${lastName}`;
}
console.log(makeName('ernest', 'alidza'));
console.log(makeName('ernest', 'alidza', 'dela'));
// default paramas
function makeNewName(firstName, lastName, middleName = '') {
    // here middleName is optional
    return `${firstName} ${middleName} ${lastName}`;
}
console.log(makeName('ernest', 'alidza'));
console.log(makeName('ernest', 'alidza', 'dela'));
// function types
function callFunc(func, param1, param2) {
    return func(param1, param2);
}
console.log(callFunc(makeName, 'ernest', 'alidza'));
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}
function applyFunc(funcs, values) {
    // return [funcs(values[0][0], values[0][1]),funcs(values[0][0], values[0][1])]
    const results = [];
    funcs.forEach(func => {
        values.forEach(val => {
            results.push(func(val[0], val[1]));
        });
    });
    return results;
}
console.log(applyFunc([mul, div], [[1, 2], [3, 4]]));
