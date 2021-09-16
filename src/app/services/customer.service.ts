import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  //adding customer
  public addCustomer(customer:any){
    return this.http.post(`${baseUrl}/customer/`,customer)
  }

  public checkAvailabilty(seattype:any){
    return this.http.get(`${baseUrl}/booking/`+ localStorage.getItem("id")+`/`+seattype)
    
  
  }


  //making payment request service
  public createPayment(amount:any){
    return this.http.post(`${baseUrl}/customer/create_payment`,amount)
  }

  //update payment details
  public updatePayment(updateDetails:any){
    return this.http.put(`${baseUrl}/customer/update_payment`,updateDetails);
  }
}
