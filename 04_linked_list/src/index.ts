import { NumberCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbesCollection = new NumberCollection([10, 2, -5, 6]);
const sorter = new Sorter(numbesCollection);
sorter.sort();
console.log(numbesCollection.data);
