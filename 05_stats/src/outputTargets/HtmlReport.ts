import {OutputTarget} from "../Summary";
import * as fs from "fs";

export class HtmlReport implements OutputTarget {
    constructor(public filename: string) {
    }

    print(report: string): void {
        const html = `
        <h1>Analysis Report</h1>
        <p>${report}</p>
    `;

        fs.writeFileSync(this.filename, html);
    }

}