import {Analyzer} from "../Summary";
import {MatchResult} from "../MatchResult";
import {MatchData} from "../MatchData";

export class WinsAnalyzer implements Analyzer {
    constructor(public teamName: string) {
    }

    run(matches: MatchData[]): string {
        let wins = 0;
        for (const match of matches) {
            if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
                wins++;
            } else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin) {
                wins++;
            }
        }

        return `Team ${this.teamName} won ${wins} matches.`;
    }

}