import { Component, OnInit } from '@angular/core';

// export interface Candidate {
//   id: number
//   firstName: string
//   lastName: string
//   isActive: boolean
//   email: string
//   skype: string
//   phone: string
//   specialisation: string
//   location: string
//   englishLevel: string
//   solution: string
// }

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  candidates: any[] = [
    {id: 1, firstName: 'John', lastName: 'Smith', isActive: false, solution: 'accepted'},
    {id: 2, firstName: 'Anna', lastName: 'Donovan', isActive: false, solution: 'declined'},
    {id: 3, firstName: 'Rick', lastName: 'Gonsales', isActive: false, solution: 'declined'},
    {id: 4, firstName: 'Mark', lastName: 'Tornhes', isActive: false, solution: 'accepted'},
    {id: 5, firstName: 'Britney', lastName: 'Sterry', isActive: false, solution: 'questionable'},
    {id: 6, firstName: 'George', lastName: 'McTanney', isActive: false, solution: 'declined'},
    {id: 7, firstName: 'Bich', lastName: 'Bichovich', isActive: false, solution: 'declined'},
    {id: 8, firstName: 'Morgan', lastName: 'Freeman', isActive: false, solution: 'questionable'},
    {id: 9, firstName: 'Lucas', lastName: 'Tounsend', isActive: false, solution: 'accepted'},
    {id: 10, firstName: 'Charles', lastName: 'Brighton', isActive: false, solution: 'declined'},
  ]

  resultedArray: any[] = this.candidates

  activeFilter: string = 'all'

  filters: string[] = ['all', 'accepted', 'questionable', 'declined']

  constructor() { }

  ngOnInit(): void {
  }

  selectCandidate(id: number) {
    this.resultedArray.forEach(candidate => candidate.isActive = false);
    const index = this.resultedArray.findIndex(candidate => candidate.id === id);
    this.resultedArray[index].isActive = true;
  }

  filterCandidates(filter: string) {
    this.activeFilter = filter
    console.log(this.activeFilter)
    this.resultedArray.forEach(candidate => candidate.isActive = false)
    if (filter === 'all') {
      this.resultedArray = this.candidates
    } else {
      this.resultedArray = this.candidates.filter(candidate => candidate.solution === filter)
    }
  }

}
