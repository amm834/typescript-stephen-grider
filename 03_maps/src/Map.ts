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

    addMarker(position: Markable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: position.location.lat,
                lng: position.location.lng,
            },
        });
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: 'HEllo world',
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}
