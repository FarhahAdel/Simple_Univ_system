import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student/student';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  student: any = {};
  fieldTextType: boolean = false;
  constructor(private signUpService: SignUpService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.loggedIn();
  }

  save(): void {
    console.log(this.student)
    this.signUpService.save(this.student).subscribe(student =>{ this.student = student
      localStorage.setItem('currentStudent',JSON.stringify(this.student));
    });
    
    this.router.navigate(["/student"]);
  }

  loggedIn(): void{
    if (!(localStorage.getItem('currentStudent')===null))
        this.router.navigateByUrl('/student');
  }

  
toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
}
}
