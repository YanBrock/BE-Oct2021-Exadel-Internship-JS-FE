import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


    subtasks = [
      {skill: 'Javascript', completed: true},
      {skill: '.Net', completed: true},
      {skill: 'Business analyst', completed: true },
      {skill: 'Java', completed: false},
      {skill: 'С++', completed: false},
      {skill: 'Python', completed: false},
      {skill: 'C#', completed: false},
      {skill: 'PHP', completed: false },
      {skill: 'TypeScript', completed: false},
      {skill: 'Delphi', completed: false},
    ]


  isRole = [
    'Recruiter',
    'Tech-interviewer',
    'Mentor',
    'Manager',
    'Admin'
  ];

  // newUser = {};
  // delUser = '';

  constructor(private http: HttpClient) { }


  postSettingRequest(data: any, url: string): Observable<any> {
    let dataJson = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'accept': '*/*',
        'Content-Type': 'application/json',
      }),
    };

    console.log(dataJson);
    // return this.http.post(url, dataJson, httpOptions); -------- do not delete
    return data;
  }


  deleteSettingRequest(data: any, url: string): Observable<any> {
    let dataJson = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'accept': '*/*',
        'Content-Type': 'application/json',
      }),
    };

    console.log(dataJson);
    // return this.http.delete(url, dataJson, httpOptions); -------- do not delete
    return data;
  }


  // saveNewUser(data: Object) {
  //   this.newUser = data;
  //   console.log(this.newUser);
  // }

  // deleteUser(data: string) {
  //   this.delUser = data;
  //   console.log(this.delUser);
  // }





}
