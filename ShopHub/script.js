const categories = [
  ["Electronics", "Smart devices and audio", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80"],
  ["Fashion", "Modern wardrobe staples", "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80"],
  ["Home Decor", "Warm spaces and accents", "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80"],
  ["Kitchen", "Daily cooking upgrades", "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80"],
  ["Gaming", "Play-ready essentials", "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=700&q=80"],
  ["Books", "Stories and learning", "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80"],
  ["Sports", "Training and outdoor gear", "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=700&q=80"],
  ["Furniture", "Comfort with character", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80"],
  ["Beauty", "Care and glow essentials", "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=700&q=80"],
  ["Smart Home", "Connected living", "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=700&q=80"],
  ["Shoes", "Step into comfort", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80"],
  ["Accessories", "Finishing touches", "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=700&q=80"]
];

const products = [
  ["AuraBook Pro 14 Laptop", "NovaTech", "Electronics", 1299, 1599, 4.8, 1842, "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80"],
  ["PulseBeat ANC Headphones", "Soundly", "Electronics", 149, 249, 4.7, 3210, "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80"],
  ["Crystal 5G Smartphone", "Mobix", "Electronics", 699, 899, 4.6, 2765, "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80"],
  ["FocusFlow Desk Lamp", "BrightCo", "Home Decor", 59, 89, 4.5, 912, "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80"],
  ["UrbanFlex Denim Jacket", "Threadline", "Fashion", 74, 120, 4.4, 735, "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=700&q=80"],
  ["CloudStep Knit Sneakers", "Stride", "Shoes", 88, 135, 4.7, 1456, "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=80"],
  ["Velvet Matte Lip Kit", "Glowry", "Beauty", 32, 49, 4.5, 1104, "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80"],
  ["ErgoNest Lounge Chair", "Casa", "Furniture", 329, 499, 4.6, 642, "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=700&q=80"],
  ["ChefStone Cookware Set", "Kulina", "Kitchen", 119, 189, 4.8, 1290, "https://images.unsplash.com/photo-1584990347449-a9ec15a87968?auto=format&fit=crop&w=700&q=80"],
  ["ArcadeX Wireless Controller", "PlayForge", "Gaming", 54, 79, 4.6, 2301, "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=700&q=80"],
  ["Mindful Productivity Journal", "PageCraft", "Books", 18, 28, 4.4, 522, "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=80"],
  ["HydraTrail Bottle", "Peak", "Sports", 24, 36, 4.7, 980, "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=80"],
  ["SmartSense Door Camera", "NestIQ", "Smart Home", 129, 199, 4.5, 864, "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=700&q=80"],
  ["Minimal Leather Backpack", "CarryLab", "Accessories", 96, 150, 4.6, 711, "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80"],
  ["StudioFit Yoga Mat", "ZenMotion", "Sports", 42, 65, 4.7, 1338, "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=700&q=80"],
  ["OakLine Coffee Table", "Casa", "Furniture", 219, 310, 4.3, 455, "https://images.unsplash.com/photo-1532372320572-cda25653a694?auto=format&fit=crop&w=700&q=80"],
  ["SilkTouch Scarf", "Threadline", "Fashion", 39, 59, 4.5, 386, "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=700&q=80"],
  ["BrewCraft Espresso Maker", "Kulina", "Kitchen", 189, 260, 4.8, 1540, "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=700&q=80"],
  ["Immersion RGB Keyboard", "PlayForge", "Gaming", 84, 129, 4.6, 2216, "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80"],
  ["Botanical Skin Serum", "Glowry", "Beauty", 45, 72, 4.7, 1028, "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80"],
  ["EchoWave Portable Speaker", "Soundly", "Electronics", 79, 119, 4.6, 1874, "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80"],
  ["Gallery Wall Frame Set", "BrightCo", "Home Decor", 67, 99, 4.4, 621, "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=700&q=80"],
  ["TrailGrip Running Shoes", "Stride", "Shoes", 112, 160, 4.8, 1965, "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=700&q=80"],
  ["Modern Fiction Box Set", "PageCraft", "Books", 58, 86, 4.5, 804, "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=700&q=80"]
].map((item, index) => ({
  id: index + 1,
  title: item[0],
  brand: item[1],
  category: item[2],
  price: item[3],
  oldPrice: item[4],
  rating: item[5],
  reviews: item[6],
  image: item[7],
  stock: 35 + ((index * 11) % 55)
}));

const brands = [
  ["Apple", "Premium tech", "fa-brands fa-apple"],
  ["Samsung", "Smart devices", "fa-solid fa-mobile-screen"],
  ["Sony", "Audio and gaming", "fa-solid fa-headphones"],
  ["HP", "Laptops and printers", "fa-solid fa-laptop"],
  ["Dell", "Work essentials", "fa-solid fa-computer"],
  ["Nike", "Performance wear", "fa-solid fa-shoe-prints"],
  ["Adidas", "Sport style", "fa-solid fa-person-running"],
  ["Puma", "Active lifestyle", "fa-solid fa-bolt"]
];

const state = {
  query: "",
  category: "all",
  cart: Number(localStorage.getItem("shophubCart") || 0),
  wishlist: new Set(JSON.parse(localStorage.getItem("shophubWishlist") || "[]"))
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const money = (value) => `$${value.toLocaleString("en-US")}`;
const discount = (price, oldPrice) => Math.round(((oldPrice - price) / oldPrice) * 100);

function initTheme() {
  const savedTheme = localStorage.getItem("shophubTheme");
  if (savedTheme === "dark") document.documentElement.dataset.theme = "dark";
  updateThemeIcon();
}

function updateThemeIcon() {
  const isDark = document.documentElement.dataset.theme === "dark";
  $("#themeToggle").innerHTML = `<i class="fa-solid fa-${isDark ? "sun" : "moon"}"></i>`;
}

function renderCategories() {
  $("#categoryGrid").innerHTML = categories.map(([name, text, image]) => `
    <button class="category-card reveal" style="--img:url('${image}')" data-category="${name}">
      <h3>${name}</h3>
      <p>${text}</p>
    </button>
  `).join("");
}

function productCard(product, isDeal = false) {
  const wished = state.wishlist.has(product.id);
  return `
    <article class="${isDeal ? "deal-card" : "product-card"} reveal">
      <span class="badge">${discount(product.price, product.oldPrice)}% OFF</span>
      <img class="product-img" src="${product.image}" alt="${product.title}" loading="lazy">
      <h3>${product.title}</h3>
      <p class="meta">${product.brand} · ${product.category}</p>
      <div class="rating" aria-label="${product.rating} stars">★★★★★ <span class="meta">(${product.reviews})</span></div>
      <div class="price-row">
        <span class="price">${money(product.price)}</span>
        <span class="old">${money(product.oldPrice)}</span>
      </div>
      ${isDeal ? `<div class="progress" aria-label="Stock remaining"><span style="width:${product.stock}%"></span></div><p class="meta">${product.stock}% stock remaining</p>` : `<p class="prime"><i class="fa-solid fa-bolt"></i> PrimePlus</p><p class="delivery">Free delivery available</p>`}
      <div class="card-actions">
        <button type="button" data-add="${product.id}">Add to Cart</button>
        <button type="button" class="${wished ? "active" : ""}" data-wish="${product.id}" aria-label="Add to wishlist"><i class="fa-${wished ? "solid" : "regular"} fa-heart"></i></button>
        <button type="button" data-view="${product.id}" aria-label="Quick view"><i class="fa-regular fa-eye"></i></button>
      </div>
    </article>
  `;
}

function renderDeals() {
  $("#dealTrack").innerHTML = products.slice(0, 10).map((product) => `
    <div class="swiper-slide">${productCard(product, true)}</div>
  `).join("");
}

function renderFilters() {
  const filters = ["all", ...categories.map((category) => category[0])];
  $("#filterChips").innerHTML = filters.map((filter) => `
    <button class="filter-chip ${state.category === filter ? "active" : ""}" data-filter="${filter}">
      ${filter === "all" ? "All Products" : filter}
    </button>
  `).join("");
}

function filteredProducts() {
  const query = state.query.trim().toLowerCase();
  return products.filter((product) => {
    const matchesCategory = state.category === "all" || product.category === state.category;
    const haystack = `${product.title} ${product.brand} ${product.category}`.toLowerCase();
    return matchesCategory && (!query || haystack.includes(query));
  });
}

function renderProducts() {
  const list = filteredProducts();
  $("#productGrid").innerHTML = list.map((product) => productCard(product)).join("");
  $("#emptyState").classList.toggle("show", list.length === 0);
  observeReveals();
}

function renderBrands() {
  $("#brandGrid").innerHTML = brands.map(([name, text, icon]) => `
    <article class="brand-card reveal">
      <i class="${icon}"></i>
      <div><h3>${name}</h3><p>${text}</p></div>
    </article>
  `).join("");
}

function updateCounters() {
  $("#cartCount").textContent = state.cart;
  $("#wishlistCount").textContent = state.wishlist.size;
  localStorage.setItem("shophubCart", String(state.cart));
  localStorage.setItem("shophubWishlist", JSON.stringify([...state.wishlist]));
}

function toast(message) {
  const item = document.createElement("div");
  item.className = "toast";
  item.textContent = message;
  $("#toastWrap").appendChild(item);
  setTimeout(() => item.remove(), 2800);
}

function setCategory(category) {
  state.category = category;
  $("#categoryFilter").value = category;
  renderFilters();
  renderProducts();
  $("#products").scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleSearch() {
  state.query = $("#searchInput").value;
  renderSuggestions();
  renderProducts();
}

function renderSuggestions() {
  const query = state.query.trim().toLowerCase();
  const box = $("#suggestions");
  if (!query) {
    box.classList.remove("show");
    box.innerHTML = "";
    return;
  }
  const matches = products
    .filter((product) => `${product.title} ${product.brand} ${product.category}`.toLowerCase().includes(query))
    .slice(0, 6);
  box.innerHTML = matches.map((product) => `
    <button type="button" class="suggestion-item" data-suggest="${product.title}">
      <i class="fa-solid fa-magnifying-glass"></i><span>${product.title}</span>
    </button>
  `).join("");
  box.classList.toggle("show", matches.length > 0);
}

function startCountdown() {
  const end = Date.now() + 1000 * 60 * 60 * 9;
  setInterval(() => {
    const remaining = Math.max(0, end - Date.now());
    const hours = String(Math.floor(remaining / 3600000)).padStart(2, "0");
    const minutes = String(Math.floor((remaining % 3600000) / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((remaining % 60000) / 1000)).padStart(2, "0");
    $("#dealTimer").textContent = `${hours}:${minutes}:${seconds}`;
  }, 1000);
}

function initSwipers() {
  new Swiper(".hero", {
    loop: true,
    speed: 900,
    autoplay: { delay: 4500, disableOnInteraction: false },
    effect: "fade",
    fadeEffect: { crossFade: true },
    pagination: { el: ".hero .swiper-pagination", clickable: true },
    navigation: { nextEl: ".hero .swiper-button-next", prevEl: ".hero .swiper-button-prev" }
  });

  new Swiper(".deal-swiper", {
    slidesPerView: 1.1,
    spaceBetween: 16,
    navigation: { nextEl: ".deal-next", prevEl: ".deal-prev" },
    breakpoints: {
      620: { slidesPerView: 2.2 },
      900: { slidesPerView: 3.2 },
      1180: { slidesPerView: 4.2 }
    }
  });
}

let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
  }
  $$(".reveal:not(.visible)").forEach((element) => revealObserver.observe(element));
}

function bindEvents() {
  $("#themeToggle").addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    document.documentElement.dataset.theme = isDark ? "" : "dark";
    localStorage.setItem("shophubTheme", isDark ? "light" : "dark");
    updateThemeIcon();
  });

  $("#menuToggle").addEventListener("click", () => {
    $("#menuToggle").classList.toggle("active");
    $("#mainNav").classList.toggle("open");
    document.body.classList.toggle("menu-open");
    $("#menuToggle").setAttribute("aria-expanded", $("#mainNav").classList.contains("open"));
  });

  $("#searchInput").addEventListener("input", handleSearch);
  $("#categoryFilter").addEventListener("change", (event) => setCategory(event.target.value));
  $("#searchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    handleSearch();
    $("#suggestions").classList.remove("show");
    $("#products").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.addEventListener("click", (event) => {
    const addId = event.target.closest("[data-add]")?.dataset.add;
    const wishId = event.target.closest("[data-wish]")?.dataset.wish;
    const viewId = event.target.closest("[data-view]")?.dataset.view;
    const filter = event.target.closest("[data-filter]")?.dataset.filter;
    const category = event.target.closest("[data-category], [data-nav-category]")?.dataset.category || event.target.closest("[data-nav-category]")?.dataset.navCategory;
    const suggestion = event.target.closest("[data-suggest]")?.dataset.suggest;

    if (addId) {
      state.cart += 1;
      updateCounters();
      $("#cartBtn").classList.add("cart-pop");
      setTimeout(() => $("#cartBtn").classList.remove("cart-pop"), 320);
      toast("Added to cart");
    }
    if (wishId) {
      const id = Number(wishId);
      state.wishlist.has(id) ? state.wishlist.delete(id) : state.wishlist.add(id);
      updateCounters();
      renderDeals();
      renderProducts();
      initDealSwiperRefresh();
      toast(state.wishlist.has(id) ? "Added to wishlist" : "Removed from wishlist");
    }
    if (viewId) {
      const product = products.find((item) => item.id === Number(viewId));
      toast(`${product.title} by ${product.brand} · ${money(product.price)}`);
    }
    if (filter) setCategory(filter);
    if (category) setCategory(category);
    if (suggestion) {
      $("#searchInput").value = suggestion;
      state.query = suggestion;
      $("#suggestions").classList.remove("show");
      renderProducts();
    }
    if (!event.target.closest(".search-box")) $("#suggestions").classList.remove("show");
    if (event.target.closest(".main-nav a") && innerWidth <= 840) {
      $("#menuToggle").click();
    }
  });

  $("#newsletterForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = $("#newsletterEmail");
    if (!email.checkValidity()) {
      toast("Please enter a valid email address");
      return;
    }
    toast("You are subscribed to ShopHub Insider");
    email.value = "";
  });

  $("#backTop").addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
  addEventListener("scroll", () => $("#backTop").classList.toggle("show", scrollY > 620), { passive: true });
}

function initDealSwiperRefresh() {
  const swiper = document.querySelector(".deal-swiper")?.swiper;
  if (swiper) swiper.update();
}

function boot() {
  initTheme();
  renderCategories();
  renderDeals();
  renderFilters();
  renderProducts();
  renderBrands();
  updateCounters();
  bindEvents();
  startCountdown();
  initSwipers();
  observeReveals();
}

document.addEventListener("DOMContentLoaded", boot);
