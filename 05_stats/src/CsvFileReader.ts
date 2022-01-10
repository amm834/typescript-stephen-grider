import fs from "fs";
import {dateStringToDate} from "./utils";
import {MathResult} from "./MatchResult";

export class CsvFileReader {
    public data: string[][] = []

    constructor(public filename: string) {
    }

    read() {
        this.data = fs
            .readFileSync(this.filename, {
                encoding: 'utf-8',
            })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            })
            .map((row: string[]): any => {
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    Number(row[3]),
                    Number(row[4]),
                    row[5] as MathResult,
                    row[6]
                ]
            })
    }
}