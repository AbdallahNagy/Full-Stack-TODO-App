import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(private http: HttpService) {

  }

  addUser(username:any, email:any, password:any) {

    let userData = {
      username,
      email,
      password
    }

    this.http.createUser(userData).subscribe({
      next:(res) => {
        console.log(res)
        
      },
      error:(err) => {
        console.log(err)
      }
    })
  }

  // calling api
  ngOnInit(): void {

  }
}
