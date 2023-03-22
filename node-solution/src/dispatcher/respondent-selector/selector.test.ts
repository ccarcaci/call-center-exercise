import { selector } from './selector'
import { RespondentType } from '../../types/respondent-type'

test('no respondents', () => {
  const respondents: RespondentType[] = []
  const result = selector(respondents)

  expect(result).toBe(null)
})

test('select lazyest respondent', () => {
  const respondents: RespondentType[] = [
    {
      name: 'Anna',
      calls: 1,
      busy: false,
    },
    {
      name: 'Tim',
      calls: 0,
      busy: false,
    },
  ]

  const result = selector(respondents)

  expect(JSON.stringify(result)).toBe(
    JSON.stringify({
      name: 'Tim',
      calls: 0,
      busy: false,
    })
  )
})
