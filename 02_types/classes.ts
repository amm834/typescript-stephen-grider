class Vehicle {
    drive(): void {
        console.log('chuga chuga');
    }

    honk(): void {
        console.log('poom....');
    }
}

class Car extends Vehicle {
    drive(): void {
        console.log('vromm');
    }
}

const car = new Car();
car.drive();
