import { Component } from "@angular/core";
import { LoginModel } from "app/login/login.model";
import { NgForm, NgModel } from "@angular/forms";

@Component({
    selector: "login",
    templateUrl: "login.component.html"
})
export class LoginComponent 
{ 
    login: string;
    password: string;
    wrong: boolean;
    formChanged: boolean;

    constructor (private loginModel : LoginModel) {

    }

    submit(form:NgForm) {
        console.log(this.login);
        console.log(this.password);
        console.log(form.control.valid);
        this.formChanged = true;
        if (form.valid)
        {
            this.formChanged = true;
            let result : boolean = this.loginModel.Login(this.login, this.password);
            if (!result) {
                this.wrong = true;
            }
            this.formChanged = false;
        }
    }

    isLogin():boolean{
        return this.loginModel.username ? true : false;
    }

    getName():string{
        return this.loginModel.username;
    }

    logOut(){
        this.loginModel.logOut();
    }
};