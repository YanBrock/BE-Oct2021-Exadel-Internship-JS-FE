import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CandidatesService } from "../../services/candidates.service";
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from "rxjs";
import {loadAllSpecializations, loadAllSpecializationsFail, loadAllSpecializationsSuccess} from './actions';

@Injectable()

export class DirectoryEffects {

  loadAllSpecialization$ = createEffect(() => this.actions$.pipe(
    ofType(loadAllSpecializations.type),
    mergeMap(() => this.candidatesService.loadSpec()
      .pipe(
        map(allSpecializations => loadAllSpecializationsSuccess({ allSpecializations })),
        catchError(() => of(loadAllSpecializationsFail({ message: 'Loading specializations failed' })))
      ))
  ))

  constructor(
    private actions$: Actions,
    private candidatesService: CandidatesService
  ) { }
}
