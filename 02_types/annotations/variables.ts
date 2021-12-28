// primitive
let apples: number = 5
let hasGirlFriend: boolean = false
let myName: string = "Aung Myat Moe"
let nothing: null = null
let notDefined: undefined = undefined

// built-in object
let now: Date = new Date()

// class
class Person {
}

let person: Person = new Person()

// Array
let numbers: number[] = [1, 2, 3, 4, 5]
let truths: boolean[] = [true, false, true]

// Object literals
let points: {
    x: number;
    y: number;
} = {
    x: 10,
    y: 10
}


const logNumber: (num: number) => void = (num: number) => {
    console.log(num)
}
logNumber(2)

let json = `{"x":20,"y":30}`
let coordinates: { x: number; y: number } = JSON.parse(json)