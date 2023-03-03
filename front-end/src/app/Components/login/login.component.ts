import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: any
  constructor(private http: HttpService, private _router: Router) { }

  signin(email: any, password: any) {
    console.log(email)
    console.log(password)

    let user = {
      email,
      password
    }

    this.http.login(user).subscribe({
      next: (res) => {
        localStorage.setItem('token', JSON.stringify(res))
        this.token = JSON.parse(localStorage.getItem('token') as string).accessToken
        this._router.navigate(['/home'])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    console.log('oninit fired')

    if (localStorage.getItem('token')) {
      console.log(localStorage.getItem('token'))
      this.http.loginWithToken(localStorage.getItem('token'))

    }
  }
}
