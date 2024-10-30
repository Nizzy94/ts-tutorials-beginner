// basic functions
function add(x: number, y: number): number {
    return x + y
}

const addRes = add(3, 4)


// optional arguments
function makeName(firstName: string, lastName: string, middleName?: string) {
    // here middleName is optional
    return `${firstName} ${middleName ? middleName : ''} ${lastName}`
    
}

console.log(makeName('ernest', 'alidza'))
console.log(makeName('ernest', 'alidza', 'dela'))

// default paramas
function makeNewName(firstName: string, lastName: string, middleName: string = '') {
    // here middleName is optional
    return `${firstName} ${middleName} ${lastName}`
}

console.log(makeName('ernest', 'alidza'))
console.log(makeName('ernest', 'alidza', 'dela'))


// function types
function callFunc(func: (f: string, l: string, m?: string) => string, param1: string, param2: string) {
    return func(param1, param2)
}

console.log(callFunc(makeName, 'ernest', 'alidza'))

function mul(x: number, y: number): number {
    return x * y
}
function div(x: number, y: number): number {
    return x / y
}

function applyFunc(funcs: ((x:number, y:number) => number)[], values: [number,number][]): number[] {
    // return [funcs(values[0][0], values[0][1]),funcs(values[0][0], values[0][1])]
    const results: number[] = []

    funcs.forEach(func => {
        values.forEach(val => {
            results.push(func(val[0], val[1]))
        })
    })

    return results
}


console.log(applyFunc([mul, div], [[1, 2], [3, 4]]))

