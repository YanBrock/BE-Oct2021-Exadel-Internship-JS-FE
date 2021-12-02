import { createAction, props } from "@ngrx/store";

export const loadAllSpecializations = createAction('[Directory] Load specializations');
export const loadAllSpecializationsSuccess = createAction('[Directory] Load specializations success', props<{ allSpecializations: any[] }>());
export const loadAllSpecializationsFail = createAction('[Directory] Load specializations fail', props<{ message: string }>());

export const loadAllEnglishLevels = createAction('[Directory] Load english levels');
export const loadAllEnglishLevelsSuccess = createAction('[Directory] Load english levels success', props<{ allEnglishLevels: any[] }>());
export const loadAllEnglishLevelsFail = createAction('[Directory] Load english levels fail', props<{ message: string }>());

export const loadAllCountries = createAction('[Directory] Load countries');
export const loadAllCountriesSuccess = createAction('[Directory] Load countries success', props<{ allCountries: any[] }>());
export const loadAllCountriesFail = createAction('[Directory] Load countries fail', props<{ message: string }>());
