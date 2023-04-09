import { RespondentType } from '../types/respondent-type'

export type SetFreeFunctionType = (respondent: RespondentType) => boolean

const tick = (respondents: RespondentType[], setFree: SetFreeFunctionType): RespondentType[] => {
  return respondents.map((respondent) => {
    if(!respondent.busy) { return respondent }
    
    respondent.busyTime++
    respondent.busy = !setFree(respondent)
    return respondent
  })
}

export { tick }
