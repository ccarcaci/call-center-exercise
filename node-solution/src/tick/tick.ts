import { RespondentType } from '../types/respondent-type'

export type SetFreeFunctionType = (respondent: RespondentType) => boolean

const tick = (respondents: RespondentType[], setFree: SetFreeFunctionType): RespondentType[] => {
  return respondents.map((respondent) => {
    if(!respondent.busy) { return respondent }
    
    respondent.busyTime++

    const isFree = setFree(respondent)
    respondent.busy = !isFree
    respondent.busyTime = isFree ? 0 : respondent.busyTime

    return respondent
  })
}

export { tick }
