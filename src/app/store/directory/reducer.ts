import { createReducer, on } from '@ngrx/store';
import {
  loadAllEnglishLevels,
  loadAllEnglishLevelsSuccess,
  loadAllSpecializations,
  loadAllSpecializationsSuccess,
} from './actions';

export interface DirectoryState {
  allSpecializations: any[];
  allEnglishLevels: any[];
  loading: boolean
}

export const initialState: DirectoryState = {
  allSpecializations: [],
  allEnglishLevels: [],
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
  }),
  on(loadAllEnglishLevels, state => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadAllEnglishLevelsSuccess, (state, { allEnglishLevels }) => {
    return {
      ...state,
      allEnglishLevels,
      loading: false
    }
  })
)

export function directoryReducer(state, action) {
  return _directoryReducer(state, action);
}
