import { Component, Input, OnInit } from "@angular/core";
import { EventService } from "../event.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-event-item",
  templateUrl: "./event-item.component.html",
  styleUrls: ["./event-item.component.css"]
})
export class EventItemComponent {
  SubLocation: any;
  @Input()
  event: any;
  constructor(private eventService: EventService, private router: Router) {}
  ngOnInit() {}
}
