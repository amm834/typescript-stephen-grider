import {MatchResult} from "./MatchResult";
import {dateStringToDate} from "./utils";
import {MatchData} from "./MatchData";
import {CsvFileReader} from "./CsvFileReader";

interface DataReader {
    data: string[][];

    read(): void;
}


export class MatchReader {
    matches: MatchData[] = []


    constructor(public reader: DataReader) {
    }

    static fromCsv(csvFilename: string): MatchReader {
        return new MatchReader(new CsvFileReader(csvFilename))
    }

    load() {
        this.reader.read()
        this.matches = this.reader.data.map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                Number(row[3]),
                Number(row[4]),
                row[5] as MatchResult,
                row[6]
            ]
        })

    }
}