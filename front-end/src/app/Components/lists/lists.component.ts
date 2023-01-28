import { Component } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
  lists:any

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
}
