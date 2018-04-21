//https://jsfiddle.net/on4wy91w/   weather api Ajax call
//https://jsfiddle.net/on4wy91w/2/

import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { EmployeeService } from '../employee.service';
import * as Rx from 'rxjs';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 	employees:Employee[]=[];
 	jobTitle = ["Developer","QA","Lead","Manager","HR"];
 	selectedEmp = [];
	constructor(
		private employeeService : EmployeeService,
		private router : Router
	) {
		//console.log("inside empList's constructor")
	}

	ngOnInit() {
		//console.log("inside empList's ngOnInit")
		this.getEmpolyees();


		
		//this.testingObservable();
	}
	getEmpolyees(){
		this.employeeService.getEmployees().subscribe(employees => {
			console.log(employees);
			this.employees = employees;
		})
	}

	

	handleDelete(employee){
		
		this.employeeService.handleDelete(employee).subscribe((response)=>{
   			this.router.navigate(['/employees']);
   			console.log(response);
   		})
	}

	bulkDelete(selectedEmpArr){
		console.log(selectedEmpArr)
		selectedEmpArr.map(emp => {
			this.employeeService.handleDelete(emp).subscribe((response)=>{
   				this.getEmpolyees();
   				
   			})
   		})
			 
	}


	handleCheckBox(employee,selected){
		if(selected){
			this.selectedEmp.push(employee)
			console.log(this.selectedEmp)
		}else if(!selected){
			this.selectedEmp = this.selectedEmp.filter(emp => emp._id != employee._id)
		}
		console.log(this.selectedEmp)

	}

	testingObservable(){
		var source = Rx.Observable.create(observer => {
			observer.next(26);

			setTimeout(()=>{
				observer.next(27);
			},2000)
			
			setTimeout(()=>{
				observer.next(28);
			},4000)
				
		})
		var observer = {
			next : function(x) {
				console.log('Next: ' + x)
			},
			error : function (err) {
		        console.log('Error: ' + err);
		    },
		    complete : function () {
		        console.log('Completed');
		    }
		}

		//console.log(source);

		var subscription1 = source.subscribe(observer)

		setTimeout(()=>{
			console.log('unsubscribe');
			subscription1.unsubscribe();		
		},3000)
		//console.log(subscription1)

		//subscription1.dispose( console.log("disposed"))
	
		
		//var array = [1,2,3,4,5]; 
		//var source = Rx.Observable.from(array).find(function(x,i){return i===3;}); 
		//var subscription = source.subscribe(function(x){console.log("next: ", x)})	

	}
}
