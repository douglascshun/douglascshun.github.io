import { profile } from '../data/profile'

/** Site de serviços (oferta comercial fica lá; aqui só o caminho até ele). */
export const servicesUrl =
  profile.contacts.find((c) => c.kind === 'services')?.href ?? 'https://site-servicos.douglascshunderlick.workers.dev'
