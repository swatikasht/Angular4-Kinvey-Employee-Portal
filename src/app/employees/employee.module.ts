import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { EmployeeService } from './employee.service';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { SearchPipe } from '../pipes/search.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
//import { DobPipe } from '../pipes/dob.pipe';
import { SortByPipe } from '../pipes/sort-by.pipe';

@NgModule({
  declarations: [
    EmployeeListComponent,
    AddNewEmployeeComponent,
    EmployeeDetailComponent,
    EmployeeFormComponent,
    SearchPipe,
    FilterPipe,
    SortByPipe
    //DobPipe
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    EmployeeRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatCheckboxModule
  ],
  providers: [FormBuilder,EmployeeService],
  bootstrap: []
})
export class EmployeeModule { }
