import { Component, OnInit,OnChanges } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { Router } from '@angular/router';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit,OnChanges{
	projects:Project[] =[];
  days = ["15","30", "60","90"];
    
  constructor(
		private projectService : ProjectService,
		private router : Router
		) { }

	ngOnInit() {
		this.getProjects();
  }

  ngOnChanges(){
    
  }

	getProjects(){
		this.projectService.getProjects().subscribe(response => {
			//console.log(response);
			this.projects = response;
		});
	}

	handleDelete(project){
		this.projectService.getProjectEmployees(project.projectName).subscribe((response)=>{
      if(!response || response.length==0){
        this.deleteProject(project)
      } 
    })
  }

  deleteProject(project){
    this.projectService.handleDelete(project).subscribe(response=>{
      this.router.navigate(['/projects']);
    })
  }
  
 
}

