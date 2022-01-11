import {MatchData} from "./MatchData";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

class Summary {
    constructor(analyzer: Analyzer, outputTarget: OutputTarget) {
    }
}