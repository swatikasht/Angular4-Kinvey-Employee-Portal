import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
	employee: Employee;
	edit = false;
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private employeeService: EmployeeService
	) { //console.log("inside details constructor");
	}

  	ngOnInit(){
  		//console.log("emp detail ngOnInit");
  		this.employee = new Employee();
  		this.route.params.subscribe((params: Params) => {
	        this.employeeService.getEmployeeDetails(params['id']).subscribe(employee=>{
	        	this.employee = employee;
	        	
	        });  		
		})
	}

	handleEdit(){
		this.edit = true;
	}

	updateEmployee(employeeFormValue){
		let employee:Employee = Object.assign(this.employee,employeeFormValue);
		console.log(employee);
		this.employeeService.updateEmployee(employee).subscribe((response)=>{
   			this.router.navigate(['/employees']);
   			console.log(response)
		})
	}

		
}
