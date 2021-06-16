import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public API = 'http://localhost:3000/tasks/dashboard'
  constructor(
    public http : HttpClient
  ) { }
  getUser() : Observable<any>{
    return this.http.get(this.API + '/users');
  }
  getProject() : Observable<any>{
    return this.http.get(this.API + '/project')
  }
  getTask() : Observable<any>{
    return this.http.get('http://localhost:3000/tasks')
  }
  
}
