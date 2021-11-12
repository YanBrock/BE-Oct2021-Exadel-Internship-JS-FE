import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class UserLoginService {

  // baseURL: string = 'https://exadel3team.myapptechka.by/Account/Login';
  baseURL: string = 'api/Account/Login';
  getRoleURL: string = 'https://exadel3team.myapptechka.by/Home/Index';

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
        'Content-Type': 'application/json',
        // 'Cache-Control': 'no-cache',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Credentials': 'true',
        // 'Access-Control-Allow-Headers': 'Content-Type,X-Auth-Token,Origin',
        // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
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

  getRole() {
    this.userRole$.next(this.activeUser.role)
    return this.activeUser.role;
  }
}
