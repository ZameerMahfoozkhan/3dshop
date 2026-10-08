/**
 * 3D Shop - Main Site Interactivity & Shared Components
 */

document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initMobileDrawer();
  initScrollReveals();
  initAccordions();
  initGlobalWhatsAppTriggers();
  initCurrentYear();
  initNavSearch();
});

/**
 * Sticky Header on Scroll
 */
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Navigation Drawer
 */
function initMobileDrawer() {
  const toggleBtn = document.querySelector(".mobile-nav-toggle");
  const drawer = document.querySelector(".mobile-drawer");
  const overlay = document.querySelector(".mobile-drawer-overlay");
  const closeBtn = document.querySelector(".mobile-drawer-close");
  const drawerLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    toggleBtn.classList.add("open");
    toggleBtn.setAttribute("aria-expanded", "true");
    drawer.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    toggleBtn.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", "false");
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  toggleBtn.addEventListener("click", () => {
    const isOpen = drawer.classList.contains("active");
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  const closeBtns = document.querySelectorAll(".mobile-drawer-close, [data-drawer-close]");
  closeBtns.forEach(btn => btn.addEventListener("click", closeDrawer));
  overlay.addEventListener("click", closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("active")) {
      closeDrawer();
    }
  });
}

/**
 * Smooth Scroll Reveal Animations via IntersectionObserver
 */
function initScrollReveals() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if (!revealElements.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add("reveal-visible"));
  }
}

/**
 * Accordion Component (FAQs and Technical Specs)
 */
function initAccordions() {
  const triggers = document.querySelectorAll(".accordion-trigger");
  triggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const parent = trigger.closest(".accordion-item");
      if (!parent) return;
      const isOpen = parent.classList.contains("open");

      // Close sibling items in the same accordion group
      const group = parent.closest(".accordion-group");
      if (group) {
        group.querySelectorAll(".accordion-item.open").forEach(item => {
          if (item !== parent) item.classList.remove("open");
        });
      }

      parent.classList.toggle("open", !isOpen);
      trigger.setAttribute("aria-expanded", !isOpen ? "true" : "false");
    });
  });
}

/**
 * Global WhatsApp Trigger Buttons
 */
function initGlobalWhatsAppTriggers() {
  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-whatsapp-action]");
    if (!target) return;

    const action = target.getAttribute("data-whatsapp-action");
    if (action === "general") {
      e.preventDefault();
      const message = "Hi 3D Shop, I am interested in your 3D printing services and would like to ask a few questions.";
      openWhatsApp(message);
    } else if (action === "greater-noida") {
      e.preventDefault();
      const message = "Hi 3D Shop, I am located in Greater Noida / NCR and need fast 3D printing service.";
      openWhatsApp(message);
    } else if (action === "custom-order") {
      e.preventDefault();
      window.location.href = "custom-3d-printing.html";
    }
  });
}

/**
 * Current Year in Footer
 */
function initCurrentYear() {
  const yearEls = document.querySelectorAll(".current-year");
  const year = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = year;
  });
}

/**
 * Helper to render a reusable product card HTML string
 */
function createProductCardHTML(p) {
  const colorDots = (p.colors || []).map(c => 
    `<span class="swatch-dot" style="background-color: ${c.hex};" title="${c.name}"></span>`
  ).join("");

  const isGift = p.category === "Gifts" || p.isPersonalizable;
  const badgeHTML = p.badge 
    ? `<span class="product-badge-tag ${isGift ? "product-badge-personalize" : ""}">${isGift ? "✨ " + p.badge : p.badge}</span>` 
    : (isGift ? `<span class="product-badge-tag product-badge-personalize">✨ Personalizable</span>` : "");

  const ratingVal = p.rating ? Number(p.rating).toFixed(1) : "4.8";
  const ratingCount = typeof p.ratingCount !== "undefined" ? p.ratingCount : 12;
  const ratingHTML = `
    <div class="product-rating-badge" aria-label="Rating: ${ratingVal} out of 5 stars from ${ratingCount} reviews" title="${ratingVal} rating (${ratingCount} reviews)">
      <svg class="rating-star-icon" width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      <span class="rating-score">${ratingVal}</span>
      <span class="rating-count">(${ratingCount})</span>
    </div>
  `;

  return `
    <article class="product-card reveal-on-scroll" data-category="${p.category}" data-id="${p.id}">
      <div class="product-card-image-wrap">
        <a href="product.html?id=${p.id}" aria-label="View ${p.name}">
          <img src="${p.image}" alt="${p.name} - 3D Printed Product by 3D Shop" class="product-card-image" loading="lazy" width="400" height="400">
        </a>
        ${badgeHTML}
        ${ratingHTML}
      </div>
      <div class="product-card-body">
        <div class="product-meta-row">
          <span>${p.category}</span>
          <span>${p.id}</span>
        </div>
        <h3 class="product-card-title">
          <a href="product.html?id=${p.id}">${p.name}</a>
        </h3>
        <p class="product-card-tagline">${p.tagline}</p>
        
        <div class="product-color-swatches" aria-label="Available colors">
          ${colorDots}
        </div>

        <div class="product-card-footer">
          <div class="product-price-group">
            <span class="product-current-price">₹${p.price}</span>
            ${p.originalPrice ? `<span class="product-original-price">₹${p.originalPrice}</span>` : ""}
          </div>
          <div class="product-card-actions">
            <a href="product.html?id=${p.id}" class="btn btn-sm btn-secondary" title="View Specifications">
              Details
            </a>
            ${isGift ? `
              <a href="product.html?id=${p.id}#personalize" class="btn btn-sm btn-whatsapp" title="Personalize this gift">
                <span>Personalize</span>
              </a>
            ` : `
              <button type="button" class="btn btn-sm btn-whatsapp quick-whatsapp-btn" data-product-id="${p.id}" title="Order on WhatsApp">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="flex-shrink: 0;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.408A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm5.405 13.924c-.228.644-1.127 1.23-1.603 1.306-.445.07-1.026.098-1.66-.107-.404-.13-1.002-.328-1.748-.65-3.08-1.332-5.09-4.444-5.244-4.65-.154-.205-1.25-1.663-1.25-3.172 0-1.51.785-2.253 1.066-2.56.281-.308.614-.385.82-.385.205 0 .41.002.589.011.189.01.44-.071.688.522.256.615.87 2.128.947 2.282.077.154.128.333.026.538-.103.205-.154.333-.308.513-.154.179-.323.4-.461.538-.154.154-.314.32-.135.628.179.308.796 1.311 1.706 2.121 1.171 1.042 2.16 1.365 2.468 1.519.308.154.487.128.667-.077.179-.205.769-.897.974-1.205.205-.308.41-.256.692-.154.282.103 1.794.846 2.102 1.001.308.154.513.23.589.36.077.127.077.742-.151 1.386z"/></svg>
                <span>Order</span>
              </button>
            `}
          </div>
        </div>
      </div>
    </article>
  `;
}

// Global click delegation for product card quick-order
document.addEventListener("click", (e) => {
  const quickBtn = e.target.closest(".quick-whatsapp-btn");
  if (!quickBtn) return;
  e.preventDefault();

  const id = quickBtn.getAttribute("data-product-id");
  const product = window.getProductById ? window.getProductById(id) : null;
  if (!product) return;

  if (product.category === "Gifts" || product.isPersonalizable) {
    window.location.href = `product.html?id=${product.id}#personalize`;
    return;
  }

  const defaultColor = product.colors && product.colors[0] ? product.colors[0].name : "Standard";
  const msg = formatProductOrderMessage({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1,
    color: defaultColor,
    location: "Greater Noida / Delhi NCR",
    notes: "Ordered directly from product card."
  });
  openWhatsApp(msg);
});

window.createProductCardHTML = createProductCardHTML;

/**
 * Global Navbar Search Bar Handler (Autocomplete + Navigation)
 */
function initNavSearch() {
  const searchWraps = document.querySelectorAll(".nav-search-wrap");
  if (!searchWraps.length) return;

  searchWraps.forEach(wrap => {
    const form = wrap.querySelector(".nav-search-form");
    const input = wrap.querySelector(".nav-search-input");
    const clearBtn = wrap.querySelector(".nav-search-clear");
    const dropdown = wrap.querySelector(".nav-search-dropdown");

    if (!input) return;

    let debounceTimer;

    input.addEventListener("input", () => {
      const query = input.value.trim().toLowerCase();
      if (clearBtn) {
        clearBtn.style.display = query.length > 0 ? "block" : "none";
      }

      clearTimeout(debounceTimer);
      if (!dropdown) return;

      if (query.length < 2) {
        dropdown.style.display = "none";
        dropdown.innerHTML = "";
        return;
      }

      debounceTimer = setTimeout(() => {
        if (!window.PRODUCTS) return;
        const matches = window.PRODUCTS.filter(p => 
          p.name.toLowerCase().includes(query) ||
          p.tagline.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.id.toLowerCase().includes(query)
        ).slice(0, 5);

        if (matches.length === 0) {
          dropdown.innerHTML = `
            <div class="nav-search-empty">
              No prints found for "<strong>${escapeHTML(query)}</strong>"
            </div>
            <div class="nav-search-footer">
              <a href="shop.html?search=${encodeURIComponent(query)}">Browse full catalog &rarr;</a>
            </div>
          `;
        } else {
          dropdown.innerHTML = `
            <ul class="nav-search-results-list">
              ${matches.map(p => `
                <li>
                  <a href="product.html?id=${p.id}" class="nav-search-result-item">
                    <img src="${p.image}" alt="${p.name}" class="nav-search-thumb" loading="lazy">
                    <div class="nav-search-info">
                      <span class="nav-search-title">${p.name}</span>
                      <div class="nav-search-meta">
                        <span>${p.category}</span>
                        <span>⭐ ${p.rating ? Number(p.rating).toFixed(1) : "4.8"}</span>
                      </div>
                    </div>
                    <span class="nav-search-price">₹${p.price}</span>
                  </a>
                </li>
              `).join("")}
            </ul>
            <div class="nav-search-footer">
              <a href="shop.html?search=${encodeURIComponent(query)}">View all results for "${escapeHTML(query)}" &rarr;</a>
            </div>
          `;
        }
        dropdown.style.display = "block";
      }, 120);
    });

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        input.value = "";
        clearBtn.style.display = "none";
        if (dropdown) {
          dropdown.style.display = "none";
          dropdown.innerHTML = "";
        }
        input.focus();
      });
    }

    // Close on Escape or click outside
    document.addEventListener("click", (e) => {
      if (!wrap.contains(e.target) && dropdown) {
        dropdown.style.display = "none";
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && dropdown) {
        dropdown.style.display = "none";
      }
    });

    if (form) {
      form.addEventListener("submit", (e) => {
        const val = input.value.trim();
        if (!val) {
          e.preventDefault();
        }
      });
    }
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

window.initNavSearch = initNavSearch;
