import { RespondentType } from '../types/respondent-type'
import { escalate } from './escalate/escalate'
import { pick } from './pick-call/pick'
import { selector } from './respondent-selector/selector'

const dispatcher = (respondents: RespondentType[]): void => {
  var respondent = selector(respondents)

  if (respondent === null) {
    return
  }

  respondent = escalate(respondent)

  if (respondent === null) {
    return
  }

  respondent = pick(respondent)
}

export { dispatcher }
