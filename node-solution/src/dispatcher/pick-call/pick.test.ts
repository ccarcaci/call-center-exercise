import { test, expect } from '@jest/globals'

import { pick } from './pick'
import { RespondentType } from '../../types/respondent-type'

test('Respondent is able to pick the call', () => {
  const respondent: RespondentType = {
    name: 'Tom',
    calls: 0,
    busy: false,
  }

  const result = pick(respondent)

  expect(JSON.stringify(result)).toBe(JSON.stringify({
    name: 'Tom',
    calls: 1,
    busy: true,
  }))
})
