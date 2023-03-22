import { test, expect } from '@jest/globals'
import { LoggerType } from '../types/logger-type'
import { RespondentType } from '../types/respondent-type'
import { dispatcher, SelectorType } from './dispatcher'

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

test.todo('a respondent picks the call')
