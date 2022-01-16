"use strict";
const drink = {
    name: 'Cocacola',
    carbonated: false,
    sugar: 40,
    summary() {
        return `I am drinking ${this.name}`;
    },
};
const oldCivic = {
    name: 'civic',
    model: new Date(),
    broken: true,
    summary() {
        return ` 
        Car name is ${this.name}
        Is made in ${this.model} year
        Broken? ${this.broken}`;
    },
};
const printSummary = (item) => {
    console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
