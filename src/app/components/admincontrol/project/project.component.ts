import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
})
export class ProjectComponent implements OnInit {
  public name : string = '';
  constructor() { }

  ngOnInit(): void {
  }
  addNewDate(value : string){
    this.name = value;
  }
}
