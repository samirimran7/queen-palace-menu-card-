import {
  MENU_CATEGORIES,
  googleReviewsConfig,
  whatsAppConfig,
  facebookConfig,
  restaurantInfo,
  customerReviews,
  CustomerReview
} from './data';

/* =========================================================================
   VIEWPORT & SCROLL RESTORATION: ALWAYS START AT TOP (BEGINNING OF PAGE)
   ========================================================================= */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

export function resetPageToTop() {
  if (window.location.hash) {
    try {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    } catch (e) {}
  }
  const prevBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  document.documentElement.style.scrollBehavior = prevBehavior;

  const catNav = document.getElementById('category-nav');
  if (catNav) {
    catNav.scrollTo({ left: 0, behavior: 'instant' });
  }
}

// Immediate execution
resetPageToTop();

/* =========================================================================
   DYNAMIC MEASUREMENT FOR BUG-FREE STICKY POSITIONING
   ========================================================================= */
export function updateStickyMetrics() {
  const header = document.querySelector('header.top');
  const nav = document.querySelector('nav.cat-nav');
  if (header) {
    const hh = header.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--header-actual-h', `${hh}px`);
  }
  if (nav) {
    const nh = nav.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--nav-actual-h', `${nh}px`);
  }
}

window.addEventListener('resize', updateStickyMetrics);
window.addEventListener('orientationchange', updateStickyMetrics);
if ('fonts' in document) {
  document.fonts.ready.then(updateStickyMetrics);
}

/* =========================================================================
   SYNCHRONIZE BRAND & INTEGRATION SETTINGS
   ========================================================================= */
function syncBrandAndIntegrations() {
  // Sync Header Titles
  const brandTitleEl = document.querySelector('.brand-title');
  if (brandTitleEl) brandTitleEl.textContent = restaurantInfo.name;

  const brandSubtitleEl = document.querySelector('.brand-subtitle');
  if (brandSubtitleEl) brandSubtitleEl.textContent = restaurantInfo.subtitle;

  // Sync Google Review Section
  const locChipSpan = document.querySelector('.restaurant-loc-chip span');
  if (locChipSpan) locChipSpan.textContent = googleReviewsConfig.locationChipText;

  const gTitleEl = document.querySelector('.google-review-title');
  if (gTitleEl) gTitleEl.textContent = googleReviewsConfig.title;

  const gPromptEl = document.querySelector('.google-review-prompt');
  if (gPromptEl) gPromptEl.textContent = googleReviewsConfig.prompt;

  const gBtn = document.getElementById('google-review-action-btn') as HTMLAnchorElement | null;
  if (gBtn) {
    gBtn.href = googleReviewsConfig.reviewUrl;
    const btnLabelSpan = gBtn.querySelector('.btn-label');
    if (btnLabelSpan) btnLabelSpan.textContent = googleReviewsConfig.buttonLabel;
  }

  // Sync Footer Actions
  const waBtn = document.querySelector('.footer-whatsapp-btn') as HTMLAnchorElement | null;
  if (waBtn) {
    waBtn.href = whatsAppConfig.linkUrl;
  }

  const fbBtn = document.querySelector('.footer-facebook-btn') as HTMLAnchorElement | null;
  if (fbBtn) {
    fbBtn.href = facebookConfig.pageUrl;
  }

  const footerTitle = document.querySelector('.footer-title');
  if (footerTitle) footerTitle.textContent = `${restaurantInfo.name} ${restaurantInfo.subtitle}`;

  const footerNote = document.querySelector('.footer-note');
  if (footerNote) footerNote.textContent = restaurantInfo.priceNotice;

  const footerHint = document.querySelector('.footer-hint');
  if (footerHint) footerHint.textContent = restaurantInfo.navigationTip;
}

/* =========================================================================
   DOM RENDERING ENGINE
   ========================================================================= */
const catNavEl = document.getElementById('category-nav');
const menuSectionsEl = document.getElementById('menu-sections');
const reviewsListEl = document.getElementById('reviews-list');

// 1. Render Category Navigation Chips
export function renderCategoryNav() {
  if (!catNavEl) return;
  catNavEl.innerHTML = MENU_CATEGORIES.map((cat, index) => `
    <button type="button" class="cat-chip ${index === 0 ? 'active' : ''}" data-cat="${cat.id}">
      <span class="chip-emoji">${cat.emoji}</span>
      <span>${cat.name}</span>
    </button>
  `).join('');
}

// 2. Render Menu Sections and Items
export function renderMenuSections() {
  if (!menuSectionsEl) return;
  const existingSections = menuSectionsEl.querySelectorAll('.cat-section');
  existingSections.forEach(s => s.remove());

  const searchEmptyEl = document.getElementById('search-empty');

  MENU_CATEGORIES.forEach((cat, catIdx) => {
    const sectionEl = document.createElement('section');
    sectionEl.className = 'cat-section';
    sectionEl.id = `cat-${cat.id}`;
    sectionEl.setAttribute('data-category-id', cat.id);

    let contentHtml = '';

    if (cat.type === 'pizza-table' && cat.pizzas) {
      // Pizza Table Layout
      contentHtml = `
        <table class="pizza-table" aria-label="${cat.name} sizes and prices">
          <thead>
            <tr>
              <th class="col-name">Name</th>
              <th class="col-size">8"</th>
              <th class="col-size">10"</th>
              <th class="col-size">12"</th>
            </tr>
          </thead>
          <tbody>
            ${cat.pizzas.map(pizza => `
              <tr class="pizza-row" data-search-name="${pizza.name.toLowerCase()}">
                <td class="col-name">
                  ${pizza.image ? `<img src="${pizza.image}" alt="${pizza.name}" class="item-thumb" loading="lazy" />` : ''}
                  <div class="pizza-title-wrap">
                    <span>${pizza.name}</span>
                    ${pizza.caption ? `<span class="pizza-caption">${pizza.caption}</span>` : ''}
                    ${pizza.note ? `<span class="pizza-note">${pizza.note}</span>` : ''}
                  </div>
                </td>
                <td class="col-price">${pizza.prices[0]}</td>
                <td class="col-price">${pizza.prices[1]}</td>
                <td class="col-price">${pizza.prices[2]}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } else if (cat.items) {
      // Standard Item or Combo Rows
      contentHtml = cat.items.map((item, idx) => {
        const numStr = String(idx + 1).padStart(2, '0');
        const searchName = item.name.toLowerCase();
        const captionText = item.caption || item.desc || '';
        const imageTag = item.image ? `<img src="${item.image}" alt="${item.name}" class="item-thumb" loading="lazy" />` : '';

        if (captionText) {
          return `
            <div class="combo-row" data-search-name="${searchName}">
              <div class="combo-main">
                <span class="item-num">${numStr}</span>
                ${imageTag}
                <span class="item-name">${item.name}</span>
                <span class="item-dots"></span>
                <span class="item-price">${item.price}</span>
              </div>
              <div class="combo-desc">${captionText}</div>
            </div>
          `;
        } else {
          return `
            <div class="item-row" data-search-name="${searchName}">
              <span class="item-num">${numStr}</span>
              ${imageTag}
              <span class="item-name">${item.name}</span>
              <span class="item-dots"></span>
              <span class="item-price">${item.price}</span>
            </div>
          `;
        }
      }).join('');
    }

    const shineDelay = `${((catIdx * 1.3) % 6).toFixed(1)}s`;
    sectionEl.innerHTML = `
      <div class="cat-ribbon" style="--shine-delay: ${shineDelay};">
        <span class="ribbon-emoji">${cat.emoji}</span>
        <h2>${cat.name}</h2>
        <span class="ribbon-emoji">${cat.emoji}</span>
      </div>
      <div class="items-container">
        ${contentHtml}
      </div>
    `;

    if (searchEmptyEl) {
      menuSectionsEl.insertBefore(sectionEl, searchEmptyEl);
    } else {
      menuSectionsEl.appendChild(sectionEl);
    }
  });
}

// 3. Render Facebook-Style Customer Reviews
export function renderReviews() {
  if (!reviewsListEl) return;
  reviewsListEl.innerHTML = customerReviews.map(rev => {
    const isClickable = Boolean(rev.profileUrl);

    let avatarContent = '';
    if (rev.avatarType === 'fb-default') {
      avatarContent = `
        <svg class="fb-default-avatar" viewBox="0 0 36 36" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="18" cy="18" r="18" fill="#ced2d8"/>
          <circle cx="18" cy="12.5" r="5.5" fill="#ffffff"/>
          <path d="M8.5 28.8a17.9 17.9 0 0 0 19 0c-.8-4.5-4.8-7.8-9.5-7.8s-8.7 3.3-9.5 7.8z" fill="#ffffff"/>
        </svg>
      `;
    } else {
      avatarContent = rev.initials || rev.author.charAt(0);
    }

    const avatarMarkup = isClickable
      ? `<a href="${rev.profileUrl}" target="_blank" rel="noopener noreferrer" class="review-avatar review-avatar-link" style="background-color: ${rev.avatarBg || '#ced2d8'};" aria-label="Visit ${rev.author} on Facebook">${avatarContent}</a>`
      : `<div class="review-avatar" style="background-color: ${rev.avatarBg || '#0f3826'};">${avatarContent}</div>`;

    const authorMarkup = isClickable
      ? `<a href="${rev.profileUrl}" target="_blank" rel="noopener noreferrer" class="review-author review-author-link" title="Visit ${rev.author} on Facebook">${rev.author}</a>`
      : `<span class="review-author">${rev.author}</span>`;

    return `
      <div class="review-item ${isClickable ? 'review-item-clickable' : ''}" id="review-${rev.id}" ${isClickable ? `data-profile-url="${rev.profileUrl}" role="link" tabindex="0" title="Click review to view ${rev.author} on Facebook"` : ''}>
        ${avatarMarkup}
        <div class="review-bubble">
          <div>
            ${authorMarkup}
            <span class="review-verified">✓ Foodie Guest</span>
          </div>
          <p class="review-body">${rev.text}</p>
          <div class="review-reactions-pill">
            <span>👍 ❤️</span>
            <span class="reaction-count" id="rev-count-${rev.id}">${rev.likes}</span>
          </div>
        </div>
      </div>
      <div class="review-footer">
        <button class="review-footer-btn like-btn ${rev.liked ? 'liked' : ''}" data-review-id="${rev.id}">
          👍 Like
        </button>
        <span>·</span>
        <button class="review-footer-btn reply-btn">Reply</button>
        <span>·</span>
        <span class="review-time">${rev.time}</span>
      </div>
    `;
  }).join('');

  // Add click handler for clickable review items
  reviewsListEl.querySelectorAll('.review-item-clickable').forEach(item => {
    const url = item.getAttribute('data-profile-url');
    if (!url) return;

    item.addEventListener('click', function(e) {
      if ((e.target as HTMLElement).closest('a')) return;
      window.open(url, '_blank', 'noopener,noreferrer');
    });

    item.addEventListener('keydown', function(e: any) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    });
  });

  // Add Like Click Event Handlers
  reviewsListEl.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const revId = parseInt(btn.getAttribute('data-review-id') || '0', 10);
      const review = customerReviews.find((r: CustomerReview) => r.id === revId);
      if (!review) return;

      review.liked = !review.liked;
      review.likes += review.liked ? 1 : -1;

      btn.classList.toggle('liked', review.liked);
      const countEl = document.getElementById(`rev-count-${revId}`);
      if (countEl) countEl.textContent = String(review.likes);
    });
  });
}

/* =========================================================================
   INTERSECTION OBSERVER: REVEAL ON SCROLL (FADE IN EFFECT)
   ========================================================================= */
export function setupScrollReveal() {
  const sections = document.querySelectorAll('.cat-section');

  function revealSectionItems(section: Element) {
    section.classList.add('is-revealed');
    const items = section.querySelectorAll('.item-row, .combo-row, .pizza-row');
    items.forEach((item, idx) => {
      (item as HTMLElement).style.setProperty('--pop-delay', `${Math.min(idx * 24, 220)}ms`);
      item.classList.add('item-fade-in', 'item-pop-in');
    });
  }

  if (!('IntersectionObserver' in window)) {
    sections.forEach(s => revealSectionItems(s));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealSectionItems(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px 50px 0px'
  });

  sections.forEach(s => observer.observe(s));
}

/* =========================================================================
   ACTIVE CATEGORY TRACKER DURING SCROLL
   ========================================================================= */
let isClickScrolling = false;
let clickScrollTimer: any = null;

export function setupActiveCategoryTracking() {
  const chips = document.querySelectorAll('.cat-chip');
  const sections = document.querySelectorAll('.cat-section');

  function highlightActiveChip() {
    if (isClickScrolling) return;

    const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-actual-h')) || 70;
    const navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-actual-h')) || 46;
    const triggerY = window.scrollY + headerH + navH + 40;

    let currentActiveId: string | null = null;

    sections.forEach(section => {
      const top = (section as HTMLElement).offsetTop;
      const height = (section as HTMLElement).offsetHeight;
      if (triggerY >= top && triggerY < top + height) {
        currentActiveId = section.getAttribute('data-category-id');
      }
    });

    if (!currentActiveId && window.scrollY < 200 && sections.length > 0) {
      currentActiveId = sections[0].getAttribute('data-category-id');
    }

    if (currentActiveId) {
      chips.forEach(chip => {
        const isMatch = chip.getAttribute('data-cat') === currentActiveId;
        if (isMatch && !chip.classList.contains('active')) {
          chip.classList.add('active');
          const catNav = document.getElementById('category-nav');
          if (catNav) {
            const targetLeft = (chip as HTMLElement).offsetLeft - (catNav.clientWidth / 2) + ((chip as HTMLElement).clientWidth / 2);
            catNav.scrollTo({ left: targetLeft, behavior: 'smooth' });
          }
        } else if (!isMatch) {
          chip.classList.remove('active');
        }
      });
    }
  }

  window.addEventListener('scroll', highlightActiveChip, { passive: true });

  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = chip.getAttribute('data-cat');
      const targetSection = document.getElementById(`cat-${targetId}`);
      if (!targetSection) return;

      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const catNav = document.getElementById('category-nav');
      if (catNav) {
        const targetLeft = (chip as HTMLElement).offsetLeft - (catNav.clientWidth / 2) + ((chip as HTMLElement).clientWidth / 2);
        catNav.scrollTo({ left: targetLeft, behavior: 'smooth' });
      }

      isClickScrolling = true;
      clearTimeout(clickScrollTimer);

      targetSection.scrollIntoView({ behavior: 'smooth' });

      clickScrollTimer = setTimeout(() => {
        isClickScrolling = false;
      }, 700);
    });
  });
}

/* =========================================================================
   REAL-TIME SEARCH FILTERING
   ========================================================================= */
export function setupSearch() {
  const searchInput = document.getElementById('menu-search') as HTMLInputElement | null;
  const clearBtn = document.getElementById('search-clear');
  const searchEmpty = document.getElementById('search-empty');
  const resetBtn = document.getElementById('reset-search-btn');
  const catNav = document.getElementById('category-nav');

  if (!searchInput || !clearBtn || !searchEmpty || !resetBtn || !catNav) return;

  function filterMenu() {
    if (!searchInput || !clearBtn || !searchEmpty || !catNav) return;
    const query = searchInput.value.trim().toLowerCase();
    clearBtn.style.display = query.length > 0 ? 'block' : 'none';

    if (query === '') {
      document.querySelectorAll('.cat-section').forEach(s => {
        (s as HTMLElement).style.display = '';
        s.querySelectorAll('.item-row, .combo-row, .pizza-row').forEach((row, idx) => {
          const wasHidden = (row as HTMLElement).style.display === 'none';
          (row as HTMLElement).style.display = '';
          if (wasHidden) {
            row.classList.remove('item-fade-in', 'item-pop-in');
            void (row as HTMLElement).offsetWidth;
            (row as HTMLElement).style.setProperty('--pop-delay', `${Math.min(idx * 18, 160)}ms`);
            row.classList.add('item-fade-in', 'item-pop-in');
          }
        });
      });
      searchEmpty.style.display = 'none';
      catNav.style.display = 'flex';
      updateStickyMetrics();
      return;
    }

    catNav.style.display = 'none';

    let totalMatches = 0;
    const sections = document.querySelectorAll('.cat-section');

    sections.forEach(section => {
      const rows = section.querySelectorAll('.item-row, .combo-row, .pizza-row');
      let sectionMatches = 0;

      rows.forEach(row => {
        const name = row.getAttribute('data-search-name') || '';
        if (name.includes(query)) {
          (row as HTMLElement).style.display = '';
          sectionMatches++;

          row.classList.remove('item-fade-in', 'item-pop-in');
          void (row as HTMLElement).offsetWidth;
          (row as HTMLElement).style.setProperty('--pop-delay', `${Math.min(sectionMatches * 20, 180)}ms`);
          row.classList.add('item-fade-in', 'item-pop-in');
        } else {
          (row as HTMLElement).style.display = 'none';
          row.classList.remove('item-fade-in', 'item-pop-in');
        }
      });

      if (sectionMatches > 0) {
        (section as HTMLElement).style.display = '';
        section.classList.add('is-revealed');
        totalMatches += sectionMatches;
      } else {
        (section as HTMLElement).style.display = 'none';
      }
    });

    searchEmpty.style.display = totalMatches === 0 ? 'block' : 'none';
    updateStickyMetrics();
  }

  const searchContainer = document.querySelector('.search-container');

  searchInput.addEventListener('focus', () => {
    if (searchContainer) searchContainer.classList.add('is-focused');
  });

  searchInput.addEventListener('blur', () => {
    if (searchContainer) searchContainer.classList.remove('is-focused');
  });

  searchInput.addEventListener('input', filterMenu);

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchInput.focus();
    filterMenu();
  });

  resetBtn.addEventListener('click', () => {
    searchInput.value = '';
    filterMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* =========================================================================
   FLOATING BACK TO TOP BUTTON
   ========================================================================= */
export function setupBackToTop() {
  const bttBtn = document.getElementById('back-to-top');
  if (!bttBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 480) {
      bttBtn.classList.add('visible');
    } else {
      bttBtn.classList.remove('visible');
    }
  }, { passive: true });

  bttBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* =========================================================================
   FOOD-FALLING ENTRANCE SHOWER ANIMATION (EMOJIS)
   ========================================================================= */
const FOOD_ITEMS_CONFIG = [
  { emoji: '🍔', name: 'Gourmet Burger', rotRange: [-14, 14], driftRange: [-12, 12], durationRange: [3.4, 4.0], sizeDesktop: 46, sizeMobile: 36 },
  { emoji: '🍗', name: 'Crispy Chicken', rotRange: [-18, 18], driftRange: [-14, 14], durationRange: [3.4, 4.0], sizeDesktop: 46, sizeMobile: 36 },
  { emoji: '🍕', name: 'Pizza Slice', rotRange: [-16, 16], driftRange: [-12, 12], durationRange: [3.3, 3.9], sizeDesktop: 46, sizeMobile: 36 },
  { emoji: '🍟', name: 'French Fries', rotRange: [-12, 12], driftRange: [-12, 12], durationRange: [3.4, 4.0], sizeDesktop: 46, sizeMobile: 36 },
  { emoji: '☕', name: 'Hot Cha & Coffee', rotRange: [-8, 8], driftRange: [-10, 10], durationRange: [3.5, 4.1], sizeDesktop: 44, sizeMobile: 34 },
  { emoji: '🧃', name: 'Fruit Juice Box', rotRange: [-10, 10], driftRange: [-10, 10], durationRange: [3.4, 4.0], sizeDesktop: 44, sizeMobile: 34 },
  { emoji: '🍮', name: 'Custard Dessert', rotRange: [-8, 8], driftRange: [-10, 10], durationRange: [3.5, 4.1], sizeDesktop: 44, sizeMobile: 34 },
  { emoji: '🥗', name: 'Fresh Salad', rotRange: [-14, 14], driftRange: [-12, 12], durationRange: [3.4, 4.0], sizeDesktop: 46, sizeMobile: 36 },
  { emoji: '🥘', name: 'Biriyani & Curry Pan', rotRange: [-10, 10], driftRange: [-12, 12], durationRange: [3.3, 3.9], sizeDesktop: 46, sizeMobile: 36 },
  { emoji: '🧁', name: 'Cupcake Sweet', rotRange: [-12, 12], driftRange: [-10, 10], durationRange: [3.5, 4.1], sizeDesktop: 44, sizeMobile: 34 },
  { emoji: '🧇', name: 'Waffle Dessert', rotRange: [-14, 14], driftRange: [-12, 12], durationRange: [3.4, 4.0], sizeDesktop: 44, sizeMobile: 34 },
  { emoji: '🌯', name: 'Shawarma & Wrap', rotRange: [-16, 16], driftRange: [-12, 12], durationRange: [3.3, 3.9], sizeDesktop: 46, sizeMobile: 36 },
  { emoji: '🥡', name: 'Meatbox Takeout', rotRange: [-10, 10], driftRange: [-10, 10], durationRange: [3.4, 4.0], sizeDesktop: 44, sizeMobile: 34 },
  { emoji: '🧋', name: 'Boba & Shake', rotRange: [-8, 8], driftRange: [-10, 10], durationRange: [3.5, 4.1], sizeDesktop: 44, sizeMobile: 34 },
  { emoji: '🍿', name: 'Popcorn Snack', rotRange: [-14, 14], driftRange: [-12, 12], durationRange: [3.4, 4.0], sizeDesktop: 44, sizeMobile: 34 },
  { emoji: '🧂', name: 'Salt & Spice', rotRange: [-12, 12], driftRange: [-10, 10], durationRange: [3.5, 4.2], sizeDesktop: 40, sizeMobile: 32 }
];

let foodAnimationStarted = false;

export function runEntranceAnimation() {
  const curtain = document.getElementById('entrance-curtain');
  if (curtain) curtain.remove();

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  if (foodAnimationStarted) return;
  foodAnimationStarted = true;

  setTimeout(() => {
    startFoodFallingAnimation();
  }, 2000);
}

function startFoodFallingAnimation() {
  const overlay = document.createElement('div');
  overlay.id = 'food-shower-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  document.body.appendChild(overlay);

  const isMobile = window.innerWidth < 640;

  function shuffleArray<T>(arr: T[]): T[] {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  const wave1 = shuffleArray(FOOD_ITEMS_CONFIG);
  const wave2 = shuffleArray(FOOD_ITEMS_CONFIG);
  if (wave1[wave1.length - 1].emoji === wave2[0].emoji && wave2.length > 1) {
    [wave2[0], wave2[1]] = [wave2[1], wave2[0]];
  }

  const exactDeck = [...wave1, ...wave2];
  const totalItems = exactDeck.length;
  const spawnIntervalMs = isMobile ? 210 : 190;
  let activeItemsCount = 0;
  let currentItemIndex = 0;

  const zoneCount = isMobile ? 8 : 12;
  let lastZone = -1;

  function pickZone() {
    let zone: number;
    do {
      zone = Math.floor(Math.random() * zoneCount);
    } while (zone === lastZone && zoneCount > 1);
    lastZone = zone;
    return zone;
  }

  function spawnFoodItem() {
    if (!overlay || !overlay.parentNode) return;
    if (currentItemIndex >= totalItems) return;

    const config = exactDeck[currentItemIndex++];
    const zone = pickZone();
    const zoneWidth = 84 / zoneCount;
    const startXPercent = 8 + (zone * zoneWidth) + (Math.random() * (zoneWidth * 0.7));
    const driftPx = Math.round(config.driftRange[0] + Math.random() * (config.driftRange[1] - config.driftRange[0]));
    const rotStart = config.rotRange[0] + Math.random() * (config.rotRange[1] - config.rotRange[0]);
    const rotDelta = (Math.random() - 0.5) * (config.rotRange[1] - config.rotRange[0]) * 1.5;
    const rotEnd = rotStart + rotDelta;
    const baseSize = isMobile ? config.sizeMobile : config.sizeDesktop;
    const size = Math.round(baseSize * (0.92 + Math.random() * 0.16));
    const duration = config.durationRange[0] + Math.random() * (config.durationRange[1] - config.durationRange[0]);

    const item = document.createElement('div');
    item.className = 'food-shower-item';
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;
    item.style.setProperty('--item-font-size', `${size}px`);
    item.style.setProperty('--item-left', `${startXPercent.toFixed(1)}%`);
    item.style.setProperty('--drift-x', `${driftPx}px`);
    item.style.setProperty('--rot-start', `${rotStart.toFixed(1)}deg`);
    item.style.setProperty('--rot-end', `${rotEnd.toFixed(1)}deg`);
    item.style.animationDuration = `${duration.toFixed(2)}s`;

    const emojiSpan = document.createElement('span');
    emojiSpan.className = 'food-emoji';
    emojiSpan.textContent = config.emoji;
    emojiSpan.title = config.name;

    item.appendChild(emojiSpan);
    overlay.appendChild(item);
    activeItemsCount++;

    item.addEventListener('animationend', () => {
      item.remove();
      activeItemsCount--;
      if (currentItemIndex >= totalItems && activeItemsCount <= 0 && overlay.parentNode) {
        overlay.remove();
      }
    });
  }

  spawnFoodItem();

  const spawnTimer = setInterval(() => {
    if (currentItemIndex >= totalItems) {
      clearInterval(spawnTimer);
      return;
    }
    spawnFoodItem();
  }, spawnIntervalMs);

  setTimeout(() => {
    if (overlay && overlay.parentNode) {
      overlay.remove();
    }
  }, (totalItems * spawnIntervalMs) + 6000);
}

/* =========================================================================
   INITIALIZATION
   ========================================================================= */
function init() {
  syncBrandAndIntegrations();
  renderCategoryNav();
  renderMenuSections();
  renderReviews();
  updateStickyMetrics();
  setupScrollReveal();
  setupActiveCategoryTracking();
  setupSearch();
  setupBackToTop();
  runEntranceAnimation();
  setTimeout(resetPageToTop, 20);
  setTimeout(resetPageToTop, 150);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

window.addEventListener('load', () => {
  resetPageToTop();
  updateStickyMetrics();
});

window.addEventListener('pageshow', () => {
  resetPageToTop();
});
