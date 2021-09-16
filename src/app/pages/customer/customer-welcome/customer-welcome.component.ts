import { Component, OnInit } from '@angular/core';
import { TrainService } from 'src/app/services/train.service';
import { routedetails } from '../../admin/model/routedetails';

@Component({
  selector: 'app-customer-welcome',
  templateUrl: './customer-welcome.component.html',
  styleUrls: ['./customer-welcome.component.css']
})
export class CustomerWelcomeComponent implements OnInit {

  constructor(private service: TrainService) { }
  routedetails: routedetails[] = [];

  public search = {
    start: '',
    end: '',
    date: ''
  }

  bool: boolean = true;
  msg: any = "";
  ngOnInit(): void {
  }

  searchtrain() {
    this.service.searchTrain(this.search).subscribe(
      (Response: any) => {
        this.bool = true
        console.log(Response)
        this.routedetails = Response
        localStorage.setItem("start", this.search.start);
        localStorage.setItem("end", this.search.end);
        localStorage.setItem("date", this.search.date);

      },
      (err: any) => {
        // window.location.reload();
        this.bool = false;
        this.msg = "Trains are not running between these Routes";
        // alert("Trains are not running between these Routes")
      });
  }

  dataForBook(id: any, dist: any) {
    localStorage.setItem("tid", id);
    localStorage.setItem("dist", dist);
    // routerLink="/booking" 
    window.location.href="/customer-dashboard/booking"
  }


}
