import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  dataSpecialization = {
    skill: 'All specialization',
    completed: false,
    subtasks: [
      {skill: 'Javascript', completed: false},
      {skill: '.Net', completed: false},
      {skill: 'Business analyst', completed: false },
      {skill: 'Java', completed: false},
      {skill: 'С++', completed: false},
      {skill: 'Python', completed: false},
      {skill: 'C#', completed: false},
      {skill: 'PHP', completed: false },
      {skill: 'TypeScript', completed: false},
      {skill: 'Delphi', completed: false},
    ]
  };

  isRole = [
    'Recruiter',
    'Tech-interviewer',
    'Mentor',
    'Manager',
    'Admin'
  ];

  newUser = {};
  delUser = '';

  constructor() { }

  saveNewDataSpecialization(newDataSpecialization: any) {
    this.dataSpecialization = newDataSpecialization;
  }

  saveNewUser(data: Object) {
    this.newUser = data;
    console.log(this.newUser);
  }

  deleteUser(data: string) {
    this.delUser = data;
    console.log(this.delUser);
  }





}
