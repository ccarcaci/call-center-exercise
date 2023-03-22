import { LoggerType } from '../types/logger-type'
import { RespondentType } from '../types/respondent-type'

type SelectorType = (respondents: RespondentType[]) => RespondentType | null
type EscalateType = (respondent: RespondentType) => RespondentType | null
type PickType = (respondent: RespondentType) => RespondentType

const dispatcher = (
  respondents: RespondentType[],
  selector: SelectorType,
  escalate: EscalateType,
  pick: PickType,
  logger: LoggerType): void => {
  var respondent = selector(respondents)

  if (respondent === null) {
    logger.info('Call center has no respondents')
    return
  }

  logger.info

  respondent = escalate(respondent)

  if (respondent === null) {
    return
  }

  respondent = pick(respondent)
}

export {
  dispatcher,
  SelectorType,
  EscalateType,
  PickType,
}
