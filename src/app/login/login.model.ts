import { Http, Request, RequestMethod } from "@angular/http";
import { Injectable } from "@angular/core";
import { sendRequest } from "selenium-webdriver/http";
import "rxjs/add/operator/map";

const PROTOCOL = "http";
const PORT = 50087;

@Injectable()
export class LoginModel {
    auth_token: string;
    username: string;
    baseUrl: string;

    constructor(private http: Http) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    public Login(name:string, password:string) : boolean {
        this.sendRequest(RequestMethod.Post, 'Token', name, password)
        return this.username ? true : false;
    }

    private sendRequest(verb: RequestMethod,
        url: string, name:string, password:string) : void {
        let request = new Request({
            method: verb,
            url: this.baseUrl + url, body: "userName=" + encodeURIComponent(name) +
            "&password=" + encodeURIComponent(password) +
            "&grant_type=password"
        });
        let b : any; 
        var a = this.http.request(request).subscribe(resp => {
            // Here, resp is of type HttpResponse<MyJsonData>.
            // You can inspect its headers:
            console.log(resp.headers.get('X-Custom-Header'));
            // And access the body directly, which is typed as MyJsonData as requested.
            this.auth_token = resp.json().access_token;
            this.username = name;
          });
    }

    public getUserName() {
        return this.username;
    }

    public logOut() {
        this.username = null;
    }
}