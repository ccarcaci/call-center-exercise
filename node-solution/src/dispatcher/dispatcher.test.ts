import { test, expect } from '@jest/globals'

import { LoggerType } from '../types/logger-type'
import { RespondentType } from '../types/respondent-type'
import { dispatcher, MaybeEscalateType, PickType, SelectorType } from './dispatcher'

test('there are no respondents', () => {
  const respondents: RespondentType[] = []
  let selectorCalls = 0
  const selectorMock: SelectorType = (_: RespondentType[]): RespondentType | null => {
    selectorCalls++
    return null
  }
  let loggerInfoCalls = 0
  let loggerMessage = ""
  const loggerMock: LoggerType = {
    info: (message: string): void => {
      loggerInfoCalls++
      loggerMessage = message
    }
  }

  dispatcher(respondents, selectorMock, () => null, () => ({}) as unknown as RespondentType, loggerMock)

  expect(selectorCalls).toBe(1)
  expect(loggerInfoCalls).toBe(1)
  expect(loggerMessage).toBe('Call center has no respondents')
})

test('no possibility to escalate', () => {
  const respondents: RespondentType[] = [{
    name: 'Rodrigo',
    calls: 0,
    busy: false,
    busyTime: 0,
  }]
  let selectorCalls = 0
  const selectorMock: SelectorType = (_: RespondentType[]): RespondentType | null => {
    selectorCalls++
    return respondents[0]
  }
  let escalateCalls = 0
  const escalateMock: MaybeEscalateType = (_: RespondentType): RespondentType | null => {
    escalateCalls++
    return null
  }

  dispatcher(respondents, selectorMock, escalateMock, () => ({}) as unknown as RespondentType, {} as unknown as LoggerType)

  expect(selectorCalls).toBe(1)
  expect(escalateCalls).toBe(1)
})

test('a respondent picks the call', () => {
  const respondents: RespondentType[] = [{
    name: 'Rodrigo',
    calls: 0,
    busy: false,
    busyTime: 0,
  }]
  let selectorCalls = 0
  const selectorMock: SelectorType = (_: RespondentType[]): RespondentType | null => {
    selectorCalls++
    return respondents[0]
  }
  let escalateCalls = 0
  const escalateMock: MaybeEscalateType = (_: RespondentType): RespondentType | null => {
    escalateCalls++
    return respondents[0]
  }
  let pickCalls = 0
  const pickMock: PickType = (_: RespondentType): RespondentType => {
    pickCalls++
    return {
      name: 'Rodrigo',
      calls: 1,
      busy: true,
      busyTime: 0,
    }
  }

  const result = dispatcher(respondents, selectorMock, escalateMock, pickMock, {} as unknown as LoggerType)

  expect(selectorCalls).toBe(1)
  expect(escalateCalls).toBe(1)
  expect(pickCalls).toBe(1)
  expect(JSON.stringify(result)).toBe(JSON.stringify([{
    name: 'Rodrigo',
    calls: 1,
    busy: true,
    busyTime: 0,
  }]))
})
