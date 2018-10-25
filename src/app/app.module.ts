import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { EventDetailComponent } from "./event-detail/event-detail.component";
import { MapComponent } from "./map/map.component";
import { RoutingModule } from "./routing/routing.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { AgmCoreModule } from "@agm/core";
import { SidebarModule } from "ng-sidebar";
import { SidebarnavComponent } from "./sidebarnav/sidebarnav.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventDetailComponent,
    MapComponent,
    NavbarComponent,
    SidebarnavComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    SidebarModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: ""
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
