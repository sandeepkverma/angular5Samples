import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountSubDetailsCompoent } from './account-details/account-subdetails.component';
import { Tab1Component } from './user/tab1.component';
import { Tab2Component } from './user/tab2.component';
import { ErrorHandlerService } from './error-handler.service';
import { AccountService } from './account/account.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { DefaultComponent } from './error/default.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    HomeComponent,
    UserComponent,
    AccountDetailsComponent,
    AccountSubDetailsCompoent,
    Tab1Component,
    Tab2Component,
    LoginComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [ErrorHandlerService,AccountService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
