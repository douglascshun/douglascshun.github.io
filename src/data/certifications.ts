import type { Loc } from '../i18n/useLoc'

export type Cert = {
  name: string
  issuer: string
  /** Mês de emissão, AAAA-MM (igual ao LinkedIn). */
  issued?: string
  url?: string
  note?: Loc
  status: 'done' | 'progress'
}

const MICRO: Loc = {
  pt: 'Micro certificado · Pós em Segurança da Informação',
  en: 'Micro-credential · Postgraduate in Information Security',
}
const UNI = 'Uniamérica'
const CISCO = 'Cisco Networking Academy'
const CYBRARY = 'Cybrary'
const CISA = 'CISA'
const credly = (id: string) => `https://www.credly.com/badges/${id}`
const CYBRARY_PERFIL = 'https://app.cybrary.it/profile/DevelopedCondor7752'
// Fallback: certificados sem credencial pública (ex.: micro-certs da Uniamérica,
// que no LinkedIn têm só a imagem) apontam para a seção de certificados do perfil.
// O LinkedIn não expõe URL pública por item, então este é o destino possível.
const LINKEDIN_CERTS = 'https://www.linkedin.com/in/cshunderlick/details/certifications/'

/** Fonte: LinkedIn > Licenças e certificados (34 itens, conferido em 14/10/2026).
 *  Ordem: em andamento, depois mais recente primeiro (a ordenação é feita aqui embaixo). */
const lista: Cert[] = [
  { name: 'OSCP', issuer: 'OffSec', status: 'progress', note: { pt: 'Em preparação', en: 'In preparation' } },
  { name: 'TryHackMe · Top 6%', issuer: 'TryHackMe', status: 'done', url: 'https://tryhackme.com/p/D.r4bbi7', note: { pt: 'Ranking global', en: 'Global ranking' } },

  // Pós em Segurança da Informação (Uniamérica)
  { name: 'Data Mapping and Privacy Governance', issuer: UNI, issued: '2026-05', status: 'done', note: MICRO },
  { name: 'Privacy and Data Protection', issuer: UNI, issued: '2026-05', status: 'done', note: MICRO },
  { name: 'Computer Security Incident Response Teams', issuer: UNI, issued: '2026-04', status: 'done', note: MICRO },
  { name: 'IoT Security', issuer: UNI, issued: '2026-04', status: 'done', note: MICRO },
  { name: 'Cloud Security', issuer: UNI, issued: '2026-03', status: 'done', note: MICRO },
  { name: 'Network Security', issuer: UNI, issued: '2026-03', status: 'done', note: MICRO },
  { name: 'CyberOps', issuer: UNI, issued: '2026-03', status: 'done', note: MICRO },
  { name: 'Cyber Threat Management', issuer: UNI, issued: '2026-02', status: 'done', note: MICRO },
  { name: 'Endpoint Security', issuer: UNI, issued: '2026-02', status: 'done', note: MICRO },
  { name: 'Network Defense', issuer: UNI, issued: '2026-02', status: 'done', note: MICRO },
  { name: 'Networking Essentials', issuer: UNI, issued: '2026-02', status: 'done', note: MICRO },
  { name: 'Cybersecurity Essentials', issuer: UNI, issued: '2026-01', status: 'done', note: MICRO },

  // Universidades e órgãos
  { name: "CS50's Introduction to Cybersecurity", issuer: 'Harvard University', issued: '2026-02', status: 'done' },
  {
    name: 'Introduction to Engineering Concepts',
    issuer: 'MIT',
    issued: '2026-02',
    status: 'done',
    url: 'https://ocw.mit.edu/courses/res.ll-004-ll-educate-introduction-to-engineering-concepts-spring-2022/',
  },
  { name: 'NIST RMF Course V2', issuer: 'NIST', issued: '2026-02', status: 'done' },
  { name: 'Pre Security', issuer: 'TryHackMe', issued: '2026-02', status: 'done', url: 'https://tryhackme.com/certificate/THM-RKFWK0O6CF' },
  { name: 'Ameaças à segurança cibernética de sistemas de controle industrial', issuer: CISA, issued: '2025-11', status: 'done' },
  { name: 'Influência dos componentes de TI em sistemas de controle industrial', issuer: CISA, issued: '2025-11', status: 'done' },
  { name: 'Gerenciamento de ameaças cibernéticas', issuer: 'Instituto Militar de Engenharia', issued: '2025-10', status: 'done' },
  { name: 'FIAP Connect Summit', issuer: 'FIAP', issued: '2025-10', status: 'done' },

  // Cisco Networking Academy
  { name: 'Hacker Ético', issuer: CISCO, issued: '2025-06', status: 'done', url: credly('feb87068-d685-4636-8246-b32ccef92b82') },
  { name: 'Analista Júnior em Cibersegurança', issuer: CISCO, issued: '2025-06', status: 'done', url: credly('4c60716f-30fc-45eb-aaf1-0ae970ae1da8') },
  { name: 'Cyber Threat Management', issuer: CISCO, issued: '2025-06', status: 'done', url: credly('214ff41b-02f2-4921-b441-4f46e4374727') },
  { name: 'Network Defense', issuer: CISCO, issued: '2025-06', status: 'done', url: credly('394dd30b-3a5f-4149-977b-00b2c478f580') },
  { name: 'Networking Devices and Configuration', issuer: CISCO, issued: '2025-06', status: 'done', url: credly('9083f8c6-d5ea-450a-b823-edd349e7109a') },
  { name: 'Introduction to Cybersecurity', issuer: CISCO, issued: '2025-04', status: 'done', url: credly('3f221405-7540-4c31-99f2-de907621b7af') },
  { name: 'Linux Unhatched', issuer: CISCO, issued: '2025-04', status: 'done', url: credly('36e4a51d-fc99-4765-b978-a56c2bc5ad06') },
  { name: 'Cisco Networking', issuer: CISCO, issued: '2024-10', status: 'done', url: credly('49c03062-2709-45b6-9187-e197060e3a91') },
  { name: 'Networking Academy Learn-A-Thon 2024', issuer: CISCO, issued: '2024-10', status: 'done', url: credly('c3b6f98a-8df5-4478-bf70-03b80bdd4c40') },
  { name: 'Endpoint Security', issuer: CISCO, issued: '2024-09', status: 'done', url: credly('b5fdf96f-9b0c-4877-8aa1-ed35aa602c12') },

  // Cybrary
  { name: 'OSINT', issuer: CYBRARY, issued: '2024-09', status: 'done', url: 'https://app.cybrary.it/courses/api/certificate/CC-cde22e22-8888-46b2-aafd-17199c22e85f/view' },
  { name: 'Offensive Security Operations', issuer: CYBRARY, issued: '2024-09', status: 'done', url: CYBRARY_PERFIL },
  { name: 'Cyber Kill Chains', issuer: CYBRARY, issued: '2024-09', status: 'done', url: CYBRARY_PERFIL },
  { name: 'Reconnaissance and Enumeration Basics', issuer: CYBRARY, issued: '2024-09', status: 'done', url: CYBRARY_PERFIL },
]

export const certifications: Cert[] = [...lista]
  // Certificado concluído sem credencial própria cai na seção de certificados do LinkedIn.
  // Em andamento (ex.: OSCP) fica sem link, porque ainda não há credencial.
  .map((c) => (c.url || c.status === 'progress' ? c : { ...c, url: LINKEDIN_CERTS }))
  .sort((a, b) => {
    if (a.status !== b.status) return a.status === 'progress' ? -1 : 1
    return (b.issued ?? '9999').localeCompare(a.issued ?? '9999')
  })

/** Emissores na ordem em que aparecem nos filtros (mais certificados primeiro). */
export const issuers: string[] = Object.entries(
  certifications.reduce<Record<string, number>>((acc, c) => ({ ...acc, [c.issuer]: (acc[c.issuer] ?? 0) + 1 }), {}),
)
  .sort((a, b) => b[1] - a[1])
  .map(([k]) => k)
