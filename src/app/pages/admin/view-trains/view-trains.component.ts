import { Component, OnInit } from '@angular/core';
import { TrainService } from 'src/app/services/train.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-trains',
  templateUrl: './view-trains.component.html',
  styleUrls: ['./view-trains.component.css']
})
export class ViewTrainsComponent implements OnInit {
  public trains = [{
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
  }];

  constructor(private _train: TrainService) { }

  ngOnInit(): void {
    this._train.Alltrains().subscribe(
      (data: any) => {
        this.trains = data;
        console.log(this.trains);
      },
      (error: any) => {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');
      }
    );
  }

}
