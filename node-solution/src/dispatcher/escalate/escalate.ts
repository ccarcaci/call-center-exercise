import { RespondentType } from '../../types/respondent-type'

const escalate = (respondent: RespondentType): RespondentType | null => {
  if(respondent.busy && respondent.supervisor === undefined) { return null }
  if(respondent.busy) { return escalate(respondent.supervisor!) }

  return respondent
}

export { escalate }
