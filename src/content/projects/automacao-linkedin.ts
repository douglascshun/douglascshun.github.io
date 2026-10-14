import type { ProjectContent } from './types'

export const automacaoLinkedin: ProjectContent = {
  overview: {
    pt: [
      'Um sistema que publica um post por dia no LinkedIn de forma totalmente autônoma, direto do GitHub Actions, sem servidor, sem custo de infraestrutura e sem intervenção manual.',
      'Ele pega anotações em Markdown, reescreve o texto com IA (Google Gemini) num tom profissional em pt-BR, gera uma imagem de capa por IA e publica pela API oficial do LinkedIn. O motor é genérico: aponte para qualquer pasta de .md e ele vira uma fila de posts.',
    ],
    en: [
      'A system that publishes one LinkedIn post per day fully autonomously, straight from GitHub Actions: no server, no infra cost, no manual work.',
      'It takes Markdown notes, rewrites the text with AI (Google Gemini) in a professional tone, generates an AI cover image and posts through the official LinkedIn API. The engine is generic: point it at any folder of .md files and it becomes a post queue.',
    ],
  },
  metrics: [
    { label: { pt: 'Infraestrutura', en: 'Infrastructure' }, value: 'Zero' },
    { label: { pt: 'Estratégias de imagem', en: 'Image strategies' }, value: '4' },
    { label: { pt: 'Publicação', en: 'Publishing' }, value: 'CI/CD' },
    { label: { pt: 'Idioma de saída', en: 'Output language' }, value: 'pt-BR' },
  ],
  highlights: [
    {
      title: { pt: 'Reescrita com IA', en: 'AI rewriting' },
      body: {
        pt: 'O Gemini transforma a anotação num post de LinkedIn, com um prompt que força pt-BR, remove markdown/emojis e a "cara de IA".',
        en: 'Gemini turns the note into a LinkedIn post, with a prompt that enforces pt-BR and strips markdown/emojis and the "AI look".',
      },
    },
    {
      title: { pt: 'Imagem por IA com fallback em cascata', en: 'AI image with fallback cascade' },
      body: {
        pt: 'Quatro estratégias para o post nunca sair sem capa: Pollinations.ai → Imagen/Gemini → card dinâmico (PIL) → banner fixo.',
        en: 'Four strategies so a post never ships without a cover: Pollinations.ai → Imagen/Gemini → dynamic PIL card → static banner.',
      },
    },
    {
      title: { pt: 'Resiliência a falhas', en: 'Failure resilience' },
      body: {
        pt: 'Retry com backoff exponencial que distingue erro transitório (503/429 → tenta de novo) de permanente (cota/plano pago → cai no fallback).',
        en: 'Retry with exponential backoff that tells transient (503/429 → retry) from permanent errors (quota/paid → fallback).',
      },
    },
    {
      title: { pt: 'Estado versionado', en: 'Versioned state' },
      body: {
        pt: 'post_index.txt guarda o índice do próximo post; avança a cada publicação e é commitado pelo próprio workflow. Impossível dessincronizar.',
        en: 'post_index.txt tracks the next post; it advances on each publish and is committed by the workflow itself. Impossible to desync.',
      },
    },
    {
      title: { pt: 'Gestão do token', en: 'Token management' },
      body: {
        pt: 'O access token do LinkedIn dura ~60 dias e não tem refresh; ao expirar, o workflow abre uma Issue de lembrete automaticamente.',
        en: "LinkedIn's access token lasts ~60 days with no refresh; on expiry the workflow opens a reminder Issue automatically.",
      },
    },
    {
      title: { pt: 'Modo dry-run', en: 'Dry-run mode' },
      body: {
        pt: 'Monta o post inteiro (texto + imagem + payload) e não publica, para validar com segurança antes de ir ao ar.',
        en: 'Assembles the whole post (text + image + payload) without publishing, to validate safely before going live.',
      },
    },
  ],
  sections: [
    {
      title: { pt: 'Como funciona', en: 'How it works' },
      body: {
        pt: [
          'Um cron diário dispara o workflow, valida os secrets e obtém a URN do autor via /userinfo (detectando token expirado por 401).',
          'Lê o índice, varre a pasta de conteúdo e escolhe o próximo .md (fila circular). O Gemini reescreve o texto e a cascata gera a imagem.',
          'A imagem é enviada (/rest/images → PUT) e o post publicado em /rest/posts. Em caso de sucesso, o índice é incrementado e commitado.',
        ],
        en: [
          'A daily cron triggers the workflow, validates secrets and gets the author URN via /userinfo (detecting expired tokens via 401).',
          'It reads the index, walks the content folder and picks the next .md (circular queue). Gemini rewrites the text and the cascade generates the image.',
          'The image is uploaded (/rest/images → PUT) and the post published to /rest/posts. On success the index is incremented and committed.',
        ],
      },
    },
  ],
}
