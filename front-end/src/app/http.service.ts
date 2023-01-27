import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseURL = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  createUser(user: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.post(this.baseURL + 'users/', user, { headers })
  }

}
