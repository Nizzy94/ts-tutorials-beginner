"use strict";
// typeof, instanceof, in, is
// we use it for type narrowing
function add1(value) {
    if (typeof value == 'string') {
        return value.toLowerCase();
    }
    else if (typeof value == 'number') {
        return value++;
    }
    else {
        return 'invalid value';
    }
}
function getAnimalSound(animal) {
    if (animal instanceof Cat) {
        console.log(animal.speak());
    }
    else if (animal instanceof Dog2) {
        console.log(animal.testing());
    }
}
function handleMsg(log) {
    switch (log.type) {
        case 'warning':
            console.log(log.msg);
            break;
        case 'info':
            console.log(log.text);
            break;
        case 'success':
            console.log(log.message);
            break;
        default:
            break;
    }
}
