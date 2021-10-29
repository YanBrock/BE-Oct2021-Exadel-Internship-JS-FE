import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  users = [{
    email: 're@re.re',
    password: 're',
    role: 'recruiter',
  },
  {
    email: 'te@te.te',
    password: 'te',
    role: 'tech-interviewer'
    },
    {
      email: 'me@me.me',
      password: 'me',
      role: 'mentor'
    },
    {
      email: 'ma@ma.ma',
      password: 'ma',
      role: 'manager'
    },
    {
      email: 'ad@ad.ad',
      password: 'ad',
      role: 'admin'
    },
  ]



  activeUser = {
    role: null,
    token: null
  }

  constructor() { }

  saveDataUser(userRole: string, userToken: string): any{
    this.activeUser.role = userRole;
    this.activeUser.token = userToken;

  }

  isAuthenticated(): boolean {
    console.log(this.activeUser);
    return !!this.activeUser.token;
  }

  getToken() {
    console.log(this.activeUser);
    return this.activeUser.token;
  }

  getRole() {
    console.log(this.activeUser);
    return this.activeUser.role;
  }

}
