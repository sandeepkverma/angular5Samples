import {NgModule, Component} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountSubDetailsCompoent } from './account-details/account-subdetails.component';
import { Tab1Component } from './user/tab1.component';
import { Tab2Component } from './user/tab2.component';
import { DefaultComponent } from './error/default.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes:Routes=[{
 path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'account',component:AccountComponent},
{path:'account/:id',component:AccountDetailsComponent},
{path:'account/:id/:subid',component:AccountSubDetailsCompoent},
{path:'user',component:UserComponent,children:[{
    path:'tab1',component:Tab1Component},
{path:'tab2',component:Tab2Component}]},
{path:'**',component:DefaultComponent}];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})


export class AppRouting{} 