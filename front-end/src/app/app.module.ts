import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from "./Components/main/main.component";
import { ListsComponent } from './Components/lists/lists.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';

const root: Routes = [
  {path: '', component:LoginComponent},
  {path: 'home', component:MainComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent}
]

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        ListsComponent,
        TasksComponent,
        RegisterComponent,
        LoginComponent,
        SignupComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(root),
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
