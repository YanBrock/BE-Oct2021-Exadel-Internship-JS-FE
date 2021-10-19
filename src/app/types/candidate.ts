export enum Status {
  Declined = 'declined',
  Accepted = 'accepted',
  Questionable = 'questionable'
}

export interface Candidate {
  id: number
  firstName: string
  lastName: string
  isActive: boolean
  // email: string
  // skype: string
  // phone: string
  specialisation: string
  // location: string
  // englishLevel: string
  isInterviewedByHr?: boolean
  isInterviewedByTech?: boolean
  status?: Status
}