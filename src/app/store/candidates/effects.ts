import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CandidatesService } from "../../services/candidates.service";
import { mergeMap, map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { of } from "rxjs";
import { loadCandidatesList, loadCandidatesListFail, loadCandidatesListSuccess } from "./actions";
import {CandidatesState} from './reducer';
import {Store} from '@ngrx/store';
import {CandidatesFilter} from '../../types/candidate';

@Injectable()
export class CandidatesEffects {

  loadCandidatesList$ = createEffect(() => this.actions$.pipe(
      ofType(loadCandidatesList.type),
      tap(action => action),
      // map(filters => loadCandidatesList({ filters })),
      // mergeMap((filters:CandidatesFilter) => this.candidatesService.loadCandidates(filters)
      // mergeMap((action: typeof loadCandidatesList) =>this.candidatesService.loadCandidates(action.arguments?.filters)
      mergeMap(() => this.candidatesService.loadCandidates()
        .pipe(
          map(candidatesList => loadCandidatesListSuccess({ candidatesList })),
          catchError(() => of(loadCandidatesListFail({ message: 'Loading candidates list failed' })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private candidatesService: CandidatesService,
    // private store: CandidatesState
  ) { }
}
