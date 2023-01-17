import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./Components/main/main.component";
import { ListsComponent } from './Components/lists/lists.component';
import { TasksComponent } from './Components/tasks/tasks.component';

const root: Routes = [
  // {path: '/', component:}
]

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        ListsComponent,
        TasksComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(root),
    ]
})
export class AppModule { }
