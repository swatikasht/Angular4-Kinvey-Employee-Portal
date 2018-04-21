import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
	project: Project;
	edit = false;
  	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private projectService: ProjectService
	) { //console.log("inside details constructor");
	}

  	ngOnInit() {
  		this.project = new Project();
  		this.route.params.subscribe((params: Params)=> {			//Id as params
  			this.projectService.getProjectDetail(params['id']).subscribe(response => {
  				//console.log(response[0]);
  				this.project = response[0];
   			})
   		})
  	}

  	updateProject(project){
  		//console.log(project)
  		let updatedproject = Object.assign(this.project,project)
  		//console.log(updatedproject);
  		this.projectService.updateProject(updatedproject).subscribe(response => {
  			this.project = response;
  			this.router.navigate(['/projects']);
  		});
  		
   	}

  	handleEdit(){
		this.edit = true;
	}

}
