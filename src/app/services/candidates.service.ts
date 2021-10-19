import { of } from 'rxjs';
import { Candidate, Status } from '../types/candidate';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  
  selectedCandidate$ = new Subject<Candidate>()
  selectedCandidate = this.selectedCandidate$.asObservable()

  constructor() { }

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
          specialisation: 'fe',
          isActive: false,
          isInterviewedByHr: true,
          isInterviewedByTech: true,
          status: Status.Accepted
        },
        {
          id: 2,
          firstName: 'Anna',
          lastName: 'Donovan',
          specialisation: 'be',
          isActive: false,
          isInterviewedByHr: false,
          isInterviewedByTech: false,
        },
        {
          id: 3,
          firstName: 'Rick',
          lastName: 'Gonsales',
          specialisation: 'ba',
          isActive: false,
          isInterviewedByHr: true,
          isInterviewedByTech: false,
        },
        {
          id: 4,
          firstName: 'Mark',
          lastName: 'Tornhes',
          specialisation: 'ba',
          isActive: false,
          isInterviewedByHr: true,
          isInterviewedByTech: true,
          status: Status.Accepted
        },
        {
          id: 5,
          firstName: 'Britney',
          lastName: 'Sterry',
          specialisation: 'fe',
          isActive: false,
          isInterviewedByHr: true,
          isInterviewedByTech: true,
          status: Status.Questionable
        },
        {
          id: 6,
          firstName: 'George',
          lastName: 'McTanney',
          specialisation: 'be',
          isActive: false,
          isInterviewedByHr: true,
          isInterviewedByTech: false,
        },
        {
          id: 7,
          firstName: 'Bich',
          lastName: 'Bichovich',
          specialisation: 'fe',
          isActive: false,
          isInterviewedByHr: true,
          isInterviewedByTech: true,
          status: Status.Declined
        },
        {
          id: 8,
          firstName: 'Morgan',
          lastName: 'Freeman',
          specialisation: 'be',
          isActive: false,
          isInterviewedByHr: false,
          isInterviewedByTech: false,
        },
        {
          id: 9,
          firstName: 'Lucas',
          lastName: 'Tounsend',
          specialisation: 'be',
          isActive: false,
          isInterviewedByHr: true,
          isInterviewedByTech: false,
        },
        {
          id: 10,
          firstName: 'Charles',
          lastName: 'Brighton',
          specialisation: 'fe',
          isActive: false,
          isInterviewedByHr: true,
          isInterviewedByTech: true,
          status: Status.Declined
        }
      ]
    )
  }

}
