import { Component,  } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent {
// google maps zoom level
zoom = 10;

// initial center position for the map
lat = 19.0760;
lng = 72.8777;

clickedMarker(label: string, index: number) {
  console.log(`clicked the marker: ${label || index}`);
}

mapClicked($event: MouseEvent) {
  this.markers.push({
    lat: $event.coords.lat,
    lng: $event.coords.lng,
    draggable: true
  });
}

markerDragEnd(m: marker, $event: MouseEvent) {
  console.log('dragEnd', m, $event);
}

markers: marker[] = [
  {
    lat: 19.1591362,
    lng: 72.9596153,
    label: 'A',
    draggable: true
  },
  {
    lat: 19.259100,
    lng: 72.9596100,
    label: 'B',
    draggable: false
  },
  {
    lat: 19.1591400,
    lng: 72.9996200,
    label: 'C',
    draggable: true
  }
];
}

// just an interface for type safety.
interface marker {
lat: number;
lng: number;
label?: string;
draggable: boolean;
}



