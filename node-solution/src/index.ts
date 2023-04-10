import { dispatcher } from './dispatcher/dispatcher'
import { maybeEscalate } from './dispatcher/escalate/maybe-escalate'
import { pick } from './dispatcher/pick-call/pick'
import { selector } from './dispatcher/respondent-selector/selector'
import { randomer } from './tick/set-free/randomer'
import { setFree } from './tick/set-free/set-free'
import { tick } from './tick/tick'
import { RespondentType } from './types/respondent-type'

let respondents: RespondentType[] = [{}]

let totalCalls = 100

while(--totalCalls > 0) {
  // Wait 1s
  console.info('Incoming call')
  respondents = dispatcher(
    respondents,
    selector,
    maybeEscalate,
    pick,
    console)
  respondents = tick(
    respondents,
    setFree(randomer))
}
