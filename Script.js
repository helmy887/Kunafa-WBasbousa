'use strict';

/* =========================================================
   CONFIG
   ========================================================= */
const WHATSAPP_NUMBER = "201013222294"; // TODO: replace with real WhatsApp number
const WHATSAPP_MESSAGE = "مرحبًا، أريد طلب من كنافة وبسبوسة";

/* =========================================================
   PRODUCT DATA — edit this array to add/remove/update items
   ========================================================= */
const products = [
    // البولات
    { name: "العملاقة", category: "العروض", price: 295, image: "assets/images/5555.jpeg", description: "كنافة طازجة" },
    { name: " المانجوجة", category: "العروض", price: 10, image: "assets/images/85555.jpeg", description: "كنافة طازجة بقطع المانجو" },
 { name: "عرض الجلاش", category: "العروض", price: 35, image: "assets/images/ثث3ص.jpeg", description: "جلاش مقرمش بالكريمة" },
  { name: "عرض البسبوسه", category: "العروض", price: 35, image: "assets/images/ققق.jpeg", description: "بسبوسة تقليدية " },
   { name: "عرض المدلعه", category: "العروض", price: 40, image: "assets/images/ثثثث3.jpeg", description: "المتدلعة الشرقي" },
    { name: "عرض الكنافه كريمة", category: "العروض", price: 35, image: "assets/images/ثث.jpeg", description: "كنافة بحشوة الكريمة الطازجة  " },
 { name: "عرض الكنافه النابلسية ", category: "العروض", price: 75, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.14 AM.jpeg", description: "كنافة نابلسية فردية     " },
  { name: "عرض بسبوسه مكسرات ", category: "العروض", price: 50, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.14 AM (2).jpeg", description: "بسبوسة مغطاة بالمكسرات     " },
  { name: "عرض كنافة شوكولاتة  ", category: "العروض", price: 50, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.13 AM.jpeg", description: "كنافة بحشوة الشوكولاتة الغنية       " },

    




    // نصف كيلو
    { name: "كنافة كريمة", category: "نصف كيلو", price: 65, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.14 AM (1).jpeg", description: "كنافة بحشوة الكريمة الطازجة" },
    { name: "كنافة شوكولاتة", category: "نصف كيلو", price: 100, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.12 AM (3).jpeg", description: "كنافة بحشوة الشوكولاتة الغنية" },
    { name: "كنافة نابلسية", category: "نصف كيلو", price: 135, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.14 AM.jpeg", description: "كنافة نابلسية أصلية بالجبنة" },
    { name: "بسبوسة سادة", category: "نصف كيلو", price: 65, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.03 AM.jpeg", description: "بسبوسة تقليدية بالقطر" },
    { name: "بسبوسة قشطة بلدي", category: "نصف كيلو", price: 100, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.15 AM (1).jpeg", description: "بسبوسة بحشوة القشطة البلدي" },
    { name: "بسبوسة مكسرات", category: "نصف كيلو", price: 90, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.14 AM (2).jpeg", description: "بسبوسة مغطاة بالمكسرات" },
    { name: "بسبوسة لوتس", category: "نصف كيلو", price: 85, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.17 AM.jpeg", description: "بسبوسة بصوص اللوتس" },
    { name: "بسبوسة قشطة و مكسرات", category: "نصف كيلو", price: 115, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.15 AM (1).jpeg", description: "بسبوسة بالقشطة والمكسرات" },
    { name: "بسبوسة كيندر", category: "نصف كيلو", price: 85, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.17 AM (1).jpeg", description: "بسبوسة بصوص الكيندر" },
    { name: "بسبوسة بستاشيو", category: "نصف كيلو", price: 110, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.16 AM (3).jpeg", description: "بسبوسة بكريمة الفستق" },
    { name: "متدلعة", category: "نصف كيلو", price: 70, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.13 AM (2).jpeg", description: "حلا المتدلعة الشرقي" },
    { name: "متدلعة مانجو", category: "نصف كيلو", price: 70, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.17 AM (4).jpeg", description: "متدلعة بقطع المانجو" },
    { name: "جلاش كريمة", category: "نصف كيلو", price: 65, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.12 AM.jpeg", description: "جلاش مقرمش بالكريمة" },


    // القطع
    { name: "قطعة كنافة بالشوكولاتة", category: "القطع", price: 30, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.12 AM (2).jpeg", description: "قطعة كنافة فردية بالشوكولاتة" },
    { name: "قطعة كنافة نابلسية", category: "القطع", price: 35, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.16 AM (2).jpeg", description: "قطعة كنافة نابلسية فردية" },
    { name: "قطعة بسبوسة قشطة", category: "القطع", price: 30, image: "assets/images/WhatsApp Image 2026-08-10 at 10.11.14 PM.jpeg", description: "قطعة بسبوسة بالقشطة" },
    { name: "قطعة بسبوسة مكسرات", category: "القطع", price: 25, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.14 AM (2).jpeg", description: "قطعة بسبوسة مغطاة بالمكسرات" },
    { name: "قطعة بسيوسة مكسرات قشطة", category: "القطع", price: 35, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.15 AM (1).jpeg", description: "قطعة بسبوسة بالقشطة والمكسرات" },
    { name: "قطعة بسبوسة مكسرات لوتس", category: "القطع", price: 35, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.15 AM (3).jpeg", description: "قطعة بسبوسة بالمكسرات ولوتس" },
    { name: "قطعة بسيوسة مكسرات كيندر", category: "القطع", price: 35, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.15 AM (3).jpeg", description: "قطعة بسبوسة بالمكسرات وكيندر" },
    { name: "قطعة بسيوسة مكسرات بستاشيو", category: "القطع", price: 40, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.15 AM (3).jpeg", description: "قطعة بسبوسة بالمكسرات والفستق" },
    { name: "قطعة مدلعة مانجا", category: "القطع", price: 25, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.17 AM (2).jpeg", description: "قطعة متدلعة بالمانجو" },




    // الإضافات
    { name: "صوص لوتس", category: "الإضافات", price: 25, image: "assets/images/000.jpeg", description: "صوص لوتس كريمي" },
    { name: "صوص بستاشيو", category: "الإضافات", price: 35, image: "assets/images/EDSWWW.jpeg", description: "صوص فستق فاخر" },
    { name: "صوص كيندر", category: "الإضافات", price: 20, image: "assets/images/FFFFFFFFFFFFFF.jpeg", description: "صوص شوكولاتة كيندر" },
    { name: "صوص نوتيلا", category: "الإضافات", price: 25, image: "assets/images/QAW.jpeg", description: "صوص نوتيلا أصلي" },
    
    
    { name: "قطع مانجو", category: "الإضافات", price: 15, image: "assets/images/WhatsApp Image 2026-08-08 at 1.46.17 AM (4).jpeg", description: "قطع مانجو طازجة" },
    { name: "عسل", category: "الإضافات", price: 10, image: "assets/images/F.jpeg", description: "عسل نحل طبيعي" },
    { name: "قشطة", category: "الإضافات", price: 20, image: "assets/images/WhatsApp Image 2026-08-10 at 10.01.01 PM.jpeg", description: "قشطة طازجة" },



];







const CATEGORIES = ["الكل", "الإضافات", "نصف كيلو", "العروض", "القطع"];

/* =========================================================
   STATE
   ========================================================= */
let activeCategory = "الكل";
let searchQuery = "";

/* =========================================================
   PLACEHOLDER IMAGE (used when real assets are missing)
   ========================================================= */
function placeholderFor(name) {
    const palettes = [
        ["#f7941d", "#ffb52e"],
        ["#4b145f", "#6a1b7b"],
        ["#6a1b7b", "#f7941d"],
    ];
    const p = palettes[Math.abs(hashCode(name)) % palettes.length];
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="480" height="360">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${p[0]}"/>
          <stop offset="1" stop-color="${p[1]}"/>
        </linearGradient>
      </defs>
      <rect width="480" height="360" fill="url(#g)"/>
      <circle cx="240" cy="150" r="70" fill="rgba(255,255,255,.15)"/>
      <text x="240" y="270" font-family="Cairo, sans-serif" font-size="26" font-weight="700"
        fill="#fffaf4" text-anchor="middle" dir="rtl">${escapeXml(name)}</text>
    </svg>`;
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}
function hashCode(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) { h = (h << 5) - h + str.charCodeAt(i); h |= 0; }
    return h;
}
function escapeXml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* =========================================================
   RENDER: CATEGORY FILTERS
   ========================================================= */
function renderFilters() {
    const wrap = document.getElementById('categoryFilters');
    wrap.innerHTML = CATEGORIES.map(cat => `
        <button class="filter-btn${cat === activeCategory ? ' active' : ''}" data-category="${cat}" role="tab" aria-selected="${cat === activeCategory}">
            ${cat}
        </button>
    `).join('');

    wrap.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeCategory = btn.dataset.category;
            renderFilters();
            renderProducts();
        });
    });
}

/* =========================================================
   RENDER: PRODUCTS
   ========================================================= */
function getFilteredProducts() {
    return products.filter(p => {
        const matchesCategory = activeCategory === "الكل" || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.trim().toLowerCase());
        return matchesCategory && matchesSearch;
    });
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const emptyState = document.getElementById('emptyState');
    const resultsCount = document.getElementById('resultsCount');
    const list = getFilteredProducts();

    resultsCount.textContent = list.length ? `${list.length} صنف متاح` : '';

    if (!list.length) {
        grid.innerHTML = '';
        emptyState.hidden = false;
        return;
    }
    emptyState.hidden = true;

    grid.innerHTML = list.map((p, i) => `
        <article class="product-card" style="animation-delay:${Math.min(i * 0.05, 0.4)}s">
            <div class="product-card__media">
                <img src="${p.image}" alt="${p.name}" loading="lazy"
                     onerror="this.onerror=null; this.src='${placeholderFor(p.name)}';">
                <span class="product-card__category-tag">${p.category}</span>
            </div>
            <div class="product-card__body">
                <h3 class="product-card__name">${p.name}</h3>
                ${p.description ? `<p class="product-card__desc">${p.description}</p>` : ''}
                <div class="product-card__footer">
                    <span class="product-card__price">${p.price} <small>جنيه</small></span>
                    <button class="product-card__add" aria-label="اطلب ${p.name} عبر واتساب" data-order="${p.name}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" width="16" height="16" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg>
                    </button>
                </div>
            </div>
        </article>
    `).join('');

    grid.querySelectorAll('[data-order]').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemName = btn.dataset.order;
            openWhatsApp(`مرحبًا، أريد طلب "${itemName}" من كنافة وبسبوسة`);
        });
    });
}

/* =========================================================
   SEARCH
   ========================================================= */
function initSearch() {
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('searchClear');
    const resetBtn = document.getElementById('resetSearchBtn');

    input.addEventListener('input', () => {
        searchQuery = input.value;
        clearBtn.hidden = searchQuery.length === 0;
        renderProducts();
    });

    clearBtn.addEventListener('click', () => {
        input.value = '';
        searchQuery = '';
        clearBtn.hidden = true;
        input.focus();
        renderProducts();
    });

    resetBtn.addEventListener('click', () => {
        input.value = '';
        searchQuery = '';
        activeCategory = 'الكل';
        clearBtn.hidden = true;
        renderFilters();
        renderProducts();
    });
}

/* =========================================================
   WHATSAPP
   ========================================================= */
function openWhatsApp(message) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
}

function initWhatsAppButton() {
    const btn = document.getElementById('whatsappOrderBtn');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        openWhatsApp(WHATSAPP_MESSAGE);
    });
}

/* =========================================================
   NAV: MOBILE MENU
   ========================================================= */
function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const closeBtn = document.getElementById('navClose');
    const menu = document.getElementById('navMenu');
    const overlay = document.getElementById('navOverlay');

    function openMenu() {
        menu.classList.add('open');
        overlay.classList.add('show');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        menu.classList.remove('open');
        overlay.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    toggle.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    menu.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', closeMenu));
}

/* =========================================================
   NAV: SCROLL EFFECT + ACTIVE LINK
   ========================================================= */
function initNavScrollEffects() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = Array.from(navLinks)
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    function onScroll() {
        navbar.classList.toggle('scrolled', window.scrollY > 30);

        let currentId = sections[0] ? sections[0].id : null;
        const offset = 120;
        sections.forEach(section => {
            if (window.scrollY + offset >= section.offsetTop) {
                currentId = section.id;
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* =========================================================
   BACK TO TOP
   ========================================================= */
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('show', window.scrollY > 480);
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* =========================================================
   SCROLL REVEAL (IntersectionObserver)
   ========================================================= */
function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        elements.forEach(el => el.classList.add('in-view'));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
}

/* =========================================================
   HERO PARTICLES
   ========================================================= */
function initHeroParticles() {
    const wrap = document.getElementById('heroParticles');
    const count = window.innerWidth < 768 ? 10 : 20;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('span');
        p.className = 'hero__particle';
        const size = Math.random() * 5 + 3;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}%`;
        p.style.bottom = `-${Math.random() * 20}px`;
        p.style.animationDuration = `${Math.random() * 6 + 6}s`;
        p.style.animationDelay = `${Math.random() * 6}s`;
        wrap.appendChild(p);
    }
}

/* =========================================================
   HERO IMAGE FALLBACK
   ========================================================= */
function initHeroImageFallback() {
    const img = document.getElementById('heroImage');
    img.addEventListener('error', function handler() {
        img.removeEventListener('error', handler);
        img.src = placeholderFor('كنافة وبسبوسة');
    });
}

/* =========================================================
   PRINT MENU
   ========================================================= */
function buildPrintMenu() {
    const body = document.getElementById('printMenuBody');
    const grouped = CATEGORIES.filter(c => c !== 'الكل').map(cat => ({
        cat,
        items: products.filter(p => p.category === cat)
    }));

    body.innerHTML = grouped.map(group => `
        <div class="print-category">
            <h2>${group.cat}</h2>
            ${group.items.map(item => `
                <div class="print-item">
                    <span>${item.name}</span>
                    <span>${item.price} جنيه</span>
                </div>
            `).join('')}
        </div>
    `).join('');
}

function initPrintMenu() {
    buildPrintMenu();
    document.getElementById('printMenuBtn').addEventListener('click', () => {
        window.print();
    });
}

/* =========================================================
   MISC: FOOTER YEAR
   ========================================================= */
function setFooterYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    renderFilters();
    renderProducts();
    initSearch();
    initWhatsAppButton();
    initMobileMenu();
    initNavScrollEffects();
    initBackToTop();
    initScrollReveal();
    initHeroParticles();
    initHeroImageFallback();
    initPrintMenu();
    setFooterYear();
});
