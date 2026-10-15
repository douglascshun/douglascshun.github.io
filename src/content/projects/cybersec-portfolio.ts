import type { ProjectContent } from './types'

export const cybersecPortfolio: ProjectContent = {
  overview: {
    pt: [
      'Portfólio prático de pentest: relatórios profissionais de testes de invasão conduzidos em ambientes legais e autorizados (TryHackMe, HackTheBox, labs próprios).',
      'Cada relatório traz documentação completa (reconhecimento, exploração, prova de conceito (PoC) e recomendações de hardening), seguindo metodologias reconhecidas (OSSTMM, OWASP). Uma trilha de Fundamentos cobre recon, scripting ofensivo, triagem em Linux e segurança de ambientes industriais (ICS/SCADA).',
    ],
    en: [
      'Hands-on pentest portfolio: professional penetration-test reports run in legal, authorized environments (TryHackMe, HackTheBox, own labs).',
      'Each report brings full documentation (recon, exploitation, proof of concept (PoC) and hardening recommendations), following recognized methodologies (OSSTMM, OWASP). A Fundamentals track covers recon, offensive scripting, Linux triage and industrial (ICS/SCADA) security.',
    ],
  },
  metrics: [
    { label: { pt: 'Relatórios', en: 'Reports' }, value: '6' },
    { label: { pt: 'CVEs reais', en: 'Real CVEs' }, value: '2' },
    { label: { pt: 'Resultado', en: 'Outcome' }, value: 'Root' },
    { label: { pt: 'Metodologia', en: 'Methodology' }, value: 'OSSTMM' },
  ],
  highlights: [
    {
      title: { pt: 'Exploração de CVEs reais', en: 'Real CVE exploitation' },
      body: {
        pt: 'CVE-2019-9193 no PostgreSQL (RCE via COPY FROM PROGRAM) e CVE-2015-3306 no ProFTPD (mod_copy, cópia arbitrária de arquivos), além de credenciais padrão e misconfiguração.',
        en: 'CVE-2019-9193 in PostgreSQL (RCE via COPY FROM PROGRAM) and CVE-2015-3306 in ProFTPD (mod_copy, arbitrary file copy), plus default credentials and misconfiguration.',
      },
    },
    {
      title: { pt: 'Cadeias de ataque encadeadas', en: 'Chained attack paths' },
      body: {
        pt: 'No alvo Internal, do IP ao root encadeando WordPress fraco, pivô por túnel SSH, RCE no Jenkins interno (console Groovy) e credenciais em texto claro no disco.',
        en: 'On the Internal target, from IP to root by chaining a weak WordPress, an SSH-tunnel pivot, RCE on the internal Jenkins (Groovy console) and plaintext credentials on disk.',
      },
    },
    {
      title: { pt: 'Privilege escalation em Linux', en: 'Linux privilege escalation' },
      body: {
        pt: 'Técnicas de escalação: sudo NOPASSWD, binários SUID (nmap, find, find via menu customizado) e sequestro de PATH até chegar a root.',
        en: 'Escalation techniques: sudo NOPASSWD, SUID binaries (nmap, find, a custom menu) and PATH hijacking all the way to root.',
      },
    },
    {
      title: { pt: 'Relatórios profissionais', en: 'Professional reports' },
      body: {
        pt: 'Documentação executiva com PoC reproduzível e recomendações de correção priorizadas, do achado ao hardening.',
        en: 'Executive documentation with reproducible PoC and prioritized remediation guidance, from finding to hardening.',
      },
    },
  ],
  sections: [
    {
      title: { pt: 'Máquinas comprometidas', en: 'Compromised machines' },
      body: {
        pt: [
          'Internal (TryHackMe · difícil): black-box do IP ao root encadeando WordPress, Jenkins interno e credencial de root em disco.',
          'Mr Robot (TryHackMe · média): WordPress com wordlist vazada e escalada por nmap SUID, 3 flags.',
          'Kenobi (TryHackMe · média): Samba anônimo e ProFTPD CVE-2015-3306 (mod_copy) até SUID via PATH.',
          'Poster (TryHackMe · média): CVE-2019-9193, credenciais padrão do PostgreSQL e sudo NOPASSWD.',
          'Basic Pentesting (TryHackMe · fácil): senha fraca no SSH e SUID find.',
          'Meow (HackTheBox · fácil): login Telnet direto e misconfiguração do Alpine.',
        ],
        en: [
          'Internal (TryHackMe · hard): black-box from IP to root chaining WordPress, internal Jenkins and a root credential on disk.',
          'Mr Robot (TryHackMe · medium): WordPress with a leaked wordlist and SUID nmap escalation, 3 flags.',
          'Kenobi (TryHackMe · medium): anonymous Samba and ProFTPD CVE-2015-3306 (mod_copy) up to SUID via PATH.',
          'Poster (TryHackMe · medium): CVE-2019-9193, default PostgreSQL credentials and sudo NOPASSWD.',
          'Basic Pentesting (TryHackMe · easy): weak SSH password and SUID find.',
          'Meow (HackTheBox · easy): direct Telnet login and Alpine misconfiguration.',
        ],
      },
    },
    {
      title: { pt: 'Ferramentas', en: 'Tooling' },
      body: {
        pt: ['Recon & enumeração: Nmap, Gobuster, ffuf, wpscan, smbclient.', 'Exploração: Burp Suite, Metasploit, Hydra.', 'PrivEsc: análise de sudoers, capabilities, SUID e sequestro de PATH.'],
        en: ['Recon & enumeration: Nmap, Gobuster, ffuf, wpscan, smbclient.', 'Exploitation: Burp Suite, Metasploit, Hydra.', 'PrivEsc: sudoers, capabilities, SUID and PATH hijacking analysis.'],
      },
    },
    {
      title: { pt: 'Fundamentos', en: 'Fundamentals' },
      body: {
        pt: ['Trilha de base que sustenta os relatórios: scripting ofensivo em Python, reconhecimento com DNS e WHOIS, busca e triagem em Linux e segurança de ICS/SCADA.'],
        en: ['Foundational track behind the reports: offensive scripting in Python, DNS and WHOIS recon, Linux search and triage, and ICS/SCADA security.'],
      },
    },
  ],
}
