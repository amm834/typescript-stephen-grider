class ArrayOfNumber {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index]
    }
}

class ArrayOfString {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index]
    }
}

class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index]
    }
}

const anything = new ArrayOfAnything(['a', 'b', 'c'])

function printNumber(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

function printString(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

function printAnything(arr: T): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

printAnything(['a', 'b', 'c'])
