import type { Loc } from '../i18n/useLoc'

export type Cert = {
  name: string
  issuer: string
  note?: Loc
  status: 'done' | 'progress'
}

export const certifications: Cert[] = [
  { name: 'CS50 Cybersecurity', issuer: 'Harvard University', status: 'done' },
  { name: 'Introduction to Engineering Concepts', issuer: 'MIT', status: 'done' },
  { name: 'NIST Risk Management Framework', issuer: 'NIST', status: 'done' },
  { name: 'CISA · Fundamentos', issuer: 'CISA', status: 'done' },
  { name: 'Networking Academy (múltiplos)', issuer: 'Cisco', status: 'done' },
  {
    name: 'TryHackMe · Top 6%',
    issuer: 'TryHackMe',
    status: 'done',
    note: { pt: 'Ranking global', en: 'Global ranking' },
  },
  {
    name: 'OSCP',
    issuer: 'OffSec',
    status: 'progress',
    note: { pt: 'Em preparação', en: 'In preparation' },
  },
]
