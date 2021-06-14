import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../../service/auth.service"
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  subscription : Subscription = new Subscription();
  name : string = "Employee";
  constructor(
    public router: Router,
    public AuthService :AuthService
  ) { }
  isLogin : boolean = false;
  isAdmin : boolean = false;
  ngOnInit(): void {
    this.load()
  }
  load(){
    let a : any = localStorage.getItem("user");
    let b = JSON.parse(a)
    this.name = b["lastName"]
    console.log('a',)
    let isL = localStorage.getItem('login');
    if(isL){
      this.isLogin = true;
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
    localStorage.removeItem('user')
    this.router.navigate(['/login']);
  }
  ngDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
