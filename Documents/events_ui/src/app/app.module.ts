import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
// import { ShareIconsModule } from 'ngx-sharebuttons/icons';


import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule} from '@angular/common/http';
import { EventsService } from './services/events.service';
import { SingleEventComponent } from './single-event/single-event.component';


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
    FormsModule,
    // ShareButtonsModule,
    // ShareIconsModule,
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
