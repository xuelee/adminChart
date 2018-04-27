//import {Pipe, PipeTransform} from "@angular/core";
import * as moment from 'moment';

// @Pipe({
//     name: 'dateFormat'
// })
export class DateFormat {
   transform(date: any, args?: any): any {
   	 if(typeof(date) == 'object'){
 		let d = new Date(date);
	     if(args== 'time'){
			return moment(d).format('YYYY-MM-DD HH:mm:ss')
	     }else{
	     	return moment(d).format('YYYY-MM-DD')
	     }
   	 }else{
   	 	return "";
   	 }
    
     
   }

}