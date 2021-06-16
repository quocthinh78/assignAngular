import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router'
import { Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import {TaskService} from "../../service/task.service"
import {Subscription} from "rxjs";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent implements OnInit {

  public href: any = "";

  subscription : Subscription = new Subscription();
    constructor(
      private router: Router,
      public TaskService :TaskService
      ) {

    
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
          // Show loading indicator
          // console.log('before' , event)
        }
        if (event instanceof NavigationEnd) {
          console.log(event)
          this.subscription = this.TaskService.getTask().subscribe(data => {
            let events = event.urlAfterRedirects;
            let arr = events.split('/');
            let arrHref = arr.splice(1);
            if(arrHref.length > 3){
              var params = arrHref.pop();
            }
            for (let i = 0; i < data.length; i++) {
              if(data[i]._id == params){
                arrHref.push(data[i].name)
              }
            }
            this.href = arrHref;
          })
          

        }
      });
   
    

}
    ngOnInit() {
        this.NameChange();
    }
    NameChange(){
      // let arr = this.href.split('/');
      // console.log(this.href)
    }
}
