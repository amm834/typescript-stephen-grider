// primitive
var apples = 5;
var hasGirlFriend = false;
var myName = "Aung Myat Moe";
var nothing = null;
var notDefined = undefined;
// built-in object
var now = new Date();
// class
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
// Array
var numbers = [1, 2, 3, 4, 5];
var truths = [true, false, true];
// Object literals
var points = {
    x: 10,
    y: 10
};
var logNumber = function (num) {
    console.log(num);
};
logNumber(2);
var json = "{\"x\":20,\"y\":30}";
var coordinates = JSON.parse(json);
