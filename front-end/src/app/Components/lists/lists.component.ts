import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
  lists: any
  tasks: any
  // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDQzOTE4NzUwMzhhNDQzN2E1YmYxOCIsImlhdCI6MTY3NjIyOTE1MX0.csbcNOVKAsoLrau9YjYPYyJKRd7c4MbxomlunUKVkrM'

  @Output() getTasksEvent = new EventEmitter()

  constructor(private http: HttpService) { }

  // token test
  // test(){
  //   this.http.testToken(this.token).subscribe({
  //     next: (res) => {
  //       console.log(res)
  //     },
  //     error: (err) => {
  //       console.log(err)
  //     }
  //   })
  // }

  getLists() {
    this.http.getAllLists().subscribe({
      next: (res) => {
        this.lists = res
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  showTasks(id: any) {
    this.http.getTasks(id).subscribe({
      next: (res) => {
        this.tasks = res
        this.getTasksEvent.emit(this.tasks) // why when i try to put this line outside next and 
                                            // inside the same func doesn't work?
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

}
