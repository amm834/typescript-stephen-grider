class Boat {
    color: string = 'red'

    get formattedColor(): string {
        return `Boat color is ${this.color}`
    }

    @logError('Oops!Boat sunk in ocean')
    pilot(): void {
        throw new Error()
    }

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

new Boat().pilot()
