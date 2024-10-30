"use strict";
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const nizzyClass = new PersonClass('nizzy', 5);
class EmployeeClass extends PersonClass {
    getName() {
        // return this.name //can still not access name in child classes
    }
    getAge() {
        return this.age; //agge is accessible
    }
}
const john = new EmployeeClass('John', 30);
// ABSTRACT CLASSES
// not meant to be instanciated but to serve as a base class for other classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(duration) {
        console.log(`${this.name} is moving along ...`);
        this.makeSound(duration);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    }
    makeSound(duration) {
        console.log(`${this.name} making sound for ${duration} minutes`);
    }
}
const jack = new Dog('Jack');
jack.move(5);
class Dog2 {
    speak() {
        console.log('dog speaking');
    }
    testing() {
        return 1;
    }
}
// type Dog2 can access all properties and methods in dog 2
const dog2 = new Dog2();
dog2.speak();
dog2.testing();
// if i make it a type of AnimailInt you can only access speak
const dog3 = new Dog2();
dog3.speak();
// multiple classes implementing same interface
class Cat {
    speak() {
        console.log('cat speaking');
    }
}
// you can create instances of dog and cat and assign them to type animal
const dog4 = new Dog2();
const cat = new Cat();
const animalInt = dog4;
const animalInt2 = cat;
// if i want to create a list of animals,
const animals = [dog4, cat];
// useful in functions. i can use both dog and cat
function makeSound(animal) {
    return animal;
}
makeSound(dog4);
makeSound(cat);
