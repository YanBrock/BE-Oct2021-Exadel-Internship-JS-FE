import { createAction, props } from "@ngrx/store";
import { Candidate, CandidatesFilter } from "../../types/candidate";

export const loadCandidatesList = createAction('[Candidates] Load list', props<{ filters: CandidatesFilter }>());
export const loadCandidatesListSuccess = createAction('[Candidates] Load list success', props<{ candidatesList: Candidate[] }>());
export const loadCandidatesListFail = createAction('[Candidates] Load list fail', props<{ message: string }>());
export const selectCandidate = createAction('[Candidates] Select from list', props<{ selectedCandidate: Candidate }>());
export const selectCandidateFromServer = createAction('[Candidates] Select from server', props<{ id: number }>());
export const selectCandidateFromServerSuccess = createAction('[Candidates] Select success', props<{ selectedCandidate: Candidate }>());
export const selectCandidateFromServerFail = createAction('[Candidates] Select fail', props<{ message: string }>());
