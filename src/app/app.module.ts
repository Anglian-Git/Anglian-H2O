import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { TestDataService } from "./test-data.service";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { EventItemComponent } from "./event-item/event-item.component";
import { EventDetailComponent } from "./event-detail/event-detail.component";
import { MapComponent } from "./map/map.component";
import { RoutingModule } from "./routing/routing.module";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventItemComponent,
    EventDetailComponent,
    MapComponent,
    NavbarComponent
  ],
  imports: [
    HttpClientModule,
    RoutingModule,
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(TestDataService, {
      dataEncapsulation: false
    }),
    InMemoryWebApiModule.forRoot(TestDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
