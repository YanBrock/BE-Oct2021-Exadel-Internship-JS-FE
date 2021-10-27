export enum Status {
  Declined = 'declined',
  Accepted = 'accepted',
  Questionable = 'questionable'
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