export type RespondentType = {
  name: string
  calls: number
  busy: boolean
  busyTime: number
  supervisor?: RespondentType
}
