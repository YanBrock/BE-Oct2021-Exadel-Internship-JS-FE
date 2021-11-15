import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  postSpecializationData(data: any): Observable<any> {
    let saveSpecializationDataJson = JSON.stringify(data)
    const httpOptions = {
      headers: new HttpHeaders({
        'accept': '*/*',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type,X-Auth-Token,Origin',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
      }),
    };
    console.log(saveSpecializationDataJson);
    // return this.http.post(this.urlPostSpecializationData, saveSpecializationDataJson, httpOptions);
    return data;
  }




  saveDataIntern(dataIntern: object): any {
    this.dataIntern = dataIntern
    console.log(this.dataIntern)
  }
}
