import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Map {
  id: number;
  locationid: number;
}

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  private Map: Map[];
  private MapUrl = "api/Map";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getMap().subscribe(data => (this.Map = data));
  }

  getMap(): Observable<Map[]> {
    return this.http.get<Map[]>(this.MapUrl);
  }
}
