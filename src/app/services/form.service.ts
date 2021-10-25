import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  dataIntern: object = { }
  isSpecialization = ['Javascript', '.Net', 'Business analyst']
  isEnglishlevel = ['Elementary', 'Pre-Intermediate', 'Intermediate', 'Upper-Intermediate', 'Advanced', 'Proficiency']
  isLocation = ['Belarus', 'Poland', 'Russia', 'Georgia', 'Ukraine', 'other...']

  constructor() { }

  saveDataIntern(dataIntern: object): any{
    this.dataIntern = dataIntern
    console.log(this.dataIntern)
  }
}