/**
 * 3D Shop - Catalog Filtering, Search & Sorting Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("products-grid")) return;

  const state = {
    category: "All",
    search: "",
    sort: "featured"
  };

  // Check URL parameters for pre-selected category and search
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get("category");
  if (initialCategory) {
    state.category = initialCategory;
  }

  const initialSearch = urlParams.get("search") || urlParams.get("q");
  if (initialSearch) {
    state.search = initialSearch.trim().toLowerCase();
  }

  const gridEl = document.getElementById("products-grid");
  const searchInput = document.getElementById("shop-search-input");
  if (searchInput && state.search) {
    searchInput.value = initialSearch.trim();
  }
  const sortSelect = document.getElementById("shop-sort-select");
  const categoryTabsWrap = document.getElementById("category-tabs-wrap");
  const resultsCountEl = document.getElementById("results-count");
  const clearFiltersBtn = document.getElementById("clear-filters-btn");

  // Initialize Category Tabs
  renderCategoryTabs();

  // Initial Product Render
  renderProducts();

  // Search input listener with simple debouncing
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        state.search = e.target.value.trim().toLowerCase();
        renderProducts();
      }, 150);
    });
  }

  // Sort select listener
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sort = e.target.value;
      renderProducts();
    });
  }

  // Clear filters
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", () => {
      state.category = "All";
      state.search = "";
      state.sort = "featured";
      if (searchInput) searchInput.value = "";
      if (sortSelect) sortSelect.value = "featured";
      updateActiveCategoryTab();
      renderProducts();
    });
  }

  function renderCategoryTabs() {
    if (!categoryTabsWrap) return;
    const categories = ["All", "Desk", "Home", "Decor", "Gaming", "Organization", "Utility", "Gifts"];
    const counts = window.getCategoryCounts ? window.getCategoryCounts() : {};

    categoryTabsWrap.innerHTML = categories.map(cat => {
      const count = counts[cat] || 0;
      const isActive = state.category.toLowerCase() === cat.toLowerCase();
      return `
        <button type="button" class="category-tab-btn ${isActive ? "active" : ""}" data-category="${cat}">
          <span>${cat}</span>
          <span class="badge-count">${cat === "All" ? (window.PRODUCTS ? window.PRODUCTS.length : 0) : count}</span>
        </button>
      `;
    }).join("");

    categoryTabsWrap.querySelectorAll(".category-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        state.category = btn.getAttribute("data-category");
        updateActiveCategoryTab();
        renderProducts();
      });
    });
  }

  function updateActiveCategoryTab() {
    if (!categoryTabsWrap) return;
    categoryTabsWrap.querySelectorAll(".category-tab-btn").forEach(btn => {
      const cat = btn.getAttribute("data-category");
      if (cat.toLowerCase() === state.category.toLowerCase()) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  function renderProducts() {
    if (!gridEl || !window.PRODUCTS) return;

    let filtered = [...window.PRODUCTS];

    // Filter by Category
    if (state.category && state.category.toLowerCase() !== "all") {
      filtered = filtered.filter(p => p.category.toLowerCase() === state.category.toLowerCase());
    }

    // Filter by Search Query
    if (state.search) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(state.search) ||
        p.tagline.toLowerCase().includes(state.search) ||
        p.description.toLowerCase().includes(state.search) ||
        p.category.toLowerCase().includes(state.search) ||
        p.id.toLowerCase().includes(state.search)
      );
    }

    // Sort Results
    if (state.sort === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (state.sort === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (state.sort === "name-asc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Update Result Counts
    if (resultsCountEl) {
      resultsCountEl.textContent = `Showing ${filtered.length} of ${window.PRODUCTS.length} prints`;
    }

    // Empty state
    if (filtered.length === 0) {
      gridEl.innerHTML = `
        <div class="empty-state">
          <h3>No matching 3D prints found</h3>
          <p>We couldn't find any products matching "${state.search}". Need something unique? You can request a custom print anytime.</p>
          <a href="custom-3d-printing.html" class="btn btn-primary">
            <span>Request Custom 3D Print</span>
          </a>
        </div>
      `;
      return;
    }

    // Render Grid
    gridEl.innerHTML = filtered.map(p => window.createProductCardHTML(p)).join("");

    // Trigger scroll reveals for newly added cards
    if (window.initScrollReveals) {
      window.initScrollReveals();
    }
  }
});
