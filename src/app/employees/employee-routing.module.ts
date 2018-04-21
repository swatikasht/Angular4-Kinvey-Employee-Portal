import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const employeesRoutes : Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'addemp', component: AddNewEmployeeComponent },
  { path: 'employee/:id', component: EmployeeDetailComponent },
]

@NgModule({
		
  imports: [
    RouterModule.forChild(
      employeesRoutes,
     // {enableTracing : true}
    ),
  ],
  exports: [
  	RouterModule
  ]
})
export class EmployeeRoutingModule { }