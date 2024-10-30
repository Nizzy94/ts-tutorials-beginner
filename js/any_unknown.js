"use strict";
// ANY
let text = 1;
// now we can set it to any value
text = "string";
// now it's a string
// UNKNOW
// usually used instead of any
// it allows you to check the type before using it
// we do this with type assertion
let init = 1;
if (typeof init == "number") {
    const res = init + 1;
    // this works because we checked if init is a number
}
// type casting unknowns
// instead of writing if blocks, we can do:
const res2 = init + 1;
// NB: using the if block is safer
