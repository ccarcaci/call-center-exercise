import { LoggerType } from '../../types/logger-type'
import { RespondentType } from '../../types/respondent-type'

const maybeEscalate = (respondent: RespondentType, logger: LoggerType): RespondentType | null => {
  if(respondent.busy && respondent.supervisor === undefined) {
    logger.info(`${respondent.name} has no supervisor and is busy, call rejected`)
    return null
  }
  if(respondent.busy) {
    logger.info(`${respondent.name} is busy, routed to supervisor`)
    return maybeEscalate(respondent.supervisor!, logger)
  }

  return respondent
}

export { maybeEscalate }
