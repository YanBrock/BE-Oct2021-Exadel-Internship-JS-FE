import { createReducer, on } from '@ngrx/store';
import {loadAllSpecializations, loadAllSpecializationsSuccess} from './actions';

export interface DirectoryState {
  allSpecializations: any[];
  loading: boolean
}

export const initialState: DirectoryState = {
  allSpecializations: [],
  loading: false
}

const _directoryReducer = createReducer(
  initialState,
  on(loadAllSpecializations, state => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadAllSpecializationsSuccess, (state, { allSpecializations }) => {
    return {
      ...state,
      allSpecializations,
      loading: false
    }
  })
)

export function directoryReducer(state, action) {
  return _directoryReducer(state, action);
}
