import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  user = {
    email: 'zzz@zzz.zzz',
    password: 'zzz'
  }

  constructor() { }
}
