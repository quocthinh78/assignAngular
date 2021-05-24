import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { AdmincontrolComponent } from './components/admincontrol/admincontrol.component';
import { LeaderComponent } from './components/admincontrol/leader/leader.component';
import { EmployeeComponent } from './components/admincontrol/employee/employee.component';
import { ProjectComponent } from './components/admincontrol/project/project.component';
import { AddTaskComponent } from './components/admincontrol/add-task/add-task.component';




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
            }
        ]
    }
]