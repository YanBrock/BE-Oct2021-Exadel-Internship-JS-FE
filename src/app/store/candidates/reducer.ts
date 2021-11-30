import { createReducer, on } from '@ngrx/store';
import {
  loadCandidatesList,
  loadCandidatesListSuccess,
  selectCandidate,
  selectCandidateFromServer,
  selectCandidateFromServerSuccess,
} from './actions';
import { Candidate } from '../../types/candidate';

export interface CandidatesState {
  candidatesList: Candidate[];
  loading: boolean;
  selectedCandidate: Candidate;
  loadingSelect: boolean
}

export const initialState: CandidatesState = {
  candidatesList: [],
  loading: false,
  selectedCandidate: null,
  loadingSelect: false
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
      candidatesList,
      selectedCandidate: candidatesList[0]
    }
  }),
  on(selectCandidateFromServer, (state) => {
    return {
      ...state,
      loadingSelect: true
    }
  }),
  on(selectCandidateFromServerSuccess, (state, { selectedCandidate }) => {
    return {
      ...state,
      selectedCandidate
    }
  })
  // on(selectCandidate, (state, { selectedCandidate }) => {
  //   return {
  //     ...state,
  //     selectedCandidate
  //   }
  // })
);

export function candidatesReducer(state, action) {
  return _candidatesReducer(state, action);
}
