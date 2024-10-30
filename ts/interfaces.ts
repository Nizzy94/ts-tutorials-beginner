interface Person {
    name: string;
    age: number;
    height?: number; // add ? to make it optional
    // you can add functions as properties
    getGender?: () => 'male'|'female'| undefined;
}

// forces the usage of all properties from the interface
const nizzy: Person = {
    name: 'Ernest',
    age: 14,
    getGender: function () {
        return this.name == 'Ernest' ? 'male' : 'female' 
    }
}

console.log(nizzy.name)
console.log(nizzy.age)
console.log(nizzy.getGender ? nizzy.getGender() : undefined)


// interface Inheritance
interface Employee extends Person {
    employeeId: number;
}

const worker: Employee = {
    name: 'Jane',
    age: 14,
    getGender: function () {
        return this.name == 'Jane' ? 'female' : 'male'
    },
    employeeId: 1
}

console.log(worker.name)
console.log(worker.employeeId)
console.log(worker.getGender ? worker.getGender() : undefined)



// multiple inheritance
interface Manager {}

interface AdministrativeManager extends Employee, Manager {
    employeesManaged: Person[]
}

const manager: AdministrativeManager = {
    employeesManaged: [worker],
    name: 'John',
    age: 25,
    getGender() {
        return 'male'
    },
    employeeId: 2
}

console.log(manager.name)

// you can use the interface in a function
function getInfo(p: Person): Person {
    return p
}

