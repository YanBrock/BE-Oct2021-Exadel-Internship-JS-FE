import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable, Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'

})

export class FormService {

  dataIntern: object = {}
  // isSpecialization = ['Javascript', '.Net', 'Business analyst'];
  isSpecialization$ = new Subject<string[]>();
  // isSpecialization = this.isSpecialization$.asObservable();

  isEnglishlevel = ['Elementary', 'Pre-Intermediate', 'Intermediate', 'Upper-Intermediate', 'Advanced', 'Proficiency']
  isLocation = ['Belarus', 'Poland', 'Russia', 'Georgia', 'Ukraine', 'other...']
  isLocationCity = ['Minsk', 'Warsaw', 'Moscow', 'Tbilisi', 'Kiev', 'other...']

  constructor() { }

  ngOnInit(): void {
  }

  getSpecializations(): Observable<string[]> {
    return this.isSpecialization$.asObservable();
  }


  getSpecializationByAdmin(data: string[]) {
    this.isSpecialization$.next(data);
    console.log(data);
    // console.log(console.log(this.isSpecialization$));
  }




  saveDataIntern(dataIntern: object): any {
    this.dataIntern = dataIntern
    console.log(this.dataIntern)
  }
}
