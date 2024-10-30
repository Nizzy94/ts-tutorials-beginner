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
class DataStore <T> {
    private items: T[] = []
    
    addItem(item: T): void {
        this.items.push(item)
    }
    getItem(index: number): T {
        return this.items[index]
    }
    removeItem(index: number): void {
        this.items.splice(index,1)
    }

    getAllItems(): T[] {
        return this.items
    }
}
// when instantiating it, we can state the type

const stringData = new DataStore<string>()
const numberData = new DataStore<number>()
const animalData = new DataStore<AnimalInt>() // AnimalInt is an interface created


// functions
function getValue<K, V>(key: K, value1: V, value2:V): V {
    if (key) {
        return value1
    }

    return value2
}

const n1:string ='1'
const n2: string = '2'
const key: number = 0

getValue(key, n1, n2)