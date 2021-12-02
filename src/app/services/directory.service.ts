import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  constructor(private httpClient: HttpClient) { }

  loadAllSpecializations(): Observable<any[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'accept': 'text/plain'
      })
    };

    return this.httpClient.get<any[]>('directory/getallspecializations', httpOptions)
  }

  loadAllEnglishLevels(): Observable<any[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'accept': 'text/plain'
      })
    };

    return this.httpClient.get<any[]>('directory/getallenglishlevels', httpOptions)
  }
}
