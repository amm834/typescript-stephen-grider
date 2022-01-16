"use strict";
// primitive
let apples = 5;
let hasGirlFriend = false;
let myName = "Aung Myat Moe";
let nothing = null;
let notDefined = undefined;
// built-in object
let now = new Date();
// class
class Person {
}
let person = new Person();
// Array
let numbers = [1, 2, 3, 4, 5];
let truths = [true, false, true];
// Object literals
let points = {
    x: 10,
    y: 10
};
const logNumber = (num) => {
    console.log(num);
};
logNumber(2);
// 1) When we are using any type and typescript cannot guess
let json = `{"x":20,"y":30}`;
let coordinates = JSON.parse(json);
// 2) When initilization is later
let colors = ['red', 'green', 'blue'];
let isGreen;
for (const color in colors) {
    if (color === 'green') {
        isGreen = true;
    }
}
// 3) When type inference work incorrectly
let nums = [-10, -33, 33];
let numAboveZero = false;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
        numAboveZero = nums[i];
    }
}
