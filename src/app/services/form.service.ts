import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  dataIntern: object = { }

  isSpecialisation = ['Specialisation', 'Javascript', '.Net', 'Business analyst']
  isEnglishlevel = ['English level', 'A 1', 'A 2', 'B 1', 'B 2', 'C 1', 'C 2']

  constructor() { }
  saveDataIntern(dataIntern: object): any{
    this.dataIntern = dataIntern
    console.log(this.dataIntern)
  }
}
