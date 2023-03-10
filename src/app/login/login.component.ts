
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student/student';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  student: any = {};
  bufferStudent!: Student;
  fieldTextType: boolean = false;
  flag: boolean = false;
  userName!: string;
  password!: string;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    console.log('here')
    this.loggedIn();
  }

  setData(username: string, password: string): void {
    this.userName = username;
    this.password = password;
    this.student = {};
  }
  loginFunc() {
    console.log(this.student)
    this.setData(this.student.userName, this.student.password)
    console.log(this.password)
    this.loginService.login(this.userName, this.password).subscribe(student2 =>{ this.bufferStudent = student2
    this.move();
    });
    console.log(this.bufferStudent)


  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  move(): void {
    if (this.bufferStudent != undefined) {
      this.flag = false;
      console.log('here')
      localStorage.setItem("currentStudent", JSON.stringify(this.bufferStudent));
      this.loggedIn()
    }
    else {
      this.flag = true;
      console.log('out');
    }
  }
  loggedIn(): void {
    console.log('before if')
    if (!(localStorage.getItem('currentStudent') === null))
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/home']);
  });
  }

}
