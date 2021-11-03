import { EnglishLevel, Status } from './../../../types/candidate';
import { Component, OnDestroy, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-candidates-filter',
  templateUrl: './candidates-filter.component.html',
  styleUrls: ['./candidates-filter.component.scss']
})
export class CandidatesFilterComponent implements OnInit, OnDestroy {

  englishLevelOptions: { label: string, value: EnglishLevel }[] = [
    { label: 'Beginner', value: 'beginner' },
    { label: 'Pre-Intermediate', value: 'pre-intermediate' },
    { label: 'Intermediate', value: 'intermediate' },
    { label: 'Upper-Intermediate', value: 'upper-intermediate' },
    { label: 'Advanced', value: 'advanced' }
  ]

  statusOptions: {label: string, value: Status}[] = [
    { label: 'Questionable', value: Status.Questionable },
    { label: 'Accepted', value: Status.Accepted },
    { label: 'Declined', value: Status.Declined }
  ];

  @Output() filterChanged = new EventEmitter();

  filterForm = new FormGroup({
    englishLevel: new FormControl(null),
    status: new FormControl(null)
  });

  filterSubscription: Subscription

  constructor() { }

  ngOnInit(): void {
    this.filterSubscription = this.filterForm.valueChanges.subscribe(value => this.filterChanged.emit(value));
  }

  ngOnDestroy(): void {
    this.filterSubscription.unsubscribe()
  }

}
