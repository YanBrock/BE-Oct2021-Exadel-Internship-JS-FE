import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class UserLoginService {

  baseURL: string = 'https://exadel3team.myapptechka.by/Account/Login';
  getRoleURL: string = 'https://exadel3team.myapptechka.by/Home/Index';

  // users = [{
  //   email: 're@re.re',
  //   password: 're1!',
  //   role: 'recruiter',
  //   token: 'bvdjjji439hgiiig559999999999999993'
  // },
  // {
  //   email: 'te@te.te',
  //   password: 'te',
  //   role: 'tech-interviewer',
  //   token: 'bvdjjji439hgiiig559999999499999999'
  // },
  // {
  //   email: 'me@me.me',
  //   password: 'me',
  //   role: 'mentor',
  //   token: 'bvdjjji439hgiiig559999599999999999'
  // },
  // {
  //   email: 'ma@ma.ma',
  //   password: 'ma',
  //   role: 'manager',
  //   token: 'bvdjjji439hgiiig559996999999999999'
  // },
  // {
  //   email: 'ad@ad.ad',
  //   password: 'ad',
  //   role: 'admin',
  //   token: 'bvdjjji439hgiiig559999999997999999'
  // }
  //   ,
  // {
  //   email: 'test@tut.by',
  //   password: 'Test1!',
  //   role: 'admin',
  //   token: 'bvdjjji439hgiiig559999999997999999'
  // },
  // {
  //   email: 'admin@exadel.com',
  //   password: 'Admin1!',
  //   role: '',
  //   token: 'bvdjjji439hgiiig559999999997999999'
  // },
  // {
  //   email: 'managerKatya@exadel.com',
  //   password: 'ManagerKatya1!',
  //   role: '',
  //   token: 'bvdjjji439hgiiig559999999997999999'
  // }
  // ]


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
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type,X-Auth-Token,Origin',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
      }),
    };
    return this.http.post(this.baseURL, userDataJson, httpOptions);
  }

  // getUserRole(token: any): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'accept': 'text/plain',
  //       'Content-Type': 'application/json',
  //       'Cache-Control': 'no-cache',
  //       'Authorization': `Bearer ${token}`
  //     }),
  //     // withCredentials: false
  //   };
  //   return this.http.get(`${this.getRoleURL}`, httpOptions)
  // }


  userRole$ = new Subject<string>()
  userRole = this.userRole$.asObservable()


  saveDataUser(userData: any): any{
    this.activeUser = { ...userData };
    console.log(this.activeUser);
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
