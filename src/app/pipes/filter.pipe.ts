import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

	transform(value: any, args?: any): any {
		//console.log(value);
		let titleValue = args;
		//console.log(titleValue);

		if(titleValue){
			return value.filter((item)=>{
	    		return (item.title === titleValue)? true : false
	    	})	    	
		} else {
			return value;
		}
	}  		

}
