import { Injectable } from '@angular/core';
//import { EMPLOYEES} from './mock-employees';
import { Employee } from './employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ProjectService } from '../projects/project.service';
import { HttpClientService } from '../services/http-client.service';
import 'rxjs/add/operator/map'

@Injectable()
export class EmployeeService {
  private employees : Employee[];

	constructor(
    private httpService:HttpClientService,
    private projectService:ProjectService,
    ) { 
    //console.log("inside service constructor")
  }

	getEmployees(query?) : Observable<any> {
    let url = query?'employees'+query:'employees';
		return this.httpService.get(url).map(response=>{
      this.employees = response.json() ;
      return this.employees;
    })
 	}

  getProjects(){
    return this.projectService.getProjects()
  }

	getEmployeeDetails(id){
    //console.log(id);
    //console.log(this.employees);
     //?query={"employee_id":id}
    this.httpService.getEmpProjMap('employeeProject' ,id);
    if(!this.employees){
      return this.getEmployees().map(employees=>{
        //console.log(employees);
        return employees.filter(employee=>employee._id===id)[0]
      })
    } else {
      return Observable.of(this.employees.filter(employee=>employee._id===id)[0]);  
    }

 	}

	addEmployee(employee):Observable<any>{
    return this.httpService.post('employees',employee)
      .map(response=>{
      //console.log(response);console.log(response.json());
       return response.json()});
	}

  updateEmployee(employee){
    //console.log(employee)
   return this.httpService.put('employees/'+ employee._id,employee)
      .map(response=>{
        //console.log(response);
        console.log(response.json());
         return response.json()}); 
  }

  handleDelete(employee){
    //console.log(employee);
    return this.httpService.delete('employees/'+ employee._id,employee)
      .map(response=> {
        //console.log(response);console.log(response.json());
        return response.json()} ); 
  }

  addEmpProj(empProjArr){
    //console.log(empProjArr);
    empProjArr.map(obj=> {
      return this.httpService.post('employeeProject',obj).subscribe(response=> {
        //console.log(response);
        console.log(response.json());
        return response.json()}); 
    })
  }

}
