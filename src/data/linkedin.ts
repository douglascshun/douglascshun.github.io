import type { Loc } from '../i18n/useLoc'

export const linkedinProfile = 'https://www.linkedin.com/in/douglas-cshunderlick/'

export type LinkedInPost = {
  /** URL do post (deixe o perfil como fallback até ter o link do post). */
  url: string
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
export const linkedinPosts: LinkedInPost[] = [
  {
    url: linkedinProfile,
    date: '2026-07-01',
    title: {
      pt: 'DirtyClone (CVE-2026-43503): quando o page-cache vira dado de pacote',
      en: 'DirtyClone (CVE-2026-43503): when page-cache becomes packet data',
    },
    excerpt: {
      pt: 'Mais uma da família "Dirty": um LPE no kernel Linux que trata páginas de page-cache de binários root como dados graváveis via XFRM/IPsec — com baixíssima detectabilidade.',
      en: 'Another "Dirty" family bug: a Linux kernel LPE that treats root binaries\' page-cache as writable packet data via XFRM/IPsec — with very low detectability.',
    },
    tags: ['Linux', 'Kernel', 'PrivilegeEscalation'],
  },
]
