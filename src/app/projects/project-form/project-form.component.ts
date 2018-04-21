import { Component,Input,Output, OnInit, OnChanges,EventEmitter } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
//import { startEndDateValidator,} from '../../validations/projectValidation/projectValidators';
import { Project } from '../project';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit, OnChanges {
	satisfiedValidation : boolean = true;
	projectForm : FormGroup;
	@Input() project : Project; 
	@Output() onSubmit = new EventEmitter();
	
	constructor(public fb: FormBuilder) {

	}

	ngOnInit() {
		//console.log("indide project form ngOnInit")
		//this.createForm(this.project);
		//console.log(this.onSubmit)
	}

	ngOnChanges(){
		this.createForm(this.project);	
	}

  	createForm(project){
		//this.projectForm = this.fb.group(project)
		this.projectForm = this.fb.group({
			projectName: [project.projectName,[Validators.required,],],
			startDate : [project.startDate,],
			endDate : [project.endDate,],
			location: [project.location,],
			empCount: [project.empCount,],
		})
		 //console.log(this.projectForm.value)
	}

	handleSubmit(){
		if(this.projectForm.value.startDate && this.projectForm.value.endDate){
			this.satisfiedValidation = this.varifyDate(this.projectForm.value.startDate,this.projectForm.value.endDate);
			console.log(this.satisfiedValidation);
			if(this.satisfiedValidation){
				this.onSubmit.emit(this.projectForm.value);
			}else{
				console.log("dates are incorrect")
			}
		}else{
			this.onSubmit.emit(this.projectForm.value);
		}
		
		
	}

	varifyDate(startDate,endDate){
		let startTime = new Date(startDate).getTime();
		let endTime = new Date(endDate).getTime();
		return endTime >= startTime? true : false
	}
}
