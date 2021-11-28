export enum Status {
  Questionable = 'Questionable',
  Accepted = 'Accepted',
  Declined = 'Declined'
}

export type EnglishLevel = 'beginner' | 'pre-intermediate' | 'intermediate' | 'upper-intermediate' | 'advanced';

export type Specialization = 'front-end' | 'back-end' | 'business analyst'

export interface CandidatesFilter {
  status: Status | 'all';
  specialization: Specialization | 'all'
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
