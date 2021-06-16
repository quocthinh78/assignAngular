import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public API = 'http://localhost:3000/tasks'
  constructor(
    public http : HttpClient
  ) { }
    createTask(data : any) : Observable<any> {
      return this.http.post(this.API , data)
    }
    getAuthor() : Observable<any> {
      return this.http.get(this.API + "/author")
    }
    getProject() : Observable<any> {
      return this.http.get(this.API + "/project")
    }
    getTask()  : Observable<any> {
      return this.http.get(this.API)
    }
    deleteTask(id : any) : Observable<any> {
      return this.http.delete(this.API + `/${id}`)
    }
    getFirstData(id: any) : Observable<any> {
      return this.http.get(this.API + `/${id}`)
    }
    updateTask(id : any,data : any ) : Observable<any> {
      return this.http.put(this.API + `/${id}` , data)
    }
}

