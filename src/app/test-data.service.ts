import { InMemoryDbService } from "angular-in-memory-web-api";

export class TestDataService implements InMemoryDbService {
  createDb() {
    const Map = [
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
    return { Map: Map };
  }
}
