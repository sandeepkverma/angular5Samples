import {Component, OnInit} from '@angular/core';
import { SessionService } from '../session.service';
import {Router} from '@angular/router';


@Component({
template:'home component',
templateUrl:'home.component.html'
})


export class HomeComponent implements OnInit{
    constructor(private session:SessionService,private router:Router){}
    user:any;
    userName:string;
    ngOnInit(){
        if(this.session.validateSession()){
            this.user = this.session.getUser();
                this.userName = this.user.name;
        }
        
        
    }
    logout(){ 
        debugger; 
        this.session.invalidateSession();
    }
    goHome(){
        this.router.navigate(['']);
    }

}