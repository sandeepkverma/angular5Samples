import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { SessionService } from '../session.service';
import { Constants } from '../app.constants';


@Component({
    templateUrl: 'login.component.html'
})


export class LoginComponent {
    constructor(private loginService: LoginService, private sessionService: SessionService) { }
    userName: string;
    password: string;
    errorMsg:string;
    login() {
        this.loginService.login(this.userName, this.password).subscribe(response => {
            console.log("response=>" + response['status']);
            if(response['status'] == Constants.STATUS_OK){
                this.sessionService.setSession(response["user"]);
                this.errorMsg = null;
            }else{
                this.errorMsg = Constants.ERROR_LOGIN_MSG;
            }
            
        });
    }
} 