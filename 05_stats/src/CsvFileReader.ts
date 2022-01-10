import fs from "fs";

type MatchData = [Date, string, string, number, number, MatchResult, string]

export abstract class CsvFileReader {
    public data: MatchData[] = []

    protected constructor(public filename: string) {
    }

    abstract mapRow(row: string[]): MatchData;

    read() {
        this.data = fs
            .readFileSync(this.filename, {
                encoding: 'utf-8',
            })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',');
            })
            .map(this.mapRow)
    }

}