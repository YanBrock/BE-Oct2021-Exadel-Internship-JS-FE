import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  users = [{
    email: 're@re.re',
    password: 're',
    role: 'recruiter',
    token: 'bvdjjji439hgiiig559999999999999993'
  },
  {
    email: 'te@te.te',
    password: 'te',
    role: 'tech-interviewer',
    token: 'bvdjjji439hgiiig559999999499999999'
    },
    {
      email: 'me@me.me',
      password: 'me',
      role: 'mentor',
      token: 'bvdjjji439hgiiig559999599999999999'
    },
    {
      email: 'ma@ma.ma',
      password: 'ma',
      role: 'manager',
      token: 'bvdjjji439hgiiig559996999999999999'
    },
    {
      email: 'ad@ad.ad',
      password: 'ad',
      role: 'admin',
      token: 'bvdjjji439hgiiig559999999997999999'
    }
  ]


  activeUser = {
    email: null,
    password: null,
    role: null,
    token: null
  }

  userRole$ = new Subject<string>()
  userRole = this.userRole$.asObservable()

  constructor() { }

  saveDataUser(userData: any): any{
    this.activeUser = {...userData};
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
