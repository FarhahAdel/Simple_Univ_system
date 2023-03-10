import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { UniversityComponent } from './university/university.component';
import { CoursesComponent } from './courses/courses.component';
import { UniversityCoursesComponent } from './university/university-courses/university-courses.component';
import { StudentComponent } from './student/student.component';
import { EnrollementsComponent } from './enrollements/enrollements.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  { path:'university',
    component:UniversityComponent,
    children: [
      // {path:'', component:UniversityComponent},
      {path:'courses', component:UniversityCoursesComponent}
    ]
  
  },
  {path:'enrolled',component:EnrollementsComponent},
  {path:'courses', component:CoursesComponent},
  {path:'student', component:StudentComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
