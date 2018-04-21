import { Component,Input,Output,EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Employee } from '../employee';
import { FormBuilder,FormGroup,FormControl,AbstractControl,Validators,} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { isNumberValidator,phoneNoValidator,emailFormatValidator} from '../employee-validation/shared-validators';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit, OnChanges {
	empForm: FormGroup;
	@Input() employee:Employee;
	@Output() onSubmit = new EventEmitter();
	projects = [];
	jobTitle = ["Developer","QA","Lead","Manager","HR"];
	languages = ["English","Hindi","Chinese","French","Spanish","Italian","German","Dutch","Russian","Portuguese"]; 

 	constructor(
		public fb: FormBuilder,
		private router: Router,
		private employeeService : EmployeeService,
	) {
		
		
	}
		
	ngOnInit() {
		this.getProjects();
	}

	getProjects(){
		this.employeeService.getProjects().subscribe(projects => {
			this.projects = projects;
		});
	}

	ngOnChanges(changeObj){
		this.generateForm(this.employee);	
	}

	generateForm(employee){
		//this.empForm = this.fb.group(employee)
		this.empForm = this.fb.group({
			firstName : [employee.firstName,[Validators.required,Validators.minLength(2)],],
			lastName : [employee.lastName,],
			email : [employee.email,[Validators.required,emailFormatValidator],],
			title: [employee.title,[Validators.required],],
			language: [employee.language,],
			projectName: [employee.projectName,],
			dob : [employee.dob,],
			phone: [employee.phone,[isNumberValidator,phoneNoValidator],],
			address: [employee.address,],
			salary: [employee.salary,],
			gender: [employee.gender,],
			family: [employee.family,],
			file: [employee.file,],
		})
		// console.log(this.empForm.value)
	}


}
