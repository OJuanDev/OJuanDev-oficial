# Atualização OJuanDev

Copie index.html, robots.txt, sitemap.xml e llms.txt para a raiz do site. Substitua assets/css/style.css e acrescente assets/images/og-ojuandev.jpg. Preserve seu assets/js/main.js, favicon e demais imagens. Este pacote é uma atualização para o projeto existente e não inclui todos os arquivos originais.

## Alterações

- Seção Grupo OJuanDev com relação visual entre a marca principal, Studio OKO e Flashlab, apresentação das especialidades e links oficiais.
- Etiquetas discretas: Mundo Pura → Studio OKO; Mobiletti, Ressalva Project, Praia, Eclé, CUBI e Dr. Sérgio Faria → Flashlab. Essa distribuição segue a interpretação de que todos, exceto Mundo Pura, pertencem à Flashlab. Caso a intenção fosse apenas portfólio compartilhado sem atribuição, revise essas etiquetas e a lista correspondente no llms.txt antes de publicar.
- Os projetos particulares continuam separados.
- Title, description, canonical, Open Graph, Twitter Card e imagem social 1200 × 630.
- JSON-LD com Person, Organization, WebSite e ProfilePage, conectando Juan às duas agências por meio do grupo. Sem avaliações, endereço ou dados de empresa inventados.
- Sitemap com somente a página canônica existente. Âncoras não são páginas independentes; sites das agências não pertencem ao sitemap deste domínio.
- robots.txt permite rastreamento e indica o sitemap. llms.txt oferece um resumo editorial com links oficiais.
- Conteúdo acessível sem JavaScript, carregamento tardio das imagens, correções textuais e link do GitHub atualizado.

## Publicação e verificação

1. Publique os arquivos mantendo a estrutura do pacote. Não substitua outras configurações da hospedagem.
2. Confira que /, /robots.txt, /sitemap.xml, /llms.txt e /assets/images/og-ojuandev.jpg retornam HTTP 200, sem autenticação ou bloqueios de firewall.
3. Garanta redirecionamento permanente das variantes http, sem www e /index.html para https://www.ojuandev.com.br/. A configuração deve ser feita na hospedagem, preservando regras já existentes.
4. Envie https://www.ojuandev.com.br/sitemap.xml no Google Search Console e solicite indexação da página inicial.
5. Valide o JSON-LD no Schema Markup Validator e a elegibilidade no Rich Results Test. Nem todo tipo de dado estruturado gera resultado especial.
6. Teste compartilhamento da imagem social e confira o comportamento mobile, menus e modais usando seu main.js atual.
7. Meça Core Web Vitals/PageSpeed após publicação; o pacote não representa uma auditoria de desempenho em produção. Converta imagens pesadas para WebP/AVIF quando necessário.

O llms.txt é um complemento opcional. O Google informa que não o utiliza na Pesquisa. Não há garantia de indexação, posicionamento ou citações por IA. A base é conteúdo público, claro e consistente, acesso permitido e referências verificáveis.

Fontes: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=pt-br e https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=pt-br

Quando a Flashlab tiver domínio definitivo, atualize o link na seção do grupo, no JSON-LD e no llms.txt.
