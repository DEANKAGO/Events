import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import {EventsService} from '../events.service';
import {Events} from '../events';

// export class Events{
//   constructor(
//     public id:number,
//     public title:string,
//     public text:string,
//     public Location :string,
//     public time:string,
//     public due_date:string,
//     public photo:{ url: string },
//     public date:string,
//    ) {}

//   }


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private _eventService: EventsService) {}

  listEvents: Events[];
  
  // event = Event;
  // events: Events[];

  // constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // this.getEvent()
    this._eventService.getEvents().subscribe(data=>{
      this.listEvents = data;
    })
  }

  // getEvent() {
  //   this.http.get<any>("http://127.0.0.1:8000/api/events/").subscribe(
  //   response =>{
  //     this.events = response
  //   }
  //   )
  // }

}
