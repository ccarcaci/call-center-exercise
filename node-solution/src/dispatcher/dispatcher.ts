import { LoggerType } from '../types/logger-type'
import { RespondentType } from '../types/respondent-type'

type SelectorType = (respondents: RespondentType[]) => RespondentType | null
type MaybeEscalateType = (respondent: RespondentType, logger: LoggerType) => RespondentType | null
type PickType = (respondent: RespondentType, logger: LoggerType) => void

const dispatcher = (
  respondents: RespondentType[],
  selector: SelectorType,
  maybeEscalate: MaybeEscalateType,
  pick: PickType,
  logger: LoggerType): void => {
  const respondent = selector(respondents)

  if (respondent === null) {
    logger.info('Call center has no respondents')
    return
  }

  const escalatedRespondent = maybeEscalate(respondent, logger)

  if (escalatedRespondent === null) {
    return
  }

  pick(escalatedRespondent, logger) // non-pure
}

export {
  dispatcher,
  SelectorType,
  MaybeEscalateType,
  PickType,
}
