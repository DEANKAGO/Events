import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import {EventsService} from '../services/events.service';
import {Events} from '../classes/events';
import { Category } from '../classes/category';
import { MainEvents } from '../classes/main-events'


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private _eventService: EventsService) {}

  listCategories: Category[];
  CategorySelected:Number;
  listEvents: Events[];
  lstEvents: MainEvents[];
  
  

  ngOnInit(): void {
    this._eventService.getCategories().subscribe(data=>{
      this.listCategories = data;
    })


    this._eventService.getMainEvents().subscribe(data=>{
      this.lstEvents = data;
    })
    console.log("this.listCategories", this.listCategories);

  }
  


  onCategorySelected(selectedCategoryId:any): void {
    this._eventService.getEventsForselectedCategorybyparameter(selectedCategoryId).subscribe(data=>{this.listEvents = data;})
  }

}
