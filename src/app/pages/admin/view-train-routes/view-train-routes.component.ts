import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { RoutesService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-view-train-routes',
  templateUrl: './view-train-routes.component.html',
  styleUrls: ['./view-train-routes.component.css']
})
export class ViewTrainRoutesComponent implements OnInit {
  tId: any;
  tName: any;
  routes = [
    {
      routeid: "",
      startpoint: "",
      date: "",
      arrival: "",
      depart: "",
      distance: '',
      station: '',
      td: {
        tid: '',
        tno: '',
        tname: '',
        start: '',
        stop: '',
        date: '',
        totalCoach: '',
        acSleeperCoach: '',
        acSittingCoach: '',
        nonAcSleeperCoach: '',
        nonAcSittingCoach: '',
        totalAcSleeperSeat: "",
        availAcSleeperSeat: "",
        totalAcSittingSeat: "",
        availAcSittingSeat: "",
        totalNonAcSleeperSeat: "",
        availNonAcSleeperSeat: "",
        totalNonAcSittingSeat: "",
        availNonAcSittingSeat: "",
        category: {
          catId: "",
          type: "",
          description: ""
        }
      },
      gap: "",
      interval: ""
    }
  ];
  constructor(private _route: ActivatedRoute,
    private _stop: RoutesService,
    private _snak: MatSnackBar) { }

  ngOnInit(): void {
    this.tId = this._route.snapshot.params.tid;//coming from app.route
    this.tName = this._route.snapshot.params.tname; //coming from app.route
    console.log(this.tId);
    this._stop.getTrainsOfRoute(this.tId).subscribe(
      (data: any) => {
        console.log(data);
        this.routes = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
