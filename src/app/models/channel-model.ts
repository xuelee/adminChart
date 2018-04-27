
export class Channel { 
	id:string;      
	token:string=localStorage.getItem("token");
	consKey:string;
	consValue:string;
	consDesc:string;
	packageName:string;	
}