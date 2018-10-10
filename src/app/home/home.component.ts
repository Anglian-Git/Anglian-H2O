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
  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
