import { LoggerType } from '../../types/logger-type'
import { RespondentType } from '../../types/respondent-type'

const pick = (respondent: RespondentType, logger: LoggerType): void => {
  logger.info(`${respondent.name} picks the call`)
  respondent.busy = true
  respondent.calls = respondent.calls + 1
}

export { pick }
