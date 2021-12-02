import { createReducer, on } from '@ngrx/store';
import {
  loadAllCountries, loadAllCountriesSuccess,
  loadAllEnglishLevels,
  loadAllEnglishLevelsSuccess,
  loadAllSpecializations,
  loadAllSpecializationsSuccess,
} from './actions';

export interface DirectoryState {
  allSpecializations: any[];
  allEnglishLevels: any[];
  allCountries: any[];
  loading: boolean
}

export const initialState: DirectoryState = {
  allSpecializations: [],
  allEnglishLevels: [],
  allCountries: [],
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
  }),
  on(loadAllCountries, state => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadAllCountriesSuccess, (state, { allCountries }) =>{
    return {
      ...state,
      allCountries,
      loading: false
    }
  })
)

export function directoryReducer(state, action) {
  return _directoryReducer(state, action);
}
