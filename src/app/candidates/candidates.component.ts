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
    {id: 1, firstName: 'John', lastName: 'Smith', specialisation: 'fe', isActive: false, solution: 'accepted'},
    {id: 2, firstName: 'Anna', lastName: 'Donovan', specialisation: 'be', isActive: false, solution: 'declined'},
    {id: 3, firstName: 'Rick', lastName: 'Gonsales', specialisation: 'ba', isActive: false, solution: 'declined'},
    {id: 4, firstName: 'Mark', lastName: 'Tornhes', specialisation: 'ba', isActive: false, solution: 'accepted'},
    {id: 5, firstName: 'Britney', lastName: 'Sterry', specialisation: 'fe', isActive: false, solution: 'questionable'},
    {id: 6, firstName: 'George', lastName: 'McTanney', specialisation: 'be', isActive: false, solution: 'declined'},
    {id: 7, firstName: 'Bich', lastName: 'Bichovich', specialisation: 'fe', isActive: false, solution: 'declined'},
    {id: 8, firstName: 'Morgan', lastName: 'Freeman', specialisation: 'be', isActive: false, solution: 'questionable'},
    {id: 9, firstName: 'Lucas', lastName: 'Tounsend', specialisation: 'be', isActive: false, solution: 'accepted'},
    {id: 10, firstName: 'Charles', lastName: 'Brighton', specialisation: 'fe', isActive: false, solution: 'declined'},
  ]

  resultedArray: any[] = this.candidates

  activeFilter: string = 'all'

  activeTab: string = 'all'

  filters: string[] = ['all', 'accepted', 'questionable', 'declined']

  tabs: string[] = ['all', 'fe', 'be', 'ba']

  constructor() { }

  ngOnInit(): void {
  }

  selectCandidate(id: number) {
    this.resultedArray.forEach(candidate => candidate.isActive = false);
    const index = this.resultedArray.findIndex(candidate => candidate.id === id);
    this.resultedArray[index].isActive = true;
  }

  filterCandidatesWithSpecialisation(tab: string) {
    this.activeTab = tab
    this.resultedArray.forEach(candidate => candidate.isActive = false)
    this.filteringArray(this.activeTab, this.activeFilter, this.candidates)
  }

  filterCandidatesWithSolution(filter: string) {
    this.activeFilter = filter
    this.resultedArray.forEach(candidate => candidate.isActive = false)
    this.filteringArray(this.activeTab, this.activeFilter, this.candidates)
  }

  filteringArray(tab: string, filter: string, array: any[]) {
    if (tab === 'all' && filter === 'all') {
      this.resultedArray = this.candidates
    } else if (tab === 'all' && filter !== 'all') {
      this.resultedArray = this.candidates.filter(candidate => candidate.solution === filter)
    } else if (tab !== 'all' && filter === 'all') {
      this.resultedArray = this.candidates.filter(cacndidate => cacndidate.specialisation === tab)
    } else {
      this.resultedArray = this.candidates.filter(candidate => candidate.solution === filter).filter(candidate => candidate.specialisation === tab)
    }
  }

}
