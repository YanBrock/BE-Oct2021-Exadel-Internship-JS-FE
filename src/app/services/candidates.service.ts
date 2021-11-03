import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { Candidate, CandidatesFilter, Status, EnglishLevel, Specialization } from '../types/candidate';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  
  selectedCandidate$ = new Subject<Candidate>()
  selectedCandidate = this.selectedCandidate$.asObservable()

  private _candidatesList$ = new BehaviorSubject([])
  candidatesList$ = this._candidatesList$.asObservable()

  constructor(private httpClient: HttpClient) { }

  selectCandidate(candidate: Candidate) {
    this.selectedCandidate$.next(candidate);
  }

  loadCandidates(filter?: CandidatesFilter) {
    this._loadCandidates(filter).subscribe(result => {
      this._candidatesList$.next(result);
    });
  }

  private _loadCandidates(filter?: CandidatesFilter): Observable<Candidate[]> {
    // return this.httpClient.post<Candidate[]>('http://backend.com/candidates', {filter});
    const candidates = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Smith',
        email: 'jsmith@gmail.com',
        skype: 'jsmith332',
        phone: '+827169129317',
        specialization: 'front-end' as Specialization,
        location: 'New-Your, USA',
        englishLevel: 'advanced' as EnglishLevel,
        isInterviewedByHr: true,
        isInterviewedByTech: true,
        status: Status.Accepted
      },
      {
        id: 2,
        firstName: 'Anna',
        lastName: 'Donovan',
        email: 'donovan721@yahoo.com',
        skype: 'Annie78',
        phone: '+912313871293',
        specialization: 'back-end' as Specialization,
        location: 'Colchester, England',
        englishLevel: 'intermediate' as EnglishLevel,
        isInterviewedByHr: false,
        isInterviewedByTech: false,
      },
      {
        id: 3,
        firstName: 'Rick',
        lastName: 'Gonsales',
        email: 'neversleep@gmail.com',
        skype: 'rick gonsales',
        phone: '+183131831',
        specialization: 'business analyst' as Specialization,
        location: 'Mexico, Mexico',
        englishLevel: 'pre-intermediate' as EnglishLevel,
        isInterviewedByHr: true,
        isInterviewedByTech: false,
      },
      {
        id: 4,
        firstName: 'Mark',
        lastName: 'Tornhes',
        email: 'markT@gmail.com',
        skype: 'tornhes99',
        phone: '+878247878782',
        specialization: 'business analyst' as Specialization,
        location: 'Oslo, Norway',
        englishLevel: 'beginner' as EnglishLevel,
        isInterviewedByHr: true,
        isInterviewedByTech: true,
        status: Status.Accepted
      },
      {
        id: 5,
        firstName: 'Britney',
        lastName: 'Sterry',
        email: 'kittieB@domain.com',
        skype: 'kittiekittie',
        phone: '+19128828112',
        specialization: 'front-end' as Specialization,
        location: 'Toronto, Canada',
        englishLevel: 'beginner' as EnglishLevel,
        isInterviewedByHr: true,
        isInterviewedByTech: true,
        status: Status.Questionable
      },
      {
        id: 6,
        firstName: 'George',
        lastName: 'McTanney',
        email: 'george@gmail.com',
        skype: 'georgeC++',
        phone: '+192381378217',
        specialization: 'back-end' as Specialization,
        location: 'Helsinki, Finland',
        englishLevel: 'advanced' as EnglishLevel,
        isInterviewedByHr: true,
        isInterviewedByTech: false,
      },
      {
        id: 7,
        firstName: 'Chainik',
        lastName: 'Redmond',
        email: 'bred@mail.ru',
        skype: 'imnot',
        phone: '+192381283921',
        specialization: 'business analyst' as Specialization,
        location: 'Moscow, Russia',
        englishLevel: 'beginner' as EnglishLevel,
        isInterviewedByHr: true,
        isInterviewedByTech: true,
        status: Status.Declined
      },
      {
        id: 8,
        firstName: 'Morgan',
        lastName: 'Freeman',
        email: 'justagod@gmail.com',
        skype: 'godlike',
        phone: '+1111111111111111',
        specialization: 'back-end' as Specialization,
        location: 'Washington, USA',
        englishLevel: 'pre-intermediate' as EnglishLevel,
        isInterviewedByHr: false,
        isInterviewedByTech: false,
      },
      {
        id: 9,
        firstName: 'Lucas',
        lastName: 'Tounsend',
        email: 'lucaslucas@gmail.com',
        skype: 'TounsendL',
        phone: '+93824787284',
        specialization: 'back-end' as Specialization,
        location: 'Kingston, Jamaica',
        englishLevel: 'pre-intermediate' as EnglishLevel,
        isInterviewedByHr: true,
        isInterviewedByTech: false,
      },
      {
        id: 10,
        firstName: 'Charles',
        lastName: 'Brighton',
        email: 'charleyb@gmail.com',
        skype: 'chrlsbrghtn',
        phone: '+2389482982',
        specialization: 'front-end' as Specialization,
        location: 'Ontario, Canada',
        englishLevel: 'intermediate' as EnglishLevel,
        isInterviewedByHr: true,
        isInterviewedByTech: true,
        status: Status.Declined
      }
    ].filter(candidate =>{
      if (!filter) { return true }
      const fitsStatus = filter.status === 'all' ? candidate : filter.status === null || filter.status === candidate.status;
      const fitsSpecialization = filter.specialization === 'all' ? candidate : filter.specialization === null || filter.specialization === candidate.specialization;
      return fitsStatus && fitsSpecialization;
    });
    
    return of(candidates);
  }

}
