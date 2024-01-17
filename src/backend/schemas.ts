import { z } from 'zod'

const NonEmptyString = z.string().min(1).brand('NonEmptyString')
type NonEmptyString = z.infer<typeof NonEmptyString>

const PositiveInteger = z.number().int().positive().brand('PositiveInteger')
type PositiveInteger = z.infer<typeof PositiveInteger>

export { NonEmptyString, PositiveInteger }
