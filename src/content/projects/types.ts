import type { Loc } from '../../i18n/useLoc'

export type ProblemRow = { challenge: Loc; solution: Loc; benefit?: Loc }
export type Highlight = { title: Loc; body: Loc }
export type Metric = { label: Loc; value: string }
export type Prose = { title: Loc; body: Loc<string[]> }

export type ProjectContent = {
  overview: Loc<string[]>
  metrics?: Metric[]
  problem?: ProblemRow[]
  highlights: Highlight[]
  sections?: Prose[]
}
