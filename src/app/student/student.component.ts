import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { Student } from './student';
import { StudentService } from './student.service';
import { Enrollment } from '../enrollements/enrollment';
import { EnrollService } from '../enrollements/enroll.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  title:string = "Profile";
  flag:boolean=!(localStorage.getItem('currentStudent')===null);
  student:Student= JSON.parse(localStorage.getItem('currentStudent')|| '{}')
  constructor(private router:Router, private studentService:StudentService, private enrolledService:EnrollService) { }
  editFlag:boolean=false;
  courses!:Enrollment[];
  isAdmin:boolean = this.student.role=="admin"
  ngOnInit(): void {
    this.loggedIn();
    this.getStudentCourses();
  }

  loggedIn():void{
    if(this.flag==false)
        this.router.navigateByUrl('/home');
  }

  onEdit():void{
    this.editFlag=true;
  }

  onSave():void{
    this.editFlag=false;
    this.studentService.save(this.student).subscribe(student =>{ this.student = student;
      
      localStorage.setItem('currentStudent',JSON.stringify(this.student));
    });

  }

  onCancel(){
    this.editFlag=false;
    this.student=JSON.parse(localStorage.getItem('currentStudent')|| '{}')
  }

  getStudentCourses():void{
    this.studentService.getCourses(this.student.id).subscribe(courses => this.courses = courses)
  }

  
  unenroll(enrolled:Enrollment){
    if(confirm("Are you sure you want to Unroll from course " +enrolled.course_name+"?")) {

      this.enrolledService.deleteUniv(enrolled.id).subscribe(response => {
        alert(response.message);
        this.getStudentCourses();
      });
    }
  }
}
