import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',

})
export class RegisterComponent implements OnInit {

  constructor() { }

  public registerForm : any;
  ngOnInit(): void {
    this.validForm();
  }
  validForm(){
    this.registerForm  = new FormGroup({
      name : new FormControl(null , [Validators.required, Validators.minLength(6)]),
      password : new FormControl(null ,[Validators.required, Validators.minLength(6)]),
      email : new FormControl(null ,[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    })
  }
}
