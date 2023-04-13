import { LoggerType } from '../types/logger-type'
import { RespondentType } from '../types/respondent-type'

export type SetFreeFunctionType = (respondent: RespondentType) => boolean

const tick = (respondents: RespondentType[], setFree: SetFreeFunctionType, logger: LoggerType): RespondentType[] => {
  return respondents.map((respondent) => {
    if(!respondent.busy) { return respondent }
    
    respondent.busyTime++

    const isFree = setFree(respondent)
    respondent.busy = !isFree
    respondent.busyTime = isFree ? 0 : respondent.busyTime

    if(isFree) {
      logger.info(`${respondent.name} hangs the call`)
    }

    return respondent
  })
}

export { tick }
