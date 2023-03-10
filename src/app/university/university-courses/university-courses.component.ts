import { Component, OnInit } from '@angular/core';
import { UnivCoursesService } from './univ-courses.service';
import { UnivCourses } from './univ-courses';
import { University } from '../university';
import { Student } from 'src/app/student/student';
import { CourseStudent } from 'src/app/course-student/course-student';
import { Courses } from 'src/app/courses/courses';
import { CourseStudentService } from 'src/app/course-student/course-student.service';
import { Route, Router } from '@angular/router';
import { CoursesService } from 'src/app/courses/courses.service';
import { UniVCoursesRel } from './uni-courses-rel';
@Component({
  selector: 'app-university-courses',
  templateUrl: './university-courses.component.html',
  styleUrls: ['./university-courses.component.css']
})
export class UniversityCoursesComponent implements OnInit {
  noData: string = "No courses";
  course_student: any = {};
  editFlag: boolean = false;
  univCourses!: UnivCourses[];
  newButtonFlag: Boolean = false;
  inEditFlag: boolean = false;
  newCourse: any = {};
  allCourses!: Courses[];
  currentUser: Student = JSON.parse(localStorage.getItem('currentStudent') || '{}');
  isAdmin = this.currentUser.role == 'admin';
  title: string = "courses";
  univ: University = JSON.parse(localStorage.getItem("univ") || '{}');
  emptyFlag: boolean = false;

  constructor(private univCoursesService: UnivCoursesService, private csService: CourseStudentService,
    private courseService: CoursesService, private router: Router) { }

  ngOnInit(): void {
    this.getUnivs();
  }

  viewStudents(univCourses: UnivCourses) {
    localStorage.setItem('course', JSON.stringify(univCourses));
    this.router.navigateByUrl('/enrolled')
  }
  getUnivs(): void {

    this.univCoursesService.getUnivById(this.currentUser.id,this.univ.id).subscribe(univCourses => {
      this.univCourses = univCourses
      this.emptyFlag = true;
      this.univCoursesService.getUnivCourses(this.univ.id).subscribe(c => {
        this.allCourses = c
        console.log(this.allCourses)
      });
    });

  }

  addNew() {
    this.newButtonFlag = true;
  }

  cancel() {
    this.newButtonFlag = false;
  }

  enroll(course: UnivCourses): void {
    if (localStorage.getItem('currentStudent') != null) {
      if (confirm("Are you sure you want to enroll in " + course.course_name + "?")) {
        console.log(course)
        this.course_student.course_id = course.course_id;
        this.course_student.student_id = this.currentUser.id;
        this.course_student.univ_id = this.univ.id;
        console.log(this.course_student)
        this.csService.saveCourse(this.course_student).subscribe(course_student => this.course_student = course_student);
      }
    }
    else {
      alert("Please Login or signup to enroll")
    }
  }

  deleteCourse(course: UnivCourses) {
    // this.univCourses = this.univCourses.filter(item => item != course);

    if (confirm("Are you sure to remove course " + course.course_name + " from " + this.univ.name + "?")) {
      console.log(course.id)
      this.univCoursesService.deleteCourse(course.id).subscribe(response => {
        alert("Course has been deleted");
        this.getUnivs()
      })

    }
  }
  saveNewCourse() {
    if (confirm("Are you sure to add this course " + this.newCourse.name + " to " + this.univ.name + "?")) {
      var buffer: UniVCoursesRel = new UniVCoursesRel(this.univ.id, this.newCourse.id);
      this.courseService.saveCourse(this.newCourse).subscribe(course => {
        // this.newCourse = {}
        buffer.course_id = this.newCourse.id;
        this.univCoursesService.updateCourse(buffer).subscribe(univ => {
          this.univ = univ
          this.inEditFlag = false;
          localStorage.setItem('univ', JSON.stringify(this.univ));
          this.newCourse = {}
          this.newButtonFlag = false;
          this.getUnivs();
        })
      });
    }

  }
  addCourse(course: Courses) {
    if (confirm("Are you sure to add this course " + course.name + " to " + this.univ.name + "?")) {
      var buffer: UniVCoursesRel = new UniVCoursesRel(this.univ.id, course.id);
      this.univCoursesService.updateCourse(buffer).subscribe(univ => {
        this.univ = univ;
        localStorage.setItem('univ', JSON.stringify(this.univ));
        this.newButtonFlag = false;
        this.getUnivs();
        this.ngOnInit()
      })
    }

  }
}
