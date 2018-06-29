import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Constants } from '../app.constants';
import { ErrorHandlerService } from '../error-handler.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AccountService {
    constructor(private http: HttpClient,
    private errorHandlerService:ErrorHandlerService) { }
    getAccounts() {
        let url = Constants.baseUrl + "getAccounts";
        let httpParams = new HttpParams()
        .append("token", "ss");
        
    
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/application/x-www-form-urlencoded'
            }),
            params:httpParams
          };
        return this.http.post(url,{},httpOptions).pipe(catchError(this.errorHandlerService.handleError));
    }

    
}