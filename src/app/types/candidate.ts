export enum Status {
  Declined = 0,
  Accepted = 1,
  Questionable = 2
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
  status?: Status
}