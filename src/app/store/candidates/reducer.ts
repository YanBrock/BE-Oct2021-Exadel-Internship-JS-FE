import { createReducer, on } from '@ngrx/store';
import {loadCandidatesList, loadCandidatesListSuccess, selectCandidate} from './actions';
import {Candidate, CandidatesFilter} from '../../types/candidate';

export interface CandidatesState {
  candidatesList: Candidate[];
  loading: boolean;
  selectedCandidate: Candidate;
  // filters: CandidatesFilter
}

export const initialState: CandidatesState = {
  candidatesList: [],
  loading: false,
  selectedCandidate: null,
  // filters: null
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
  on(selectCandidate, (state, { selectedCandidate }) => {
    return {
      ...state,
      selectedCandidate
    }
  }),
  // on(changeFilters, (state, { filters }) => {
  //   return {
  //     ...state,
  //     filters
  //   }
  // })
);

export function candidatesReducer(state, action) {
  return _candidatesReducer(state, action);
}
