import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dob'
})
export class DobPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    value.map(item => console.log(item.dob));
  }

}
