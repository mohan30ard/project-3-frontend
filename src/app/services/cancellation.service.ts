import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CancellationService {

  constructor(private https:HttpClient) { }
  public cancelTicket(bookingId:any,reason:any){
    return this.https.get(`${baseUrl}/reserve/cancel/`+bookingId+`/`+reason);
  }

}
