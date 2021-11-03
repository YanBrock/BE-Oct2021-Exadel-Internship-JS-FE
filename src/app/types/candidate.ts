export enum Status {
  Questionable = 'questionable',
  Accepted = 'accepted',
  Declined = 'declined'
}

export type EnglishLevel = 'beginner' | 'pre-intermediate' | 'intermediate' | 'upper-intermediate' | 'advanced';

export interface CandidatesFilter {
  status: Status | 'all';  // ???
  englishLevel: EnglishLevel | 'all'; // ???
}

export interface Candidate {
  id: number
  firstName: string
  lastName: string
  email: string
  skype: string
  phone: string
  specialization: string
  location: string
  englishLevel: string
  isInterviewedByHr?: boolean
  isInterviewedByTech?: boolean
  status?: Status
}