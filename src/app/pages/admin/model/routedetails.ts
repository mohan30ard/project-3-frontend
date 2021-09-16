import { traindetails } from "./traindetails";

export class routedetails {
  routeid: number = 0;
  startpoint: string = '';
  gap: any = ''; //transient
  interval: any = ''; //transien
  date: any = '';
  arrival: any = '';
  depart: any = '';
  distance: number = 0;
  station: number = 0;
  td: traindetails = new traindetails;
}
