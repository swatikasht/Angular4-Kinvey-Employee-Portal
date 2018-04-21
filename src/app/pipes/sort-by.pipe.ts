import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})

export class SortByPipe implements PipeTransform {
    sortFn(arr,args,field){
        if(args === "asc"){
            arr.sort((a,b) => {
               return (a[field] < b[field] ? -1 : (a[field] > b[field] ? 1 : 0)); 
            });
        }
        if(args==="desc"){
            arr.sort((a,b) => {
                return (a[field] > b[field] ? -1 : (a[field] < b[field] ? 1 : 0)); 
            });
        }
        return arr
    }

    transform(value: any, args?: any, field?:any,): any {
        if(args || args==""){
           this.sortFn(value,args,field);
           
        }        
        return value;
     
    }


}


