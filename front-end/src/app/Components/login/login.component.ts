import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpService) { }

  signin(email: any, password: any) {
    console.log(email)
    console.log(password)

    let user = {
      email,
      password
    }

    this.http.login(user).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {

  }
}
