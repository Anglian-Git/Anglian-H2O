import { Component, OnInit, Input } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { EventService } from "src/app/event.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  events: any;
  constructor(private eventService: EventService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
