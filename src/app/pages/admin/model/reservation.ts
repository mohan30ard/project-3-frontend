import { customer } from "./customer";
import { traindetails } from "./traindetails";

export class reservation{
    bookingid:any;
	source:any;
	destination:any;
	travelDate:any;
	coachType:any;
	pname:any;
	page:any;
	pgender:any;
	pdisabled:any;
	price:any;
	totalDistance:any;
    status:any;
	seatNumber:any;
	coachId:any;
	bookingDate:any;
	td:traindetails=new traindetails;
    cust:customer=new customer;
	
}