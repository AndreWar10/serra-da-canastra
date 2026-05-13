# Serra da Canastra — Landing Page

Landing page institucional/turística da Serra da Canastra (Minas Gerais), construída como trabalho acadêmico. 100% responsiva (mobile-first), com 12 seções fiéis ao protótipo do Canva.

## Stack

- **Vite 6** — bundler/dev server
- **React 18 + TypeScript** — UI tipada
- **Tailwind CSS v4** — estilização utilitária com `@theme` em CSS
- **Framer Motion** — animações de entrada por seção
- **react-intersection-observer** — disparar animações e lazy-load de embeds
- **lucide-react** — biblioteca de ícones
- **Vercel** — deploy gratuito

## Como rodar localmente

Requisitos: Node 18+ e npm.

```bash
# instalar dependências
npm install

# rodar em modo desenvolvimento (http://localhost:5173)
npm run dev

# gerar build de produção em /dist
npm run build

# pré-visualizar o build
npm run preview
```

## Estrutura

```
src/
├── components/
│   ├── layout/         # Navbar fixa com scroll-spy + Footer com newsletter
│   ├── sections/       # Hero, Cachoeiras, Gastronomia, Trilhas, etc.
│   └── ui/             # Button, Card, SectionTitle, YouTubeEmbed, Reveal
├── data/               # Conteúdo estático (menu, hospedagens, vídeos)
├── hooks/              # useScrollSpy
├── App.tsx
├── main.tsx
└── index.css           # @import tailwindcss + tema (@theme)
```

## O que personalizar antes de apresentar

### 1. Imagens

Coloque suas imagens em `public/images/` seguindo a estrutura sugerida:

```
public/images/
├── hero/
├── cachoeiras/
├── gastronomia/
├── trilhas/
├── parque/
├── pontos-turisticos/
└── hospedagens/
```

Em seguida, troque as URLs do Unsplash (atualmente usadas como placeholder) pelos caminhos locais. Procure por `https://images.unsplash.com` no `src/components/sections/` para encontrar todas.

### 2. Vídeos do YouTube

Edite `src/data/videos.ts` substituindo cada `id` pelo ID do vídeo do YouTube correspondente. O ID é a parte após `v=` na URL (ex: `https://youtube.com/watch?v=ABCDEF12345` → `id: "ABCDEF12345"`).

### 3. Hospedagens e pontos turísticos

Edite `src/data/hospedagens.ts` e `src/data/pontosTuristicos.ts` para corrigir contatos, endereços e links de reserva.

## Deploy na Vercel

1. Faça push do repositório no GitHub.
2. Acesse [vercel.com](https://vercel.com) e faça login com GitHub.
3. Clique em **Add New Project** e selecione o repositório `serra-da-canastra`.
4. A Vercel detecta automaticamente o Vite — não precisa mudar nada.
5. Clique em **Deploy** e aguarde ~30s.
6. Pronto — link público em `https://serra-da-canastra.vercel.app`.

A cada `git push` na branch `main`, a Vercel faz redeploy automaticamente.

## Acessibilidade

- Todas as imagens têm `alt` descritivo
- Botões com ícone usam `aria-label`
- Navegação por teclado funciona (Tab/Enter)
- Respeita `prefers-reduced-motion` (animações desativadas para usuários sensíveis)
- Contraste validado pela paleta da Canastra
