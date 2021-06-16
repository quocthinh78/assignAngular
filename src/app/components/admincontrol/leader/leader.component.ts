import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../../service/dashboard.service"
import {Subscription} from "rxjs";
@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
})
export class LeaderComponent implements OnInit {

  subscription : Subscription = new Subscription();

  constructor(
    public DashboardService :DashboardService,
   
  ) {
  }
  users : any = [];
  project : any =[];
  task : any = [];
  userCount : number = 0;
  taskCount : number = 0;
  projectCount : number = 0;
  totals : number = 0;
  ngOnInit(): void {
    this.load();
  }
  load(){
    this.subscription = this.DashboardService.getUser().subscribe(data => {
      this.users = data
      this.userCount = data.length;
    })
    this.subscription = this.DashboardService.getProject().subscribe(data => {
      this.project = data
      this.projectCount = data.length;
      let total = 0;
      for (let i = 0; i < this.projectCount; i++){
        total += this.project[i].price;
      }
      this.totals = total;
    })
    this.subscription = this.DashboardService.getTask().subscribe(data => {
      this.task = data;
      this.taskCount = data.length
    })
  }
  ngDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
