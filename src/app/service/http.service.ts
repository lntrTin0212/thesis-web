import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseURL: String = "http://localhost:3000/api/v1";

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('logginToken')}`
  });

  constructor( private http: HttpClient) { }


  Signin(formData:any) {
    return this.http.post(`${this.baseURL}/users/login`,formData)
  }

  Signup(formData:any) {
    return this.http.post(`${this.baseURL}/users/signup`,formData)
  }

  getMe() {
    return this.http.get(`${this.baseURL}/users/me`, {headers: this.headers})
  }

  updatePassword(data:any) {
    return this.http.patch(`${this.baseURL}/users/updateMyPassword`,data,{
      headers: this.headers
    })
  }
}
