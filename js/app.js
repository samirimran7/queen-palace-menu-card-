/**
 * ================================================================================
 * QUEEN PALACE RESTAURANT - APPLICATION LOGIC
 * ================================================================================
 * Handles dynamic rendering, sticky header tracking, real-time search,
 * customer review interactions, back-to-top scrolling, and entrance animations.
 *
 * All editable content is loaded from:
 * - ./js/data/restaurant-info.js
 * - ./js/data/menu-data.js
 * - ./js/data/reviews-data.js
 * - ./js/data/animation-data.js
 * ================================================================================
 */

(function () {
  'use strict';

  /* =========================================================================
     1. VIEWPORT & SCROLL RESTORATION: ALWAYS START AT TOP (BEGINNING OF PAGE)
     ========================================================================= */
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  function resetPageToTop() {
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

  // Immediate execution on script parse
  resetPageToTop();

  /* =========================================================================
     2. APPLY EDITABLE RESTAURANT INFO TO DOM
     ========================================================================= */
  function applyRestaurantInfo() {
    const info = window.RESTAURANT_INFO;
    if (!info) return;

    // Brand titles
    const brandTitleEl = document.querySelector('.brand-title');
    const brandSubEl = document.querySelector('.brand-subtitle');
    if (brandTitleEl && info.brand?.name) brandTitleEl.textContent = info.brand.name;
    if (brandSubEl && info.brand?.subtitle) brandSubEl.textContent = info.brand.subtitle;

    // Search bar placeholder
    const searchInput = document.getElementById('menu-search');
    if (searchInput && info.search?.placeholder) {
      searchInput.setAttribute('placeholder', info.search.placeholder);
    }
    const searchEmptyText = document.querySelector('#search-empty p');
    if (searchEmptyText && info.search?.emptyTitle) {
      searchEmptyText.textContent = info.search.emptyTitle;
    }
    const resetSearchBtn = document.getElementById('reset-search-btn');
    if (resetSearchBtn && info.search?.resetButtonText) {
      resetSearchBtn.textContent = info.search.resetButtonText;
    }

    // Google Reviews Card & Action Button
    const googleLocText = document.getElementById('google-review-loc-text');
    if (googleLocText && info.googleReviews?.locationBadge) {
      googleLocText.textContent = info.googleReviews.locationBadge;
    }
    const googleTitle = document.getElementById('google-review-title');
    if (googleTitle && info.googleReviews?.cardTitle) {
      googleTitle.textContent = info.googleReviews.cardTitle;
    }
    const googlePrompt = document.getElementById('google-review-prompt');
    if (googlePrompt && info.googleReviews?.cardPrompt) {
      googlePrompt.textContent = info.googleReviews.cardPrompt;
    }
    const googleBtn = document.getElementById('google-review-action-btn');
    if (googleBtn && info.googleReviews?.url) {
      googleBtn.href = info.googleReviews.url;
    }
    const googleBtnLabel = document.getElementById('google-review-btn-label');
    if (googleBtnLabel && info.googleReviews?.buttonLabel) {
      googleBtnLabel.textContent = info.googleReviews.buttonLabel;
    }

    // WhatsApp Button
    const waBtn = document.getElementById('footer-whatsapp-link');
    if (waBtn && info.whatsapp) {
      const waUrl = typeof info.whatsapp.getUrl === 'function'
        ? info.whatsapp.getUrl()
        : `https://wa.me/${info.whatsapp.number}?text=${encodeURIComponent(info.whatsapp.defaultMessage || '')}`;
      waBtn.href = waUrl;
    }
    const waText = document.getElementById('footer-whatsapp-text');
    if (waText && info.whatsapp?.buttonText) {
      waText.textContent = info.whatsapp.buttonText;
    }

    // Facebook Button
    const fbBtn = document.getElementById('footer-facebook-link');
    if (fbBtn && info.facebook?.url) {
      fbBtn.href = info.facebook.url;
    }
    const fbText = document.getElementById('footer-facebook-text');
    if (fbText && info.facebook?.buttonText) {
      fbText.textContent = info.facebook.buttonText;
    }

    // Footer texts
    const footerName = document.getElementById('footer-restaurant-name');
    if (footerName && info.footer?.restaurantName) {
      footerName.textContent = info.footer.restaurantName;
    }
    const footerNote = document.getElementById('footer-restaurant-note');
    if (footerNote && info.footer?.pricingNote) {
      footerNote.textContent = info.footer.pricingNote;
    }
    const footerHint = document.getElementById('footer-restaurant-hint');
    if (footerHint && info.footer?.navigationHint) {
      footerHint.textContent = info.footer.navigationHint;
    }
  }

  /* =========================================================================
     3. DYNAMIC MEASUREMENT FOR BUG-FREE STICKY POSITIONING
     ========================================================================= */
  function updateStickyMetrics() {
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
     4. DOM RENDERING ENGINE
     ========================================================================= */
  const catNavEl = document.getElementById('category-nav');
  const menuSectionsEl = document.getElementById('menu-sections');
  const reviewsListEl = document.getElementById('reviews-list');

  // 1. Render Category Navigation Chips
  function renderCategoryNav() {
    const menuData = window.MENU_DATA || [];
    if (!catNavEl) return;

    catNavEl.innerHTML = menuData.map((cat, index) => `
      <button type="button" class="cat-chip ${index === 0 ? 'active' : ''}" data-cat="${cat.id}">
        <span class="chip-emoji">${cat.emoji}</span>
        <span>${cat.name}</span>
      </button>
    `).join('');
  }

  // 2. Render Menu Sections and Items
  function renderMenuSections() {
    const menuData = window.MENU_DATA || [];
    if (!menuSectionsEl) return;

    // Clear any existing sections before search empty & reviews
    const existingSections = menuSectionsEl.querySelectorAll('.cat-section');
    existingSections.forEach(s => s.remove());

    const searchEmptyEl = document.getElementById('search-empty');

    menuData.forEach((cat, catIdx) => {
      const sectionEl = document.createElement('section');
      sectionEl.className = 'cat-section';
      sectionEl.id = `cat-${cat.id}`;
      sectionEl.setAttribute('data-category-id', cat.id);

      let contentHtml = '';

      if (cat.type === 'pizza-table') {
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
                    ${pizza.name}
                    ${pizza.note ? `<span class="pizza-note">${pizza.note}</span>` : ''}
                  </td>
                  <td class="col-price">${pizza.prices[0]}</td>
                  <td class="col-price">${pizza.prices[1]}</td>
                  <td class="col-price">${pizza.prices[2]}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
      } else {
        // Standard Item or Combo Rows
        contentHtml = cat.items.map((item, idx) => {
          const numStr = String(idx + 1).padStart(2, '0');
          const searchName = item.name.toLowerCase();

          if (item.desc) {
            return `
              <div class="combo-row" data-search-name="${searchName}">
                <div class="combo-main">
                  <span class="item-num">${numStr}</span>
                  <span class="item-name">${item.name}</span>
                  <span class="item-dots"></span>
                  <span class="item-price">${item.price}</span>
                </div>
                <div class="combo-desc">${item.desc}</div>
              </div>
            `;
          } else {
            return `
              <div class="item-row" data-search-name="${searchName}">
                <span class="item-num">${numStr}</span>
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

      menuSectionsEl.insertBefore(sectionEl, searchEmptyEl);
    });
  }

  // 3. Render Facebook-Style Customer Reviews
  function renderReviews() {
    const reviewsData = window.REVIEWS_DATA || [];
    if (!reviewsListEl) return;

    reviewsListEl.innerHTML = reviewsData.map(rev => {
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
        avatarContent = rev.initials;
      }

      const avatarMarkup = isClickable
        ? `<a href="${rev.profileUrl}" target="_blank" rel="noopener noreferrer" class="review-avatar review-avatar-link" style="background-color: ${rev.avatarBg || '#ced2d8'};" aria-label="Visit ${rev.author} on Facebook">${avatarContent}</a>`
        : `<div class="review-avatar" style="background-color: ${rev.avatarBg};">${avatarContent}</div>`;

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

    // Add click handler for clickable review items (e.g. Samir Imran Sagar)
    reviewsListEl.querySelectorAll('.review-item-clickable').forEach(item => {
      const url = item.getAttribute('data-profile-url');
      if (!url) return;

      item.addEventListener('click', function (e) {
        if (e.target.closest('a')) return; // Native link handles itself
        window.open(url, '_blank', 'noopener,noreferrer');
      });

      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.open(url, '_blank', 'noopener,noreferrer');
        }
      });
    });

    // Add Like Click Event Handlers
    reviewsListEl.querySelectorAll('.like-btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const revId = parseInt(this.getAttribute('data-review-id'), 10);
        const review = reviewsData.find(r => r.id === revId);
        if (!review) return;

        review.liked = !review.liked;
        review.likes += review.liked ? 1 : -1;

        this.classList.toggle('liked', review.liked);
        const countEl = document.getElementById(`rev-count-${revId}`);
        if (countEl) countEl.textContent = review.likes;
      });
    });
  }

  /* =========================================================================
     5. INTERSECTION OBSERVER: REVEAL ON SCROLL (FADE IN EFFECT)
     ========================================================================= */
  function setupScrollReveal() {
    const sections = document.querySelectorAll('.cat-section');

    function revealSectionItems(section) {
      section.classList.add('is-revealed');
      const items = section.querySelectorAll('.item-row, .combo-row, .pizza-row');
      items.forEach((item, idx) => {
        item.style.setProperty('--pop-delay', `${Math.min(idx * 24, 220)}ms`);
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
          observer.unobserve(entry.target); // Reveal once, never loop
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px 50px 0px'
    });

    sections.forEach(s => observer.observe(s));
  }

  /* =========================================================================
     6. ACTIVE CATEGORY TRACKER DURING SCROLL
     ========================================================================= */
  let isClickScrolling = false;
  let clickScrollTimer = null;

  function setupActiveCategoryTracking() {
    const chips = document.querySelectorAll('.cat-chip');
    const sections = document.querySelectorAll('.cat-section');

    function highlightActiveChip() {
      if (isClickScrolling) return;

      const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-actual-h')) || 70;
      const navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-actual-h')) || 46;
      const triggerY = window.scrollY + headerH + navH + 40;

      let currentActiveId = null;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (triggerY >= top && triggerY < top + height) {
          currentActiveId = section.getAttribute('data-category-id');
        }
      });

      // Default to first if near top
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
              const targetLeft = chip.offsetLeft - (catNav.clientWidth / 2) + (chip.clientWidth / 2);
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
      chip.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-cat');
        const targetSection = document.getElementById(`cat-${targetId}`);
        if (!targetSection) return;

        // Mark active
        chips.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        const catNav = document.getElementById('category-nav');
        if (catNav) {
          const targetLeft = this.offsetLeft - (catNav.clientWidth / 2) + (this.clientWidth / 2);
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
     7. REAL-TIME SEARCH FILTERING
     ========================================================================= */
  function setupSearch() {
    const searchInput = document.getElementById('menu-search');
    const clearBtn = document.getElementById('search-clear');
    const searchEmpty = document.getElementById('search-empty');
    const resetBtn = document.getElementById('reset-search-btn');
    const catNav = document.getElementById('category-nav');
    if (!searchInput) return;

    function filterMenu() {
      const query = searchInput.value.trim().toLowerCase();
      if (clearBtn) clearBtn.style.display = query.length > 0 ? 'block' : 'none';

      if (query === '') {
        // Reset all items & sections
        document.querySelectorAll('.cat-section').forEach(s => {
          s.style.display = '';
          s.querySelectorAll('.item-row, .combo-row, .pizza-row').forEach((row, idx) => {
            const wasHidden = row.style.display === 'none';
            row.style.display = '';
            if (wasHidden) {
              row.classList.remove('item-fade-in', 'item-pop-in');
              void row.offsetWidth; // Force animation restart
              row.style.setProperty('--pop-delay', `${Math.min(idx * 18, 160)}ms`);
              row.classList.add('item-fade-in', 'item-pop-in');
            }
          });
        });
        if (searchEmpty) searchEmpty.style.display = 'none';
        if (catNav) catNav.style.display = 'flex';
        updateStickyMetrics();
        return;
      }

      // Hide category nav while searching
      if (catNav) catNav.style.display = 'none';

      let totalMatches = 0;
      const sections = document.querySelectorAll('.cat-section');

      sections.forEach(section => {
        const rows = section.querySelectorAll('.item-row, .combo-row, .pizza-row');
        let sectionMatches = 0;

        rows.forEach(row => {
          const name = row.getAttribute('data-search-name') || '';
          if (name.includes(query)) {
            row.style.display = '';
            sectionMatches++;

            row.classList.remove('item-fade-in', 'item-pop-in');
            void row.offsetWidth;
            row.style.setProperty('--pop-delay', `${Math.min(sectionMatches * 20, 180)}ms`);
            row.classList.add('item-fade-in', 'item-pop-in');
          } else {
            row.style.display = 'none';
            row.classList.remove('item-fade-in', 'item-pop-in');
          }
        });

        if (sectionMatches > 0) {
          section.style.display = '';
          section.classList.add('is-revealed');
          totalMatches += sectionMatches;
        } else {
          section.style.display = 'none';
        }
      });

      if (searchEmpty) searchEmpty.style.display = totalMatches === 0 ? 'block' : 'none';
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

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
        filterMenu();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        searchInput.value = '';
        filterMenu();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  /* =========================================================================
     8. FLOATING BACK TO TOP BUTTON
     ========================================================================= */
  function setupBackToTop() {
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
     9. FOOD-FALLING ENTRANCE SHOWER ANIMATION
     ========================================================================= */
  let foodAnimationStarted = false;

  function runEntranceAnimation() {
    const curtain = document.getElementById('entrance-curtain');
    if (curtain) {
      curtain.remove();
    }

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    if (foodAnimationStarted) return;
    foodAnimationStarted = true;

    const animSettings = window.FOOD_ANIMATION_SETTINGS || { initialDelayMs: 2000 };
    setTimeout(() => {
      startFoodFallingAnimation();
    }, animSettings.initialDelayMs || 2000);
  }

  function startFoodFallingAnimation() {
    const foodItems = window.FOOD_ITEMS_CONFIG;
    if (!foodItems || foodItems.length === 0) return;

    const overlay = document.createElement('div');
    overlay.id = 'food-shower-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);

    const isMobile = window.innerWidth < 640;
    const animSettings = window.FOOD_ANIMATION_SETTINGS || {};

    function shuffleArray(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    const wave1 = shuffleArray(foodItems);
    const wave2 = shuffleArray(foodItems);
    if (wave1[wave1.length - 1].emoji === wave2[0].emoji && wave2.length > 1) {
      [wave2[0], wave2[1]] = [wave2[1], wave2[0]];
    }

    const exactDeck = [...wave1, ...wave2];
    const totalItems = exactDeck.length;

    const spawnIntervalMs = isMobile
      ? (animSettings.mobileSpawnMs || 210)
      : (animSettings.desktopSpawnMs || 190);

    let activeItemsCount = 0;
    let currentItemIndex = 0;

    const zoneCount = isMobile ? 8 : 12;
    let lastZone = -1;

    function pickZone() {
      let zone;
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
     10. INITIALIZE APP
     ========================================================================= */
  function initApp() {
    resetPageToTop();
    applyRestaurantInfo();
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
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

  window.addEventListener('load', () => {
    resetPageToTop();
    updateStickyMetrics();
  });

  window.addEventListener('pageshow', () => {
    resetPageToTop();
  });

})();
