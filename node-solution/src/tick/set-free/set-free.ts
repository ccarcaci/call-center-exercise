import { RespondentType } from '../../types/respondent-type'

export type RandomerFunctionType = () => number

const setFree = (respondent: RespondentType, randomer: RandomerFunctionType): boolean => {
  if(respondent.busyTime <= 6) {
    return randomer() <= 10
  }
  
  if(respondent.busyTime <= 10) {
    return randomer() <= 50
  }

  if(respondent.busyTime <= 20) {
    return randomer() <= 90
  }

  return true
}

export { setFree }
