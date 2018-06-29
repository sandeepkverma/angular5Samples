import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
    template:'account details'
})


export class AccountDetailsComponent implements OnInit{

    constructor(private activatedRoute:ActivatedRoute ){}

    ngOnInit(){
        debugger;
        alert(this.activatedRoute.params['value'].id);
    }

}