"use strict";
class Hold {
    constructor(data) {
        this.data = data;
    }
}
let holdNumber = new Hold(123);
console.log(holdNumber);
let holdString = new Hold("hola");
console.log(holdString);
console.log(holdString.data);
