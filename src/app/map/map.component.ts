import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MouseEvent } from "@agm/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "src/app/event.service";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  id: any;
  zoom = 13;
  sub: any;
  event: any;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => console.log(params));
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.event = this.eventService.getEvent(this.id);
      //this.SupplyLocation = this.eventService.getSupplyLocations(this.id);
    });
  }

  openNav() {
    return (document.getElementById("mySidenav").style.width = "250px");
  }

  closeNav() {
    return (document.getElementById("mySidenav").style.width = "0");
  }
}

/*
private Map: Map[];
  private MapUrl = 'api/Map';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getMap().subscribe(data => (this.Map = data));
  }

  getMap(): Observable<Map[]> {
    return this.http.get<Map[]>(this.MapUrl);
  }*/
