// Custom Cursor
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  if (cursor) {
    cursor.style.left = mx + "px";
    cursor.style.top = my + "px";
  }
});

function animateRing() {
  if (ring) {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
  }
  requestAnimationFrame(animateRing);
}
animateRing();

function bindCursorHover(elements) {
  elements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      if (cursor && ring) {
        cursor.classList.add("hover");
        ring.classList.add("hover");
      }
    });
    el.addEventListener("mouseleave", () => {
      if (cursor && ring) {
        cursor.classList.remove("hover");
        ring.classList.remove("hover");
      }
    });
  });
}

bindCursorHover(
  document.querySelectorAll(
    "a, button, .diff-card, .skill-pill, .case-card, .timeline-content-vertical, .timeline-dot-vertical, .testimonial-card, .conteudo-card",
  ),
);

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -60px 0px"
  },
);
reveals.forEach((el) => observer.observe(el));

// Counters
function animateCounter(el, target, suffix = "") {
  let start = 0;
  const duration = 2000;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const heroObs = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      setTimeout(() => {
        const pEl = document.getElementById("counter-projects");
        const yEl = document.getElementById("counter-years");
        const cEl = document.getElementById("counter-clients");
        if (pEl) animateCounter(pEl, 100, "+");
        if (yEl) animateCounter(yEl, 5, "+");
        if (cEl) animateCounter(cEl, 50, "+");
      }, 900);
      heroObs.disconnect();
    }
  }, {
    threshold: 0.3
  },
);
const heroSection = document.getElementById("hero");
if (heroSection) heroObs.observe(heroSection);

// Nav scroll effect
window.addEventListener("scroll", () => {
  const nav = document.getElementById("nav");
  if (nav) {
    nav.style.background =
      window.scrollY > 50 ? "rgba(8,8,8,0.9)" : "rgba(8,8,8,0.6)";
  }
});

// Mobile Navigation Toggle
const navHamburger = document.getElementById("navHamburger");
const navMenu = document.getElementById("navMenu");

if (navHamburger && navMenu) {
  function toggleMenu() {
    const isOpen = navMenu.classList.contains("active");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    navHamburger.classList.add("active");
    navMenu.classList.add("active");
    navHamburger.setAttribute("aria-expanded", "true");
    navHamburger.setAttribute("aria-label", "Fechar menu");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    navHamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navHamburger.setAttribute("aria-expanded", "false");
    navHamburger.setAttribute("aria-label", "Abrir menu");
    document.body.style.overflow = "";
  }

  navHamburger.addEventListener("click", toggleMenu);

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
      closeMenu();
    }
  });
}

// Swiper Initialization
function initSwiper() {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };

  if (document.querySelector(".cases-swiper")) {
    new Swiper(".cases-swiper", swiperOptions);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSwiper);
} else {
  initSwiper();
}

// ==========================================
// CASE STUDY MODAL DATA & CONTROLLER
// ==========================================
const casesData = {
  mobiletti: {
    title: "Mobiletti",
    category: "// ESTUDO DE CASO · E-COMMERCE & CONFIGURADOR",
    tags: ["React", "Shopify API", "Vanilla JS", "Liquid"],
    liveUrl: "http://mobiletti.com.br",
    liveUrlLabel: "Visitar Loja Ao Vivo",
    challenge: "A Mobiletti é uma marca de estampas e tecidos sob medida e alto padrão. O maior gargalo do e-commerce era a impossibilidade de os clientes personalizarem cores, estampas, tecidos e dimensões em tempo real. Isso gerava atrito constante, dependência de atendimento via suporte e uma alta taxa de abandono de carrinho.",
    solution: "Arquitetura e desenvolvimento de um configurador de produtos interativo em React integrado nativamente à API da Shopify. Construí um sistema dinâmico de composição visual com renderização por camadas em tempo real. O customizer recalcula o preço instantaneamente com base nas especificações selecionadas e injeta os atributos customizados diretamente nas propriedades do item no carrinho da Shopify.",
    results: "Aumento expressivo na taxa de conversão direta do e-commerce e no ticket médio devido à facilidade de personalização. Eliminou-se o gargalo no suporte e concedeu-se autonomia total para a equipe da loja gerenciar regras e acabamentos pelo painel da Shopify.",
  },
  ressalva: {
    title: "Ressalva Project",
    category: "// ESTUDO DE CASO · MODA PREMIUM",
    tags: ["Shopify", "Liquid Custom", "Performance CSS", "Vanilla JS"],
    liveUrl: "http://ressalvaproject.com.br",
    liveUrlLabel: "Visitar Loja Ao Vivo",
    challenge: "A Ressalva Project necessitava de um tema totalmente sob medida para representar sua estética minimalista. Os temas genéricos disponíveis na plataforma apresentavam lentidão no carregamento, código poluído e engessamento no design em momentos de pico de acessos e lançamentos de coleções (drops).",
    solution: "Desenvolvimento de tema exclusivo em Liquid, sem o uso de bibliotecas pesadas de terceiros. Apliquei Vanilla JS assíncrono para interações de interface, minicart em gaveta com atualização dinâmica via Ajax API da Shopify e carregamento progressivo otimizado de imagens em alta resolução. Diversas funcionalidades adicionais foram implementadas como relação automática de produtos da mesma cor, complete o look, countdown para lançamentos, entre outras.",
    results: "Performance, estética e funcionalidade alinhadas para maximizar a retenção e a interatividade dos clientes.",
  },
  praia: {
    title: "Praia",
    category: "// ESTUDO DE CASO · TEMA CUSTOMIZADO NUVEMSHOP",
    tags: ["NuvemShop", "JavaScript", "CSS3 Moderno", "UX UI"],
    liveUrl: "http://praia.shop/",
    liveUrlLabel: "Visitar Loja Ao Vivo",
    challenge: "A plataforma NuvemShop da marca possuía um layout padrão e rígido que não capturava a identidade visual praia/lifestyle. A experiência mobile era truncada, com filtros de busca lentos e exibição de fotos que não valorizavam os produtos.",
    solution: "Criação de um tema customizado, restruturado e otimizado para melhorar a performance e a usabilidade do site e com mais funcionalidades como tabela de medidas e player do Spotify integrado com playlist da marca.",
    results: "Aumento na taxa de conversão e permanência no site, com a equipe da marca ganhando 100% de autonomia para modificar banners e vitrines sem dependência técnica.",
  },
  ecle: {
    title: "Eclé",
    category: "// ESTUDO DE CASO · E-COMMERCE TRAY",
    tags: ["Tray Commerce", "HTML5", "CSS3", "JavaScript", "Custom Modules"],
    liveUrl: "https://www.ecle.studio",
    liveUrlLabel: "Visitar Loja Ao Vivo",
    challenge: "A marca Eclé buscava uma experiência refinada de e-commerce dentro da plataforma Tray, exigindo integração direta com o gateway de pagamento da REDE. Além disso, a loja estava com problemas de performance e usabilidade.",
    solution: "Desenvolvimento de tema customizado, cadastro de produtos organizados e categorizados, integração com o gateway de pagamento da REDE e otimização de performance e usabilidade do site.",
    results: "Redução na taxa de abandono de carrinho no checkout e aumento na taxa de conversão.",
  },
  mundopura: {
    title: "Mundo Pura",
    category: "// ESTUDO DE CASO · SHOPIFY PRODUCTS & SEO",
    tags: ["Shopify", "Liquid", "SEO Avançado", "JS Search"],
    liveUrl: "https://mundopura.com",
    liveUrlLabel: "Visitar Loja Ao Vivo",
    challenge: "Com um catálogo extenso de produtos naturais e bem-estar, a loja antiga sofria com problemas de busca interna, arquitetura de informação confusa e baixa visibilidade orgânica nos motores de busca.",
    solution: "Reformulação completa da arquitetura do tema em Liquid com foco em SEO (Schema.org / JSON-LD dados estruturados), busca preditiva em JS com destaque de palavras-chave em tempo real e layout totalmente redesenhado com design responsivo e moderno.",
    results: "Aumento no tráfego orgânico via Google e aumento na taxa de conversão total.",
  },
  "studio-oko": {
    title: "Stúdio OKO",
    category: "// ESTUDO DE CASO · INSTITUCIONAL B2B",
    tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://studio-oko.vercel.app/",
    liveUrlLabel: "Visitar Site Ao Vivo",
    challenge: "Criar uma presença digital de altíssimo nível para o Stúdio OKO (divisão especialista em temas Shopify Premium do grupo OJuanDev) para atrair grandes marcas e-commerce exigentes por design inovador.",
    solution: "Desenvolvimento de landing page de alta performance com Tailwind CSS e JavaScript nativo para animações micro-interactive de scroll e interatividade. Deploy contínuo na Vercel com CDN global e compressão estática extrema.",
    results: "Nota máxima de 99/100 no Google Lighthouse e aumento de +80% no volume de leads qualificados que entram em contato diretamente para contratação de projetos e-commerce de alto ticket.",
  },
  cubi: {
    title: "CUBI",
    category: "// ESTUDO DE CASO · INTEGRAÇÃO REACT & SHOPIFY",
    tags: ["React", "Shopify API", "Lovable Frontend", "JavaScript"],
    liveUrl: "https://www.cubibrasil.com.br",
    liveUrlLabel: "Visitar Loja Ao Vivo",
    challenge: "A marca possuía o protótipo e front-end visual construído no Lovable/React, mas necessitava integrar toda a lógica de checkout, variações de produto, estoque e gateway de pagamento à infraestrutura comercial da Shopify.",
    solution: "Realizei a engenharia de integração completa entre o código React fornecido e a API de storefront da Shopify. Mapeei estados de produto, sincronizei estoque em tempo real e adaptei a jornada de compra para o checkout nativo.",
    results: "Redução de 60% no tempo total de entrega do projeto e conexão impecável entre um design disruptivo e a robustez e estabilidade da infraestrutura da Shopify.",
  },
  drsergio: {
    title: "Dr. Sérgio Faria",
    category: "// ESTUDO DE CASO · Site integrado com Firebase",
    tags: ["React", "Next", "Typescript", "Firebase"],
    liveUrl: "https://dr-sergio-tau.vercel.app",
    liveUrlLabel: "Visitar Site Ao Vivo",
    challenge: "O Dr Sérgio queria atualizar seu site antigo construido no Wix. Desenvolvi o site do zero, em React para reaproveitamento de componentes, nextjs para facilitar a páginação e painel admin com dados salvos no Firebase para edição fácil dos dados do site.",
    results: "Site muito mais atual, moderno, rápido e intuitivo. Trazendo a facilidade de manipulação de dados.",
  },
  cartflow: {
    title: "CartFlow",
    category: "// PROJETO PESSOAL · ENGINE E-COMMERCE HEADLESS",
    tags: ["Node.js", "React", "Prisma ORM", "PostgreSQL"],
    liveUrl: "https://github.com/OJuanDev/Cartflow",
    liveUrlLabel: "Ver no GitHub",
    challenge: "Plataformas tradicionais de e-commerce impõem limites à customização e taxas elevadas. O desafio foi criar uma engine de e-commerce open-source modular, altamente segura e pronta para escalar com microsserviços.",
    solution: "Desenvolvimento de API REST em Node.js com TypeScript, ORM Prisma e PostgreSQL para a retaguarda, acoplada a um dashboard administrativo e loja em React. Implementei gestão de carrinho headless, cupons e múltiplos gateways.",
    results: "Projeto open-source robusto com tempo de resposta de API inferior a 45ms, arquitetura desacoplada e flexibilidade total para customização de front-end por qualquer desenvolvedor.",
  },
  "saas-copilot": {
    title: "SaaS Copilot",
    category: "// PROJETO PESSOAL · MICRO-SAAS DE IA",
    tags: ["TypeScript", "OpenAI API", "Next.js", "Tailwind"],
    liveUrl: "https://github.com/Juansantoss07",
    liveUrlLabel: "Ver no GitHub",
    challenge: "Reduzir o tempo gasto por equipes de marketing e e-commerce na criação manual de descrições de produtos, posts e análises de SEO sem depender de ferramentas complexas.",
    solution: "Desenvolvimento de plataforma Micro-SaaS em Next.js integrada aos modelos GPT-4 da OpenAI via Server-Sent Events (streaming). Criei engenharia de prompts dinâmicos e exportação de conteúdo com um clique.",
    results: "Economia de mais de 80% do tempo gasto na geração de copies comerciais e descrições para e-commerce com alta qualidade de SEO.",
  },
  metricboard: {
    title: "MetricBoard",
    category: "// PROJETO PESSOAL · ANALYTICS IN REAL-TIME",
    tags: ["React", "D3.js", "Express", "WebSockets"],
    liveUrl: "https://github.com/Juansantoss07",
    liveUrlLabel: "Ver no GitHub",
    challenge: "Processar e exibir volumes expressivos de eventos de dados em tempo real em um dashboard web sem gerar quedas de frame rate ou travamento da página.",
    solution: "Arquitetura com WebSockets (Socket.io) integrando um servidor Express a um dashboard React com gráficos SVG dinâmicos desenhados via D3.js com renderização otimizada por diff.",
    results: "Capacidade de processar mais de 10.000 requisições por segundo mantendo resposta da UI em 15ms sem engasgos no navegador.",
  },
  authvault: {
    title: "AuthVault",
    category: "// PROJETO PESSOAL · MICROSSERVIÇO DE SEGURANÇA",
    tags: ["Node.js", "JWT RS256", "Docker", "Redis", "OAuth 2.0"],
    liveUrl: "https://github.com/OJuanDev/AuthVault-Backend",
    liveUrlLabel: "Ver no GitHub",
    challenge: "Prover uma solução de autenticação desacoplada, segura e pronta para produção que suporte rotação contínua de refresh tokens e controle de sessões simultâneas.",
    solution: "Microsserviço Node.js/TypeScript com assinatura assimétrica JWT (RS256), armazenamento de tokens revogados no Redis, suporte a OAuth 2.0 (Google/GitHub) e conteinerização via Docker Compose.",
    results: "API de autenticação de classe corporativa, testada contra vulnerabilidades OWASP e com deploy instantâneo em ambientes conteinerizados.",
  },
};

const modal = document.getElementById("caseModal");
const modalClose = document.getElementById("caseModalClose");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalTags = document.getElementById("modalTags");
const modalChallenge = document.getElementById("modalChallenge");
const modalSolution = document.getElementById("modalSolution");
const modalResults = document.getElementById("modalResults");
const modalLiveUrl = document.getElementById("modalLiveUrl");
const modalLiveUrlText = document.getElementById("modalLiveUrlText");

function openCaseModal(caseId) {
  const data = casesData[caseId];
  if (!data || !modal) return;

  if (modalCategory)
    modalCategory.textContent = data.category || "// CASE STUDY";
  if (modalTitle) modalTitle.textContent = data.title || "Projeto";

  // Populate tags
  if (modalTags) {
    modalTags.innerHTML = "";
    if (data.tags && data.tags.length) {
      data.tags.forEach((tag) => {
        const tagSpan = document.createElement("span");
        tagSpan.className = "case-tag";
        tagSpan.textContent = tag;
        modalTags.appendChild(tagSpan);
      });
    }
  }

  // Populate blocks
  if (modalChallenge) modalChallenge.textContent = data.challenge || "";
  if (modalSolution) modalSolution.textContent = data.solution || "";
  if (modalResults) modalResults.textContent = data.results || "";

  // Populate action link
  if (modalLiveUrl) modalLiveUrl.href = data.liveUrl || "#";
  if (modalLiveUrlText)
    modalLiveUrlText.textContent =
    data.liveUrlLabel || "Visitar projeto ao vivo";

  // Display modal
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Rebind custom cursor to new elements inside modal
  bindCursorHover(modal.querySelectorAll("a, button"));
}

function closeCaseModal() {
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  if (!navMenu || !navMenu.classList.contains("active")) {
    document.body.style.overflow = "";
  }
}

// Event Listeners for Case Cards
document.querySelectorAll(".case-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    const caseId = card.getAttribute("data-case-id");
    if (caseId && casesData[caseId]) {
      e.preventDefault();
      openCaseModal(caseId);
    }
  });
});

if (modalClose) {
  modalClose.addEventListener("click", closeCaseModal);
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeCaseModal();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal && modal.classList.contains("active")) {
    closeCaseModal();
  }
});

// ==========================================
// LOADING SCREEN
// ==========================================
(function initLoadingScreen() {
  const loadingScreen = document.getElementById("loadingScreen");
  const loadingPercent = document.getElementById("loadingPercent");
  const loadingBarFill = document.querySelector(".loading-bar-fill");

  if (!loadingScreen) return;

  let progress = 0;
  const duration = 1800;
  const startTime = performance.now();

  function updateLoading() {
    const elapsed = performance.now() - startTime;
    progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const percent = Math.floor(eased * 100);

    if (loadingPercent) {
      loadingPercent.textContent = percent;
    }
    if (loadingBarFill) {
      loadingBarFill.style.width = percent + "%";
    }

    if (progress < 1) {
      requestAnimationFrame(updateLoading);
    } else {
      if (loadingPercent) loadingPercent.textContent = "100";
      if (loadingBarFill) loadingBarFill.style.width = "100%";

      setTimeout(() => {
        loadingScreen.classList.add("fade-out");
        document.body.style.overflow = "";
        setTimeout(() => {
          loadingScreen.style.display = "none";
        }, 800);
      }, 300);
    }
  }

  requestAnimationFrame(updateLoading);

  setTimeout(() => {
    if (!loadingScreen.classList.contains("fade-out")) {
      loadingScreen.classList.add("fade-out");
      setTimeout(() => {
        loadingScreen.style.display = "none";
      }, 800);
    }
  }, 4000);
})();

// ==========================================
// PRIVACY POLICY MODAL & COOKIE BANNER CONTROLLER
// ==========================================
function initPrivacyAndCookies() {
  const privacyModal = document.getElementById("privacyModal");
  const openPrivacyModal = document.getElementById("openPrivacyModal");
  const openPrivacyFromBanner = document.getElementById("openPrivacyFromBanner");
  const privacyModalClose = document.getElementById("privacyModalClose");
  const privacyModalUnderstandBtn = document.getElementById("privacyModalUnderstandBtn");

  const cookieBanner = document.getElementById("cookieBanner");
  const acceptCookies = document.getElementById("acceptCookies");

  function openPrivacy() {
    if (!privacyModal) return;
    privacyModal.classList.add("active");
    privacyModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    bindCursorHover(privacyModal.querySelectorAll("button, a"));
  }

  function closePrivacy() {
    if (!privacyModal) return;
    privacyModal.classList.remove("active");
    privacyModal.setAttribute("aria-hidden", "true");
    if (!navMenu || !navMenu.classList.contains("active")) {
      document.body.style.overflow = "";
    }
  }

  if (openPrivacyModal) openPrivacyModal.addEventListener("click", openPrivacy);
  if (openPrivacyFromBanner) openPrivacyFromBanner.addEventListener("click", openPrivacy);
  if (privacyModalClose) privacyModalClose.addEventListener("click", closePrivacy);
  if (privacyModalUnderstandBtn) privacyModalUnderstandBtn.addEventListener("click", closePrivacy);

  if (privacyModal) {
    privacyModal.addEventListener("click", (e) => {
      if (e.target === privacyModal) closePrivacy();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && privacyModal && privacyModal.classList.contains("active")) {
      closePrivacy();
    }
  });

  // Cookie banner consent logic
  const hasAccepted = localStorage.getItem("cookie_consent_accepted");
  if (!hasAccepted && cookieBanner) {
    setTimeout(() => {
      cookieBanner.classList.add("show");
      bindCursorHover(cookieBanner.querySelectorAll("button, a"));
    }, 1000);
  }

  if (acceptCookies && cookieBanner) {
    acceptCookies.addEventListener("click", () => {
      localStorage.setItem("cookie_consent_accepted", "true");
      cookieBanner.classList.remove("show");
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPrivacyAndCookies);
} else {
  initPrivacyAndCookies();
}