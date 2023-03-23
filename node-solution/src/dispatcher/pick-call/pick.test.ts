import { test, expect } from '@jest/globals'

import { pick } from './pick'
import { RespondentType } from '../../types/respondent-type'
import { LoggerType } from '../../types/logger-type'

test('Respondent is able to pick the call', () => {
  const respondent: RespondentType = {
    name: 'Tom',
    calls: 0,
    busy: false,
  }
  let loggerInfoCalls = 0
  let loggerMessage = ""
  const loggerMock: LoggerType = {
    info: (message: string): void => {
      loggerInfoCalls++
      loggerMessage = message
    }
  }

  const result = pick(respondent, loggerMock)

  expect(loggerInfoCalls).toBe(1)
  expect(loggerMessage).toBe('Tom pick the call')
  expect(JSON.stringify(result)).toBe(JSON.stringify({
    name: 'Tom',
    calls: 1,
    busy: true,
  }))
})
