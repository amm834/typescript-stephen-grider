"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
var MathResult;
(function (MathResult) {
    MathResult["HomeWin"] = "H";
    MathResult["AwayWin"] = "A";
    MathResult["Draw"] = "D";
})(MathResult || (MathResult = {}));
let manUnitedWins = 0;
for (const match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MathResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MathResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United Win ${manUnitedWins}`);
