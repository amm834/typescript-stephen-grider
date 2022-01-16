@classDecorator
class Boat {
    @testDecorator
    color: string = 'red'

    @testDecorator
    get formattedColor(): string {
        return `Boat color is ${this.color}`
    }

    @logError('Oops! Boat sunk in ocean')
    pilot(
        @parameterDecorator some: string
    ): void {
        if (some === 'some') {
            console.log('some')
        } else {
            throw new Error()
        }
    }

}

function classDecorator(constructor: typeof Boat) {
    console.log(constructor)
}

function parameterDecorator(target: any, key: string, index: number) {
    console.log(key, index)
}

function testDecorator(target: any, key: string) {
    console.log(key)
}

function logError(errorMessage: string) {
    return (target: any, key: string, desc: PropertyDescriptor) => {
        const method = desc.value;

        desc.value = function () {
            try {
                method()
            } catch (e) {
                console.log(errorMessage)
            }
        }
    }
}

new Boat().pilot('some')
