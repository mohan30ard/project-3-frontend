import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutesService } from 'src/app/services/routes.service';
import { TrainService } from 'src/app/services/train.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.css']
})
export class AddRouteComponent implements OnInit {
  tId: any;
  tName: any;
  routes =
    {
      arrival: 0,
      date: 0,
      depart: 0,
      distance: 0,
      startpoint: "",
      station: 0,
      td: {
        tid: 0
      }
    }

  constructor(private _route: ActivatedRoute,
    private route: Router,
    private _stop: RoutesService) { }

  ngOnInit(): void {
    this.tId = this._route.snapshot.params.tid;
    this.tName = this._route.snapshot.params.tname;
    this.routes.td['tid'] = this.tId;

  }

  formSubmit() {
    this._stop.addRoute(this.routes).subscribe(
      (data: any) => {
        Swal.fire('Success ', 'station Added. Add Another one', 'success').then((e) => {
         /*  this.route.navigate(['admin/trains'])*/ 
         this.route.navigate(['/admin/view-routes/' + this.tId +'/' + this.tName])
        })
          ;
        this.routes.arrival = 0;
        this.routes.date = 0;
        this.routes.depart = 0;
        this.routes.distance = 0;
        this.routes.startpoint = '';
        this.routes.station = 0;
      },
      (error) => {
        Swal.fire('Error', 'Error in adding stop', 'error');
      }
    );


  }

}
