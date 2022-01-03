class Sorter {
    constructor(public collection: number[] | string) {}

    sort(): void {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            // If collection is a number array
            if (this.collection instanceof Array) {
                for (let j = 0; j < length - i - 1; j++) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
            }

            // If collection is a string
            if (typeof this.collection === 'string') {
            }
        }
    }
}

const sorter = new Sorter([20, 30, -1, 5]);
sorter.sort();
console.log(sorter.collection);