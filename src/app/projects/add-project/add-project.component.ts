import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  	project:Project;
	constructor(private projectService:ProjectService, private router:Router) {
		//console.log("inside addEmp constructor");
	}

	ngOnInit() {
		this.project= new Project({}) ; //creating empty Project's Instance as passing parmeter to form component 
		//console.log(this.project);
   	}

   	addProject(project){
   		console.log(project);
   		this.projectService.addProject(project).subscribe((response)=>{
         	console.log(response)
   			this.router.navigate(['/projects']);
   		})
   	}

}
