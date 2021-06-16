import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../../service/task.service"
import {Subscription} from "rxjs";
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent implements OnInit {
  subscription : Subscription = new Subscription();

  constructor(
    public TaskService :TaskService,
    private activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    
   }
  author : any;
  project: any;
  name : string = 'thinh'
  data : any = {
     authorId : '',
     projectId : "",
     taskName : "",
     taskDesCription : ''
   };
  ngOnInit(): void {
    this.load();
    
  }
  load(){
    let id = this.activatedRoute.snapshot.params['id'];
    if(id){
      this.subscription = this.TaskService.getFirstData(id).subscribe(data => {
        this.data.taskName = data[0].name;
        this.data.taskDesCription = data[0].description;
      })
    }
    this.subscription = this.TaskService.getAuthor().subscribe(data =>{
      this.author = data
      this.data.authorId = data[0]._id
    })
    this.subscription = this.TaskService.getProject().subscribe(data =>{
      this.project = data
      this.data.projectId = data[0]._id
    })
    
  }
  createTask(){
    let id = this.activatedRoute.snapshot.params['id'];
    if(id){
      this.subscription = this.TaskService.updateTask(id,this.data).subscribe(data =>{})
    }else {
      this.subscription = this.TaskService.createTask(this.data).subscribe(data =>{})
    }
    this.router.navigate(['/admin/task'])

  }
  ngDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
