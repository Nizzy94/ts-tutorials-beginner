"use strict";
// static methods and attrs are methods and attrs that are associated with the class rather than it is with the instance of the class
class Cart {
    constructor(name) {
        this.name = name;
        Cart.numItems++;
    }
    static removeItem() {
        this.numItems--;
    }
}
Cart.numItems = 0;
Cart.customer = 'Current User';
const building1 = new Cart('prod one');
const building2 = new Cart('prod two');
console.log(Cart.numItems);
console.log(Cart.customer);
Cart.removeItem();
console.log(Cart.numItems);
