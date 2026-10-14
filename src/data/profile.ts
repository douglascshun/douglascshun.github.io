import type { Loc } from '../i18n/useLoc'

export const profile = {
  name: 'Douglas Cshunderlick',
  handle: 'douglascshun',
  alias: 'r4bbi7',
  avatar: 'https://github.com/douglascshun.png',
  role: {
    pt: 'Engenheiro de Software · Segurança Ofensiva / Red Team · AppSec',
    en: 'Software Engineer · Offensive Security / Red Team · AppSec',
  } as Loc,
  bio: {
    pt: [
      'Engenheiro de software voltado para Segurança Ofensiva e Governança. Atuo em pentests autorizados, análise de vulnerabilidades e desenvolvimento de ferramentas próprias, unindo mentalidade Red Team com defesa em profundidade.',
      'Top 6% no ranking global do TryHackMe e em preparação para o OSCP. Gosto de automatizar o tedioso, documentar o achado e transformar conhecimento técnico em conteúdo que a comunidade usa.',
    ],
    en: [
      'Software engineer focused on Offensive Security and Governance. I run authorized pentests, vulnerability analysis and build custom tooling, pairing a Red Team mindset with defense in depth.',
      'Top 6% on TryHackMe worldwide and preparing for the OSCP. I automate the tedious, document the finding, and turn technical knowledge into content the community actually uses.',
    ],
  } as Loc<string[]>,
  stats: [
    { value: 6, suffix: '%', label: { pt: 'Top TryHackMe', en: 'Top TryHackMe' } as Loc },
    { value: 4, suffix: '+', label: { pt: 'Projetos públicos', en: 'Public projects' } as Loc },
    { value: 256, suffix: '+', label: { pt: 'Aulas documentadas', en: 'Lessons documented' } as Loc },
    { value: 10, suffix: '+', label: { pt: 'Certificações', en: 'Certifications' } as Loc },
  ],
  contacts: [
    { kind: 'github', label: 'GitHub', value: '@douglascshun', href: 'https://github.com/douglascshun' },
    {
      kind: 'linkedin',
      label: 'LinkedIn',
      value: 'cshunderlick',
      href: 'https://www.linkedin.com/in/cshunderlick/',
    },
    { kind: 'tryhackme', label: 'TryHackMe', value: 'D.r4bbi7', href: 'https://tryhackme.com/p/D.r4bbi7' },
    { kind: 'email', label: 'Email', value: 'douglascshunderlick@gmail.com', href: 'mailto:douglascshunderlick@gmail.com' },
    { kind: 'whatsapp', label: 'WhatsApp', value: '(12) 98237-1002', href: 'https://wa.me/5512982371002' },
    { kind: 'services', label: 'Serviços', value: 'site-servicos.douglascshunderlick.workers.dev', href: 'https://site-servicos.douglascshunderlick.workers.dev' },
  ],
}

export type TimelineItem = {
  year: string
  title: Loc
  body: Loc
  tag: 'edu' | 'offensive' | 'build' | 'win'
}

export const timeline: TimelineItem[] = [
  {
    year: '2025',
    tag: 'offensive',
    title: { pt: 'Imersão em Segurança Ofensiva', en: 'Diving into Offensive Security' },
    body: {
      pt: 'Início da jornada prática em pentest: labs no TryHackMe e HackTheBox, enumeração, exploração e privilege escalation em Linux.',
      en: 'Hands-on pentest journey begins: TryHackMe and HackTheBox labs, enumeration, exploitation and Linux privilege escalation.',
    },
  },
  {
    year: '2025',
    tag: 'win',
    title: { pt: 'Top 6% no TryHackMe', en: 'Top 6% on TryHackMe' },
    body: {
      pt: 'Entrada no top 6% global do ranking, com relatórios profissionais de comprometimento (Poster, Meow) documentados.',
      en: 'Reached the global top 6%, with professional compromise reports (Poster, Meow) documented.',
    },
  },
  {
    year: '2026',
    tag: 'edu',
    title: { pt: 'MBA em Segurança da Informação', en: 'MBA in Information Security' },
    body: {
      pt: 'Pós-graduação cobrindo do networking à governança (LGPD/GDPR), CyberOps, CSIRT, Cloud e IoT security. Módulos 1-3 concluídos.',
      en: 'Graduate program spanning networking to governance (LGPD/GDPR), CyberOps, CSIRT, Cloud and IoT security. Modules 1-3 completed.',
    },
  },
  {
    year: '2026',
    tag: 'build',
    title: { pt: 'Ferramentas & automação própria', en: 'Custom tooling & automation' },
    body: {
      pt: 'Desenvolvimento de ferramentas: automação de conteúdo com IA, cyber range P2P monitorado e scanner de bug hunting.',
      en: 'Built tooling: AI content automation, a monitored P2P cyber range and a bug-hunting scanner.',
    },
  },
  {
    year: 'now',
    tag: 'offensive',
    title: { pt: 'Preparação OSCP', en: 'OSCP preparation' },
    body: {
      pt: 'Foco atual: aprofundar exploração, Active Directory e web pentest rumo à certificação OSCP.',
      en: 'Current focus: deepening exploitation, Active Directory and web pentest toward the OSCP.',
    },
  },
]
