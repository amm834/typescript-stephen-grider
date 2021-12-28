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
// 1) When we are using any type and typescript cannot guess
var json = "{\"x\":20,\"y\":30}";
var coordinates = JSON.parse(json);
// 2) When initilization is later
var colors = ['red', 'green', 'blue'];
var isGreen;
for (var color in colors) {
    if (color === 'green') {
        isGreen = true;
    }
}
// 3) When type inference work incorrectly
var nums = [-10, -33, 33];
var numAboveZero = false;
for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
        numAboveZero = nums[i];
    }
}
