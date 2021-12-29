class Vehicle {
    protected drive(): void {
        console.log('chuga chuga');
    }

    honk(): void {
        console.log('poom....');
    }
}

class Car extends Vehicle {
    protected drive(): void {
        console.log('vromm');
    }

    startDriving(): void {
        this.drive();
    }
}

const car = new Car();
car.startDriving();
