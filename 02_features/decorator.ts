class Boat {
    color: string = 'red'

    get formattedColor(): string {
        return `Boat color is ${this.color}`
    }

    @logError
    pilot(): void {
        throw new Error()
    }

}

function logError(target: any, key: string, desc: PropertyDescriptor) {
    const method = desc.value;

    desc.value = function () {
        try {
            method()
        } catch (e) {
            console.log(method, 'Oop!')
        }
    }
}

new Boat().pilot()
