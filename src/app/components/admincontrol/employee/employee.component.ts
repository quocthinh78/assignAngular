import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../../service/task.service"
import {Subscription} from "rxjs";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent implements OnInit {
  subscription : Subscription = new Subscription();

  constructor(
   public TaskService :TaskService
  ) { }
    tasks : any = []
  ngOnInit(): void {
    this.load();
  }
  load(){
    this.subscription = this.TaskService.getTask().subscribe(data => {
      this.tasks = data
    })
  }
  deleteTask(id : any) {
    console.log(id)
    if(confirm('Are you sure you want to delete this task')){
      this.subscription = this.TaskService.deleteTask(id).subscribe(data => {
        let index = this.findIndex(data._id);
        this.tasks.splice(index, 1);
      })
    }
  }
  findIndex(id : any){
    let result : number = -1;
    for (let index = 0; index < this.tasks.length; index++) {
      if(this.tasks[index]._id == id){
        result = index;
      }
    }
    return result;
  }
  ngDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
