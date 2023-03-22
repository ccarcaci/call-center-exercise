import { escalate } from './escalate'
import { RespondentType } from '../../types/respondent-type'

test('Respondent is able to pick the call, no escalation', () => {
  const supervisor: RespondentType = {
    name: 'Sarah',
    busy: false,
    calls: 0,
  }
  const respondent: RespondentType = {
    name: 'Tim',
    busy: false,
    calls: 0,
    supervisor,
  }

  const result = escalate(respondent)

  expect(JSON.stringify(result)).toBe(JSON.stringify(respondent))
})

test('Escalate call to supervisor', () => {
  const supervisor: RespondentType = {
    name: 'Sarah',
    busy: false,
    calls: 0,
  }
  const respondent: RespondentType = {
    name: 'Tim',
    busy: true,
    calls: 0,
    supervisor,
  }

  const result = escalate(respondent)

  expect(JSON.stringify(result)).toBe(JSON.stringify(supervisor))
})

test('Supervisor is busy', () => {
  const supervisor: RespondentType = {
    name: 'Sarah',
    busy: true,
    calls: 0,
  }
  const respondent: RespondentType = {
    name: 'Tim',
    busy: true,
    calls: 0,
    supervisor,
  }

  const result = escalate(respondent)

  expect(result).toBeNull()
})
