import type { ProjectContent } from './types'

export const posEngenhariaSoftware: ProjectContent = {
  overview: {
    pt: [
      'Repositório da minha Pós-graduação em Engenharia de Software na União das Américas: código Java, anotações em Markdown e prints de execução, organizados por módulo, disciplina e aula.',
      'Complementa o lado ofensivo com o de construção: arquitetura, dados, nuvem e gestão de projetos, a base para criar sistemas resilientes desde o código.',
    ],
    en: [
      'Repository for my Postgraduate program in Software Engineering at União das Américas: Java code, Markdown notes and execution screenshots, organized by module, course and class.',
      'It complements the offensive side with the building side: architecture, data, cloud and project management, the foundation for resilient systems from the code up.',
    ],
  },
  metrics: [
    { label: { pt: 'Módulos', en: 'Modules' }, value: '3' },
    { label: { pt: 'Disciplinas', en: 'Courses' }, value: '12' },
    { label: { pt: 'Aulas', en: 'Lessons' }, value: '144' },
    { label: { pt: 'Idiomas do README', en: 'README languages' }, value: '3' },
  ],
  highlights: [
    {
      title: { pt: 'Sincroniza sozinho', en: 'Self-syncing' },
      body: {
        pt: 'Um LaunchAgent no macOS confere a pasta a cada 5 minutos e faz commit e push do que mudou, sem passo manual.',
        en: 'A macOS LaunchAgent checks the folder every 5 minutes and commits and pushes whatever changed, no manual step.',
      },
    },
    {
      title: { pt: 'README gerado das pastas', en: 'README generated from folders' },
      body: {
        pt: 'O índice, o progresso por módulo e os links de cada aula saem da própria árvore de diretórios, em PT, EN e ES.',
        en: 'The index, per-module progress and links to each class come from the directory tree itself, in PT, EN and ES.',
      },
    },
    {
      title: { pt: 'Privilégio mínimo no TCC', en: 'Least privilege under TCC' },
      body: {
        pt: 'O acesso a Documentos fica num applet dedicado, em vez de dar Acesso Total ao Disco para o /bin/bash.',
        en: 'Documents access is granted to a dedicated applet instead of giving Full Disk Access to /bin/bash.',
      },
    },
    {
      title: { pt: 'Cobertura ampla', en: 'Broad coverage' },
      body: {
        pt: 'Java, estruturas de dados, banco de dados, BI e Big Data, AWS, UX/UI, XP e gestão de projetos.',
        en: 'Java, data structures, databases, BI and Big Data, AWS, UX/UI, XP and project management.',
      },
    },
  ],
}
