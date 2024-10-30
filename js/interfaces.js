"use strict";
// forces the usage of all properties from the interface
const nizzy = {
    name: 'Ernest',
    age: 14,
    getGender: function () {
        return this.name == 'Ernest' ? 'male' : 'female';
    }
};
console.log(nizzy.name);
console.log(nizzy.age);
console.log(nizzy.getGender ? nizzy.getGender() : undefined);
const worker = {
    name: 'Jane',
    age: 14,
    getGender: function () {
        return this.name == 'Jane' ? 'female' : 'male';
    },
    employeeId: 1
};
console.log(worker.name);
console.log(worker.employeeId);
console.log(worker.getGender ? worker.getGender() : undefined);
const manager = {
    employeesManaged: [worker],
    name: 'John',
    age: 25,
    getGender() {
        return 'male';
    },
    employeeId: 2
};
console.log(manager.name);
// you can use the interface in a function
function getInfo(p) {
    return p;
}
