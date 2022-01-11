import {CsvFileReader} from "./CsvFileReader";
import {MatchReader} from "./MatchReader";
import {Summary} from "./Summary";
import {WinsAnalyzer} from "./analyzers/WinsAnalyzer";
import {HtmlReport} from "./outputTargets/HtmlReport";

const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summary = new Summary(
    new WinsAnalyzer('Man United'),
    new HtmlReport('report.html')
)
summary.buildAndPrintReport(matchReader.matches)