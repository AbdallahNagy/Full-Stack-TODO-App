import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseURL = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  //sign up
  createUser(user: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.post(this.baseURL + 'users/', user, { headers })
  }

  login(user: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.post(this.baseURL + 'users/login/', user, { headers })
  }

  getAllLists() {
    return this.http.get(this.baseURL+ 'lists/')
  }

  getTasks(id:any) {
    return this.http.get(this.baseURL+`todos/listId/${id}`)
  }

}
