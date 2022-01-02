import { Company } from './Company';
import { User } from './User';

export class Map {
    private googleMap: google.maps.Map;
    constructor(mapElement: Element) {
        this.googleMap = new google.maps.Map(mapElement, {
            center: {
                lat: 0,
                lng: 0,
            },
            zoom: 1,
        });
    }

    addUserMarker(user: User) {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: user.location.lat,
                lng: user.location.lng,
            },
        });
    }
    addCompanyMarker(company: Company): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: company.location.lat,
                lng: company.location.lng,
            },
        });
    }

    addMarker(map: User | Company): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: map.location.lat,
                lng: map.location.lng,
            },
        });
    }
}
