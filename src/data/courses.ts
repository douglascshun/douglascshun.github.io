import type { Loc } from '../i18n/useLoc'

export type CourseStatus = 'done' | 'progress' | 'planned'

export type Module = {
  id: string
  /** Número exibido (01, 02...). */
  n: string
  program: Loc
  status: CourseStatus
  title: Loc
  disciplines: Loc<string[]>
}

/** Módulos das duas pós (repos PosSegurancaDaInformacao e PosEngenhariaDeSoftware). */
export const modules: Module[] = [
  {
    id: 'sec-01',
    n: '01',
    program: { pt: 'MBA em Segurança da Informação · Uniamérica', en: 'MBA in Information Security · Uniamérica' },
    status: 'done',
    title: { pt: 'Módulo 1 · Fundamentos', en: 'Module 1 · Foundations' },
    disciplines: {
      pt: ['Networking Essentials', 'Cybersecurity Essentials', 'Endpoint Security', 'Network Defense'],
      en: ['Networking Essentials', 'Cybersecurity Essentials', 'Endpoint Security', 'Network Defense'],
    },
  },
  {
    id: 'sec-02',
    n: '02',
    program: { pt: 'MBA em Segurança da Informação · Uniamérica', en: 'MBA in Information Security · Uniamérica' },
    status: 'done',
    title: { pt: 'Módulo 2 · Técnico & Operacional', en: 'Module 2 · Technical & Operational' },
    disciplines: {
      pt: ['Cloud Security', 'Cyber Threat Management', 'CyberOps', 'Network Security'],
      en: ['Cloud Security', 'Cyber Threat Management', 'CyberOps', 'Network Security'],
    },
  },
  {
    id: 'sec-03',
    n: '03',
    program: { pt: 'MBA em Segurança da Informação · Uniamérica', en: 'MBA in Information Security · Uniamérica' },
    status: 'done',
    title: { pt: 'Módulo 3 · Avançado & Compliance', en: 'Module 3 · Advanced & Compliance' },
    disciplines: {
      pt: ['CSIRT', 'Fundamentos de IoT', 'Privacy & Data Protection', 'Data Mapping & Privacy Governance'],
      en: ['CSIRT', 'IoT Fundamentals', 'Privacy & Data Protection', 'Data Mapping & Privacy Governance'],
    },
  },
  {
    id: 'sec-04',
    n: '04',
    program: { pt: 'MBA em Segurança da Informação · Uniamérica', en: 'MBA in Information Security · Uniamérica' },
    status: 'planned',
    title: { pt: 'Módulo 4 · Tópicos Especiais', en: 'Module 4 · Special Topics' },
    disciplines: {
      pt: ['Tópicos Especiais de Tecnologia', 'Carreira & Diversidade', 'Gestão e Atualidades'],
      en: ['Special Topics in Technology', 'Career & Diversity', 'Management & Current Affairs'],
    },
  },
  {
    id: 'eng-01',
    n: '01',
    program: { pt: 'Pós em Engenharia de Software · Uniamérica', en: 'Postgraduate in Software Engineering · Uniamérica' },
    status: 'progress',
    title: { pt: 'Módulo 1 · Construção e gestão', en: 'Module 1 · Building & management' },
    disciplines: {
      pt: ['Lógica de Programação com Java', 'Metodologias de Desenvolvimento de Software', 'Interface de Software', 'Gerenciamento Avançado de Projetos'],
      en: ['Programming Logic with Java', 'Software Development Methodologies', 'Software Interface (UX/UI)', 'Advanced Project Management'],
    },
  },
  {
    id: 'eng-02',
    n: '02',
    program: { pt: 'Pós em Engenharia de Software · Uniamérica', en: 'Postgraduate in Software Engineering · Uniamérica' },
    status: 'planned',
    title: { pt: 'Módulo 2 · Dados e XP', en: 'Module 2 · Data & XP' },
    disciplines: {
      pt: ['Essencial DataBase', 'Estruturas de Dados para Sistemas Inteligentes', 'Arquitetura de BI e Big Data', 'Programação Extrema'],
      en: ['Database Essentials', 'Data Structures for Intelligent Systems', 'BI & Big Data Architecture', 'Extreme Programming (XP)'],
    },
  },
  {
    id: 'eng-03',
    n: '03',
    program: { pt: 'Pós em Engenharia de Software · Uniamérica', en: 'Postgraduate in Software Engineering · Uniamérica' },
    status: 'planned',
    title: { pt: 'Módulo 3 · Nuvem e análise', en: 'Module 3 · Cloud & analytics' },
    disciplines: {
      pt: ['Arquitetura e Modelagem de Dados', 'Análise de Dados e BI para Tomada de Decisão', 'Cloud diversity AWS', 'Plataformas para Desenvolvimento em Nuvem'],
      en: ['Data Architecture & Modeling', 'Data Analysis & BI for Decision Making', 'Cloud Diversity AWS', 'Cloud Development Platforms'],
    },
  },
]
