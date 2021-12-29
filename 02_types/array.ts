let cars = ['Toyota', 'Ford', 'Chevy'];
let years = [new Date(), new Date()];
let carMakers: string[][] = [['Toyota'], ['Ford']];

// help with type incompatable
cars.push('Suzuki');

cars.map((car: string): string => {
    return car.toUpperCase();
});

// union type array
let date: (string | Date)[] = [new Date(), '2021-12-03'];
date.push(new Date());
date.push('2021-12-2');
