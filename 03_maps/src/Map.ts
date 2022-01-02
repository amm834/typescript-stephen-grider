import { Company } from './Company';
import { User } from './User';

interface Markable {
    location: {
        lat: number;
        lng: number;
    };
}

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

    addMarker(marker: Markable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: marker.location.lat,
                lng: marker.location.lng,
            },
        });
    }
}
