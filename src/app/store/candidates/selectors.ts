import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CandidatesState } from "./reducer";
import {CandidatesFilter} from '../../types/candidate';

export const selectFeature = createFeatureSelector<CandidatesState>('candidates');
export const selectCandidatesList = createSelector(selectFeature, ({ candidatesList }) => candidatesList);
export const selectCandidatesListLoading = createSelector(selectFeature, ({ loading }) => loading);
export const selectSelectCandidate = createSelector(selectFeature, ({ selectedCandidate }) => selectedCandidate);
// export const selectFilteredCandidatesList = createSelector(
//   selectFeature,
//   ({ candidatesList }, props: { filter: CandidatesFilter }) => {
//     return candidatesList.filter(candidate => {
//       if (!props.filter) {
//         return true
//       }
//       const fitsStatus = props.filter.status === 'all' ? candidate : props.filter.status === null || props.filter.status === candidate.status;
//       const fitsSpecialization = props.filter.specialization === 'all' ? candidate : props.filter.specialization === null || props.filter.specialization === candidate.specialization;
//       return fitsStatus && fitsSpecialization;
//     })
//   });
