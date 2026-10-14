import type { Loc } from '../i18n/useLoc'

export type CourseStatus = 'done' | 'progress' | 'planned'

export type Module = {
  id: string
  status: CourseStatus
  title: Loc
  disciplines: Loc<string[]>
}

/** Módulos do MBA em Segurança da Informação (repo PosSegurancaDaInformacao). */
export const modules: Module[] = [
  {
    id: '01',
    status: 'done',
    title: { pt: 'Módulo 1 · Fundamentos', en: 'Module 1 · Foundations' },
    disciplines: {
      pt: ['Networking Essentials', 'Cybersecurity Essentials', 'Endpoint Security', 'Network Defense'],
      en: ['Networking Essentials', 'Cybersecurity Essentials', 'Endpoint Security', 'Network Defense'],
    },
  },
  {
    id: '02',
    status: 'progress',
    title: { pt: 'Módulo 2 · Técnico & Operacional', en: 'Module 2 · Technical & Operational' },
    disciplines: {
      pt: ['Cloud Security', 'Cyber Threat Management', 'CyberOps', 'Network Security'],
      en: ['Cloud Security', 'Cyber Threat Management', 'CyberOps', 'Network Security'],
    },
  },
  {
    id: '03',
    status: 'progress',
    title: { pt: 'Módulo 3 · Avançado & Compliance', en: 'Module 3 · Advanced & Compliance' },
    disciplines: {
      pt: ['CSIRT', 'Fundamentos de IoT', 'Privacy & Data Protection', 'Data Mapping & Privacy Governance'],
      en: ['CSIRT', 'IoT Fundamentals', 'Privacy & Data Protection', 'Data Mapping & Privacy Governance'],
    },
  },
  {
    id: '04',
    status: 'planned',
    title: { pt: 'Módulo 4 · Tópicos Especiais', en: 'Module 4 · Special Topics' },
    disciplines: {
      pt: ['Tópicos Especiais de Tecnologia', 'Carreira & Diversidade', 'Gestão e Atualidades'],
      en: ['Special Topics in Technology', 'Career & Diversity', 'Management & Current Affairs'],
    },
  },
]
