import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './services/http-client.service';



import { EmployeeModule } from './employees/employee.module';
import { ProjectModule } from './projects/project.module';


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    EmployeeModule,
    ProjectModule,
    AppRoutingModule,
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
