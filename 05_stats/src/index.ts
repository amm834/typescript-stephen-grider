import {CsvFileReader} from "./CsvFileReader";
import {dateStringToDate} from "./utils";

const reader = new CsvFileReader('football.csv')
reader.read()




let manUnitedWins = 0;
for (const match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MathResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MathResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United Win ${manUnitedWins}`);
