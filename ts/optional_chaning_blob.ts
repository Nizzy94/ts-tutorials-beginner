const mates = [{ name: 'john' }, { name: 'doe' }, { name: 'jane' }]
// const el = mates.pop().name // mates.pop() may be undefined so we need to check it

// this checks if it is undefined or not before accessing the name property
const el = mates.pop()?.name 

// this tells typescript that it cannot only be a string
const el2 = mates.pop()!.name 
