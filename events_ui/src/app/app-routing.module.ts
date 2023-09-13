import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { SingleEventComponent } from './single-event/single-event.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'events', component: EventsComponent},
  {path: 'single-event/:', component: SingleEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [ HomeComponent, EventsComponent, SingleEventComponent];
