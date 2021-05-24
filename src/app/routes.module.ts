import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { AdmincontrolComponent } from './components/admincontrol/admincontrol.component';
import { LeaderComponent } from './components/admincontrol/leader/leader.component';
import { EmployeeComponent } from './components/admincontrol/employee/employee.component';
import { ProjectComponent } from './components/admincontrol/project/project.component';





export const router : Routes = [
    {
        path: 'trang-chu',
        component: HomeComponent
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
                path : 'employee/task',
                component : EmployeeComponent
            },
            {
                path: "leader/project",
                component : ProjectComponent
            }
        ]
    }
]