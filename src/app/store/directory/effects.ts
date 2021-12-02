import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from "rxjs";
import { loadAllSpecializations, loadAllSpecializationsFail, loadAllSpecializationsSuccess } from './actions';
import { DirectoryService } from '../../services/directory.service';

@Injectable()

export class DirectoryEffects {

  loadAllSpecialization$ = createEffect(() => this.actions$.pipe(
    ofType(loadAllSpecializations.type),
    mergeMap(() => this.directoryService.loadAllSpecializations()
      .pipe(
        map(allSpecializations => loadAllSpecializationsSuccess({ allSpecializations })),
        catchError(() => of(loadAllSpecializationsFail({ message: 'Loading specializations failed' })))
      ))
  ))

  constructor(
    private actions$: Actions,
    private directoryService: DirectoryService
  ) { }
}
