import { Component, OnInit } from "@angular/core";
import { EventService } from "src/app/event.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-sidebarnav",
  templateUrl: "./sidebarnav.component.html",
  styleUrls: ["./sidebarnav.component.css"]
})
export class SidebarnavComponent implements OnInit {
  sub: any;
  id: number;
  event: any;
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}
  private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.event = this.eventService.getEvent(this.id);
    });
  }
}
