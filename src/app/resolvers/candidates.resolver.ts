import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { CandidatesService } from '../services/candidates.service';

@Injectable({
  providedIn: 'root'
})
export class CandidatesResolver implements Resolve<boolean> {

  constructor(private candidatesService: CandidatesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.candidatesService.loadCandidates();
    return true;
  }
}

