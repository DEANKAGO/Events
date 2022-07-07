import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule} from '@angular/common/http';
import { EventsService } from './events.service';
import { SingleEventComponent } from './single-event/single-event.component';

// import { HomeComponent } from './home/home.component';
// import { EventsComponent } from './events/events.component';
// import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    NavbarComponent,
    FooterComponent,
    SingleEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // RouterModule.forRoot([
    //   {path: '', component: HomeComponent},
    //   {path: 'events', component: EventsComponent},
    // ]),
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
