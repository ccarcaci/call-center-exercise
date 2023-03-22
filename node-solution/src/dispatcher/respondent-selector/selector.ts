import { RespondentType } from '../../types/respondent-type'

const selector = (respondents: RespondentType[]): RespondentType | null => {
  if (respondents.length <= 0) {
    return null
  }

  const selectedRespondent = respondents.sort((respondent, respondent2) => respondent.calls - respondent2.calls)[0]
  return selectedRespondent
}

export { selector }
