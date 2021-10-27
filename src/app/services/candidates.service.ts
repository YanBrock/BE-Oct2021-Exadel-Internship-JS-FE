import { of } from 'rxjs';
import { Candidate, Status } from '../types/candidate';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { A11yModule } from '@angular/cdk/a11y';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  
  selectedCandidate$ = new Subject<Candidate>()
  selectedCandidate = this.selectedCandidate$.asObservable()
  selectedFilter$ = new Subject<string>()
  selectedFilter = this.selectedFilter$.asObservable()

  constructor() { }

  selectFilter(filter: string) {
    this.selectedFilter$.next(filter)
  }

  selectCandidate(candidate: Candidate) {
    this.selectedCandidate$.next(candidate);
  }

  getCandidates(): Observable<Candidate[]> {
    return of(
      [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Smith',
          email: 'jsmith@gmail.com',
          skype: 'jsmith332',
          phone: '+827169129317',
          specialization: 'front-end',
          location: 'New-Your, USA',
          englishLevel: 'A1',
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
          specialization: 'back-end',
          location: 'Colchester, England',
          englishLevel: 'B2',
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
          specialization: 'business analyst',
          location: 'Mexico, Mexico',
          englishLevel: 'A2',
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
          specialization: 'business analyst',
          location: 'Oslo, Norway',
          englishLevel: 'C1',
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
          specialization: 'front-end',
          location: 'Toronto, Canada',
          englishLevel: 'C2',
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
          specialization: 'back-end',
          location: 'Helsinki, Finland',
          englishLevel: 'C1',
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
          specialization: 'business analyst',
          location: 'Moscow, Russia',
          englishLevel: 'A1',
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
          specialization: 'back-end',
          location: 'Washington, USA',
          englishLevel: 'C2',
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
          specialization: 'back-end',
          location: 'Kingston, Jamaica',
          englishLevel: 'C1',
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
          specialization: 'fe',
          location: 'Ontarion, Canada',
          englishLevel: 'B2',
          isInterviewedByHr: true,
          isInterviewedByTech: true,
          status: Status.Declined
        }
      ]
    )
  }

}
