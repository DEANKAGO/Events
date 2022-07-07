import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpclient: HttpClient) { }

  getEvents(): Observable<any>{
    return this.httpclient.get("http://127.0.0.1:8000/api/events/");
  } 
}
