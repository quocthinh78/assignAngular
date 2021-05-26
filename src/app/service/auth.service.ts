import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public API = 'http://localhost:3000/'
  constructor(
    public http : HttpClient
  ) { }
  login(user : any) : Observable<any>{
    return this.http.post(this.API + 'users/login' , user);
  }
  

}
