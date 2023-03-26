import { test, expect } from '@jest/globals'

import { RespondentType } from '../types/respondent-type'

test('Time tick with only one respondent', () => {
  const respondents: RespondentType[] = [{
    name: 'Tim',
    calls: 0,
    busy: false,
    busyTime: 0,
  }]
  let setFreeCalls = 0
  let setFreeParam
  const setFree = (respondent: RespondentType): RespondentType => {
    setFreeCalls++
    setFreeParam = respondent
    return respondent
  }

  const result = tick(respondents, setFree)

  expect(respondents[0].busyTime).toBe(1)
  expect(setFreeCalls).toBe(1)
  expect(JSON.stringify(setFreeParam)).toBe(JSON.stringify(respondents[0]))
})

test('Time tick with two respondents', () => {
  const respondents: RespondentType[] = [
    {
      name: 'Tim',
      calls: 0,
      busy: false,
      busyTime: 0,
    },
    {
      name: 'Anita',
      calls: 0,
      busy: false,
      busyTime: 42,
    },
  ]
  let setFreeCalls = 0
  let setFreeParams: RespondentType[] = []
  const setFree = (respondent: RespondentType): RespondentType => {
    setFreeCalls++
    setFreeParams = [ ...setFreeParams, respondent ]
    return respondent
  }

  const result = tick(respondents, setFree)

  expect(respondents[0].busyTime).toBe(1)
  expect(respondents[1].busyTime).toBe(43)
  expect(setFreeCalls).toBe(1)
  expect(JSON.stringify(setFreeParams)).toBe(JSON.stringify(respondents))
})
