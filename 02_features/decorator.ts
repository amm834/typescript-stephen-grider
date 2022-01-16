class Boat {
    color: string = 'red'

    get formattedColor(): string {
        return `Boat color is ${this.color}`
    }

    pilot(): void {
        console.log('I am a pilot')
    }

}

function testDecorator(target: Boat, key: string) {
    console.log("Target: ", target)
    console.log("Key: ", key)
}

testDecorator(Boat.prototype, 'pilot')