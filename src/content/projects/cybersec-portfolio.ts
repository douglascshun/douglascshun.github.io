import type { ProjectContent } from './types'

export const cybersecPortfolio: ProjectContent = {
  overview: {
    pt: [
      'Portfólio prático de pentest: relatórios profissionais de testes de invasão conduzidos em ambientes legais e autorizados (TryHackMe, HackTheBox, labs próprios).',
      'Cada relatório traz documentação completa — reconhecimento, exploração, prova de conceito (PoC) e recomendações de hardening — seguindo metodologias reconhecidas (OSSTMM, OWASP).',
    ],
    en: [
      'Hands-on pentest portfolio: professional penetration-test reports run in legal, authorized environments (TryHackMe, HackTheBox, own labs).',
      'Each report brings full documentation — recon, exploitation, proof of concept (PoC) and hardening recommendations — following recognized methodologies (OSSTMM, OWASP).',
    ],
  },
  metrics: [
    { label: { pt: 'Relatórios', en: 'Reports' }, value: '2+' },
    { label: { pt: 'CVE explorada', en: 'CVE exploited' }, value: '2019-9193' },
    { label: { pt: 'Root em', en: 'Root in' }, value: '~45min' },
    { label: { pt: 'Metodologia', en: 'Methodology' }, value: 'OSSTMM' },
  ],
  highlights: [
    {
      title: { pt: 'Exploração de CVE real', en: 'Real CVE exploitation' },
      body: {
        pt: 'CVE-2019-9193 no PostgreSQL (RCE via COPY TO/FROM PROGRAM), somada a credenciais padrão e misconfiguração.',
        en: 'CVE-2019-9193 in PostgreSQL (RCE via COPY TO/FROM PROGRAM), plus default credentials and misconfiguration.',
      },
    },
    {
      title: { pt: 'Privilege escalation em Linux', en: 'Linux privilege escalation' },
      body: {
        pt: 'Técnicas de escalação: sudo NOPASSWD, abuso de capabilities e binários SUID até chegar a root.',
        en: 'Escalation techniques: sudo NOPASSWD, capability abuse and SUID binaries all the way to root.',
      },
    },
    {
      title: { pt: 'Relatórios profissionais', en: 'Professional reports' },
      body: {
        pt: 'Documentação executiva com PoC reproduzível e recomendações de correção — do achado ao hardening.',
        en: 'Executive documentation with reproducible PoC and remediation guidance — from finding to hardening.',
      },
    },
    {
      title: { pt: 'Metodologia padronizada', en: 'Standardized methodology' },
      body: {
        pt: 'Aderência a OSSTMM e OWASP Top 10, com fluxo consistente de recon → exploração → pós-exploração.',
        en: 'Adherence to OSSTMM and OWASP Top 10, with a consistent recon → exploitation → post-exploitation flow.',
      },
    },
  ],
  sections: [
    {
      title: { pt: 'Máquinas comprometidas', en: 'Compromised machines' },
      body: {
        pt: [
          'Poster (TryHackMe · média) — root em ~1h40 via CVE-2019-9193, credenciais padrão do PostgreSQL e sudo NOPASSWD.',
          'Meow (HackTheBox · fácil) — root em ~45min via login Telnet direto e misconfiguração do Alpine.',
        ],
        en: [
          'Poster (TryHackMe · medium) — root in ~1h40 via CVE-2019-9193, default PostgreSQL credentials and sudo NOPASSWD.',
          'Meow (HackTheBox · easy) — root in ~45min via direct Telnet login and Alpine misconfiguration.',
        ],
      },
    },
    {
      title: { pt: 'Ferramentas', en: 'Tooling' },
      body: {
        pt: ['Recon & enumeração: Nmap, Gobuster, ffuf.', 'Exploração: Burp Suite, Metasploit.', 'PrivEsc: análise de sudoers, capabilities e SUID.'],
        en: ['Recon & enumeration: Nmap, Gobuster, ffuf.', 'Exploitation: Burp Suite, Metasploit.', 'PrivEsc: sudoers, capabilities and SUID analysis.'],
      },
    },
  ],
}
