# AgriNutri - Website Corporativo

Website corporativo completo para empresa de farinhas para alimentação animal, desenvolvido com HTML5, CSS3 e JavaScript puro.

## 🚀 Características

- **Responsivo**: Design mobile-first com breakpoints otimizados
- **Acessível**: Conformidade com WCAG 2.1 AA
- **SEO Otimizado**: Meta tags, JSON-LD, sitemap e robots.txt
- **Performance**: Lazy loading, CSS otimizado, sem dependências externas
- **LGPD Compliant**: Banner de cookies e formulários com consentimento

## 📁 Estrutura de Arquivos

\`\`\`
/
├── index.html              # Página inicial
├── sobre.html              # Sobre a empresa
├── produtos.html           # Catálogo de produtos
├── nutricao.html           # Conteúdo técnico
├── qualidade.html          # Certificações e qualidade
├── logistica.html          # Logística e atendimento
├── sustentabilidade.html   # ESG e sustentabilidade
├── faq.html               # Perguntas frequentes
├── contato.html           # Formulário de contato
├── sitemap.xml            # Mapa do site
├── robots.txt             # Diretrizes para crawlers
├── assets/
│   ├── css/
│   │   └── style.css      # Estilos principais
│   ├── js/
│   │   └── main.js        # JavaScript principal
│   └── img/               # Imagens e assets
└── README.md              # Este arquivo
\`\`\`

## 🎨 Paleta de Cores

- **Azul Principal**: #1E40AF
- **Verde Secundário**: #16A34A
- **Cinza Escuro**: #0F172A
- **Cinza Médio**: #64748B
- **Branco**: #FFFFFF

## 🔧 Funcionalidades JavaScript

### Navegação
- Menu mobile responsivo com hambúrguer
- Navegação por teclado
- Estados ativos automáticos

### Componentes Interativos
- **Modais**: Sistema de modais acessível com focus trap
- **Acordeão**: FAQ com ARIA e navegação por teclado
- **Filtros**: Busca e filtro de produtos em tempo real
- **Carrinho**: Sistema de cotação com localStorage

### Formulários
- Validação em tempo real
- Consentimento LGPD obrigatório
- Feedback visual de erros

### Performance
- Lazy loading de imagens com IntersectionObserver
- Animações respeitando `prefers-reduced-motion`
- Notificações toast personalizadas

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Grid System
- Sistema de grid CSS nativo
- Flexbox para layouts complexos
- Componentes que se adaptam automaticamente

## ♿ Acessibilidade

### Implementações
- HTML semântico com landmarks
- ARIA labels e roles apropriados
- Contraste AA em todos os elementos
- Navegação por teclado completa
- Textos alternativos descritivos
- Estados de foco visíveis

### Testes Recomendados
- Navegação apenas por teclado
- Leitor de tela (NVDA/JAWS)
- Teste de contraste
- Validação HTML

## 🔍 SEO

### Meta Tags
- Títulos únicos por página
- Descriptions otimizadas
- Open Graph e Twitter Cards
- Canonical URLs

### Dados Estruturados (JSON-LD)
- Organization schema
- Product schemas (em produtos.html)
- FAQPage schema (em faq.html)
- BreadcrumbList (páginas internas)

## 🍪 LGPD e Privacidade

### Implementações
- Banner de cookies com opções
- Formulários com checkbox de consentimento
- Links para política de privacidade
- Armazenamento local apenas com consentimento

## 🚀 Como Usar

### Desenvolvimento Local
1. Clone ou baixe os arquivos
2. Abra `index.html` em um servidor local
3. Para desenvolvimento, use Live Server ou similar

### Personalização

#### Cores
Edite as variáveis CSS em `assets/css/style.css`:
\`\`\`css
:root {
  --color-primary: #1E40AF;
  --color-secondary: #16A34A;
  /* ... outras cores */
}
\`\`\`

#### Conteúdo
- Textos: Edite diretamente nos arquivos HTML
- Imagens: Substitua os placeholders em `/assets/img/`
- Produtos: Modifique os dados em `produtos.html`

#### Funcionalidades
- JavaScript modular em `assets/js/main.js`
- Cada função é independente e pode ser modificada

### Deploy
1. Faça upload de todos os arquivos para o servidor
2. Configure redirects se necessário
3. Teste todas as funcionalidades
4. Submeta o sitemap.xml ao Google Search Console

## 📊 Métricas de Performance

### Otimizações Implementadas
- CSS minificado (comentário com sugestão)
- Imagens com lazy loading
- JavaScript defer
- Sem dependências externas pesadas

### Recomendações Adicionais
- Comprimir imagens (WebP quando possível)
- Implementar Service Worker para cache
- Usar CDN para assets estáticos
- Minificar CSS e JS para produção

## 🔧 Manutenção

### Atualizações Regulares
- Revisar conteúdo dos produtos
- Atualizar certificações
- Verificar links quebrados
- Testar formulários

### Monitoramento
- Google Analytics (adicionar código)
- Google Search Console
- Testes de velocidade regulares
- Verificação de acessibilidade

## 📞 Suporte

Para dúvidas sobre implementação ou customização, consulte:
- Documentação HTML5/CSS3
- Guias de acessibilidade WCAG
- Melhores práticas de SEO
- Regulamentação LGPD

---

**Desenvolvido com foco em qualidade, performance e acessibilidade.**
