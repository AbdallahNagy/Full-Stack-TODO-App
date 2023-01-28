import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
  lists:any
  tasks:any

  @Output() getTasksEvent = new EventEmitter()

  constructor(private http:HttpService){}

  getLists(){
    this.http.getAllLists().subscribe({
      next:(res) => {
        this.lists = res
      },
      error:(err) => {
        console.log(err)
      }
    })
  }

  showTasks(id:any) {
    this.http.getTasks(id).subscribe({
      next: (res) => {
        this.tasks = res
        console.log(res)
      },
      error: (err)=> {
        console.log(err);
      }
    })

    this.getTasksEvent.emit(this.tasks)
  }
}
