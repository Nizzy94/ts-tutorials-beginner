"use strict";
// Partial = used to make all the attributes in our type(Todo) optional 
const updateTodo = (todo) => { };
// makes the  properties read only only on myTodo
const myTodo = { title: "first todo", description: 'first todo description' };
// creates a recod of a particular type
const todos = {
    todo1: { title: "first todo", description: 'first todo description' },
    todo2: { title: "second todo", description: 'second todo description' },
    todo3: { title: "third todo", description: 'third todo description' },
};
const todos2 = {
    1: { title: "first todo", description: 'first todo description' },
    2: { title: "second todo", description: 'second todo description' },
    3: { title: "third todo", description: 'third todo description' },
};
const todo3 = {
    title: 'some title',
    completed: false
};
const todo4 = {
    title: 'some title',
    completed: false
};
