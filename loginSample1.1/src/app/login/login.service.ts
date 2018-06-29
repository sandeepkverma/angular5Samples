import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Constants } from '../app.constants';
import { ErrorHandlerService } from '../error-handler.service';
import {catchError} from 'rxjs/operators';



@Injectable()
export class LoginService{

    constructor(private http:HttpClient,private errorHandler:ErrorHandlerService){}
    login(userName:string,password:string){
        let url = Constants.baseUrl+'login';
        let httpParams = new HttpParams()
        .append("userName",userName)
        .append("password",password)
        const httpOptions = {
            headers:new HttpHeaders({
                'Content-Type':'application/x-www-form-urlencoded'
            }),
            params:httpParams
        }

       return this.http.post(url,{},httpOptions).pipe(catchError(this.errorHandler.handleError));

        
    }
}
