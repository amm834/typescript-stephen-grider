let cars = ['Toyota', 'Ford', 'Chevy'];
let years = [new Date(), new Date()];
let carMakers = [['Toyota'], ['Ford']];
// help with type incompatable
cars.push('Suzuki');
cars.map((car) => {
    return car.toUpperCase();
});
// union type array
let date = [new Date(), '2021-12-03'];
date.push(new Date());
date.push('2021-12-2');
