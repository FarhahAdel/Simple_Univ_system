import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentStudent = JSON.parse(localStorage.getItem('currentStudent') || '{}');
  constructor() { }
  flag:boolean=false;
  ngOnInit(): void {
    this.loggedIn();
  }

  loggedIn():void{
    if (!(localStorage.getItem('currentStudent')===null))
      this.flag=true;
  }

}
