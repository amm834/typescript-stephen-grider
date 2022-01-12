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
console.log(anything.get(1))
