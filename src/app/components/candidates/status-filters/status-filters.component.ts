import { CandidatesService } from 'src/app/services/candidates.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status-filters',
  templateUrl: './status-filters.component.html',
  styleUrls: ['./status-filters.component.scss']
})
export class StatusFiltersComponent implements OnInit {

   filters: string[] = ['all', 'accepted', 'questionable', 'declined']
   selectedFilter: string = 'all'
   @Output() filterWithStatus = new EventEmitter<string>()

  constructor(public candidatesService: CandidatesService) { }

  ngOnInit(): void {
    this.candidatesService.selectedFilter.subscribe(value => this.selectedFilter = value)
  }

  onClick(filter: string) {
    this.filterWithStatus.emit(filter)
    this.selectedFilter = filter
    this.candidatesService.selectFilter(filter)
  }
}
