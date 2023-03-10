import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student/student';
import { EnrollService } from './enroll.service';
import { Enrollment } from './enrollment';

@Component({
  selector: 'app-enrollements',
  templateUrl: './enrollements.component.html',
  styleUrls: ['./enrollements.component.css']
})
export class EnrollementsComponent implements OnInit {
  title="Enrolled Students in ";
  enrollment!:Enrollment[];
  NoStudents="No Students enrolled in this course";
  currentUser:Student= JSON.parse(localStorage.getItem('currentStudent')|| '{}');
  isAdmin = this.currentUser.role=='admin';
  currentUnivCourse = JSON.parse(localStorage.getItem('course')|| '{}');

  constructor(private router:Router, private enrolledService:EnrollService) { }

  ngOnInit(): void {
    this.getALl()
  }

  getALl():void{
    this.enrolledService.getAll(this.currentUnivCourse.course_id).subscribe(enrollment => this.enrollment = enrollment);
  }
  loggedIn(){
    if(!this.isAdmin)
      this.router.navigateByUrl('/home');
  }
  removeStudent(enrolled:Enrollment){
    if(confirm("Are you sure you want to remove "+enrolled.student_name+" from course " +enrolled.course_name+"?")) {

      this.enrolledService.deleteUniv(enrolled.id).subscribe(response => {
        alert(response.message);
        this.getALl();
      });
    }
  }

}
