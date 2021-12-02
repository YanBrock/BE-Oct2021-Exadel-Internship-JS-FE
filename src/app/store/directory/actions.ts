import { createAction, props } from "@ngrx/store";

export const loadAllSpecializations = createAction('[Directory] Load specializations');
export const loadAllSpecializationsSuccess = createAction('[Directory] Load specializations success', props<{ allSpecializations: any[] }>());
export const loadAllSpecializationsFail = createAction('[Directory] Load specializations fail', props<{ message: string }>());
