export interface Markable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
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

    addMarker(mapable: Markable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mapable.location.lat,
                lng: mapable.location.lng,
            },
        });
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mapable.markerContent(),
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}
