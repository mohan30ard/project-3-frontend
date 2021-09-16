import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private http: HttpClient) { }

  public getTrainsOfRoute(tid: any) {
    return this.http.get(`${baseUrl}/train/route/${tid}`);
  }

  public addRoute(route: any) {
    return this.http.post(`${baseUrl}/train/addroute`, route);
  }

}
