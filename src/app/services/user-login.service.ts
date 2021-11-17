import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class UserLoginService {

  baseURL: string = 'Account/Login';

  activeUser = {
    email: null,
    password: null,
    role: null,
    token: null
  }

  constructor(private http: HttpClient) { }

  postData(userData: any): Observable<any> {

    let userDataJson = JSON.stringify({ ...userData })
    const httpOptions = {
      headers: new HttpHeaders({
        'accept': '*/*',
        'Content-Type': 'application/json'
      }),
    };
    return this.http.post(this.baseURL, userDataJson, httpOptions);
  }

  userRole$ = new Subject<string>()
  userRole = this.userRole$.asObservable()

  saveDataUser(userData: any): any {
    this.activeUser = { ...userData };
  }

  isAuthenticated(): boolean {
    return !!this.activeUser.token;
  }

  getToken() {
    return this.activeUser.token;
  }

  setToken(data) {
     this.activeUser.token = data;
  }

  getRole() {
    this.userRole$.next(this.activeUser.role)
    return this.activeUser.role;
  }
}
