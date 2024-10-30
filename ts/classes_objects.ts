class PersonClass {
    private name: string; // makes name only accesible within the class
    // by default, all properties are public. 
    protected age: number; // can be accessed from child classes
    

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

const nizzyClass: PersonClass = new PersonClass('nizzy', 5)

class EmployeeClass extends PersonClass {
    getName() {
        // return this.name //can still not access name in child classes
    }
    getAge() {
        return this.age //agge is accessible
    }
}

const john: EmployeeClass = new EmployeeClass('John', 30)



// ABSTRACT CLASSES
// not meant to be instanciated but to serve as a base class for other classes
abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    abstract makeSound(duration:number) : void // this method is mandatory to be implemented in every subclass of Animal

    move(duration:number): void {
        console.log(`${this.name} is moving along ...`)
        this.makeSound(duration)
    }

}

class Dog extends Animal {
    name:string
    constructor(name: string) {
        super(name)
        this.name = name
    }

    makeSound(duration: number): void {
        console.log(`${this.name} making sound for ${duration} minutes`)
    }
}

const jack: Dog = new Dog('Jack')

jack.move(5)


// IMPLEMENTING INTERFACES
interface AnimalInt {
    speak(): void
}

class Dog2 implements AnimalInt {
    speak(): void {
        console.log('dog speaking')
    }
    testing() {
        return 1
    }
}

// type Dog2 can access all properties and methods in dog 2
const dog2 = new Dog2()
dog2.speak()
dog2.testing()

// if i make it a type of AnimailInt you can only access speak
const dog3: AnimalInt = new Dog2()
dog3.speak()


// multiple classes implementing same interface
class Cat implements AnimalInt {
    speak(): void {
        console.log('cat speaking')
    }
}

// you can create instances of dog and cat and assign them to type animal
const dog4 = new Dog2()
const cat = new Cat()

const animalInt: AnimalInt = dog4
const animalInt2: AnimalInt = cat

// if i want to create a list of animals,
const animals: AnimalInt[] = [dog4, cat]

// useful in functions. i can use both dog and cat
function makeSound(animal: AnimalInt): AnimalInt {
    return animal
}

makeSound(dog4)
makeSound(cat)