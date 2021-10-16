import { Component, OnInit } from '@angular/core';

export interface Candidate {
  id: number
  firstName: string
  lastName: string
  isActive: boolean
  // email: string
  // skype: string
  // phone: string
  // specialisation: string
  // location: string
  // englishLevel: string
}

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  candidates: Candidate[] = [
    {id: 1, firstName: 'John', lastName: 'Smith', isActive: false},
    {id: 2, firstName: 'Anna', lastName: 'Donovan', isActive: false},
    {id: 3, firstName: 'Rick', lastName: 'Gonsales', isActive: false},
    {id: 4, firstName: 'Mark', lastName: 'Tornhes', isActive: false},
    {id: 5, firstName: 'Britney', lastName: 'Sterry', isActive: false},
    {id: 6, firstName: 'George', lastName: 'McTanney', isActive: false},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  selectCandidate(id: number) {
    this.candidates.forEach(candidate => candidate.isActive = false);
    const index = this.candidates.findIndex(candidate => candidate.id === id);
    this.candidates[index].isActive = true;
  }

}
