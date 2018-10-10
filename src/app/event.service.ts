import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EventService {
  constructor() {}

  getEvents() {
    return EVENTS;
  }

  getEventItem(id: number) {
    return EVENTS.find(event => event.id === id);
  }
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
