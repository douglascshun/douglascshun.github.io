import type { Loc } from '../i18n/useLoc'

export type Project = {
  slug: string
  repo: string
  title: string
  tagline: Loc
  summary: Loc
  tech: string[]
  repoUrl: string
  liveUrl?: string
  accent: string
  category: Loc
  year: string
  visibility: 'public' | 'private'
  featured?: boolean
}

/** Fonte de verdade da grade. A Home exibe apenas `visibility: 'public'`.
 *  Novos projetos: adicione aqui + um arquivo em content/projects/<slug>.ts */
export const projects: Project[] = [
  {
    slug: 'automacao-linkedin',
    repo: 'automacao-linkedin',
    title: 'Automação de LinkedIn',
    tagline: {
      pt: 'Do Markdown à publicação: 100% autônomo, sem servidor',
      en: 'From Markdown to publish: 100% autonomous, serverless',
    },
    summary: {
      pt: 'Bot que reescreve anotações .md com IA (Gemini), gera capa por IA com fallback em cascata e publica na LinkedIn API, tudo no GitHub Actions.',
      en: 'Bot that rewrites .md notes with AI (Gemini), generates AI covers with a fallback cascade and posts via the LinkedIn API, all on GitHub Actions.',
    },
    tech: ['Python', 'GitHub Actions', 'Gemini', 'LinkedIn API', 'Pollinations', 'Pillow'],
    repoUrl: 'https://github.com/douglascshun/automacao-linkedin',
    accent: '#1987F0',
    category: { pt: 'Automação / IA', en: 'Automation / AI' },
    year: '2026',
    visibility: 'public',
    featured: true,
  },
  {
    slug: 'cybersec-portfolio',
    repo: 'cybersec-portfolio',
    title: 'Cybersec Portfolio',
    tagline: {
      pt: 'Relatórios profissionais de pentest em ambientes autorizados',
      en: 'Professional pentest reports in authorized environments',
    },
    summary: {
      pt: 'Acervo de relatórios de comprometimento com PoC e hardening: exploração de CVEs reais, credenciais padrão e privilege escalation em Linux.',
      en: 'Compromise reports with PoC and hardening: real CVE exploitation, default credentials and Linux privilege escalation.',
    },
    tech: ['Nmap', 'Metasploit', 'Burp Suite', 'Linux PrivEsc', 'OWASP', 'OSSTMM'],
    repoUrl: 'https://github.com/douglascshun/cybersec-portfolio',
    accent: '#ff4d5e',
    category: { pt: 'Pentest / Red Team', en: 'Pentest / Red Team' },
    year: '2025',
    visibility: 'public',
    featured: true,
  },
  {
    slug: 'config-lab-p2p',
    repo: 'ConfigDeLabP2P',
    title: 'Cyber Range P2P',
    tagline: {
      pt: 'Laboratório isolado, automatizado e monitorado em tempo real',
      en: 'Isolated, automated and real-time monitored lab',
    },
    summary: {
      pt: 'Cyber range dedicado com link P2P isolado, SSHFS persistente por chave, firewall UFW restritivo e monitoramento integral via Wazuh.',
      en: 'Dedicated cyber range with an isolated P2P link, key-based persistent SSHFS, strict UFW firewall and full Wazuh monitoring.',
    },
    tech: ['Kali Linux', 'Wazuh', 'SSHFS', 'UFW', 'Deskflow', 'Networking'],
    repoUrl: 'https://github.com/douglascshun/ConfigDeLabP2P',
    accent: '#00e5ff',
    category: { pt: 'Infra / Homelab', en: 'Infra / Homelab' },
    year: '2025',
    visibility: 'public',
  },
  {
    slug: 'pos-seguranca',
    repo: 'PosSegurancaDaInformacao',
    title: 'MBA em Segurança',
    tagline: {
      pt: 'Base de conhecimento: 256+ aulas de segurança documentadas',
      en: 'Knowledge base: 256+ documented security lessons',
    },
    summary: {
      pt: 'Consolidação do MBA em Segurança da Informação: 4 módulos, do networking à governança (LGPD/GDPR), CyberOps, CSIRT, Cloud e IoT security.',
      en: 'MBA in Information Security consolidated: 4 modules from networking to governance (LGPD/GDPR), CyberOps, CSIRT, Cloud and IoT security.',
    },
    tech: ['Cybersecurity', 'GRC', 'LGPD/GDPR', 'CyberOps', 'Cloud', 'CSIRT'],
    repoUrl: 'https://github.com/douglascshun/PosSegurancaDaInformacao',
    accent: '#2ecc71',
    category: { pt: 'Estudo / GRC', en: 'Study / GRC' },
    year: '2026',
    visibility: 'public',
  },
  {
    slug: 'pos-engenharia-software',
    repo: 'PosEngenhariaDeSoftware',
    title: 'Pós em Engenharia de Software',
    tagline: {
      pt: 'Caderno público que se atualiza sozinho a cada aula',
      en: 'Public notebook that updates itself after every class',
    },
    summary: {
      pt: 'Código Java, anotações e prints aula a aula: estruturas de dados, banco de dados, BI e Big Data, AWS, UX/UI e XP. Um agente launchd faz commit, push e regenera o README em PT/EN/ES.',
      en: 'Java code, notes and screenshots class by class: data structures, databases, BI and Big Data, AWS, UX/UI and XP. A launchd agent commits, pushes and regenerates the README in PT/EN/ES.',
    },
    tech: ['Java', 'SQL', 'BI', 'AWS', 'UX/UI', 'launchd'],
    repoUrl: 'https://github.com/douglascshun/PosEngenhariaDeSoftware',
    accent: '#FFA500',
    category: { pt: 'Estudo / Engenharia', en: 'Study / Engineering' },
    year: '2026',
    visibility: 'public',
  },
]

export const publicProjects = projects.filter((p) => p.visibility === 'public')

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
