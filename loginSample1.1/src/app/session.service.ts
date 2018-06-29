import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {
    constructor(private router:Router){}
    validateSession() {
        if(this.getToken() == null){
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
    setSession(user){
        sessionStorage.setItem("user",JSON.stringify(user));
        this.navigateToRoute();
    }
    getUser(){
        try {
            return JSON.parse(sessionStorage.getItem("user"));     
        } catch (error) {
            return null;    
        }
        
    }
    getToken():string{
        if(this.getUser() !== null){
            return this.getUser()["token"];
        }
        return null;
    }
   
    invalidateSession(){
        sessionStorage.removeItem("user");
       this.navigateToRoute();
    }

    navigateToRoute(){
        this.router.navigate(['']);
    }
    
}