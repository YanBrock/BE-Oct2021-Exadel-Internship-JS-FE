import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable, Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'

})

export class FormService {

  dataIntern: object = {}
  isSpecialization = ['Javascript', '.Net', 'Business analyst'];
  isEnglishlevel = ['Elementary', 'Pre-Intermediate', 'Intermediate', 'Upper-Intermediate', 'Advanced', 'Proficiency'];
  isLocation = ['Belarus', 'Poland', 'Russia', 'Georgia', 'Ukraine', 'other...'];
  isLocationCity = ['Minsk', 'Warsaw', 'Moscow', 'Tbilisi', 'Kiev', 'other...'];
  urlPostSpecializationData = 'https://exadel3team.myapptechka.by';

  constructor() { }

  ngOnInit(): void {
  }


  postSpecializationData(data: string[]) {
    fetch('urlPostSpecializationData')


  }




  saveDataIntern(dataIntern: object): any {
    this.dataIntern = dataIntern
    console.log(this.dataIntern)
  }
}
