import { Company } from './Company';
import { User } from './User';
import { Map } from './Map';

const user = new U ser();
const company = new Company();
const mapElement = document.getElementById('map');

const map = new Map(mapElement);
map.addMarker(user);
map.addMarker(company);
