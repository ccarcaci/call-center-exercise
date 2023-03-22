export type RespondentType = {
  name: string
  calls: number
  busy: boolean
  supervisor?: RespondentType
}
