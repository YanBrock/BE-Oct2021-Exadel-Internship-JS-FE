import { Pipe, PipeTransform } from '@angular/core';
import { Candidate } from '../types/candidate';

@Pipe({
  name: 'filterByStatus'
})
export class FilterByStatusPipe implements PipeTransform {

  transform(value: Candidate[], filterName: string): Candidate[] {
    return value.filter(candidate => candidate.status === filterName);
  }

}
