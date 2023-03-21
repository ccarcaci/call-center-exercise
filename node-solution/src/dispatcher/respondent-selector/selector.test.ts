import { selector } from './selector'

test('no respondents', () => {
  const respondents: unknown[] = []
  const result = selector(respondents)

  expect(result).toBe(null)
})
test.todo('select less busy respondent')
