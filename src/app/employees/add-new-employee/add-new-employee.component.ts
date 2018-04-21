import { Component,OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})

export class AddNewEmployeeComponent implements OnInit {

	employee:Employee;
	constructor(private employeeService:EmployeeService, private router:Router) {
		//console.log("inside addEmp constructor");
	}

	ngOnInit() {
		this.employee= new Employee() ;
  }

 	addEmployee(employee){
 		console.log(employee);
 		this.employeeService.addEmployee(employee).subscribe((response)=>{
       console.log(response)
 			this.router.navigate(['/employees']);
 		})
 	}

}
