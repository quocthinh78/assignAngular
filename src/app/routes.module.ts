import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { AdmincontrolComponent } from './components/admincontrol/admincontrol.component';
import { LeaderComponent } from './components/admincontrol/leader/leader.component';
import { EmployeeComponent } from './components/admincontrol/employee/employee.component';
import { ProjectComponent } from './components/admincontrol/project/project.component';
import { AddTaskComponent } from './components/admincontrol/add-task/add-task.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';




export const router : Routes = [
    {
        path: 'trang-chu',
        component: HomeComponent
    },
    { 
        path: '',
        redirectTo: 'trang-chu',
        pathMatch: 'full' 
    },
    {
        path : 'admin',
        component: AdmincontrolComponent,
        children : [
            {
                path : 'leader',
                component : LeaderComponent
            },
            {
                path : 'task',
                component : EmployeeComponent
            },
            {
                path : 'task/add',
                component : AddTaskComponent
            },
            {
                path: "leader/project",
                component : ProjectComponent
            },
            
        ]
    },
    {
        path : 'register',
        component : RegisterComponent
    },
    {
        path: "login",
        component : LoginComponent
    }
]