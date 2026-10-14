import type { Loc } from '../i18n/useLoc'

export const linkedinProfile = 'https://www.linkedin.com/in/cshunderlick/'

const post = (id: string) => `https://www.linkedin.com/feed/update/urn:li:activity:${id}/`

export type LinkedInPost = {
  /** URL do post (deixe o perfil como fallback até ter o link do post). */
  url: string
  /** AAAA-MM-DD */
  date: string
  title: Loc
  excerpt: Loc
  tags: string[]
}

/**
 * Feed curado. Site estático não acessa a API do LinkedIn, então mantemos
 * destaques aqui. Para automatizar: o bot `automacao-linkedin` pode anexar
 * cada publicação a este arquivo (ou a um posts.json) a cada post.
 */
/** Mais recente primeiro. */
export const linkedinPosts: LinkedInPost[] = [
  {
    url: post('7516219933094158336'),
    date: '2026-10-14',
    title: { pt: 'Rodei um pentest em mim mesmo', en: 'I ran a pentest on myself' },
    excerpt: {
      pt: 'Escopo: os últimos 12 meses. 34 certificações, diploma de ADS, TCC do MBA entregue, a segunda pós em andamento, Top 6% no TryHackMe e o CTIwatch.cloud.',
      en: 'Scope: the last 12 months. 34 certifications, my systems degree, MBA thesis delivered, a second postgraduate program underway, Top 6% on TryHackMe and CTIwatch.cloud.',
    },
    tags: ['Carreira', 'RedTeam', 'AppSec'],
  },
  {
    url: post('7505759827617361920'),
    date: '2026-09-15',
    title: { pt: 'MBA em Segurança da Informação: resumo do meu TCC entregue', en: 'MBA in Information Security: my thesis summary, delivered' },
    excerpt: {
      pt: 'Vídeo com o resumo do TCC do MBA, o fechamento de um ciclo de estudo em segurança da informação.',
      en: 'A video summary of my MBA thesis, closing a full cycle of information security study.',
    },
    tags: ['MBA', 'TCC', 'SegurançaDaInformação'],
  },
  {
    url: post('7505065931044376576'),
    date: '2026-09-14',
    title: { pt: 'Pitch do MBA em Segurança da Informação feito', en: 'MBA in Information Security pitch, done' },
    excerpt: {
      pt: 'Apresentação do pitch final do MBA em Segurança da Informação.',
      en: 'Final pitch for the MBA in Information Security, presented.',
    },
    tags: ['MBA', 'Pitch'],
  },
  {
    url: post('7481817014886588416'),
    date: '2026-07-11',
    title: { pt: 'A nuvem não é uma fortaleza por padrão', en: 'The cloud is not a fortress by default' },
    excerpt: {
      pt: 'Para um Red Teamer, a nuvem é um mapa de pontos de intrusão e persistência: IAM permissivo, APIs expostas, buckets públicos, imagens de contêiner e supply chain desatualizadas.',
      en: 'To a Red Teamer, the cloud is a map of intrusion and persistence points: permissive IAM, exposed APIs, public buckets, outdated container images and supply chain.',
    },
    tags: ['RedTeam', 'CloudSecurity'],
  },
  {
    url: post('7443769846238027776'),
    date: '2026-03-28',
    title: { pt: 'É oficial: Tecnólogo em Análise e Desenvolvimento de Sistemas', en: 'It\'s official: Associate degree in Systems Analysis and Development' },
    excerpt: {
      pt: 'A base para as duas pós em andamento, Segurança da Informação e Engenharia de Software.',
      en: 'The foundation for my two ongoing postgraduate programs, Information Security and Software Engineering.',
    },
    tags: ['ADS', 'Formatura'],
  },
  {
    url: post('7441667549475282944'),
    date: '2026-03-23',
    title: { pt: 'Disponibilidade x confidencialidade sob a ótica do Red Team', en: 'Availability vs confidentiality through a Red Team lens' },
    excerpt: {
      pt: 'Menor privilégio, criptografia em repouso e em trânsito, backups isolados e pentest recorrente.',
      en: 'Least privilege, encryption at rest and in transit, isolated backups and recurring pentests.',
    },
    tags: ['RedTeam', 'CIA'],
  },
  {
    url: post('7439493569196843009'),
    date: '2026-03-17',
    title: { pt: 'Firewall de última geração sem PSI sólida é castelo de cartas', en: 'A next-gen firewall without a solid security policy is a house of cards' },
    excerpt: {
      pt: 'O vetor humano e a falha de processo continuam sendo as rotas mais baratas para um atacante.',
      en: 'The human vector and process failures remain the cheapest routes for an attacker.',
    },
    tags: ['PSI', 'Governança'],
  },
  {
    url: post('7438761449407283201'),
    date: '2026-03-15',
    title: { pt: 'Apresentando o CTIwatch.cloud', en: 'Introducing CTIwatch.cloud' },
    excerpt: {
      pt: 'Projeto pessoal open-source de Threat Intelligence, em alfa: 218 mil+ indicadores, 7.300+ CVEs, 3.700+ threat actors e 20 feeds contínuos, em Node.js e Next.js.',
      en: 'A personal open-source Threat Intelligence project, in alpha: 218k+ indicators, 7,300+ CVEs, 3,700+ threat actors and 20 continuous feeds, built with Node.js and Next.js.',
    },
    tags: ['ThreatIntel', 'CTI', 'OpenSource'],
  },
]
