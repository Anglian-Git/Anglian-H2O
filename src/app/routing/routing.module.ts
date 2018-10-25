import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EventDetailComponent } from "../event-detail/event-detail.component";
import { HomeComponent } from "../home/home.component";
import { MapComponent } from "../map/map.component";
import { SidebarnavComponent } from "../sidebarnav/sidebarnav.component";

export const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "sidenav", component: SidebarnavComponent },
  { path: "event-detail/:id", component: EventDetailComponent },
  { path: "backtohome", component: HomeComponent },
  { path: "map/:id", component: MapComponent }
  /*,
  { path: "", component: EventItemComponent },
  { path: "", component: EventDetailComponent },
  { path: "map", component: MapComponent }*/
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes), CommonModule],
  exports: [RouterModule]
})
export class RoutingModule {}
