class Boat {
    color: string = 'red'

    get formattedColor(): string {
        return `Boat color is ${this.color}`
    }

    @testDecorator
    pilot(): void {
        console.log('I am a pilot')
    }

}

function testDecorator(target: any, key: any) {
    console.log("Target: ", target)
    console.log("Key: ", key)
}