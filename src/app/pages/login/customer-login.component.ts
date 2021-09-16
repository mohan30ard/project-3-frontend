import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  loginData = {
    username: '',
    password: ''
  }
  constructor(private snack: MatSnackBar, private loginService: LoginService, private route: Router) { }

  ngOnInit(): void {
  }

  //form submit
  formSubmit() {
    // alert("cliekd")
    if (this.loginData.username.trim() == '' || this.loginData.username == null) {
      this.snack.open("Username is required!!", '', {
        duration: 3000
      });
      return;
    }
    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      this.snack.open("password is required!!", '', {
        duration: 3000
      });
      return;
    }
    //request to server for generating token
    this.loginService.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log("Success")
        console.log(data)
        //login..
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe(
          (data: any) => {
            this.loginService.setUser(data);
            console.log(data)
            //redirect ..ADMIN dashboard else NORMAL... user dashboard
            if (this.loginService.getUserRole() == "ADMIN") {
              this.route.navigate(['admin']);
              this.loginService.loginStatusSubject.next(true);

            }
            else if (this.loginService.getUserRole() == 'NORMAL') {
              this.route.navigate(['customer-dashboard']);
              this.loginService.loginStatusSubject.next(true);
            }
            else {
              this.loginService.logout();
              location.reload();
            }
          },
          (error: any) => {
            console.log(error);
            this.snack.open("Invalid Details !! Try Again", '', {
              duration: 300
            })

          }
        );
      },
      (error: any) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid Details !! Try Again!',
        })
      }
    );
  }
}
