import { Component } from "@angular/core";
import { LoginModel } from "app/login/login.model";
import { Http, Request, RequestMethod } from "@angular/http";
import { ResponseContentType } from "@angular/http";
import { MeetingTablePosition } from "app/meetingTablePosition.model";
import { Headers } from "@angular/http";

@Component({
    selector: "myTable",
    templateUrl: "myMeetings.component.html"
}) export class myMeetingComponent {
    TableData:any;
    positions:Array<MeetingTablePosition>;

    constructor(private loginData : LoginModel, private http:Http) {

    }

    getData() {
            let head: Headers = new Headers();
            head.append('Authorization', 'Bearer ' + this.loginData.auth_token);
            let req = new Request({
                method: RequestMethod.Get,
                url: 'http://localhost:50087/api/MeetingsGeneralApi',
                responseType: ResponseContentType.Json,
                headers: head                
            })
            this.http.request(req).subscribe(x=>{
                console.log(x.json());
                this.positions = new Array<MeetingTablePosition>();
                x.json().forEach(elem => {
                    this.positions.push(new MeetingTablePosition(elem));
                });
            });
        //}
    }

    checkLogin() : boolean {
        return this.loginData.username ? true : false;
    }
}