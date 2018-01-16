import { Component } from '@angular/core';
import { LoginModel } from 'app/login/login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  constructor(private loginData : LoginModel) {
  }
}
