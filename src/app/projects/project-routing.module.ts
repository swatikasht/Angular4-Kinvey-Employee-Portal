import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const projectsRoutes : Routes = [
  { path: 'projects', component: ProjectListComponent },
  { path: 'addProject', component: AddProjectComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
]

@NgModule({
		
  imports: [
    RouterModule.forChild(
      projectsRoutes,
     // {enableTracing : true}
    ),
  ],
  exports: [
  	RouterModule
  ]
})
export class ProjectRoutingModule { }