import { LoggerType } from '../types/logger-type'
import { RespondentType } from '../types/respondent-type'

type SelectorType = (respondents: RespondentType[]) => RespondentType | null
type MaybeEscalateType = (respondent: RespondentType, logger: LoggerType) => RespondentType | null
type PickType = (respondent: RespondentType, logger: LoggerType) => RespondentType

const dispatcher = (
  respondents: RespondentType[],
  selector: SelectorType,
  maybeEscalate: MaybeEscalateType,
  pick: PickType,
  logger: LoggerType): RespondentType[] => {
  var respondent = selector(respondents)

  if (respondent === null) {
    logger.info('Call center has no respondents')
    return respondents
  }

  const escalatedRespondent = maybeEscalate(respondent, {} as unknown as LoggerType)

  if (escalatedRespondent === null) {
    return respondents
  }

  const updatedRespondent = pick(escalatedRespondent, {} as unknown as LoggerType)
  const index = respondents.indexOf(escalatedRespondent)
  respondents[index] = updatedRespondent

  return respondents
}

export {
  dispatcher,
  SelectorType,
  MaybeEscalateType,
  PickType,
}
