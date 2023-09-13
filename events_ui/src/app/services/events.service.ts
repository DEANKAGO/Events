import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpclient: HttpClient) { }


  getCategories(): Observable<any> {
    return this.httpclient.get("http://127.0.0.1:8000/api/all_categories/");
  }

  getEventsForselectedCategorybyparameter(selectedCategoryId:string): Observable<any> {
    let params1 = new HttpParams().set('category', selectedCategoryId);
    return this.httpclient.get("http://127.0.0.1:8000/api/all_events/", {params:params1})
  }

  getMainEvents(): Observable<any> {
    return this.httpclient.get("http://127.0.0.1:8000/api/main_event/");
  }


}
