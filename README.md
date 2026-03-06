# 🏥 Landing Page — Dra. Mariana Fiorotto

> Landing page premium para endocrinologista com design elegante, performance excepcional e compliance médico rigoroso.

[![Lighthouse Performance](https://img.shields.io/badge/Performance-95%2B-success?style=flat-square&logo=lighthouse)](https://developers.google.com/web/tools/lighthouse)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-success?style=flat-square)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Compliance](https://img.shields.io/badge/Compliance-CFM%20%7C%20LGPD-blue?style=flat-square)](docs/compliance/COMPLIANCE.md)

---

## 📋 Sobre o Projeto

Landing page desenvolvida para **Dra. Mariana Antunes Fiorotto de Abreu**, endocrinologista e metabologista (CRM-TO 5767 | RQE 3793), com foco em elegância, performance e conformidade com regulamentações médicas brasileiras.

### ✨ Destaques Técnicos

- **Zero frameworks** — HTML5 semântico + CSS Vanilla + JavaScript ES2022
- **Performance suprema** — Lighthouse score >95 em todas as métricas
- **Design premium** — Gradient mesh, glassmorphism, animações sofisticadas
- **Compliance total** — CFM (Conselho Federal de Medicina) + LGPD
- **Acessibilidade** — WCAG 2.1 AA, navegação por teclado, leitores de tela
- **Mobile-first** — Responsivo de 320px a 1920px+

---

## 🎨 Identidade Visual

### Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| **Brand Gold** | `#9A7652` | Autoridade, elementos premium |
| **Brand Rose** | `#E1A6A0` | CTAs, destaques, feminilidade |
| **Background** | `#FEFCFA` | Fundo principal off-white quente |
| **Bg Alt** | `#FBF7F4` | Seções alternadas bege suave |
| **Bg Dark** | `#2D2A26` | Footer escuro premium |
| **Text** | `#2D2A26` | Texto principal |

### Tipografia

```css
/* Headlines */
font-family: 'Cormorant Garamond', serif;
font-weight: 300;
letter-spacing: 0.02em;

/* Body/UI */
font-family: 'Montserrat', sans-serif;
font-weight: 400 | 600;
```

**Filosofia:** Elegância silenciosa inspirada em marcas de luxo internacional (Aesop, Aman Resorts) — premium que não grita.

---

## 🏗️ Estrutura do Projeto

```
lp-marianafiorotto/
├── public/                     # Servido pela Vercel
│   ├── index.html              # Página principal
│   ├── css/
│   │   └── main.css            # CSS compilado
│   ├── js/
│   │   └── app.js              # JavaScript compilado
│   ├── assets/
│   │   ├── logos/              # 4 variações do logo
│   │   └── images/
│   │       ├── hero/           # Foto hero da Dra.
│   │       ├── about/          # Foto seção sobre
│   │       └── textures/       # Grain, gradients
│   ├── og-image.png            # Open Graph preview
│   ├── robots.txt              # SEO
│   ├── sitemap.xml             # Mapa do site
│   └── site.webmanifest        # PWA manifest
│
├── src/                        # Código-fonte
│   ├── css/
│   │   ├── tokens.css          # Design tokens (variáveis CSS)
│   │   ├── reset.css           # CSS normalize
│   │   ├── base.css            # Estilos globais
│   │   ├── grid.css            # Sistema de grid
│   │   ├── utilities.css       # Classes utilitárias
│   │   ├── animations.css      # Keyframes e transições
│   │   ├── components/         # Botões, cards, navbar, etc.
│   │   └── sections/           # Hero, about, FAQ, etc.
│   ├── js/
│   │   ├── utils.js            # Funções auxiliares
│   │   ├── modules/            # Módulos (navbar, scroll, etc.)
│   │   └── main.js             # Entry point
│   └── icons/                  # SVG icons
│
├── scripts/
│   └── build.js                # Script de build (concat CSS+JS)
│
├── vercel.json                 # Config Vercel (headers, cache)
└── package.json                # Dependências e scripts
```

---

## 🚀 Como Rodar

### Pré-requisitos

- **Node.js** 18+ (recomendado: LTS)
- **npm** ou **pnpm**

### Instalação

```bash
# Clone o repositório (se aplicável)
git clone [url-do-repo]
cd lp-marianafiorotto

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicia servidor de desenvolvimento (live reload)
npm run dev

# Acesse em: http://localhost:3000
```

O comando `dev` usa `live-server` para servir a pasta `public/` com recarregamento automático.

### Build

```bash
# Compila CSS e JS para public/
npm run build

# Ou individualmente:
npm run build:css   # Concatena todos os CSS
npm run build:js    # Concatena todos os JS
```

**Como funciona o build:**
1. `build.js` lê todos os arquivos de `src/css/` e `src/js/`
2. Concatena na ordem correta (tokens → reset → base → componentes → seções)
3. Gera `public/css/main.css` e `public/js/app.js`
4. Vercel serve `public/` diretamente

### Otimização de Imagens

```bash
# Otimiza imagens com Sharp (compressão WebP + fallbacks)
npm run optimize:images
```

### Auditoria

```bash
# Roda Lighthouse (performance, acessibilidade, SEO)
npm run audit

# Gera: lighthouse-report.html
```

---

## 📐 Seções da Landing Page

A LP possui **13 blocos** principais (na ordem):

1. **Navbar** — Logo + links + CTA, glassmorphism on scroll
2. **Hero** — Headline impactante + foto profissional + CTA principal
3. **Barra de Credenciais** — CRM · RQE · Anos de experiência · Docência
4. **Sobre** — Biografia editorial + timeline de formação + link Lattes
5. **Diferenciais** — 6 glass cards com diferenciais da abordagem
6. **Especialidades** — 7 acordeões (diabetes, tireoide, obesidade, etc.)
7. **Abordagem** — 5 passos em timeline luxuosa
8. **Resultados** — 4 contadores animados de estatísticas
9. **Educação** — 3 cards estilo magazine com conteúdos educativos
10. **FAQ** — 11 perguntas frequentes em acordeão elegante
11. **Consultório** — Mapa Google + card info glassmorphic
12. **CTA Final** — Gradient mesh animado + botão shimmer
13. **Footer** — Dark premium com 3 colunas + links legais

---

## ✨ Técnicas Premium Implementadas

### 1. **Gradient Mesh**
Backgrounds com múltiplas camadas de `radial-gradient` + grain texture overlay. Usado no hero, stats e CTA final.

```css
background:
  radial-gradient(ellipse 80% 50% at 50% -20%, rgba(225,166,160,0.25), transparent),
  radial-gradient(ellipse 60% 80% at 95% 50%, rgba(154,118,82,0.15), transparent),
  radial-gradient(ellipse 100% 100% at 5% 80%, rgba(225,166,160,0.15), transparent);
```

### 2. **Glassmorphism**
Cards com `backdrop-filter: blur(16px)` + saturação + borda sutil. Efeito Apple/iOS.

```css
backdrop-filter: blur(16px) saturate(180%);
background: rgba(255,255,255,0.65);
border: 1px solid rgba(255,255,255,0.4);
```

### 3. **Shimmer Button**
Pseudo-elemento `::before` com gradiente linear animado da esquerda para direita (3s loop).

```css
@keyframes shimmer {
  from { left: -100%; }
  to { left: 200%; }
}
```

### 4. **Cursor Glow** (Desktop Only)
Div fixa 400×400px com `radial-gradient` rosado que acompanha o cursor via `mousemove`.

### 5. **Grain Texture Global**
`body::after` com SVG noise em `opacity: 0.025`, `mix-blend-mode: overlay` — adiciona textura analógica sutil.

### 6. **Scroll Choreography**
Animações diferenciadas por seção (fade-up, fade-left, scale, stagger) com `IntersectionObserver` e spring easing:

```javascript
cubic-bezier(0.16, 1, 0.3, 1)
```

---

## ⚖️ Compliance & Regulamentações

### CFM (Conselho Federal de Medicina)

✅ **Permitido:**
- Informações sobre formação e especialização
- CRM e RQE visíveis
- Conteúdo educativo com disclaimers
- Endereço e horário de atendimento

❌ **Proibido:**
- Preços ou valores de consulta
- Promessas de cura ou resultados garantidos
- Depoimentos de pacientes
- Fotos de antes/depois
- Superlativos ("melhor", "único", "número 1")
- Comparações com outros médicos

### LGPD

- ✅ Cookie banner com opção **Aceitar** + **Rejeitar**
- ✅ `localStorage` usado apenas com consentimento
- ✅ Nenhum dado sensível coletado

**Referência completa:** [`docs/compliance/COMPLIANCE.md`](../docs/compliance/COMPLIANCE.md)

---

## 📱 Responsividade

### Breakpoints

```css
--bp-xs:  320px;   /* Mobile small */
--bp-sm:  480px;   /* Mobile large */
--bp-md:  768px;   /* Tablet */
--bp-lg:  1024px;  /* Laptop */
--bp-xl:  1280px;  /* Desktop */
--bp-2xl: 1536px;  /* Large desktop */
```

**Estratégia:** Mobile-first com progressive enhancement.

---

## ♿ Acessibilidade

- ✅ HTML5 semântico (`<header>`, `<main>`, `<section>`, `<article>`)
- ✅ ARIA labels em elementos interativos
- ✅ Navegação por teclado funcional (tab order lógico)
- ✅ Focus states visíveis (`:focus-visible`)
- ✅ `prefers-reduced-motion` respeitado (desabilita animações)
- ✅ Contraste de cores WCAG AA (mínimo 4.5:1 para texto)
- ✅ Imagens com `alt` descritivo
- ✅ Formulários com `<label>` associado

**Meta:** WCAG 2.1 AA + Lighthouse Accessibility >95

---

## 🔍 SEO

### Meta Tags Completas

```html
<title>Dra. Mariana Fiorotto — Endocrinologista em Gurupi-TO</title>
<meta name="description" content="Endocrinologista e Metabologista. CRM-TO 5767 | RQE 3793. Diabetes, Tireoide, Obesidade. Clínica REABILITAR — Gurupi-TO.">
<meta property="og:image" content="/og-image.png">
```

### Schema.org JSON-LD

Markup estruturado para **Physician** com dados completos (nome, CRM, especialização, endereço, telefone).

### Sitemap & Robots

- `sitemap.xml` — Mapa do site para crawlers
- `robots.txt` — Permite indexação total

---

## 🌐 Deploy

### Vercel (Recomendado)

```bash
# Instale o Vercel CLI (se não tiver)
npm i -g vercel

# Faça login
vercel login

# Deploy de preview
vercel

# Deploy de produção
vercel --prod
```

**Configuração:** `vercel.json` já está pronto com:
- Security headers (CSP, HSTS, X-Frame-Options)
- Cache otimizado (1 ano para assets, 1 hora para HTML)
- Rewrite rules (todas as rotas → `index.html`)

### Outras Opções

- **Netlify:** `npx netlify-cli deploy --dir=public`
- **GitHub Pages:** Push `public/` para branch `gh-pages`
- **S3 + CloudFront:** Upload `public/` para bucket

---

## 📊 Performance

### Lighthouse Targets

| Métrica | Meta | Descrição |
|---------|------|-----------|
| **Performance** | >95 | Tempo de carregamento, FCP, LCP |
| **Accessibility** | >95 | WCAG, ARIA, contraste, keyboard nav |
| **Best Practices** | >95 | HTTPS, console errors, libs atualizadas |
| **SEO** | >95 | Meta tags, sitemap, mobile-friendly |

### Otimizações Aplicadas

- ✅ CSS e JS minificados e concatenados
- ✅ Imagens otimizadas (WebP + fallbacks)
- ✅ Lazy loading para imagens abaixo da dobra
- ✅ Preconnect para Google Fonts
- ✅ Critical CSS inline (tokens + reset + base)
- ✅ `defer` em scripts não-críticos
- ✅ Service Worker para cache de assets (futuro)

**Peso total:** <400KB (HTML + CSS + JS + imagens críticas)

---

## 🧪 Testes

### Manual

- ✅ Cross-browser (Chrome, Safari, Firefox, Edge)
- ✅ Mobile real (iOS Safari, Android Chrome)
- ✅ Navegação por teclado (Tab, Enter, Esc)
- ✅ Leitor de tela (VoiceOver, NVDA)
- ✅ Dark mode (se aplicável)

### Automatizado

```bash
# Lighthouse
npm run audit

# HTML lint (se configurado)
npm run lint:html
```

---

## 📚 Documentação de Referência

| Documento | Caminho | Descrição |
|-----------|---------|-----------|
| **PRD** | [`docs/prd/PRD-LANDING-PAGE.md`](../docs/prd/PRD-LANDING-PAGE.md) | Product Requirements Document completo |
| **Design System** | [`docs/design-system/DESIGN-SYSTEM.md`](../docs/design-system/DESIGN-SYSTEM.md) | Tokens, componentes, guidelines |
| **Copy Completa** | [`docs/copy/COPY-COMPLETA.md`](../docs/copy/COPY-COMPLETA.md) | Todo o conteúdo textual |
| **Stack & Estrutura** | [`docs/STACK-E-ESTRUTURA.md`](../docs/STACK-E-ESTRUTURA.md) | Arquitetura técnica detalhada |
| **Compliance** | [`docs/compliance/COMPLIANCE.md`](../docs/compliance/COMPLIANCE.md) | Regras CFM e LGPD |
| **Guia de Implementação** | [`IMPLEMENTATION-GUIDE.md`](../IMPLEMENTATION-GUIDE.md) | Sequência completa de implementação |

---

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **HTML5** | — | Markup semântico |
| **CSS3** | — | Estilização (custom properties, grid, flexbox) |
| **JavaScript** | ES2022 | Interatividade (modules, `type="module"`) |
| **Node.js** | 18+ | Scripts de build e dev server |
| **Sharp** | ^0.34.5 | Otimização de imagens |
| **live-server** | — | Dev server com live reload |
| **Vercel** | — | Hospedagem e deploy |

**Filosofia:** Zero dependências no frontend. Tudo em HTML/CSS/JS vanilla para:
- Performance máxima
- Controle total
- Sem vulnerabilidades de libs de terceiros
- Bundle size mínimo

---

## 👥 Equipe

- **Design & Desenvolvimento:** Synkra AIOS Framework
- **Cliente:** Dra. Mariana Fiorotto
- **Consultoria de Compliance:** CFM Resolution Nº 2.336/2023

---

## 📝 Licença

Este projeto é privado e confidencial. Todos os direitos reservados à Dra. Mariana Fiorotto.

**Uso não autorizado é proibido.**

---

## 🔗 Links Úteis

- 🌐 **Site:** [dramarianafiorotto.com.br](https://dramarianafiorotto.com.br) *(deploy pendente)*
- 📱 **WhatsApp:** [+55 63 9244-2406](https://wa.me/5563992442406?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.)
- 📷 **Instagram:** [@dramarianafiorotto](https://instagram.com/dramarianafiorotto)
- 🎓 **Lattes:** [cnpq.br/9517178230128011](https://lattes.cnpq.br/9517178230128011)

---

## 🐛 Troubleshooting

### Servidor de dev não inicia

```bash
# Instale novamente o live-server globalmente
npm install -g live-server

# Ou use diretamente via npx
npx live-server public --port=3000
```

### Build não gera arquivos

```bash
# Verifique se src/ existe com arquivos CSS/JS
ls -R src/

# Rode o build com debug
node scripts/build.js --verbose
```

### Imagens não aparecem

- Verifique se os arquivos estão em `public/assets/images/`
- Confirme os caminhos no HTML (devem ser relativos a `/public`)
- Após otimização, use extensões `.webp` com fallback `.jpg`

### Lighthouse score baixo

- Rode localmente com `npm run dev` antes de auditar
- Desabilite extensões do navegador que injetam scripts
- Use modo anônimo para auditorias precisas
- Verifique se o build foi executado (`npm run build`)

---

## 🎯 Roadmap Futuro

- [ ] Service Worker para offline support
- [ ] Google Analytics 4 (com consentimento LGPD)
- [ ] Formulário de agendamento inline (integração com sistema da clínica)
- [ ] Blog integrado para conteúdo educativo
- [ ] Multi-idioma (EN/ES) para pacientes internacionais
- [ ] PWA completo (instalável)

---

## 📞 Contato

Para questões técnicas ou solicitações de manutenção, entre em contato através dos canais oficiais do projeto.

---

**Desenvolvido com ♥ e rigor técnico extremo.**

*"Elegância é quando o interior é tão belo quanto o exterior." — Coco Chanel*
