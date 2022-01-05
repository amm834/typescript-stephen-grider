import { NumberCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter';

// const numbesCollection = new NumberCollection([10, 2, -5, 6]);
// const sorter = new Sorter(numbesCollection);
// sorter.sort();
// console.log(numbesCollection.data);

const charactersCollection = new CharactersCollection('Xaay');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection);
