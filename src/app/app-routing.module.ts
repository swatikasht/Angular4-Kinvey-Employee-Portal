import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';


const appRoutes : Routes = [
  {path : "employees", component : EmployeeListComponent},
	{path : "projects", component : ProjectListComponent},
	{path: '',   redirectTo: '/employees', pathMatch: 'full' },
]


@NgModule({
  imports: [
  	RouterModule.forRoot(
  		appRoutes,
  	)
  ],
  exports: [
  	RouterModule,
  ],
  
})
export class AppRoutingModule { }