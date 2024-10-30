"use strict";
// function that takes any number of arguments
function sum(...nums) {
    let index = 0;
    let total = 0;
    while (index < nums.length) {
        total += nums[index];
    }
    return total;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 5, 6, 7));
console.log(sum(1, 2));
// function sum2(str: string, ...nums: number[]) {
//      let index = 0;
//     let total = 0;
//     while (index < nums.length) {
//         total += nums[index];
//         index++
//     }
//     return `${str}= ${total}`
// }
// console.log(sum2("hello", 1, 2, 3))
// sum("hello",1,2,3,5,6,7)
// sum("hello",1,2)
// overloaded functions
// functions with different call signatures and can accept differnt types
function getItemLength(val, val2) { }
function getTotalLength(vals) {
    let length = 0;
    if (typeof (vals) == 'string') {
        length = vals.length;
    }
    else if (Array.isArray(vals)) {
        length = vals.length;
    }
    return length;
}
