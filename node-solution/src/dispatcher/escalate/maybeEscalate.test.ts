import { test, expect } from '@jest/globals'

import { maybeEscalate } from './maybeEscalate'
import { RespondentType } from '../../types/respondent-type'
import { LoggerType } from '../../types/logger-type'

test('Respondent is able to pick the call, no escalation', () => {
  const supervisor: RespondentType = {
    name: 'Sarah',
    busy: false,
    busyTime: 0,
    calls: 0,
  }
  const respondent: RespondentType = {
    name: 'Tim',
    busy: false,
    busyTime: 0,
    calls: 0,
    supervisor,
  }
  let loggerInfoCalls = 0
  const loggerMock: LoggerType = {
    info: (_: string): void => { loggerInfoCalls++ }
  }

  const result = maybeEscalate(respondent, loggerMock)

  expect(loggerInfoCalls).toBe(0)
  expect(JSON.stringify(result)).toBe(JSON.stringify(respondent))
})

test('Escalate call to supervisor', () => {
  const supervisor: RespondentType = {
    name: 'Sarah',
    busy: false,
    busyTime: 0,
    calls: 0,
  }
  const respondent: RespondentType = {
    name: 'Tim',
    busy: true,
    busyTime: 0,
    calls: 0,
    supervisor,
  }
  let loggerInfoCalls = 0
  let loggerMessage = ""
  const loggerMock: LoggerType = {
    info: (message: string): void => {
      loggerInfoCalls++
      loggerMessage = message
    }
  }

  const result = maybeEscalate(respondent, loggerMock)

  expect(loggerInfoCalls).toBe(1)
  expect(loggerMessage).toBe('Tim is busy, routed to supervisor')
  expect(JSON.stringify(result)).toBe(JSON.stringify(supervisor))
})

test('Supervisor is busy', () => {
  const supervisor: RespondentType = {
    name: 'Sarah',
    busy: true,
    busyTime: 0,
    calls: 0,
  }
  const respondent: RespondentType = {
    name: 'Tim',
    busy: true,
    busyTime: 0,
    calls: 0,
    supervisor,
  }
  let loggerInfoCalls = 0
  let loggerMessages: string[] = []
  const loggerMock: LoggerType = {
    info: (message: string): void => {
      loggerInfoCalls++
      loggerMessages = [ ...loggerMessages, message ]
    }
  }

  const result = maybeEscalate(respondent, loggerMock)

  expect(loggerInfoCalls).toBe(2)
  expect(loggerMessages[0]).toBe('Tim is busy, routed to supervisor')
  expect(loggerMessages[1]).toBe('Sarah has no supervisor and is busy, call rejected')
  expect(result).toBeNull()
})
