import { Component, OnInit } from '@angular/core';
import { University } from './university';
import { UnivServiceService } from './univ-service.service';
import { RouterLinkWithHref } from '@angular/router';
import { Student } from '../student/student';
import { Location } from './location';
import { Courses } from '../courses/courses';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})


export class UniversityComponent implements OnInit {
  newButton:boolean=false;
  inEditFlag:boolean=false;
  newUniv:University = new University('',new Location('', ' ','',''),false);
  university!:University[];
  noUnivs:string="No universities available";
  loadingMessage:String="Loading data";
  currentUser:Student= JSON.parse(localStorage.getItem('currentStudent')|| '{}');
  isAdmin = this.currentUser.role=='admin';

  constructor(private univService:UnivServiceService) { }
  title:string= "Universities";
  ngOnInit(): void {
    this.getUnivs();
  }

  getUnivs():void{
    
    this.univService.getUnivs().subscribe(university => this.university = university);
  }

  view(row:University):void{
    localStorage.setItem("univ",JSON.stringify(row))
  }

  delete(univ:University): void {
    if(confirm("Are you sure to delete book "+univ.name+"?")) {
      this.univService.deleteUniv(univ.id).subscribe(response => {
        alert(response.message);
        this.getUnivs();
      });
    }
  }

  editUniv(univ:University):void{
    univ.edit=true;
  }
  saveUniv(univ:University):void{
    console.log(this.newUniv)
    this.univService.saveUniv(univ).subscribe(univx => univ = univx);
    univ.edit =false;
  }

  addNew(){
    this.newButton=true;
  }
  saveNew() {
    if (confirm("Are you sure to add this course " + this.newUniv.name + " to system ?")) {
        this.univService.saveUniv(this.newUniv).subscribe(univ => {
          this.newUniv = univ
          this.inEditFlag = false;
          this.getUnivs();
          this.newUniv = new University('',new Location('', ' ','',''),false);
          this.newButton = false;
        })
      }
    }
    onCancel(univ:University){
      if(this.newButton)
        this.newUniv=new University('',new Location('', ' ','',''),false);
      this.newButton=false;
      univ.edit=false
    }
}
