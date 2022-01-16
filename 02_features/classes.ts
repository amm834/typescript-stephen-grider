class Vehicle {
    constructor(public color: string) {}

    protected drive(): void {
        console.log('chuga chuga');
    }

    honk(): void {
        console.log('poom....');
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    protected drive(): void {
        console.log('vromm');
    }

    startDriving(): void {
        this.drive();
    }
}

const car = new Car(4, 'green');
car.startDriving();
