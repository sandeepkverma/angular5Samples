import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    template:'account sub details component'
})


export class AccountSubDetailsCompoent implements OnInit{

    constructor(private activatedRoute: ActivatedRoute){}

    ngOnInit(){
        debugger;
        alert(this.activatedRoute.params['value'].subid);
    }
}