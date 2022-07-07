import { Component } from '@angular/core';

import { EventsService } from './events.service';
import {Events} from './events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'events_ui';

  constructor(private _eventService: EventsService) {}

  listEvents: Events[];



  ngOnInit() {
    this._eventService.getEvents().subscribe(data=>{
      this.listEvents = data;
    })
  }


}
