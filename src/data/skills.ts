import type { Loc } from '../i18n/useLoc'

export type SkillGroup = {
  key: 'red' | 'blue' | 'grc' | 'eng'
  title: Loc
  accent: string
  skills: { name: string; level: number }[]
}

export const skillGroups: SkillGroup[] = [
  {
    key: 'red',
    title: { pt: 'Red Team / Ofensivo', en: 'Red Team / Offensive' },
    accent: '#ff4d5e',
    skills: [
      { name: 'Penetration Testing', level: 88 },
      { name: 'Enumeração & Recon (Nmap, ffuf)', level: 90 },
      { name: 'Exploitation (Metasploit, Burp)', level: 82 },
      { name: 'Privilege Escalation (Linux)', level: 85 },
      { name: 'Payloads (Python, Bash)', level: 80 },
    ],
  },
  {
    key: 'blue',
    title: { pt: 'Blue Team / Defesa', en: 'Blue Team / Defense' },
    accent: '#1987F0',
    skills: [
      { name: 'Network Monitoring & SIEM (Wazuh)', level: 78 },
      { name: 'Hardening (Linux/Windows)', level: 82 },
      { name: 'IDS/IPS & Firewall (UFW)', level: 80 },
      { name: 'Incident Response (CSIRT)', level: 72 },
      { name: 'Forense digital', level: 68 },
    ],
  },
  {
    key: 'grc',
    title: { pt: 'Compliance & Governança', en: 'Compliance & Governance' },
    accent: '#2ecc71',
    skills: [
      { name: 'LGPD / GDPR / CCPA', level: 84 },
      { name: 'Risk Management (NIST RMF)', level: 78 },
      { name: 'Privacy by Design', level: 76 },
      { name: 'ISO 27001 / Frameworks', level: 74 },
    ],
  },
  {
    key: 'eng',
    title: { pt: 'Engenharia & Automação', en: 'Engineering & Automation' },
    accent: '#FFA500',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Bash / PowerShell', level: 82 },
      { name: 'TypeScript / React', level: 74 },
      { name: 'GitHub Actions / CI-CD', level: 85 },
      { name: 'Docker', level: 72 },
    ],
  },
]
