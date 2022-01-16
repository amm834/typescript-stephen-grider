class ArrayOfNumber {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
class ArrayOfString {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
class ArrayOfAnything {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
const anything = new ArrayOfAnything(['a', 'b', 'c']);
function printNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printString(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printAnything(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printAnything(['a', 'b', 'c']);
// Generic Constraint
class Car {
    print() {
        console.log('I am a car');
    }
}
class House {
    print() {
        console.log('I am a house');
    }
}
function printCarOrHouse(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
printCarOrHouse([new House(), new Car()]);
