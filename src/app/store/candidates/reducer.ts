import { createReducer, on } from '@ngrx/store';
import { loadCandidatesList, loadCandidatesListSuccess } from './actions'
import { Candidate } from '../../types/candidate';

export interface CandidatesState {
  candidatesList: Candidate[];
  loading: boolean
}

export const initialState: CandidatesState = {
  candidatesList: [],
  loading: false
};

const _candidatesReducer = createReducer(
  initialState,
  on(loadCandidatesList, state => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadCandidatesListSuccess, (state, { candidatesList }) => {
    return {
      ...state,
      loading: false,
      candidatesList
    }
  }),
);

export function candidatesReducer(state, action) {
  return _candidatesReducer(state, action);
}
