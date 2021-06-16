import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../service/project.service"
import {AuthService} from "../../../service/auth.service"
import {Subscription} from "rxjs";
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
})
export class ProjectComponent implements OnInit {
  subscription : Subscription = new Subscription();
  project : any = [{roles: "admin"}];
  public name : string = '';
  constructor(
    public AuthService :AuthService,
    public ProjectService :ProjectService
  ) { }

  ngOnInit(): void {
    this.load()
  }
  load(){
    this.subscription = this.ProjectService.getAllProject().subscribe(data => {
      this.project = data;
    })
  }
  deleteProject(id : any){
    if(confirm("Are you sure delete this item")){
      this.subscription = this.ProjectService.deleteProject(id).subscribe(data => {
        let index = this.findIndex(data._id)
        this.project.splice(index, 1)
      })
    }
  }
  findIndex(id : any){
    let result : number = -1;
    for (let index = 0; index < this.project.length; index++) {
      if(this.project[index]._id == id){
        result = index;
      }
    }
    return result;
  }
  datapush(data : any){
    console.log(data);
    this.project.push(data);
  }
  ngDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
