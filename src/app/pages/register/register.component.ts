import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private snack: MatSnackBar, private customerService: CustomerService, private route: Router) { }
  //model object for registration
  regexp: RegExp = /^[+ 0-9]{12}$/;
  public customer = {
    name: '',
    email: '',
    username: '',
    password: '',
    phone: '',
    address: '',
    aadhar: '',
    profile: "https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg",
  };
  ngOnInit(): void { }
  //form submittted
  formSubmit() {
    console.log(this.customer);
    if (this.customer.username.trim() == '' || this.customer.username == null) {
      this.snack.open('Username is required !! ', '', {
        duration: 3000,
      });
      return;
    }
    if (this.customer.name.trim() == '' || this.customer.name == null) {
      this.snack.open('Fullname is required !! ', '', {
        duration: 3000,
      });
      return;
    }
    if (this.customer.email == '' || this.customer.email == null) {
      this.snack.open('email is required !! ', '', {
        duration: 3000,
      });
      return;
    }
    if (this.customer.password.trim() == '' || this.customer.password == null) {
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }
    if (this.customer.phone.trim() == '' || this.customer.phone == null) {
      this.snack.open('Phone number is required !! ', '', {
        duration: 3000,
      });
      return;
    }
    if (this.customer.aadhar.trim() == '' || this.customer.aadhar == null) {
      this.snack.open('Aadhar number is required !! ', '', {
        duration: 3000,
      });
      return;
    }
    if (this.customer.address.trim() == '' || this.customer.address == null) {
      this.snack.open('Address is required !! ', '', {
        duration: 3000,
      });
      return;
    }
    //making http post
    this.customerService.addCustomer(this.customer).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('Successfully done !!', 'User id is ' + data.cId, 'success').then((e) => {
          this.route.navigate(['/login'])
        })
      },
      (error) => {
        //error
        console.log(error);
        // alert('something went wrong');
        console.log(error.error.text)
        this.snack.open('User Already Exist with this Username', '', {
          duration: 3000,
        });
      }
    );

  }//form
}//main
