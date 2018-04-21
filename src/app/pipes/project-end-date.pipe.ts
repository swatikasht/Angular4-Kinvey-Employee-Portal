import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'projectEndDate'
})
export class ProjectEndDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
  	if(args){
	  	let filteredProjects = value.filter(project => {
	  		let endDate= new Date(project.endDate).getTime();
	  		let today = new Date();
			let dateWithin = today.getTime() + (args*(1000 * 60 * 60 * 24));
			// console.log(dateWithin);
			// console.log(endDate);
			return ((endDate)&& (endDate>= today.getTime()) && (endDate<= dateWithin))? true: false

	  	})
    	return filteredProjects;
  	}else {
  		return value;
  	}
  	
  }

}


  	
  		// ;
  		// console.log(new Date(increasedDate));
  		// //console.log(date);
  		// if(args && args.length>0){
  		// 	console.log(Math.round(endDate-date/one_day));  
  		// 	console.log( Math.round(endDate-date/one_day)); 
  		// }
  	
