import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from 'src/app/services/booking.service';
import { reservation } from '../../admin/model/reservation';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  stepperOrientation!: Observable<StepperOrientation>;
  constructor(private service: BookingService, private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')
      .pipe(map(({ matches }) => matches ? 'horizontal' : 'vertical'));
  }


  ngOnInit(): void {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    })
  }
  rev: reservation = new reservation
  public booking = {
    // bookingId:'',
    source: localStorage.getItem("start"),
    destination: localStorage.getItem("end"),
    travelDate: localStorage.getItem("date"),
    coachType: '',
    pname: '',
    page: 0,
    pgender: '',
    pdisabled: '',
    price: 0,
    status:false,
    totalDistance: localStorage.getItem("dist"),
    seatNumber: '',
    coachId: '',
    bookingDate: '2021-09-16',
    trainDetails: {
      tid: localStorage.getItem("tid")
    },
    customer: {
      cId: 0,
      username: localStorage.getItem("userid")
    }
  }

  flag = false;
  bool = false;
  msg: any = '';
  chk = false;

  checkavailabilty() {

    // alert("button clicked ok")
    this.service.checkAvailableSeat(this.booking.coachType).subscribe(
      (Response: any) => {
        console.log(Response)
        this.flag = Response;
        if (this.flag == false) { Swal.fire('Sorry no seats', '', 'error') }
        this.bool = true

      },
      (err: any) => {

      }
    );
  }
  distance: any = '';
  finalprice: number = 0;

  checkPrice() {
    this.chk = true;
    this.distance = localStorage.getItem("dist");
    this.finalprice = this.distance * 2;
    if (this.booking.coachType == "availAcSleeperSeat") {
      this.finalprice = this.finalprice + (this.finalprice * 60) / 100;
      if (this.booking.page <= 5)
        this.finalprice = 0;
      else if (this.booking.page >= 60)
        this.finalprice = this.finalprice - (this.finalprice * 10) / 100;
      else
        this.finalprice = this.finalprice
    }
    else if (this.booking.coachType == "availAcSittingSeat") {
      this.finalprice = this.finalprice + (this.finalprice * 40) / 100;
      if (this.booking.page <= 5)
        this.finalprice = 0;
      else if (this.booking.page >= 60)
        this.finalprice = this.finalprice - (this.finalprice * 10) / 100;
      else
        this.finalprice = this.finalprice
    }
    else if (this.booking.coachType == "availNonAcSleeperSeat") {
      this.finalprice = this.finalprice + (this.finalprice * 35) / 100;
      if (this.booking.page <= 5)
        this.finalprice = 0;
      else if (this.booking.page >= 60)
        this.finalprice = this.finalprice - (this.finalprice * 10) / 100;
      else
        this.finalprice = this.finalprice
    }
    else {
      if (this.booking.page <= 5)
        this.finalprice = 0;
      else if (this.booking.page >= 60) {
        this.finalprice = this.finalprice - (this.finalprice * 10) / 100;

      }
      else
        this.finalprice = this.finalprice
    }
    localStorage.setItem("price", this.finalprice.toString())
  }


  source = localStorage.getItem("start");
  confirmbooking() {
    if (this.chk == true) {
      console.log(this.booking);
      this.booking.price = this.finalprice;
      localStorage.setItem("passengerName",this.booking.pname);
      localStorage.setItem("passengerAge",this.booking.page.toString());
      localStorage.setItem("passengerGender",this.booking.pgender);
      localStorage.setItem("disabled",this.booking.pdisabled);
      this.service.addBooking(this.booking).subscribe(
        (Response: any) => {
          this.rev = Response;
          console.log(this.rev)
          alert("data submitted");
          window.location.href = "/customer-dashboard/payment"
        },
        (err: any) => {
          alert("failed to add booking")
        }
      )

    }
    else
      alert("calculate price first");
  }

}
