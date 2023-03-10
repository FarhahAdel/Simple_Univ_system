import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' ]
})
export class AppComponent {
  title = 'Trainee System';
  flag:boolean=!(localStorage.getItem('currentStudent')==null);

  onSignout(){
    localStorage.removeItem('currentStudent');
    
  }
}

