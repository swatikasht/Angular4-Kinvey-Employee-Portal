import { Injectable } from '@angular/core';
import { Project } from './project';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'
import { HttpClientService } from '../services/http-client.service';

@Injectable()
export class ProjectService {
	projectsArray : Project[];
  	constructor(private httpService:HttpClientService) { }

  getProjects() : Observable<any> {
    return this.httpService.get('projects').map(response=>{
      this.projectsArray = response.json() ;
      return response.json() ;
    })
  }

 	addProject(project):  Observable<any> {
		return this.httpService.post('projects',project).map(response=>{
			return response.json() ;
      		
 		})
 	}

  getProjectDetail(id){
    return this.getProjects().map(response => {
      return response.filter(proj=> {
        if(proj._id ===id){
          return proj
        }
      })
    });
  }

 	handleDelete(project){
 		return this.httpService.delete('projects/'+ project._id,project).map(response=>{
			return response.json() ;
   		})
 	}

  updateProject(project){
    return this.httpService.put('projects/'+ project._id,project).map(response => response.json())
  }

  getProjectEmployees(projectName){
    let query = `?query={"projectName":"${projectName}"}`
    let url = 'employees'+query;
      return this.httpService.get(url).map(response=>{
        return response.json() ;
    })
  }


}





