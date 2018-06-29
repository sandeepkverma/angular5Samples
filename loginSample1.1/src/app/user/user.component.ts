import {Component} from '@angular/core';


@Component({
    template:`user component
    <a [routerLink]="['tab1']">tab1</a>  &nbsp;   <a [routerLink]="['tab2']">tab2</a>
    <router-outlet></router-outlet>
    `
})

export class UserComponent{}