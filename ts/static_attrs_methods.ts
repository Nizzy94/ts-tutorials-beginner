// static methods and attrs are methods and attrs that are associated with the class rather than it is with the instance of the class
class Cart {
    // here name is different for each instance of Building
    name: string

    static numItems: number = 0
    
    static customer: string = 'Current User'

    constructor(name:string) {
        this.name = name
        Cart.numItems++
    }

    static removeItem() {
        this.numItems--
    }
}


const building1 = new Cart('prod one')
const building2 = new Cart('prod two')

console.log(Cart.numItems)
console.log(Cart.customer)
Cart.removeItem()
console.log(Cart.numItems)

