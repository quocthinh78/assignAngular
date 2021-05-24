import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import {router} from './routes.module'
import {HomeComponent} from './components/home/home.component';
import { AdmincontrolComponent } from './components/admincontrol/admincontrol.component';
import { LeaderComponent } from './components/admincontrol/leader/leader.component';
import { EmployeeComponent } from './components/admincontrol/employee/employee.component';
import { ProjectComponent } from './components/admincontrol/project/project.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { ModalComponent } from './components/admincontrol/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbComponent,
    HomeComponent,
    AdmincontrolComponent,
    LeaderComponent,
    EmployeeComponent,
    ProjectComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(router),
    NgbModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
