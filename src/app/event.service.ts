import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class EventService {
  MapUrl = "/api/map";
  constructor() {}

  getEvents() {
    return EVENTS;
  }

  getEventItem(id: number) {
    return EVENTS.find(event => event.id === id);
  }
  /*getSupplyLocations(id: number) {
    return SupplyLocations.find(event => event.id === id);
  }*/
}
const EVENTS = [
  {
    id: 20000001,
    name: "Supply to Lincoln High Street",
    date: "13/08/2018",
    time: "10:00"
  },
  {
    id: 20000002,
    name: "Supply in Lincoln ",
    date: "05/09/2018",
    time: "08:00"
  }
];
/*
const SupplyLocation = [
  {
    id: 20000001,
    locationid: 101,
    plot_no: 203,
    street: "",
    City: "",
    Country: "",
    Pin_code: ""
  },
  {
    id: 20000001,
    locationid: 102,
    plot_no: 202,
    street: "",
    City: "",
    Country: "",
    Pin_code: ""
  },
  {
    id: 20000001,
    locationid: 103,
    plot_no: 221,
    street: "",
    City: "",
    Country: "",
    Pin_code: ""
  }
];
*/
