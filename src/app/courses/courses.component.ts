import { Component, OnInit } from '@angular/core';
import { Student } from '../student/student';
import { University } from '../university/university';
import { Courses } from './courses';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title:string="Courses"
  courses!:Courses[];
  NoCourses: string="No courses available";
  newButton:boolean=false;
  newCourse:any={}
  inEditFlag:boolean=false;
  currentUser:Student= JSON.parse(localStorage.getItem('currentStudent')|| '{}');
  currentUniv:University=JSON.parse(localStorage.getItem('univ')|| '{}');
  isAdmin = this.currentUser.role=='admin';

  constructor(private coursesService:CoursesService) { }

  ngOnInit(): void {
    console.log(this.isAdmin)
    this.getCourses();
  }

  getCourses():void{
      this.coursesService.getCourses().subscribe(courses => this.courses = courses);
    }
  
    delete(course:Courses): void {
      if(confirm("Are you sure to delete course "+course.name +"?")) {
        this.coursesService.deleteCourses(course.id).subscribe(response => {
          alert("Course "+course.name+"has been deleted");
          this.getCourses();
        });
      }
    }
  onEdit(course:Courses):void{
    course.edit=true;
    this.inEditFlag=true;
  }

  onSave(course:Courses):void{
    course.edit=false;
    this.coursesService.saveCourse(course).subscribe(c =>{ course=c;
      this.getCourses();
      if(this.newButton){
        this.newCourse={}
        this.newButton=false;
      }
    }
      )
  }
  onCancel(course:Courses):void{
    course.edit=false;
    this.inEditFlag=false;
    if (this.newButton)
      this.newCourse={}
    this.newButton=false;
    
  }

  addNew():void{
    this.newButton=true;
  }
    
}
