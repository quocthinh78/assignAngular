import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  date : any = new Date().toISOString().substring(0, 10);
  team : number = 0;
  name : string = '';
  constructor() { }

  ngOnInit(): void {
    console.log(this.date)
  }
  getValueProject(){
    console.log(this.team , this.date , this.name)
  }
}
