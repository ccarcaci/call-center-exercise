import { RespondentType } from '../../types/respondent-type'

const pick = (respondent: RespondentType): RespondentType => ({
  ...respondent,
  busy: true,
  calls: respondent.calls + 1,
})

export { pick }
