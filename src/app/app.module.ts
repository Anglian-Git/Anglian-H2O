import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { EventItemComponent } from "./event-item/event-item.component";
import { EventDetailComponent } from "./event-detail/event-detail.component";
import { MapComponent } from "./map/map.component";
import { RoutingModule } from "./routing/routing.module";
import { EventNavbarComponent } from "./navbar/event-navbar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventItemComponent,
    EventDetailComponent,
    MapComponent,
    EventNavbarComponent,
    NavbarComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: ""
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
