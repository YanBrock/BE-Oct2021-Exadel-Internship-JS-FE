import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'

})

export class FormService {

  dataIntern: object = {}
  // isSpecialization = ['Javascript', '.Net', 'Business analyst'];
  // isEnglishLevel = ['Elementary', 'Pre-Intermediate', 'Intermediate', 'Upper-Intermediate', 'Advanced', 'Proficiency'];
  // isLocation = ['Belarus', 'Poland', 'Russia', 'Georgia', 'Ukraine', 'other...'];
  // isLocationCity = ['Minsk', 'Warsaw', 'Moscow', 'Tbilisi', 'Kiev', 'other...'];

  constructor() { }

  ngOnInit(): void {
  }

  saveDataIntern(dataIntern: object): any {
    this.dataIntern = dataIntern;

    if (!localStorage.getItem('Candidate')) {
      localStorage.setItem('Candidate', JSON.stringify([dataIntern]));

    } else {
      const candidateLocalStorage = JSON.parse(localStorage.getItem('Candidate'));
      candidateLocalStorage.push(dataIntern);

      localStorage.setItem('Candidate', JSON.stringify(candidateLocalStorage));
    }
  }

}
