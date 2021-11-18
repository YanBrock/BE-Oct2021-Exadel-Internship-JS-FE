import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CandidatesState } from "./reducer";

export const selectFeature = createFeatureSelector<CandidatesState>('candidates');
export const selectCandidatesList = createSelector(
  selectFeature,
  ({ candidatesList, filters }) => {
    return candidatesList.filter(candidate => {
      if (!filters) {
        return true
      }
      const fitsStatus = filters.status === 'all' ? candidate : filters.status === null || filters.status === candidate.status;
      const fitsSpecialization = filters.specialization === 'all' ? candidate : filters.specialization === null || filters.specialization === candidate.specialization;
      return fitsStatus && fitsSpecialization;
    })
  });
export const selectCandidatesListLoading = createSelector(selectFeature, ({ loading }) => loading);
export const selectSelectCandidate = createSelector(selectFeature, ({ selectedCandidate }) => selectedCandidate);
