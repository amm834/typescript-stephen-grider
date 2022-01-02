import { Company } from './Company';
import { User } from './User';
import { Map } from './Map';

// create map element
const mapElement = document.createElement('div');
mapElement.setAttribute('id', 'map');
document.querySelector('#app')?.appendChild(mapElement);

// additional information for the map
const user = new User();
const company = new Company();

const map = new Map(mapElement);
map.addMarker(user);
map.addMarker(company);
