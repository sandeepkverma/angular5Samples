import {Component, OnInit} from '@angular/core';
import { AccountService } from './account.service';

@Component({
    template:'account component'
})



export class AccountComponent implements OnInit{
    constructor(private accountService:AccountService){}
    ngOnInit(){
        this.accountService.getAccounts().subscribe(data=>{debugger;console.log(JSON.stringify(data))});
    }
}