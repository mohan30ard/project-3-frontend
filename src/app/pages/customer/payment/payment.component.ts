import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';
declare var Razorpay: any;
declare var route: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  price = Number(localStorage.getItem("price"))
  x = Math.round(this.price);
  public paymentDetails = {
    amount: this.x,
    orderinfo: 'order created'
  }
  constructor(private paymentService: CustomerService, private route: Router) { }
  ngOnInit(): void {
    localStorage.setItem("pay", "false");
  }
  /*

  this.customerService.addCustomer(this.customer).subscribe(
  (data:any)=>{
    console.log(data);
    Swal.fire('Successfully done !!', 'User id is ' + data.cId, 'success').then((e)=>{
      this.route.navigate(['/login'])
    })
  },
  (error) => {
    //error
    console.log(error);
    // alert('something went wrong');
    console.log(error.error.text)
    this.snack.open('User Already Exist with this Username','' ,{
      duration: 3000,
    });
  }
);

  */

  paymentStart() {
    this.paymentService.createPayment(this.paymentDetails).subscribe(
      (data: any) => {
        console.log(data);
        if (data.status == 'created') {
          let options = {
            key: 'rzp_test_iqRjbnSjncHo5L',
            amount: data.amount,
            currency: 'INR',
            name: "Revature Railways",
            description: 'Booking',
            image: "https://cdn4.vectorstock.com/i/1000x1000/38/13/digital-wallet-e-payment-logo-design-vector-28823813.jpg",
            order_id: data.id,
            handler: function (data: any) {
              console.log(data.razorpay_payment_id);
              console.log(data.razorpay_order_id);
              console.log(data.razorpay_signature);
              //payment successfull
              Swal.fire('Payment Success', '', 'success').then((e) => {
                localStorage.setItem("pay", "true");
                window.location.href = "customer-dashboard/ticket";
                // window.location.href="/qrcode";
                localStorage.removeItem("price");
              })
              updatePaymentOnServer(data.payment_id, data.order_id, data.status);


            },
            prefill: {
              name: '',
              email: '',
              contact: '',
            },
            notes: {
              address: 'tamil nadu workfella',
            },
            theme: {
              color: "#3399cc"
            },


          };
          //  td:traindetails=new traindetails;
          var rzp1 = new Razorpay(options)
          rzp1.on("payment.failed", function (data: any) {
            console.log(data.error.code);
            console.log(data.error.description);
            console.log(data.error.source);
            console.log(data.error.step);
            console.log(data.error.reason);
            console.log(data.error.metadata.order_id);
            console.log(data.error.metadata.payment_id);

          })
          rzp1.open();
        }

      },
      (error: any) => {
        console.log(error);
        Swal.fire('Failed', 'oops payment faield!!', 'error')
      }
    );
  }
  updatePaymentOnServer(payment_id: any, order_id: any, status: any) {
    const updateDetails = {
      payment_id: payment_id,
      order_id: order_id,
      status: status
    }
    this.paymentService.updatePayment(updateDetails).subscribe(
      (data: any) => {
        Swal.fire('Payment Success', '', 'success').then((e) => {
          window.location.href = "customer-dashboard"
        })
      },
      (error: any) => {
        console.log(error);
        Swal.fire('Failed', 'oops payment failed!!', 'error')
      }
    );
  }
}






function updatePaymentOnServer(payment_id: any, order_id: any, status: any) {
  throw new Error('Function not implemented.');
}

