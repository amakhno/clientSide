import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginModel } from 'app/login/login.model';
import { LoginComponent } from 'app/login/login.component';
import { NgModel } from '@angular/forms';
import { myMeetingComponent } from 'app/myMeetings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    myMeetingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [LoginModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
