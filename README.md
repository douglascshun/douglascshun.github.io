<div align="center">

# douglascshun.github.io

**Portfólio pessoal — Douglas Cshunderlick · Segurança Ofensiva / Red Team**

Site de página única com tema *Neon + Terminal*, animações e páginas dedicadas por projeto.

🔗 **https://douglascshun.github.io**

</div>

---

## Stack

- **React 19 + TypeScript + Vite** — SPA moderna e rápida
- **Tailwind CSS** — tema cyber custom (azul `#1987F0` sobre `#0d1117`)
- **Framer Motion** — transições de página, reveal-on-scroll, hover, contadores
- **React Router** — rotas dedicadas por projeto (`/projeto/:slug`)
- **react-i18next** — bilíngue PT-BR / EN
- Fundo animado em `<canvas>` (constelação neon) · respeita `prefers-reduced-motion`

## Estrutura

```
src/
├─ pages/            Home (scroll único) · ProjectPage · NotFound
├─ components/       background · layout · motion · home · project
├─ data/             profile · courses · skills · certifications · projects · linkedin
├─ content/projects/ conteúdo curado de cada página de projeto
└─ i18n/             dicionários PT/EN + hook useLoc
```

## Desenvolvimento

```bash
npm install
npm run dev        # servidor de desenvolvimento
npm run build      # build de produção (+ 404.html p/ SPA no Pages)
npm run preview    # pré-visualiza o build
npm run typecheck  # checagem de tipos
```

## Deploy

Publicado automaticamente no **GitHub Pages** via GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) a cada push na `main`.

### Adicionar um novo projeto

1. Adicione a entrada em `src/data/projects.ts` (com `visibility: 'public'`).
2. Crie o conteúdo em `src/content/projects/<slug>.ts` e registre em `content/projects/index.ts`.

---

<div align="center">
<sub>© 2026 Douglas Cshunderlick · Construído com React, Vite, Tailwind & Framer Motion</sub>
</div>
