import { setTimeout } from 'timers'

import { dispatcher } from './dispatcher/dispatcher'
import { maybeEscalate } from './dispatcher/escalate/maybe-escalate'
import { pick } from './dispatcher/pick-call/pick'
import { selector } from './dispatcher/respondent-selector/selector'
import { randomer } from './tick/set-free/randomer'
import { setFree } from './tick/set-free/set-free'
import { tick } from './tick/tick'
import { RespondentType } from './types/respondent-type'

let director: RespondentType = {
  name: 'Sarah',
  busy: false,
  busyTime: 0,
  calls: 0,
}
let managers: RespondentType[] = [
  {
    name: 'Rob',
    busy: false,
    busyTime: 0,
    calls: 0,
    supervisor: director,
  },
  {
    name: 'Elisa',
    busy: false,
    busyTime: 0,
    calls: 0,
    supervisor: director,
  },
  {
    name: 'Sam',
    busy: false,
    busyTime: 0,
    calls: 0,
    supervisor: director,
  },
]
let respondents: RespondentType[] = [
  {
    name: 'Ramiro',
    busy: true,
    busyTime: 0,
    calls: 1,
    supervisor: managers[0],
  },
  {
    name: 'Tom',
    busy: true,
    busyTime: 0,
    calls: 1,
    supervisor: managers[1],
  },
  {
    name: 'Lucas',
    busy: true,
    busyTime: 0,
    calls: 1,
    supervisor: managers[2],
  },
  {
    name: 'Anita',
    busy: true,
    busyTime: 0,
    calls: 1,
    supervisor: managers[0],
  },
  {
    name: 'Sabrina',
    busy: true,
    busyTime: 0,
    calls: 1,
    supervisor: managers[1],
  },
  {
    name: 'Luke',
    busy: true,
    busyTime: 0,
    calls: 1,
    supervisor: managers[2],
  },
  {
    name: 'Andrea',
    busy: true,
    busyTime: 0,
    calls: 1,
    supervisor: managers[0],
  },
  {
    name: 'Josh',
    busy: true,
    busyTime: 0,
    calls: 1,
    supervisor: managers[1],
  },
  {
    name: 'Samantha',
    busy: true,
    busyTime: 0,
    calls: 1,
    supervisor: managers[2],
  },
  {
    name: 'Ivan',
    busy: true,
    busyTime: 0,
    calls: 1,
    supervisor: managers[0],
  },
  {
    name: 'Cal',
    busy: true,
    busyTime: 0,
    calls: 1,
    supervisor: managers[1],
  },
  {
    name: 'Hugo',
    busy: false,
    busyTime: 0,
    calls: 0,
    supervisor: managers[2],
  },
  {
    name: 'Juan',
    busy: false,
    busyTime: 0,
    calls: 0,
    supervisor: managers[0],
  },
  {
    name: 'William',
    busy: false,
    busyTime: 0,
    calls: 0,
    supervisor: managers[1],
  },
  {
    name: 'Tina',
    busy: false,
    busyTime: 0,
    calls: 0,
    supervisor: managers[2],
  },
]

let totalCalls = 200
const sleep = async () => new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));

(async () => {
while(--totalCalls > 0) {
  await sleep()
  console.info('\nIncoming call')
  dispatcher(
    respondents,
    selector,
    maybeEscalate,
    pick,
    console)
  respondents = tick(
    respondents,
    setFree(randomer),
    console)
  managers = tick(
    managers,
    setFree(randomer),
    console)
  director = tick(
    [ director ],
    setFree(randomer),
    console)[0]
}
})()
