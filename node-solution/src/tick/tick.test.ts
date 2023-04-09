import { test, expect } from '@jest/globals'

import { RespondentType } from '../types/respondent-type'
import { tick } from './tick'

test('Time tick with free respondent', () => {
  const respondents: RespondentType[] = [{
    name: 'Tim',
    calls: 0,
    busy: false,
    busyTime: 0,
  }]
  const setFree = () => true

  const results = tick(respondents, setFree)

  expect(results[0].busyTime).toBe(0)
})

test('Time tick with only one respondent', () => {
  const respondents: RespondentType[] = [{
    name: 'Tim',
    calls: 0,
    busy: true,
    busyTime: 0,
  }]
  let setFreeCalls = 0
  let setFreeParam
  const setFree = (respondent: RespondentType): boolean => {
    setFreeCalls++
    setFreeParam = respondent
    return false
  }

  const results = tick(respondents, setFree)

  expect(results[0].busyTime).toBe(1)
  expect(setFreeCalls).toBe(1)
  expect(JSON.stringify(setFreeParam)).toBe(JSON.stringify(respondents[0]))
})

test('Time tick with two respondents', () => {
  const respondents: RespondentType[] = [
    {
      name: 'Tim',
      calls: 0,
      busy: true,
      busyTime: 0,
    },
    {
      name: 'Anita',
      calls: 0,
      busy: true,
      busyTime: 42,
    },
  ]
  let setFreeCalls = 0
  let setFreeParams: RespondentType[] = []
  const setFree = (respondent: RespondentType): boolean => {
    setFreeCalls++
    setFreeParams = [ ...setFreeParams, respondent ]
    return true
  }

  const results = tick(respondents, setFree)

  expect(results[0].busyTime).toBe(1)
  expect(results[1].busyTime).toBe(43)
  expect(setFreeCalls).toBe(2)
  expect(JSON.stringify(setFreeParams)).toBe(JSON.stringify(respondents))
})
