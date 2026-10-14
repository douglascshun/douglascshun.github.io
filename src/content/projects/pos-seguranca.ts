import type { ProjectContent } from './types'

export const posSeguranca: ProjectContent = {
  overview: {
    pt: [
      'Repositório central de estudos do MBA em Segurança da Informação: resumos técnicos, mapas mentais e documentação prática, organizados em 4 módulos.',
      'Funciona como base de consulta rápida para o dia a dia profissional, da comunicação de dados às operações avançadas de segurança, sempre alinhado a frameworks reais (ISO/ABNT, NIST, CERT, OWASP, LGPD/GDPR).',
    ],
    en: [
      'Central knowledge base from the MBA in Information Security: technical summaries, mind maps and practical docs, organized into 4 modules.',
      'It serves as a quick reference for daily professional work, from data communication to advanced security operations, always aligned with real frameworks (ISO/ABNT, NIST, CERT, OWASP, LGPD/GDPR).',
    ],
  },
  metrics: [
    { label: { pt: 'Módulos', en: 'Modules' }, value: '4' },
    { label: { pt: 'Disciplinas', en: 'Disciplines' }, value: '32+' },
    { label: { pt: 'Aulas', en: 'Lessons' }, value: '256+' },
    { label: { pt: 'Status', en: 'Status' }, value: '3/4' },
  ],
  highlights: [
    {
      title: { pt: 'Cobertura 360°', en: '360° coverage' },
      body: {
        pt: 'Do networking à governança (GRC), da defesa à ofensiva, do endpoint à nuvem e IoT.',
        en: 'From networking to governance (GRC), defense to offense, endpoint to cloud and IoT.',
      },
    },
    {
      title: { pt: 'Alinhado a frameworks', en: 'Framework-aligned' },
      body: {
        pt: 'ISO/ABNT, NIST, CERT, OWASP e ênfase regulatória em LGPD/GDPR desde as disciplinas essenciais.',
        en: 'ISO/ABNT, NIST, CERT, OWASP and a regulatory emphasis on LGPD/GDPR from the core disciplines.',
      },
    },
    {
      title: { pt: 'Estrutura modular', en: 'Modular structure' },
      body: {
        pt: 'Progressão lógica dos fundamentos às operações avançadas, com colapsíveis por disciplina/aula.',
        en: 'Logical progression from fundamentals to advanced operations, with collapsibles per discipline/lesson.',
      },
    },
    {
      title: { pt: 'Teoria + prática', en: 'Theory + practice' },
      body: {
        pt: 'Inclui ferramentas (Cisco Packet Tracer, SIEM) e integra a automação que publica o conteúdo no LinkedIn.',
        en: 'Includes tools (Cisco Packet Tracer, SIEM) and integrates the automation that publishes the content to LinkedIn.',
      },
    },
  ],
  sections: [
    {
      title: { pt: 'Trilha dos módulos', en: 'Module track' },
      body: {
        pt: [
          'Módulo 1 (concluído): Networking, Cybersecurity Essentials, Endpoint Security, Network Defense.',
          'Módulos 2 e 3 (em progresso): Cloud Security, Threat Management, CyberOps, Network Security, CSIRT, IoT, Privacy & Data Governance.',
          'Módulo 4 (a iniciar): Tópicos Especiais, Carreira e Atualidades.',
        ],
        en: [
          'Module 1 (done): Networking, Cybersecurity Essentials, Endpoint Security, Network Defense.',
          'Modules 2 and 3 (in progress): Cloud Security, Threat Management, CyberOps, Network Security, CSIRT, IoT, Privacy & Data Governance.',
          'Module 4 (upcoming): Special Topics, Career and Current Affairs.',
        ],
      },
    },
  ],
}
