# Serra da Canastra — site para apresentação

Site institucional sobre turismo na **Serra da Canastra** (Minas Gerais). Uma página só, que rola de cima para baixo, com fotos, textos e links úteis para quem quer conhecer a região.

**Site no ar:** [serra-da-canastra.vercel.app](https://serra-da-canastra.vercel.app)

---

## O que o site faz

- Apresenta a serra de forma visual e organizada por temas.
- Menu no topo leva direto para cada parte da página.
- Funciona bem no **celular** e no **computador**.
- Em **Roteiro** e **Hospedagens**, no celular dá para **deslizar os cards** ou usar as **setas** para ver mais opções.
- Vídeos (YouTube e arquivo local) e links externos (Google Maps, Booking, sites das pousadas).

---

## Seções da página (em ordem)

| Seção | O que mostra |
|--------|----------------|
| **Hero** | Abertura com foto da serra e chamada principal |
| **Cachoeiras** | Destaque das cachoeiras da região |
| **Belas Paisagens** | Paisagens e natureza |
| **Gastronomia** | Vídeo e texto sobre comida típica (queijo, culinária local) |
| **Trilhas** | Trilhas para caminhada e foto |
| **Parque Nacional** | Informações sobre o Parque Nacional da Serra da Canastra |
| **Salve Canastra** | Conscientização / preservação da região |
| **Não deixe de visitar** | Roteiro com 3 pontos (Capela Itajuí, Queijaria, Caminho do Céu) — cards com link “Veja mais” |
| **Hospedagens** | Pousadas e chalés com contato e botão para reservar |
| **Localização** | Vídeo e como chegar |
| **Rodapé** | Créditos e “Desenvolvido por: Warcode” |

Itens do menu: Cachoeiras, Belas Paisagens, Gastronomia, Trilhas, Parque Nacional, Hospedagens, Localização.

---

## Tecnologias principais

| Tecnologia | Para que serve (em poucas palavras) |
|------------|-------------------------------------|
| **React** | Monta a interface em componentes reutilizáveis |
| **TypeScript** | JavaScript com tipos — menos erro no código |
| **Vite** | Ferramenta rápida para rodar e gerar o site |
| **Tailwind CSS** | Estilização (cores, layout, responsivo) |
| **Framer Motion** | Animações suaves ao rolar a página |
| **Lucide React** | Ícones (menu, setas, mapa, etc.) |

**Publicação:** [Vercel](https://vercel.com) — hospedagem gratuita (plano Hobby); cada `git push` na branch `main` pode atualizar o site automaticamente.

---

## Estrutura do projeto (resumo)

- `src/components/sections/` — cada bloco da página (Hero, Trilhas, etc.)
- `src/components/layout/` — menu (Navbar) e rodapé (Footer)
- `src/components/ui/` — cards, carrossel mobile, botões
- `src/data/` — textos e links (menu, hospedagens, pontos do roteiro)
- `public/images/` e `public/videos/` — fotos e vídeos do site

---

## Ideias para falar na apresentação (1–2 min)

1. **Problema:** divulgar a Serra da Canastra de forma clara e bonita no celular.  
2. **Solução:** landing page única, leve, com roteiro e hospedagens práticos.  
3. **Destaque técnico:** site responsivo + carrossel no mobile testado em Android e iOS.  
4. **Deploy:** projeto no GitHub conectado à Vercel; site público na internet.

---

*Documento para uso em sala — linguagem simples. Atualize o link do site se o domínio mudar.*
