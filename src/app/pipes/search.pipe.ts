
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchText?: any,keys?:any): any {
  	console.log(value);
  	keys = keys.split(',')
  	console.log(keys);

  	if(searchText){
  		let filteredItems = value.filter((item)=>{
        return keys.some(key => {
          console.log(item[key]);
          return item[key].toLowerCase().indexOf(searchText)>-1;
        })
  		})  

  		return filteredItems;
  	} else {
  		return value;	
  	}
    
  }

}
