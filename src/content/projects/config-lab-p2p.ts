import type { ProjectContent } from './types'

export const configLabP2P: ProjectContent = {
  overview: {
    pt: [
      'Um cyber range dedicado, isolado e monitorado — montado para eliminar práticas manuais e inseguras do dia a dia de laboratório.',
      'Implementa um link Ponto a Ponto (P2P) isolado, montagem persistente via SSHFS com chaves, firewall UFW restritivo e monitoramento integral com Wazuh — incluindo visibilidade do próprio Manager.',
    ],
    en: [
      'A dedicated, isolated and monitored cyber range — built to remove manual, insecure day-to-day lab practices.',
      'It implements an isolated Point-to-Point (P2P) link, key-based persistent SSHFS mounts, a strict UFW firewall and full Wazuh monitoring — including visibility of the Manager itself.',
    ],
  },
  metrics: [
    { label: { pt: 'Rede', en: 'Network' }, value: 'P2P isolada' },
    { label: { pt: 'Monitoramento', en: 'Monitoring' }, value: 'Wazuh' },
    { label: { pt: 'Acesso', en: 'Access' }, value: 'SSHFS' },
    { label: { pt: 'Firewall', en: 'Firewall' }, value: 'UFW' },
  ],
  problem: [
    {
      challenge: { pt: 'Uso constante de scp/sftp e senhas', en: 'Constant scp/sftp and passwords' },
      solution: { pt: 'SSHFS persistente + autenticação por chave', en: 'Persistent SSHFS + key auth' },
      benefit: { pt: 'Arquivos remotos como locais, sem senha', en: 'Remote files as local, password-free' },
    },
    {
      challenge: { pt: 'Serviços expostos no Wi-Fi principal', en: 'Services exposed on the main Wi-Fi' },
      solution: { pt: 'Link P2P isolado + UFW restritivo', en: 'Isolated P2P link + strict UFW' },
      benefit: { pt: 'Isolamento total e superfície mínima', en: 'Full isolation and minimal surface' },
    },
    {
      challenge: { pt: 'Sem visibilidade do próprio Manager', en: 'No visibility of the Manager itself' },
      solution: { pt: 'Wazuh Agent 000 (localhost) + Agent P2P', en: 'Wazuh Agent 000 (localhost) + P2P Agent' },
      benefit: { pt: 'Monitoramento 100% do ambiente', en: '100% environment monitoring' },
    },
  ],
  highlights: [
    {
      title: { pt: 'Rede P2P isolada', en: 'Isolated P2P network' },
      body: {
        pt: 'Elimina o Wi-Fi do caminho crítico: máxima performance e superfície de ataque reduzida ao mínimo.',
        en: 'Removes Wi-Fi from the critical path: maximum performance and attack surface cut to the minimum.',
      },
    },
    {
      title: { pt: 'SSHFS persistente', en: 'Persistent SSHFS' },
      body: {
        pt: 'Acesso transparente aos arquivos remotos, montado por chave — fim do scp/sftp manual.',
        en: 'Transparent access to remote files, key-mounted — no more manual scp/sftp.',
      },
    },
    {
      title: { pt: 'Monitoramento integral', en: 'Full monitoring' },
      body: {
        pt: 'Wazuh cobrindo o ambiente inteiro, inclusive o Manager, via Agent 000 + Agent no host P2P.',
        en: 'Wazuh covering the whole environment, including the Manager, via Agent 000 + P2P host Agent.',
      },
    },
    {
      title: { pt: 'Ergonomia com Deskflow', en: 'Deskflow ergonomics' },
      body: {
        pt: 'Mouse e teclado compartilhados entre as máquinas (Deskflow/Barrier/Input Leap) para um fluxo fluido.',
        en: 'Shared mouse and keyboard across machines (Deskflow/Barrier/Input Leap) for a smooth flow.',
      },
    },
  ],
  sections: [
    {
      title: { pt: 'Arquitetura', en: 'Architecture' },
      body: {
        pt: [
          'Servidor (Manager) — Wazuh Manager + Dashboard + ambiente de trabalho · IP ex. 10.10.10.1 · Kali/Debian.',
          'Notebook (Agent) — máquina do analista/pentester · IP ex. 10.10.10.2 · Kali/Debian.',
        ],
        en: [
          'Server (Manager) — Wazuh Manager + Dashboard + workspace · e.g. IP 10.10.10.1 · Kali/Debian.',
          'Laptop (Agent) — analyst/pentester machine · e.g. IP 10.10.10.2 · Kali/Debian.',
        ],
      },
    },
  ],
}
