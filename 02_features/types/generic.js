var ArrayOfNumber = /** @class */ (function () {
    function ArrayOfNumber(collection) {
        this.collection = collection;
    }
    ArrayOfNumber.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumber;
}());
var ArrayOfString = /** @class */ (function () {
    function ArrayOfString(collection) {
        this.collection = collection;
    }
    ArrayOfString.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfString;
}());
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
var anything = new ArrayOfAnything(['a', 'b', 'c']);
function printNumber(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printString(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printAnything(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printAnything(['a', 'b', 'c']);
// Generic Constraint
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log('I am a car');
    };
    return Car;
}());
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.print = function () {
        console.log('I am a house');
    };
    return House;
}());
function printCarOrHouse(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
printCarOrHouse([new House(), new Car()]);
