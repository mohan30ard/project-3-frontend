import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private https:HttpClient) { }

  public getTrainById(tid:any){
    return this.https.get(`http://localhost:9848/train/trainbyid/`+ tid);
  }
  public checkAvailableSeat(coachType:any){
    return this.https.get(`http://localhost:9848/reserve/checkseats/`+coachType+`/`+localStorage.getItem("tid"));
  }

  public addBooking(booking:any){
    return this.https.post(`http://localhost:9848/reserve/add`,booking);
  }

}

