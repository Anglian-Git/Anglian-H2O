import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventItemComponent } from '../event-item/event-item.component';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import { HomeComponent } from '../home/home.component';
import { MapComponent } from '../map/map.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'event-detail', component: EventDetailComponent},
  { path: 'backtohome', component: HomeComponent },
  { path: 'map', component: MapComponent },
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
