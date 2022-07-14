import { Component, OnInit } from '@angular/core';

import {EventsService} from '../services/events.service';
import { MainEvents } from '../classes/main-events'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _eventService: EventsService) { }

  lstEvents: MainEvents[];

  ngOnInit(): void {
    this._eventService.getMainEvents().subscribe(data=>{
      this.lstEvents = data;
    })
  }

}
