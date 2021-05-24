import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent implements OnInit {

  public href: string = "";

    constructor(private router: Router) {}

    ngOnInit() {
        this.href = this.router.url;
        console.log(this.router);
    }

}
