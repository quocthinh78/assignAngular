import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router'
import { Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent implements OnInit {

  public href: any = "";

  constructor(private router: Router) {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        // console.log('before' , event)
    }

        if (event instanceof NavigationEnd) {
          console.log(event)
          let events = event.urlAfterRedirects;
          let arr = events.split('/');
          let arrHref = arr.splice(1);
          this.href = arrHref;

        }
    });

}
    ngOnInit() {
        this.spreadHref();
    }
    spreadHref(){
      // let arr = this.href.split('/');
      // console.log(this.href)
    }
}
