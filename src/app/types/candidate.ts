export enum Status {
  Declined = 'declined',
  Accepted = 'accepted',
  Questionable = 'questionable'
}

export interface Candidate {
  id: number
  firstName: string
  lastName: string
  specialisation: string
  isInterviewedByHr?: boolean
  isInterviewedByTech?: boolean
  status?: Status
}