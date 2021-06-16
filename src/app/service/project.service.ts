import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public API = 'http://localhost:3000/project'
  constructor(
    public http : HttpClient
  ) { }
 getAllProject() : Observable<any>{
   return this.http.get(this.API);
 }
  createProject(data :any) : Observable<any>{
    return this.http.post(this.API , data)
  }
  deleteProject(id : any) : Observable<any>{
    return this.http.delete(this.API + `/${id}`)
  }

  
}
