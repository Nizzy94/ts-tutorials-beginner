"use strict";
// this works fine but only with array of numbers. what if we want to use other types?
// class DataStore {
//     private items: number[] = []
//     addItem(item: number): void {
//         this.items.push(item)
//     }
//     getItem(index: number): number {
//         return this.items[index]
//     }
//     removeItem(index: number): void {
//         this.items.splice(index,1)
//     }
//     getAllItems(): number[] {
//         return this.items
//     }
// }
// this makes it generic. we can add any type to datastore
class DataStore {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItem(index) {
        return this.items[index];
    }
    removeItem(index) {
        this.items.splice(index, 1);
    }
    getAllItems() {
        return this.items;
    }
}
// when instantiating it, we can state the type
const stringData = new DataStore();
const numberData = new DataStore();
const animalData = new DataStore(); // AnimalInt is an interface created
// functions
function getValue(key, value1, value2) {
    if (key) {
        return value1;
    }
    return value2;
}
const n1 = '1';
const n2 = '2';
const key = 0;
getValue(key, n1, n2);
