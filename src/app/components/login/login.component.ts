import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import {AuthService} from "../../service/auth.service"
import {Subscription} from "rxjs";
import {Router} from '@angular/router';

import * as moment from 'moment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  subscription : Subscription = new Subscription();
  now = moment('24/12/2019 09:15:00', "DD MM YYYY hh:mm:ss" , true).format('LLLL');

  constructor(
    public router: Router,
    public AuthService :AuthService
  ) { }
  account  : any = {};
  public LoginForm : any;
  ngOnInit(): void {
    this.validForm();
    console.log(this.now)
  }
  validForm(){
    this.LoginForm  = new FormGroup({
      name : new FormControl(null , [Validators.required, Validators.minLength(6)]),
      password : new FormControl(null ,[Validators.required, Validators.minLength(6)]),
      email : new FormControl(null ,[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    })
  }

  login(){
    this.subscription = this.AuthService.login(this.account).subscribe(data=> {
      if(data.roles == 'admin'){
        localStorage.setItem('login' , 'admin')
        localStorage.setItem('user' , JSON.stringify(data))
        this.router.navigate(['/admin/leader']);
      }
      else if(data.roles == 'employee'){
        localStorage.setItem('login' , 'employee')
        localStorage.setItem('user' , JSON.stringify(data))
        this.router.navigate(['/admin/task']);
      }
    })
  }
  ngDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
