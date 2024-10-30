// typeof, instanceof, in, is
// we use it for type narrowing

function add1(value: StringOrNumber): StringOrNumber {
    if (typeof value == 'string') {
        return value.toLowerCase()
    } else if (typeof value == 'number') {
        return value++
    } else {
        return 'invalid value'
    }
}

function getAnimalSound(animal: Cat | Dog2) {
    if (animal instanceof Cat) {
        console.log(animal.speak())
    } else if (animal instanceof Dog2) {
        console.log(animal.testing())
    }
}

// discriminative unions
// interfaces should have a common attribute, in this case, type
interface Warning {
    type: "warning"
    msg: string
}
interface Info {
    type: "info"
    text: string
}
interface Success {
    type: "success"
    message: string
}

type Log = Warning | Info | Success

function handleMsg(log: Log) {
    switch (log.type) {
        case 'warning':
            console.log(log.msg)
            break;
        case 'info':
            console.log(log.text)
            break;
        case 'success':
            console.log(log.message)
            break;
    
        default:
            break;
    }
}