interface DataReader {
    read(): void;

    data(): string[][];
}

export class MatchReader {
    constructor(public reader: DataReader) {
    }

    load() {
        // .map((row: string[]): any => {
        //         return [
        //             dateStringToDate(row[0]),
        //             row[1],
        //             row[2],
        //             Number(row[3]),
        //             Number(row[4]),
        //             row[5] as MathResult,
        //             row[6]
        //         ]
        //     })

    }
}