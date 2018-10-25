import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EventService {
  router: any;
  constructor() {}

  getEvents() {
    return EVENTS;
  }

  getEvent(id: number) {
    return EVENTS.find(event => event.id === id);
  }
  /*getSubLocations(id: number) {
    return SubLocation.find(event => event.id === id);
  }*/
}
const EVENTS = [
  {
    id: 20000001,
    lat: 19.157934,
    lng: 72.993477,
    name: "Supply to Mumbai Airoli Street",
    date: "13/08/2018",
    time: "10:00",
    nav: "Supply to Mumbai Airoli Street",
    SupplyLocations: [
      {
        id: 20000001,
        locationid: 101,
        lat: 19.1447104,
        lng: 72.9871713,
        plot_no: 203,
        street: "Sector2b, Airoli",
        City: "Navi Mumbai",
        Country: "India",
        Pin_code: "400708",
        is_supplied: "false"
      },
      {
        id: 20000001,
        locationid: 102,
        lat: 19.1584699,
        lng: 72.9938019,
        plot_no: 202,
        street: "CIDCO Colony, Sector3",
        City: "Navi Mumbai",
        Country: "India",
        Pin_code: "400708"
      },
      {
        id: 20000001,
        locationid: 103,
        lat: 19.1742,
        lng: 72.9914,
        plot_no: 221,
        street: "Mindspace Airoli",
        City: "Navi Mumbai",
        Country: "India",
        Pin_code: "400708"
      }
    ]
  },
  {
    id: 20000002,
    lat: 12.971389,
    lng: 77.75013,
    name: "Supply to Bangalore Whitefield ",
    date: "05/09/2018",
    time: "08:00",
    SupplyLocations: [
      {
        id: 20000002,
        locationid: 201,
        lat: 12.9872132,
        lng: 77.7351733,
        plot_no: 203,
        street: "ITPL Gate, Whitefield",
        City: "Bangaluru",
        Country: "India",
        Pin_code: "560066",
        is_supplied: "false"
      },
      {
        id: 20000002,
        locationid: 102,
        lat: 12.9860142,
        lng: 77.7308554,
        plot_no: "K-F02",
        street: "Krishnarajapura",
        City: "Bangaluru",
        Country: "India",
        Pin_code: "560066"
      },
      {
        id: 20000002,
        locationid: 103,
        lat: 12.9880011,
        lng: 77.7261728,
        plot_no: 221,
        street: "KR Puram Hobli, off Hoodi Village",
        City: "Bangaluru",
        Country: "India",
        Pin_code: "560066"
      }
    ]
  }
];
