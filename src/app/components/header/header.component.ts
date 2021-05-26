import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router
  ) { }
  isLogin : boolean = false;
  isAdmin : boolean = false;
  ngOnInit(): void {
    this.load()
  }
  load(){
    let isL = localStorage.getItem('login');
    if(isL){
      this.isLogin = true;
      console.log(isL);
      if(isL == 'admin'){
        this.isAdmin = true;
      }
      else {
        this.isAdmin = false;
      }
    }
    else {
      this.isLogin = false;
      this.router.navigate(['/login']);
    }
  }
  auth(){
    localStorage.removeItem('login');
    this.router.navigate(['/login']);
  }
}
