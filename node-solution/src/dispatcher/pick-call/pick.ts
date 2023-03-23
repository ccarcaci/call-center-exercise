import { LoggerType } from '../../types/logger-type'
import { RespondentType } from '../../types/respondent-type'

const pick = (respondent: RespondentType, logger: LoggerType): RespondentType => {
  logger.info(`${respondent.name} pick the call`)
  return {
    ...respondent,
    busy: true,
    calls: respondent.calls + 1,
  }
}

export { pick }
