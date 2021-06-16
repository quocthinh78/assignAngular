import { Component, OnInit ,Output ,EventEmitter} from '@angular/core';
import {ProjectService} from "../../../service/project.service"
import {AuthService} from "../../../service/auth.service"
import {Subscription} from "rxjs";
import {Router} from '@angular/router';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  @Output() datapush : EventEmitter<string> = new EventEmitter<string>();
  subscription : Subscription = new Subscription();
  date : any = new Date().toISOString().substring(0, 10);
  name : string = '';
  user : any = [];
  data : any = {
    name : ''
  };
  constructor(
    public router: Router,
    public AuthService :AuthService,
    public ProjectService :ProjectService
  ) { }

  ngOnInit(): void {
    this.load();
  }
  load(){
    this.subscription = this.AuthService.getUser().subscribe(data => {
      this.data.id  = data.user[0]._id;
      this.user = data.user;
    })
  }
  createProject(){
    this.subscription = this.ProjectService.createProject(this.data).subscribe(data => {
      this.datapush.emit(data)
    })
    
  }
  getValueProject(){
    
  }
  ngDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
