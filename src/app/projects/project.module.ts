import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { ProjectListComponent } from './project-list/project-list.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectService } from './project.service';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectEndDatePipe } from '../pipes/project-end-date.pipe';

@NgModule({
  declarations: [
    ProjectListComponent,
    AddProjectComponent,
    ProjectFormComponent,
    AddProjectComponent,
    ProjectDetailComponent,
    ProjectEndDatePipe,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ProjectRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [FormBuilder,ProjectService],
  bootstrap: []
})
export class ProjectModule { }
