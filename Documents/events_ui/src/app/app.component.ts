import { Component } from '@angular/core';

import { EventsService } from './services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'events_ui';

  constructor(private _eventService: EventsService) {}


  ngOnInit() {
    
  }


}
