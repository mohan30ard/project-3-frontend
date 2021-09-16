import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();
  constructor(private http: HttpClient) { }

  //getting current-user which is loggedIn
  public getCurrentUser() {
    return this.http.get(`${baseUrl}/current-user`);
  }

  //generating token
  public generateToken(loginData: any) {
    localStorage.setItem("userid",loginData.username);
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

  //loginuser:set token in local storage
  public loginUser(token: any) {
    localStorage.setItem("token", token);

    return true;
  }

  //isLoggedin or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem("token")
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    }
    else {
      return true;
    }

  }//isLoggedIn()



  //for logout : removing token from local storage
  public logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.clear();
    return true;
  }
  //getting token from local storage
  public getToken() {
    return localStorage.getItem("token");
  }

  //set userDeail
  public setUser(customer: any) {
    localStorage.setItem('customer', JSON.stringify(customer));
  }

  //getting userdetail
  public getUser() {
    let userStr = localStorage.getItem('customer')
    if (userStr != null) {
      return JSON.parse(userStr);
    }
    else {
      this.logout();
      return null;
    }
  }

  //getting userrole
  public getUserRole() {
    let user = this.getUser()
    return user.authorities[0].authority;
  }
}//LoginService class
