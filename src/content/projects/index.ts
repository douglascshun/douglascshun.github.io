import type { ProjectContent } from './types'
import { automacaoLinkedin } from './automacao-linkedin'
import { cybersecPortfolio } from './cybersec-portfolio'
import { configLabP2P } from './config-lab-p2p'
import { posSeguranca } from './pos-seguranca'
import { posEngenhariaSoftware } from './pos-engenharia-software'

export const projectContent: Record<string, ProjectContent> = {
  'automacao-linkedin': automacaoLinkedin,
  'cybersec-portfolio': cybersecPortfolio,
  'config-lab-p2p': configLabP2P,
  'pos-seguranca': posSeguranca,
  'pos-engenharia-software': posEngenhariaSoftware,
}
