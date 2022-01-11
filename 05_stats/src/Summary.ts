import {MatchData} from "./MatchData";
import {WinsAnalyzer} from "./analyzers/WinsAnalyzer";
import {HtmlReport} from "./outputTargets/HtmlReport";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {
    }

    static reportWithHtmlFormat(teamName: string, fileName: string ): Summary {
        return new Summary(
            new WinsAnalyzer(teamName),
            new HtmlReport(fileName)
        )
    }

    buildAndPrintReport(matches: MatchData[]) {
        const report = this.analyzer.run(matches)
        this.outputTarget.print(report)
    }
}