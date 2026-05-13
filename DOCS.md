# Documentação Técnica — Landing Page Serra da Canastra

> Documento de referência completo do projeto. Contém a stack, versões, arquitetura, sistema de design, componentes, decisões e guias de manutenção.

**Última atualização:** Maio/2026
**Versão do projeto:** 0.1.0

---

## Índice

1. [Visão geral](#1-visão-geral)
2. [Stack tecnológica](#2-stack-tecnológica)
3. [Pré-requisitos e ambiente](#3-pré-requisitos-e-ambiente)
4. [Como executar](#4-como-executar)
5. [Estrutura de pastas](#5-estrutura-de-pastas)
6. [Arquitetura](#6-arquitetura)
7. [Sistema de design](#7-sistema-de-design)
8. [Componentes UI](#8-componentes-ui)
9. [Componentes de layout](#9-componentes-de-layout)
10. [Componentes de seção](#10-componentes-de-seção)
11. [Camada de dados](#11-camada-de-dados)
12. [Hooks customizados](#12-hooks-customizados)
13. [Animações](#13-animações)
14. [Performance](#14-performance)
15. [Acessibilidade](#15-acessibilidade)
16. [Deploy](#16-deploy)
17. [Tarefas comuns (recipes)](#17-tarefas-comuns-recipes)
18. [Decisões técnicas](#18-decisões-técnicas)
19. [Limitações conhecidas](#19-limitações-conhecidas)
20. [Roadmap futuro](#20-roadmap-futuro)

---

## 1. Visão geral

### O que é

Landing page institucional/turística da **Serra da Canastra**, região do interior de Minas Gerais conhecida por suas cachoeiras, trilhas, parque nacional e pelo legítimo Queijo Canastra.

### Objetivo

Trabalho acadêmico que apresenta os principais atrativos da região em uma página única (SPA), 100% responsiva, com foco em experiência visual e fidelidade ao protótipo original (criado no Canva).

### Escopo

| Incluído                                              | Fora do escopo                                |
| ----------------------------------------------------- | --------------------------------------------- |
| Página única responsiva (mobile/tablet/desktop)       | Backend / API                                 |
| 10 seções de conteúdo + Navbar + Footer               | CMS para edição de conteúdo                   |
| Vídeos do YouTube embedados com lazy-load             | Sistema de reservas funcional                 |
| Mapa do Google Maps embedado                          | Autenticação de usuários                      |
| Newsletter (front-end only, sem envio real)           | SEO avançado (sitemap, robots, schema.org)    |
| Animações de entrada por scroll                       | i18n (múltiplos idiomas)                      |
| Deploy automático na Vercel                           | Testes automatizados (unit/e2e)               |

---

## 2. Stack tecnológica

### Versões exatas

| Categoria             | Pacote                      | Versão instalada |
| --------------------- | --------------------------- | ---------------- |
| Runtime               | Node.js                     | 22.22.0          |
| Gerenciador           | npm                         | 11.6.0           |
| Bundler / Dev Server  | `vite`                      | 6.4.2            |
| Plugin React (Vite)   | `@vitejs/plugin-react`      | 4.7.0            |
| UI Library            | `react`                     | 18.3.1           |
| UI Library (DOM)      | `react-dom`                 | 18.3.1           |
| Tipagem               | `typescript`                | 5.9.3            |
| Types React           | `@types/react`              | 18.3.28          |
| Types React DOM       | `@types/react-dom`          | 18.3.7           |
| CSS Framework         | `tailwindcss`               | 4.3.0            |
| Plugin Tailwind (Vite)| `@tailwindcss/vite`         | 4.3.0            |
| Animações             | `framer-motion`             | 11.18.2          |
| Observador de viewport| `react-intersection-observer` | 9.16.0         |
| Ícones                | `lucide-react`              | 0.468.0          |

### Por que cada uma?

#### Vite 6
Bundler moderno, extremamente rápido em dev (HMR instantâneo) e produz bundles otimizados para produção. Substitui ferramentas mais antigas como Webpack/CRA.

#### React 18 + TypeScript
React entrega componentização e ecossistema maduro. TypeScript adiciona tipagem estática — captura bugs em tempo de desenvolvimento e melhora a manutenção.

#### Tailwind CSS v4
Estilização utility-first que mantém o CSS final pequeno (só inclui o que foi usado) e permite construir UIs rapidamente. A v4 traz a sintaxe `@theme` em CSS, eliminando a necessidade de `tailwind.config.ts` para a maioria dos casos.

#### Framer Motion 11
Biblioteca de animação declarativa para React. Usada aqui apenas para animações de entrada (fade + slide quando o elemento entra no viewport). Tree-shaking embute só o necessário.

#### lucide-react
Biblioteca de ícones SVG moderna, leve, com tree-shaking automático. Cada ícone usado é importado individualmente.

#### react-intersection-observer
Wrapper React do `IntersectionObserver` nativo. Usado para disparar lazy-load dos YouTube embeds e animações apenas quando o usuário rola até a seção.

---

## 3. Pré-requisitos e ambiente

### Sistema

Funciona em qualquer SO (Windows / macOS / Linux) com Node 18+.

### Ferramentas necessárias

- **Node.js** ≥ 18 (recomendado: 22.x LTS)
- **npm** ≥ 9 (vem com o Node)
- **Git** (para versionar/deploy)
- **Editor de código** — VS Code ou Cursor recomendados (com extensões TypeScript e Tailwind CSS IntelliSense)

### Verificar instalação

```bash
node --version    # ≥ v18.0.0
npm --version     # ≥ 9.0.0
git --version
```

---

## 4. Como executar

### Primeira vez (clone fresh)

```bash
git clone <url-do-repo>
cd serra-da-canastra
npm install
```

### Comandos disponíveis

| Comando           | O que faz                                                                  |
| ----------------- | -------------------------------------------------------------------------- |
| `npm run dev`     | Sobe o dev server em `http://localhost:5173` com HMR (hot reload)          |
| `npm run build`   | Roda o checker do TypeScript (`tsc -b`) e gera o build de produção em `/dist` |
| `npm run preview` | Pré-visualiza o build de produção localmente (porta 4173)                  |
| `npm run lint`    | Roda o ESLint (se instalado) — atualmente sem config, apenas placeholder   |

### Saída esperada do build

```
dist/index.html                   ~1 KB
dist/assets/index-<hash>.css     ~40 KB │ gzip: ~7 KB
dist/assets/index-<hash>.js     ~310 KB │ gzip: ~95 KB
```

---

## 5. Estrutura de pastas

```
serra-da-canastra/
├── public/                              # Assets servidos como estão (sem processamento)
│   ├── favicon.svg                      # Favicon da landing
│   └── images/                          # Imagens organizadas por seção
│       ├── hero/serra-canastra-hero.png
│       ├── paisagens/colinas-canastra.png
│       ├── trilhas/trilha-canastra.png
│       └── parque/cerrado-parque.png
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx               # Header fixo com scroll-spy + menu mobile
│   │   │   └── Footer.tsx               # Newsletter + redes sociais
│   │   ├── sections/                    # As 10 seções da página
│   │   │   ├── Hero.tsx
│   │   │   ├── Cachoeiras.tsx
│   │   │   ├── BelasPaisagens.tsx
│   │   │   ├── Gastronomia.tsx
│   │   │   ├── Trilhas.tsx
│   │   │   ├── ParqueNacional.tsx
│   │   │   ├── SalveCanastra.tsx
│   │   │   ├── PontosTuristicos.tsx
│   │   │   ├── Hospedagens.tsx
│   │   │   └── Localizacao.tsx
│   │   └── ui/                          # Componentes reutilizáveis
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── SectionTitle.tsx
│   │       ├── YouTubeEmbed.tsx
│   │       └── Reveal.tsx
│   ├── data/                            # Dados estáticos (sem CMS)
│   │   ├── menu.ts                      # Itens do navbar
│   │   ├── hospedagens.ts                # 4 hospedagens com contato e CTAs
│   │   ├── pontosTuristicos.ts           # 3 pontos turísticos
│   │   └── videos.ts                    # IDs dos vídeos do YouTube
│   ├── hooks/
│   │   └── useScrollSpy.ts              # Hook que detecta a seção visível
│   ├── App.tsx                          # Composição final: monta todas as seções
│   ├── main.tsx                         # Entry point: ReactDOM.render
│   ├── index.css                        # @import tailwind + @theme com tokens
│   └── vite-env.d.ts                    # Types do Vite
├── .gitignore
├── index.html                           # Template HTML do Vite (com Google Fonts)
├── package.json
├── tsconfig.json                        # Config raiz que aponta para os 2 abaixo
├── tsconfig.app.json                    # TS config para src/
├── tsconfig.node.json                   # TS config para vite.config.ts
├── vercel.json                          # Config de deploy (rewrites + cache)
├── vite.config.ts                       # Plugins do Vite (react + tailwindcss)
├── README.md                            # README curto e direto
└── DOCS.md                              # Este documento
```

---

## 6. Arquitetura

### Fluxo de renderização

```
index.html
   └─> main.tsx (entry point)
         └─> <StrictMode>
               └─> <App />
                     ├─> <Navbar />              [layout]
                     ├─> <main>
                     │     ├─> <Hero />          [section #hero]
                     │     ├─> <Cachoeiras />    [section #cachoeiras]
                     │     ├─> <BelasPaisagens />[section #paisagens]
                     │     ├─> <Gastronomia />   [section #gastronomia]
                     │     ├─> <Trilhas />       [section #trilhas]
                     │     ├─> <ParqueNacional />[section #parque]
                     │     ├─> <SalveCanastra />
                     │     ├─> <PontosTuristicos />
                     │     ├─> <Hospedagens />   [section #hospedagens]
                     │     └─> <Localizacao />
                     └─> <Footer />              [layout]
```

### Padrão de cada seção

Toda seção segue um padrão consistente:

```tsx
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

export function NomeSecao() {
  return (
    <section id="..." className="bg-... py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle eyebrow="...">Título</SectionTitle>
        </Reveal>

        <Reveal direction="..." delay={...}>
          {/* conteúdo */}
        </Reveal>
      </div>
    </section>
  );
}
```

### Roteamento

**Sem React Router.** A página é single-page (SPA simples), com navegação por âncoras (`#cachoeiras`, `#gastronomia`, etc.). O scroll suave é nativo do navegador (via `html { scroll-behavior: smooth }` no CSS) e a `Navbar` usa scroll-spy para destacar a seção atual.

### Sem estado global

Não há Redux, Zustand, Context ou outro state manager. O único estado é local em componentes (ex: `Navbar` controla seu próprio `open`/`closed` no mobile). Para uma landing estática isso é suficiente.

---

## 7. Sistema de design

### Tokens definidos em `src/index.css`

O Tailwind v4 usa a diretiva `@theme` para definir tokens diretamente no CSS. Isso gera classes utilitárias automáticas (ex: `--color-canastra-green-500` vira `bg-canastra-green-500`).

#### Paleta de cores

| Cor                  | Hex base | Variações | Uso principal                              |
| -------------------- | -------- | --------- | ------------------------------------------ |
| `canastra-green-*`   | #4f8643  | 50–900    | Cor primária (verde-mata), CTAs, navbar    |
| `canastra-earth-*`   | #946a40  | 50–900    | Cor secundária (marrom-terra), gastronomia |
| `canastra-gold-*`    | #d9aa1f  | 50–700    | Acento (dourado-queijo), botões secundários|
| `canastra-cream`     | #f7f1e3  | —         | Fundo claro padrão                         |
| `canastra-stone`     | #2b2a26  | —         | Texto escuro, fundos escuros               |

#### Tipografia

| Fonte          | Família           | Uso                                | Carregamento     |
| -------------- | ----------------- | ---------------------------------- | ---------------- |
| **Bebas Neue** | `font-display`    | Títulos H1–H4                      | Google Fonts CDN |
| **Poppins**    | `font-sans`       | Corpo de texto, UI                 | Google Fonts CDN |

Fontes carregadas via `<link>` no `index.html` com `preconnect` para reduzir latência.

#### Breakpoints (padrão Tailwind)

| Breakpoint | Largura mín. | Uso típico                  |
| ---------- | ------------ | --------------------------- |
| (default)  | 0px          | Mobile                      |
| `sm:`      | 640px        | Mobile landscape, tablets   |
| `md:`      | 768px        | Tablets                     |
| `lg:`      | 1024px       | Desktops                    |
| `xl:`      | 1280px       | Telas grandes               |

A landing é **mobile-first**: as classes sem prefixo se aplicam ao mobile, e os prefixos `sm:`/`md:`/`lg:` aumentam progressivamente.

#### Espaçamento e bordas

- Container padrão: `max-w-7xl` (80rem / 1280px) com `mx-auto`
- Padding lateral responsivo: `px-4 sm:px-6 lg:px-8`
- Padding vertical das seções: `py-20 sm:py-28`
- Bordas arredondadas: `rounded-2xl` (cards), `rounded-full` (botões, badges)

#### Sombras

- `shadow-sm` — sutil (cards menores)
- `shadow-md` — padrão (cards)
- `shadow-2xl` — destaque (imagens, vídeos)

---

## 8. Componentes UI

Componentes reutilizáveis em [`src/components/ui/`](src/components/ui/).

### `Button`

Botão polimórfico (pode renderizar como `<button>` ou `<a>` via prop `as`).

**Variantes:** `primary` (verde) · `secondary` (dourado) · `ghost` (transparente) · `outline` (borda)

**Tamanhos:** `sm` · `md` (padrão) · `lg`

**Exemplo:**

```tsx
<Button as="a" href="https://..." target="_blank" variant="secondary" size="lg">
  Reservar
</Button>
```

Acessibilidade: focus ring visível, `disabled` desabilita interação visualmente.

---

### `Card`, `CardImage`, `CardBody`

Trio de componentes composáveis para cards de conteúdo.

```tsx
<Card>
  <CardImage src="..." alt="..." />
  <CardBody>
    <h3>Título</h3>
    <p>Descrição</p>
  </CardBody>
</Card>
```

Usados em `PontosTuristicos` (3 cards) e `Hospedagens` (4 cards).

Hover: `translateY(-4px)` + sombra aumentada + zoom suave da imagem.

---

### `SectionTitle`

Título padrão de seção com:
- **Eyebrow** (texto pequeno em destaque acima)
- **H2** com fonte display
- **Underline** dourado

**Variantes:** `light` (texto claro, para fundos escuros) e `dark` (texto escuro, para fundos claros).

```tsx
<SectionTitle eyebrow="Águas cristalinas" variant="dark">
  Cachoeiras
</SectionTitle>
```

---

### `YouTubeEmbed`

Embed otimizado de vídeo do YouTube, com dois estágios:

1. **Lazy-load do thumbnail** — só carrega quando entra no viewport (via `react-intersection-observer`).
2. **Lazy-load do iframe** — só carrega quando o usuário clica em "Play". Antes disso mostra só uma imagem `hqdefault.jpg`.

Resultado: a página inicial economiza ~1 MB de JavaScript por vídeo, melhorando muito a performance.

```tsx
<YouTubeEmbed videoId="KN2euYqC53Q" title="Cachoeira Casca d'Anta" />
```

---

### `Reveal`

Wrapper de animação. Faz o conteúdo "aparecer" com fade + translate quando entra no viewport. Internamente usa `motion.div` do Framer Motion com `whileInView`.

**Props:**
- `direction`: `"up"` (padrão) · `"left"` · `"right"` · `"none"`
- `delay`: número em segundos (ex: `0.15`)

```tsx
<Reveal direction="right" delay={0.1}>
  <h1>Texto que aparece com slide da direita</h1>
</Reveal>
```

Animação roda **uma vez só** (`viewport={{ once: true }}`), evitando "flashes" ao rolar de volta.

---

## 9. Componentes de layout

### `Navbar` ([src/components/layout/Navbar.tsx](src/components/layout/Navbar.tsx))

Header fixo no topo (`position: fixed`).

**Estados:**
- **Início (scroll = 0):** fundo transparente com gradient sutil
- **Após scroll:** fundo verde escuro com `backdrop-blur` e shadow
- **Mobile (lg-):** mostra hambúrguer + menu colapsável

**Scroll-spy:** usa o hook `useScrollSpy` para detectar qual seção está visível e destacar o item correspondente no menu com cor dourada + underline.

**Atalhos do logo:** o clique no logo "Serra da Canastra" volta para `#hero` (topo).

---

### `Footer` ([src/components/layout/Footer.tsx](src/components/layout/Footer.tsx))

Rodapé com 3 colunas (em desktop) ou empilhado (mobile):

1. **Brand** — logo + descrição curta
2. **Newsletter** — formulário com validação client-side (não envia para lugar nenhum, só mostra confirmação visual)
3. **Redes sociais** — Instagram (`@viajantesdacanastra`), Facebook, YouTube

Copyright dinâmico (`new Date().getFullYear()`).

---

## 10. Componentes de seção

Cada seção é um componente independente, com seu próprio fundo, ritmo visual e conteúdo. Abaixo, resumo de cada uma:

### `Hero` ([sections/Hero.tsx](src/components/sections/Hero.tsx))
- Full screen (`min-h-screen`)
- Imagem de fundo: `public/images/hero/serra-canastra-hero.png`
- Tagline em 2 linhas no desktop, justificada (`lg:text-justify lg:[text-align-last:justify]`)
- 2 CTAs: "Comece a explorar" (secondary) + "Onde ficar" (outline)
- Indicador de scroll animado (seta com loop infinito)

### `Cachoeiras` ([sections/Cachoeiras.tsx](src/components/sections/Cachoeiras.tsx))
- Grid 2 colunas (texto + vídeo)
- 2 stats: `+300 cachoeiras` e `186m Casca d'Anta`
- YouTube embed: ID configurado em `data/videos.ts`

### `BelasPaisagens` ([sections/BelasPaisagens.tsx](src/components/sections/BelasPaisagens.tsx))
- Fundo: imagem real da Canastra com overlay verde escuro
- 2 stats: `200km² Parque Nacional` e `1.500+ Espécies`

### `Gastronomia` ([sections/Gastronomia.tsx](src/components/sections/Gastronomia.tsx))
- Grid 2 colunas invertido (vídeo à esquerda em desktop)
- Lista de 6 sabores típicos (chips)
- YouTube embed do paraíso do queijo

### `Trilhas` ([sections/Trilhas.tsx](src/components/sections/Trilhas.tsx))
- Texto + grid 2x2 de atividades (trilhas, 4x4, observação, banhos)
- Imagem em formato retrato (`aspect-[4/5]`) com legenda "Aventura real"

### `ParqueNacional` ([sections/ParqueNacional.tsx](src/components/sections/ParqueNacional.tsx))
- Fundo escuro (`canastra-stone`) com overlay sutil
- Header centralizado com badge "Preservação Eco"
- Banner com imagem do cerrado (proporção 16:9) + legenda
- 3 cards das espécies (Lobo-guará, Tamanduá-bandeira, Aves)

### `SalveCanastra` ([sections/SalveCanastra.tsx](src/components/sections/SalveCanastra.tsx))
- Header com badge de alerta (ícone `AlertTriangle`)
- 3 parágrafos descritivos do documentário
- YouTube embed do documentário

### `PontosTuristicos` ([sections/PontosTuristicos.tsx](src/components/sections/PontosTuristicos.tsx))
- Header com indicador "Visite em rota única" (ícone `Route`)
- Grid 3 cards: Igreja Itajaí, Queijaria Vale da Guirita, Caminho do Céu
- Cada card linka pro Google Maps

### `Hospedagens` ([sections/Hospedagens.tsx](src/components/sections/Hospedagens.tsx))
- 4 cards com:
  - Foto
  - Nome
  - Endereço (com ícone `MapPin`)
  - Telefone (com ícone `Phone`)
  - E-mail (quando disponível)
  - Horário de atendimento (quando disponível)
  - CTA para reservar (Booking, site próprio, etc.)

### `Localizacao` ([sections/Localizacao.tsx](src/components/sections/Localizacao.tsx))
- Fundo verde escuro
- Lado esquerdo: iframe do Google Maps embed (sem API key, query pública)
- Lado direito: vídeo documentário completo
- Botão "Como chegar" abre o Google Maps em nova aba com rota

---

## 11. Camada de dados

Todos os dados estáticos vivem em [`src/data/`](src/data/). Estão tipados com TypeScript e podem ser editados sem mexer nos componentes.

### `menu.ts`

Itens do menu de navegação.

```ts
export type MenuItem = { id: string; label: string; href: string };
export const menuItems: MenuItem[] = [...];
```

### `hospedagens.ts`

```ts
export type Hospedagem = {
  id: string;
  nome: string;
  imagem: string;
  localizacao: string;
  telefone?: string;
  email?: string;
  atendimento?: string;
  ctaLabel: string;
  ctaHref: string;
};
```

Para adicionar uma 5ª hospedagem: basta acrescentar um objeto no array. Não precisa mexer no componente.

### `pontosTuristicos.ts`

```ts
export type PontoTuristico = {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
  ctaHref: string;
};
```

### `videos.ts`

IDs dos vídeos do YouTube. Estes IDs vêm do parâmetro `v=` da URL do YouTube (ex: `https://youtube.com/watch?v=KN2euYqC53Q` → `id: "KN2euYqC53Q"`).

```ts
export const videos = {
  cachoeiras:    { id: "KN2euYqC53Q", title: "..." },
  gastronomia:   { id: "Y-P6FjaPS0g", title: "..." },
  salveCanastra: { id: "R3zzFfi8bFY", title: "..." },
  documentario:  { id: "dQw4w9WgXcQ", title: "..." }, // TODO: substituir
};
```

---

## 12. Hooks customizados

### `useScrollSpy` ([src/hooks/useScrollSpy.ts](src/hooks/useScrollSpy.ts))

Observa quais sections estão visíveis na tela e retorna o `id` da mais relevante.

**Assinatura:**

```ts
useScrollSpy(sectionIds: string[], offset?: number): string | null
```

**Implementação:** usa um único `IntersectionObserver` para todas as seções, com `rootMargin` ajustado para a altura do navbar. Mais eficiente que adicionar listener de scroll.

**Uso:**

```tsx
const activeId = useScrollSpy(menuItems.map((item) => item.id));
// activeId === "cachoeiras" enquanto essa seção está visível
```

---

## 13. Animações

### Framer Motion

Usado apenas para o componente [`Reveal`](src/components/ui/Reveal.tsx) e algumas animações pontuais no `Hero` (entrada inicial dos elementos).

#### Curva de easing usada

```ts
ease: [0.22, 1, 0.36, 1]  // cubic-bezier(0.22, 1, 0.36, 1) - "ease-out-quart"
```

Suave, sem "rebote", profissional.

#### Trigger por viewport

```ts
viewport={{ once: true, amount: 0.2 }}
```

- `once: true` — anima uma única vez (não repete ao rolar de volta)
- `amount: 0.2` — dispara quando 20% do elemento entra na tela

### Animações nativas (Tailwind)

- Hover em cards: `transition-all duration-300 hover:-translate-y-1`
- Zoom em imagens: `group-hover:scale-105 transition-transform duration-500`
- Hover em botões: cor + sombra com `transition-colors`/`transition-all`

### Respeito ao `prefers-reduced-motion`

Em `src/index.css`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Para usuários que pedem para reduzir movimento (acessibilidade), todas as animações são desabilitadas.

---

## 14. Performance

### Estratégias aplicadas

| Estratégia                                    | Impacto                                          |
| --------------------------------------------- | ------------------------------------------------ |
| Tailwind v4 com tree-shaking automático       | CSS final ~40 KB (gzip: ~7 KB)                   |
| Vite build com minificação + tree-shaking JS  | JS final ~310 KB (gzip: ~95 KB)                  |
| YouTube embeds com lazy-load + clique-to-load | Economia de ~1 MB por vídeo na carga inicial     |
| `<img loading="lazy">` em todas as fotos       | Imagens fora da tela só carregam quando próximas |
| Google Maps via iframe (sem API)              | Zero JavaScript adicional para o mapa            |
| Imagens em PNG comprimido (100–900 KB)         | Trade-off aceitável; pode-se converter pra WebP  |
| Cache HTTP imutável de 1 ano nos assets       | Configurado em `vercel.json`                     |

### Métricas alvo (Lighthouse)

- **Performance:** 90+
- **Acessibilidade:** 95+
- **Best Practices:** 95+
- **SEO:** 80+ (sem foco)

---

## 15. Acessibilidade

### Checklist aplicado

- ✓ `lang="pt-BR"` no `<html>`
- ✓ `alt` descritivo em todas as imagens
- ✓ `aria-label` em botões com ícone apenas (hambúrguer, redes sociais)
- ✓ `aria-hidden="true"` em elementos decorativos
- ✓ `aria-expanded` no botão do menu mobile
- ✓ `aria-label` em seções com role implícito (`<nav>`)
- ✓ `role="status"` no feedback do formulário de newsletter
- ✓ Foco visível em todos os elementos interativos (`focus-visible:ring`)
- ✓ Contraste mínimo AA (verificado visualmente nas cores do tema)
- ✓ `prefers-reduced-motion` respeitado
- ✓ Navegação por teclado funcional (Tab, Enter, Esc)
- ✓ Estrutura semântica: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- ✓ Hierarquia de headings (1 H1, múltiplos H2, H3 dentro)
- ✓ Textos descritivos em links (sem "clique aqui")

---

## 16. Deploy

### Vercel (recomendado)

A configuração já está pronta em [`vercel.json`](vercel.json).

#### Passo a passo

1. Faça push do código para um repositório no GitHub
2. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
3. Clique em **Add New → Project** e selecione o repositório
4. Vercel detecta automaticamente:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique em **Deploy** — em ~30s o site está no ar
6. URL final: `https://serra-da-canastra.vercel.app` (ou customizada)

#### Deploy contínuo

A partir do primeiro deploy, **todo `git push` na branch `main` dispara um redeploy automático**. PRs ganham preview deployments próprios.

### Outras opções

#### Netlify
- Build Command: `npm run build`
- Publish Directory: `dist`
- Adicionar redirect `/* → /index.html` (200) no `_redirects` ou `netlify.toml`

#### GitHub Pages
Requer base path. Adicionar `base: "/serra-da-canastra/"` no `vite.config.ts` e seguir o guia oficial do GitHub Pages para sites estáticos.

#### Servidor próprio (Nginx)
Servir o conteúdo da pasta `dist/` com fallback para `index.html` em rotas não encontradas:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 17. Tarefas comuns (recipes)

### Trocar uma imagem

1. Coloque a nova imagem em `public/images/<seção>/` (formato `.jpg`, `.webp` ou `.png`)
2. Edite o componente da seção (ou o arquivo `src/data/<...>.ts` se a imagem vier de lá)
3. Aponte para o novo caminho: `src="/images/<seção>/<arquivo>"`

### Trocar um vídeo do YouTube

1. Pegue a URL do YouTube (ex: `https://youtube.com/watch?v=ABCDEF12345`)
2. Extraia o ID (parte após `v=`): `ABCDEF12345`
3. Abra [`src/data/videos.ts`](src/data/videos.ts) e substitua o `id` correspondente

### Adicionar uma nova hospedagem

Edite [`src/data/hospedagens.ts`](src/data/hospedagens.ts) e adicione um novo objeto ao array:

```ts
{
  id: "minha-pousada",
  nome: "Minha Pousada",
  imagem: "/images/hospedagens/minha-pousada.jpg",
  localizacao: "Endereço completo",
  telefone: "(35) 9 9999-9999",
  ctaLabel: "Reserve já",
  ctaHref: "https://www.exemplo.com",
}
```

O grid se ajusta automaticamente.

### Adicionar uma nova seção

1. Crie `src/components/sections/MinhaSecao.tsx` seguindo o padrão das outras
2. Importe e use em [`src/App.tsx`](src/App.tsx)
3. (Opcional) Adicione em `src/data/menu.ts` para aparecer no navbar

### Mudar uma cor do tema

Abra [`src/index.css`](src/index.css) e edite o token desejado em `@theme`:

```css
@theme {
  --color-canastra-green-600: #novo-hex;  /* Vai refletir em toda classe `bg-canastra-green-600`, etc. */
}
```

Não precisa rebuildar nada — o HMR atualiza ao vivo.

### Mudar a fonte

1. Em `index.html`, troque o link do Google Fonts pela fonte desejada
2. Em `src/index.css`, ajuste os tokens:

```css
@theme {
  --font-display: "Sua Fonte", sans-serif;
  --font-sans: "Outra Fonte", sans-serif;
}
```

### Mudar o título do navegador / SEO

Edite o `<title>` e o `<meta name="description">` em [`index.html`](index.html).

### Adicionar analytics

#### Google Analytics 4

Em [`index.html`](index.html), adicione antes do `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXX');
</script>
```

#### Plausible (alternativa privacy-friendly)

```html
<script defer data-domain="seu-dominio.com" src="https://plausible.io/js/script.js"></script>
```

---

## 18. Decisões técnicas

### Por que Vite em vez de Next.js?

Como o projeto não exige SEO avançado, SSR ou rotas, Next.js seria over-engineering. Vite + React entrega o mesmo resultado visual com:
- Bundle final menor
- Build mais rápido
- Menos arquivos / menos complexidade
- Mais fácil de explicar em apresentação acadêmica

### Por que Tailwind v4 e não v3?

A v4 traz a abordagem CSS-first com `@theme`, eliminando o `tailwind.config.ts` em muitos casos. Performance de build melhorada (~10x mais rápido) e API mais limpa. Como é um projeto novo, faz sentido começar já na versão mais atual.

### Por que sem state manager?

Não há estado compartilhado entre componentes distantes. Tudo o que existe é local (`useState` em alguns lugares). Para landing pages, isso é o padrão.

### Por que não Next.js Image / outra solução de imagens?

`<img>` nativo com `loading="lazy"` cobre 90% dos casos. Imagens locais em `/public` são servidas estaticamente. Para um trabalho acadêmico, é mais simples e funcional.

### Por que YouTube embed manual em vez de pacote?

Pacotes prontos (ex: `react-youtube`) carregam o iframe imediatamente, custando ~1 MB de JS. A implementação manual mostra só o thumbnail, e só carrega o player quando o usuário clica. Resultado: muito mais leve.

### Por que iframe do Google Maps em vez da JavaScript API?

A JS API exige chave de API, configuração de billing, e adiciona ~150 KB de JS. O iframe estático com URL `?output=embed` funciona sem chave e zero JS adicional.

---

## 19. Limitações conhecidas

| Limitação                                                                | Workaround                                                    |
| ------------------------------------------------------------------------ | ------------------------------------------------------------- |
| Newsletter não envia para lugar nenhum (apenas feedback visual)          | Integrar Formspree, EmailJS, Mailchimp ou backend próprio     |
| Sem CMS — qualquer texto/imagem exige editar código + redeploy           | Aceitável para projeto pequeno; migrar para Sanity/Strapi se crescer |
| Imagens em PNG são pesadas (~200–900 KB cada)                            | Converter pra WebP (-50%) ou usar serviço de otimização       |
| Não há rotas (`/`, `/sobre`, etc.) — tudo em uma página                  | Adicionar `react-router-dom` se precisar de páginas separadas |
| Não foi testado em IE11 ou navegadores muito antigos                    | Suporte foca em Chrome/Firefox/Safari/Edge modernos           |
| Watermarks de algumas imagens stock estão presentes                      | Substituir por fotos autorais ou licenciadas                  |

---

## 20. Roadmap futuro

Ideias para evolução, se o projeto continuar:

- [ ] Otimização de imagens (WebP + responsive `srcset`)
- [ ] Adicionar PWA com cache offline
- [ ] Galeria de fotos com lightbox em cada seção
- [ ] Página individual para cada hospedagem (`/hospedagens/[slug]`)
- [ ] Integração de formulário de contato (Formspree gratuito)
- [ ] Migração para CMS (Sanity ou Decap) para edição não-técnica
- [ ] SEO: sitemap.xml, schema.org JSON-LD, Open Graph completo
- [ ] Múltiplos idiomas (PT/EN/ES) com `react-i18next`
- [ ] Modo claro/escuro (toggle no header)
- [ ] Animações mais elaboradas com parallax scroll
- [ ] Testes E2E com Playwright
- [ ] Pipeline CI/CD com GitHub Actions (lint + build + deploy)

---

## Contato e créditos

- **Projeto:** Trabalho acadêmico
- **Stack:** Vite + React 18 + TypeScript + Tailwind CSS v4 + Framer Motion
- **Período:** Maio/2026
- **Repositório:** local em `c:\Users\ANDRE\Documents\development\projects\serra-da-canastra`

### Imagens

As imagens utilizadas são, em sua maioria, de fontes públicas/stock (Unsplash, sites de turismo regional como `viagensecaminhos.com.br` e `rekrotas.com.br`). Em produção definitiva, recomenda-se substituir por fotos autorais ou devidamente licenciadas.

### Vídeos

Os vídeos são embedados via YouTube, sem cópia de conteúdo — sempre respeitando a autoria original.
