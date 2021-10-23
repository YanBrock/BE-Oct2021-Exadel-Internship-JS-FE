import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  users = [{
    email: 're@re.re',
    password: 're',
    role: 'recruiter'
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

  constructor() { }
}
