import { test, expect } from '@jest/globals'

import { RespondentType } from '../../types/respondent-type'
import { setFree } from './set-free'

test('Respondent is 21s busy, set free is true', () => {
  let randomerCalls = 0
  const randomer = (): number => {
    randomerCalls++
    return 0
  }
  const respondent: RespondentType = {
    busy: true,
    busyTime: 21,
    calls: 1,
    name: 'Tim',
  }

  const result = setFree(respondent, randomer)

  expect(result).toBe(true)
  expect(randomerCalls).toBe(0)
})

test('Respondent is 20s busy, 91% chance, set free is false', () => {
  let randomerCalls = 0
  const randomer = (): number => {
    randomerCalls++
    return 91
  }
  const respondent: RespondentType = {
    busy: true,
    busyTime: 20,
    calls: 1,
    name: 'Tim',
  }

  const result = setFree(respondent, randomer)

  expect(result).toBe(false)
  expect(randomerCalls).toBe(1)
})

test('Respondent is 20s busy, 90% chance, set free is true', () => {
  let randomerCalls = 0
  const randomer = (): number => {
    randomerCalls++
    return 90
  }
  const respondent: RespondentType = {
    busy: true,
    busyTime: 20,
    calls: 1,
    name: 'Tim',
  }

  const result = setFree(respondent, randomer)

  expect(result).toBe(true)
  expect(randomerCalls).toBe(1)
})

test('Respondent is 10s busy, 51% chance, set free is false', () => {
  let randomerCalls = 0
  const randomer = (): number => {
    randomerCalls++
    return 51
  }
  const respondent: RespondentType = {
    busy: true,
    busyTime: 10,
    calls: 1,
    name: 'Tim',
  }

  const result = setFree(respondent, randomer)

  expect(result).toBe(false)
  expect(randomerCalls).toBe(1)
})

test('Respondent is 10s busy, 50% chance, set free is true', () => {
  let randomerCalls = 0
  const randomer = (): number => {
    randomerCalls++
    return 50
  }
  const respondent: RespondentType = {
    busy: true,
    busyTime: 10,
    calls: 1,
    name: 'Tim',
  }

  const result = setFree(respondent, randomer)

  expect(result).toBe(true)
  expect(randomerCalls).toBe(1)
})

test('Respondent is 6s busy, 11% chance, set free is false', () => {
  let randomerCalls = 0
  const randomer = (): number => {
    randomerCalls++
    return 11
  }
  const respondent: RespondentType = {
    busy: true,
    busyTime: 6,
    calls: 1,
    name: 'Tim',
  }

  const result = setFree(respondent, randomer)

  expect(result).toBe(false)
  expect(randomerCalls).toBe(1)
})

test('Respondent is 6s busy, 10% chance, set free is true', () => {
  let randomerCalls = 0
  const randomer = (): number => {
    randomerCalls++
    return 10
  }
  const respondent: RespondentType = {
    busy: true,
    busyTime: 6,
    calls: 1,
    name: 'Tim',
  }

  const result = setFree(respondent, randomer)

  expect(result).toBe(true)
  expect(randomerCalls).toBe(1)
})
