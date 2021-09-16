import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CancellationService } from 'src/app/services/cancellation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent implements OnInit {
bookingId:any;
reason:any;
  constructor(private _route:Router,private cancelService:CancellationService,private _snack:MatSnackBar) { }

  ngOnInit(): void {
  }
cancel(){
// if(this.bookingId!=null){
//   this._snack.open("Invalid Booking Id",'',{
//     duration:3000
//   })
//   return;
// }
  if(this.reason.trim()=='' || this.reason==null){
    this._snack.open("Enter Reson Please",'',{
      duration:3000
    })
    return;
  }  

this.cancelService.cancelTicket(this.bookingId,this.reason).subscribe(
  (data:any)=>{
    console.log(data);
 
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Logout'
      }).then((result) => {
        if (result.isConfirmed) {
         this._route.navigate(['/customer-dashboard'])
          // this.route.navigate(['/login'])

  
        }
      });
  },(error:any)=>{
    Swal.fire("Ticket Cancellation Failed",'','error')
  }
);
}
}
