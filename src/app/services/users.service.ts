import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  mainLocalApi = "http://localhost:5000/api"

  headers = new HttpHeaders({
	'accepts': '*/*',
  })

  getMentors(): Observable<any> {
	  return this.http.get(`${this.mainLocalApi}/users`);
  }
}
