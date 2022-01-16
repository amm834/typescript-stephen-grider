class Vehicle {
    constructor(color) {
        this.color = color;
    }
    drive() {
        console.log('chuga chuga');
    }
    honk() {
        console.log('poom....');
    }
}
class Car extends Vehicle {
    constructor(wheels, color) {
        super(color);
        this.wheels = wheels;
    }
    drive() {
        console.log('vromm');
    }
    startDriving() {
        this.drive();
    }
}
const car = new Car(4, 'green');
car.startDriving();
