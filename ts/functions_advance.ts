// function that takes any number of arguments
function sum(...nums: number[]) {
    let index: number = 0
    let total:number = 0
    while (index < nums.length) {
        total += nums[index]
    }
    return total
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 5, 6, 7))
console.log(sum(1, 2))


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
function getItemLength(val: string | string[], val2: string | string[]) { }
// problem with this is it can be called in four different ways
// what we want is either only strings only or array strings only

function getTotalLength(val: string): number;
function getTotalLength(val: string[][]): number;
function getTotalLength(vals: unknown): number {
    let length = 0
    if (typeof (vals) == 'string') {
        length = vals.length
    } else if (Array.isArray(vals)) {
        length = vals.length
    }

    return length
}

