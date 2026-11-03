/**
 * CasePop - Modern Mall Phone Case E-Commerce
 * Real Product Catalog & INR Pricing Logic
 */

// Helper to format Indian Rupee (INR)
function formatINR(amount) {
  return '₹' + Math.round(amount).toLocaleString('en-IN');
}

// --- 1. PRODUCT CATALOG DATA WITH USER UPLOADED REAL COVERS ---
const PRODUCTS = [
  {
    id: 'case-blue-dreamer',
    name: 'Vintage Blue Dreamer & GT',
    vibe: 'y2k',
    vibeName: 'Y2K Retro & Street',
    price: 849,
    originalPrice: 1299,
    rating: 5.0,
    reviews: 248,
    badge: 'Mall Bestseller 🔥',
    badgeColor: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white',
    isMagSafe: true,
    compatibleModels: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16', 'iPhone 15 Pro', 'Galaxy S25'],
    coverPhoto: 'assets/images/case-blue-dreamer.jpg',
    bgGradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #93c5fd 100%)',
    bumperColor: '#1e3a8a',
    protection: '14ft Drop Tested',
    description: 'Nostalgic indigo ink brush aesthetic with vintage collector stamps and midnight coupe car print on crystal drop-resistant acrylic.'
  },
  {
    id: 'case-neon-lime-touch',
    name: 'FeatherLight Neon Lime Soft-Touch',
    vibe: 'neon',
    vibeName: 'Neon / Cyber Glow',
    price: 749,
    originalPrice: 1099,
    rating: 4.9,
    reviews: 186,
    badge: 'Featherweight ⚡',
    badgeColor: 'bg-lime-400 text-slate-950 font-black',
    isMagSafe: true,
    compatibleModels: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16', 'iPhone 15', 'Galaxy S25'],
    coverPhoto: 'assets/images/case-neon-lime-touch.jpg',
    bgGradient: 'linear-gradient(135deg, #a3e635 0%, #84cc16 50%, #65a30d 100%)',
    bumperColor: '#4d7c0f',
    protection: '12ft Air-Cushion',
    description: 'Ultra-vivid electric cyber lime liquid silicone with featherweight balance, silky non-slip matte texture, and anti-dust nano coating.'
  },
  {
    id: 'case-stained-glass-raven',
    name: 'Gothic Raven Stained-Glass',
    vibe: 'cute',
    vibeName: 'Cute & Aesthetic / Art',
    price: 899,
    originalPrice: 1349,
    rating: 5.0,
    reviews: 312,
    badge: 'Staff Art Pick ✨',
    badgeColor: 'bg-gradient-to-r from-purple-700 via-indigo-700 to-slate-900 text-amber-200 font-bold',
    isMagSafe: true,
    compatibleModels: ['Galaxy S25 Ultra', 'Galaxy S24 Ultra', 'Galaxy S24', 'iPhone 16 Pro Max', 'iPhone 16 Pro'],
    coverPhoto: 'assets/images/case-stained-glass-raven.jpg',
    bgGradient: 'linear-gradient(145deg, #1e1b4b 0%, #312e81 50%, #0f172a 100%)',
    bumperColor: '#1e1b4b',
    protection: '15ft Reinforced Frame',
    description: 'Cathedral stained-glass gold halo illustration with dark feathered anime heroine. Glossy scratch-resistant backplate with precision lens rings.'
  },
  {
    id: 'case-pastel-trio-tpu',
    name: 'Minimalist Velvet Matte Series',
    vibe: 'cute',
    vibeName: 'Cute & Aesthetic',
    price: 699,
    originalPrice: 999,
    rating: 4.8,
    reviews: 174,
    badge: 'Buy 2 Get 1 Fave 🌸',
    badgeColor: 'bg-pink-100 text-pink-700 border border-pink-300 font-bold',
    isMagSafe: false,
    compatibleModels: ['iPhone 16 Pro', 'iPhone 16', 'Galaxy S25', 'Galaxy S24', 'Pixel 9'],
    coverPhoto: 'assets/images/case-pastel-trio-tpu.jpg',
    bgGradient: 'linear-gradient(180deg, #fce7f3 0%, #fbcfe8 50%, #f472b6 100%)',
    bumperColor: '#db2777',
    protection: '10ft Everyday Defense',
    description: 'Minimalist luxury textured matte cases available in Noir Black, Bone Cream, and Petal Pink. Tactile grip with raised camera bezel protection.'
  },
  {
    id: 'case-pixel-magfit-armor',
    name: 'Pixel MagFit Dual-Armor Shield',
    vibe: 'armor',
    vibeName: 'Heavy-Duty Armor',
    price: 1099,
    originalPrice: 1499,
    rating: 4.9,
    reviews: 142,
    badge: 'MagSafe + 16ft Drop 🛡️',
    badgeColor: 'bg-slate-900 text-orange-400 border border-orange-500/40 font-bold',
    isMagSafe: true,
    compatibleModels: ['Pixel 9 Pro XL', 'Pixel 9 Pro', 'Pixel 9', 'Pixel 8 Pro'],
    coverPhoto: 'assets/images/case-pixel-magfit-armor.jpg',
    bgGradient: 'linear-gradient(135deg, #334155 0%, #1e293b 60%, #ea580c 100%)',
    bumperColor: '#0f172a',
    protection: '16ft Mil-Grade Certified',
    description: 'Industrial slate matte chassis with signature tangerine camera visor ring, interior shock-diffusion grid, and embedded MagSafe magnetic ring.'
  },
  {
    id: 'case-hologram',
    name: 'Cosmic Hologram Melt MagSafe',
    vibe: 'y2k',
    vibeName: 'Y2K Retro & Chrome',
    price: 899,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 218,
    badge: 'Trending Now 🪩',
    badgeColor: 'bg-gradient-to-r from-pink-500 to-purple-600 text-white',
    isMagSafe: true,
    compatibleModels: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16', 'Galaxy S25 Ultra', 'Pixel 9 Pro'],
    coverPhoto: 'assets/images/case-hologram.jpg',
    bgGradient: 'linear-gradient(135deg, #f472b6 0%, #c084fc 40%, #60a5fa 70%, #fbcfe8 100%)',
    bumperColor: '#312e81',
    protection: '14ft Drop Tested',
    description: 'Iridescent liquid molten chrome waves that shimmer under ambient light. Embedded MagSafe magnets with zero wireless interference.'
  },
  {
    id: 'case-strawberry',
    name: 'Strawberry Milk 3D Charms',
    vibe: 'cute',
    vibeName: 'Cute & Aesthetic',
    price: 699,
    originalPrice: 999,
    rating: 5.0,
    reviews: 310,
    badge: 'Cute Fave 🍓',
    badgeColor: 'bg-pink-100 text-pink-700 border border-pink-300',
    isMagSafe: false,
    compatibleModels: ['iPhone 16 Pro Max', 'iPhone 16', 'iPhone 15', 'Galaxy S25', 'Pixel 9'],
    coverPhoto: 'assets/images/case-strawberry.jpg',
    bgGradient: 'linear-gradient(180deg, #ffe4e6 0%, #fecdd3 45%, #fda4af 100%)',
    bumperColor: '#fb7185',
    protection: '10ft Everyday Drop Defense',
    description: 'Velvety soft-touch silicone exterior in pastel strawberry cream with glossy 3D heart accents and scratch-resistant coating.'
  },
  {
    id: 'case-armor',
    name: 'Titanium Fortress X-Armor Stand',
    vibe: 'armor',
    vibeName: 'Heavy-Duty Armor',
    price: 1199,
    originalPrice: 1599,
    rating: 4.9,
    reviews: 195,
    badge: '18ft Concrete Safe 🛡️',
    badgeColor: 'bg-slate-900 text-yellow-400 border border-yellow-400/40',
    isMagSafe: true,
    compatibleModels: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'Galaxy S25 Ultra', 'Pixel 9 Pro XL'],
    coverPhoto: 'assets/images/case-armor.jpg',
    bgGradient: 'linear-gradient(145deg, #1e293b 0%, #0f172a 60%, #020617 100%)',
    bumperColor: '#0f172a',
    protection: '18ft Extreme Certified',
    description: 'Aircraft-grade anodized aluminum camera shield, dual-layer carbon fiber shell, and deployed rotating ring stand.'
  },
  {
    id: 'case-clear-magsafe',
    name: 'ZeroYellow™ Optical Crystal MagSafe',
    vibe: 'magsafe',
    vibeName: 'Clear MagSafe',
    price: 849,
    originalPrice: 1249,
    rating: 4.9,
    reviews: 420,
    badge: '2-Yr Anti-Yellow 🧲',
    badgeColor: 'bg-cyan-100 text-cyan-800 border border-cyan-300 font-bold',
    isMagSafe: true,
    compatibleModels: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16', 'iPhone 15 Pro', 'Galaxy S25 Ultra', 'Pixel 9 Pro'],
    coverPhoto: 'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?auto=format&fit=crop&w=800&q=80',
    bgGradient: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(224,242,254,0.4) 50%, rgba(255,255,255,0.85) 100%)',
    bumperColor: '#94a3b8',
    protection: '12ft Drop Protection',
    description: 'Engineered with German optical-grade Bayer polymer. Guaranteed 100% transparent without amber discoloration for 730 days.'
  },
  {
    id: 'case-matcha-cream',
    name: 'Matcha Oat Milk Swirl',
    vibe: 'cute',
    vibeName: 'Cute & Aesthetic',
    price: 749,
    originalPrice: 1049,
    rating: 4.7,
    reviews: 89,
    badge: 'Pastel Drop 🍵',
    badgeColor: 'bg-emerald-100 text-emerald-800 font-bold',
    isMagSafe: true,
    compatibleModels: ['iPhone 16', 'iPhone 15 Pro', 'Galaxy S25', 'Pixel 9'],
    coverPhoto: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=800&q=80',
    bgGradient: 'radial-gradient(ellipse at top left, #dcfce7 0%, #a7f3d0 50%, #6ee7b7 100%)',
    bumperColor: '#059669',
    protection: '10ft Cushion Guard',
    description: 'Artisanal matcha and oat milk marble pattern with a silky smooth satin touch and responsive button covers.'
  },
  {
    id: 'case-glacial-stand',
    name: 'Frosted Glacial MagStand',
    vibe: 'magsafe',
    vibeName: 'Clear MagSafe',
    price: 999,
    originalPrice: 1399,
    rating: 4.8,
    reviews: 133,
    badge: 'Rotating Kickstand ❄️',
    badgeColor: 'bg-sky-500 text-white font-semibold',
    isMagSafe: true,
    compatibleModels: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'Galaxy S25 Ultra', 'Pixel 9 Pro'],
    coverPhoto: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
    bgGradient: 'linear-gradient(160deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
    bumperColor: '#0284c7',
    protection: '15ft Multi-Angle Defense',
    description: 'Matte translucent back with an aerospace alloy MagSafe ring that doubles as a sturdy portrait or landscape stand.'
  },
  {
    id: 'case-stealth-tactical',
    name: 'Stealth Carbon Tactical Grip',
    vibe: 'armor',
    vibeName: 'Heavy-Duty Armor',
    price: 999,
    originalPrice: 1399,
    rating: 4.8,
    reviews: 112,
    badge: 'Military Spec 🎯',
    badgeColor: 'bg-zinc-800 text-zinc-100 font-bold',
    isMagSafe: true,
    compatibleModels: ['iPhone 16 Pro Max', 'Galaxy S25 Ultra', 'Pixel 9 Pro XL'],
    coverPhoto: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80',
    bgGradient: 'linear-gradient(135deg, #27272a 0%, #18181b 50%, #09090b 100%)',
    bumperColor: '#09090b',
    protection: '16ft Drop-Tested TPU',
    description: 'Tire-tread textured side grips, deep recess camera protection, and military spec drop-resistance.'
  }
];

// --- 2. GLOBAL STATE ---
const state = {
  activeVibe: 'all',
  activeModelFilter: 'all',
  sortBy: 'featured',
  searchQuery: '',
  cart: [],
  wishlist: new Set(),
  activeOfferSlide: 0,
  promoDiscountRate: 0,
  activePromoCode: null
};

// Available Device Models
const AVAILABLE_MODELS = [
  'iPhone 16 Pro Max',
  'iPhone 16 Pro',
  'iPhone 16',
  'iPhone 16 Plus',
  'iPhone 15 Pro Max',
  'iPhone 15 Pro',
  'iPhone 15',
  'Galaxy S25 Ultra',
  'Galaxy S25+',
  'Galaxy S25',
  'Galaxy S24 Ultra',
  'Pixel 9 Pro XL',
  'Pixel 9 Pro',
  'Pixel 9'
];

// --- 3. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  loadSavedState();
  initHeroBanner();
  renderProducts();
  initEventListeners();
  updateMallKioskStatus();
  updateCartBadge();
  initFAQAccordion();
});

// Load cart & wishlist from localStorage (resetting old dollar prices if present)
function loadSavedState() {
  try {
    const savedCart = localStorage.getItem('casepop_cart');
    if (savedCart) {
      const parsed = JSON.parse(savedCart);
      if (parsed.length > 0 && parsed[0].price < 100) {
        state.cart = [];
      } else {
        state.cart = parsed;
      }
    }
    const savedWish = localStorage.getItem('casepop_wishlist');
    if (savedWish) state.wishlist = new Set(JSON.parse(savedWish));
  } catch (e) {
    console.error('Storage access error', e);
  }
}

function saveState() {
  try {
    localStorage.setItem('casepop_cart', JSON.stringify(state.cart));
    localStorage.setItem('casepop_wishlist', JSON.stringify([...state.wishlist]));
  } catch (e) {
    console.error('Storage save error', e);
  }
}

// --- 4. KIOSK VIEW TOGGLE ---
function toggleKioskView(mode) {
  const photoView = document.getElementById('kiosk-view-photo');
  const mapView = document.getElementById('kiosk-view-map');
  const tabPhoto = document.getElementById('kiosk-tab-photo');
  const tabMap = document.getElementById('kiosk-tab-map');

  if (mode === 'photo') {
    if (photoView) photoView.classList.remove('hidden');
    if (mapView) mapView.classList.add('hidden');
    if (tabPhoto) tabPhoto.className = 'px-4 py-1.5 rounded-full text-xs font-bold bg-slate-900 text-white transition-all flex items-center gap-1.5 shadow-sm';
    if (tabMap) tabMap.className = 'px-4 py-1.5 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 transition-all flex items-center gap-1.5';
  } else {
    if (photoView) photoView.classList.add('hidden');
    if (mapView) mapView.classList.remove('hidden');
    if (tabPhoto) tabPhoto.className = 'px-4 py-1.5 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 transition-all flex items-center gap-1.5';
    if (tabMap) tabMap.className = 'px-4 py-1.5 rounded-full text-xs font-bold bg-slate-900 text-white transition-all flex items-center gap-1.5 shadow-sm';
  }
}

// --- 5. HERO BANNER SLIDER ---
const HERO_OFFERS = [
  {
    tag: '⚡ MALL KIOSK SPECIAL',
    headline: 'Buy 2 Cases, Get the 3rd 100% FREE!',
    subhead: 'Mix & match across all trending vibes: Y2K street prints, aesthetic pastels, non-yellowing MagSafe, and 18ft heavy-duty drop armor. Grab yours at Level 2 Grand Galleria!',
    ctaText: 'Claim Mall Deal',
    accentColor: '#FF2E93',
    badge: '3-for-2 Deal Auto-Applies in Cart'
  },
  {
    tag: '🛡️ COMPLIMENTARY SCREEN GUARD',
    headline: 'Free 9H Glass Guard Fitted With Every Case',
    subhead: 'Visit our Level 2 Kiosk counter. Our case pros use precision alignment frames to install a tempered screen guard with zero dust and zero bubbles.',
    ctaText: 'Shop Trending Cases',
    accentColor: '#CCFF00',
    badge: 'Zero Bubbles • Free Installation'
  },
  {
    tag: '🧲 ZERO-YELLOWING GUARANTEE',
    headline: 'Crystal Clear MagSafe for iPhone 16 & Galaxy S25',
    subhead: 'Tested against UV light for 730 days with 0% yellowing. 2X stronger magnetic latching for car mounts, ring stands & MagSafe chargers.',
    ctaText: 'Shop Clear MagSafe',
    accentColor: '#06B6D4',
    badge: '2-Year Free Replacement Warranty'
  }
];

function initHeroBanner() {
  const heroTag = document.getElementById('hero-tag');
  const heroHeadline = document.getElementById('hero-headline');
  const heroSubhead = document.getElementById('hero-subhead');
  const heroCta = document.getElementById('hero-cta');
  const heroOfferBadge = document.getElementById('hero-offer-badge');
  const heroDots = document.getElementById('hero-dots');

  if (!heroHeadline) return;

  function setSlide(index) {
    state.activeOfferSlide = index;
    const offer = HERO_OFFERS[index];
    
    heroTag.textContent = offer.tag;
    heroHeadline.textContent = offer.headline;
    heroSubhead.textContent = offer.subhead;
    heroCta.textContent = offer.ctaText;
    heroOfferBadge.textContent = offer.badge;

    if (heroDots) {
      Array.from(heroDots.children).forEach((dot, i) => {
        if (i === index) {
          dot.className = 'w-8 h-2.5 rounded-full bg-pink-500 transition-all duration-300';
        } else {
          dot.className = 'w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400 transition-all duration-300 cursor-pointer';
        }
      });
    }
  }

  if (heroDots) {
    heroDots.innerHTML = '';
    HERO_OFFERS.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.setAttribute('aria-label', `Go to offer slide ${i + 1}`);
      dot.onclick = () => setSlide(i);
      heroDots.appendChild(dot);
    });
  }

  setSlide(0);

  setInterval(() => {
    const next = (state.activeOfferSlide + 1) % HERO_OFFERS.length;
    setSlide(next);
  }, 6000);

  heroCta.onclick = () => {
    document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
  };
}

// --- 6. REAL-TIME MALL STATUS INDICATOR ---
function updateMallKioskStatus() {
  const statusBadge = document.getElementById('mall-status-badge');
  const kioskTimeIndicator = document.getElementById('kiosk-time-indicator');
  const kioskCountdown = document.getElementById('kiosk-live-countdown');
  if (!statusBadge) return;

  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentTimeDec = hour + minute / 60;

  const isSunday = (day === 0);
  const openTime = isSunday ? 11 : 10;
  const closeTime = isSunday ? 20 : 21.5;

  const isOpen = (currentTimeDec >= openTime && currentTimeDec < closeTime);

  if (isOpen) {
    const closeHoursLeft = Math.floor(closeTime - currentTimeDec);
    const closeMinsLeft = Math.floor(((closeTime - currentTimeDec) % 1) * 60);

    statusBadge.innerHTML = `
      <span class="relative flex h-2.5 w-2.5 mr-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
      </span>
      <span class="font-bold text-emerald-700">MALL KIOSK OPEN NOW</span>
      <span class="hidden sm:inline text-slate-500 text-xs ml-1.5">• Closes ${isSunday ? '8:00 PM' : '9:30 PM'}</span>
    `;

    if (kioskTimeIndicator) {
      kioskTimeIndicator.textContent = `Open Today (${isSunday ? '11:00 AM - 8:00 PM' : '10:00 AM - 9:30 PM'})`;
    }
    if (kioskCountdown) {
      kioskCountdown.textContent = `Walk-ins welcome • Closes in ${closeHoursLeft}h ${closeMinsLeft}m`;
    }
  } else {
    statusBadge.innerHTML = `
      <span class="inline-flex rounded-full h-2.5 w-2.5 bg-amber-500 mr-2"></span>
      <span class="font-bold text-amber-700">OPENS TOMORROW 10 AM</span>
      <span class="hidden sm:inline text-slate-500 text-xs ml-1.5">• Kiosk Express Pickup</span>
    `;
    if (kioskTimeIndicator) {
      kioskTimeIndicator.textContent = 'Closed for the night • Re-opens tomorrow at 10:00 AM';
    }
    if (kioskCountdown) {
      kioskCountdown.textContent = 'Reserve online for instant morning kiosk pickup!';
    }
  }
}

// --- 7. PRODUCT RENDERING ---
function renderProducts() {
  const container = document.getElementById('products-grid');
  const countDisplay = document.getElementById('product-count');
  if (!container) return;

  let filtered = PRODUCTS.filter(item => {
    const matchesVibe = (state.activeVibe === 'all' || item.vibe === state.activeVibe);
    
    let matchesModel = true;
    if (state.activeModelFilter !== 'all') {
      matchesModel = item.compatibleModels.some(m => m.toLowerCase().includes(state.activeModelFilter.toLowerCase()));
    }

    let matchesSearch = true;
    if (state.searchQuery && state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase().trim();
      matchesSearch = item.name.toLowerCase().includes(q) || 
                      item.vibeName.toLowerCase().includes(q) ||
                      item.description.toLowerCase().includes(q);
    }

    return matchesVibe && matchesModel && matchesSearch;
  });

  if (state.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (countDisplay) {
    countDisplay.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} trending cases`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-20 h-20 mx-auto rounded-3xl bg-pink-50 flex items-center justify-center text-4xl mb-4 shadow-sm border border-pink-100">
          🔍
        </div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">No matching cases found</h3>
        <p class="text-slate-500 max-w-md mx-auto mb-6 text-sm">
          We couldn't find any designs matching your selected filters. Try switching vibes or choosing "All Models".
        </p>
        <button onclick="resetFilters()" class="px-5 py-2.5 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-pink-600 transition-colors shadow-md">
          Reset All Filters
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isWished = state.wishlist.has(item.id);
    const savings = item.originalPrice - item.price;
    const percentOff = Math.round((savings / item.originalPrice) * 100);

    return `
      <div class="group relative bg-white rounded-3xl p-5 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-pink-200">
        
        <!-- Top Tag & Wishlist -->
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="text-[11px] font-bold px-2.5 py-1 rounded-full ${item.badgeColor} uppercase tracking-wider shadow-sm">
            ${item.badge}
          </span>
          <button 
            onclick="toggleWishlist('${item.id}')" 
            aria-label="Save to wishlist"
            class="w-8 h-8 rounded-full flex items-center justify-center transition-all ${isWished ? 'bg-pink-50 text-pink-600 scale-110' : 'bg-slate-50 text-slate-400 hover:text-pink-500 hover:bg-pink-50'}">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
        </div>

        <!-- REAL COVER PHOTO DISPLAY -->
        <div class="relative h-72 rounded-2xl overflow-hidden mb-4 bg-slate-50 border border-slate-100 group/img cursor-pointer flex items-center justify-center p-2" onclick="openQuickView('${item.id}')">
          <img 
            src="${item.coverPhoto}" 
            alt="${item.name} Real Cover" 
            loading="lazy" 
            class="w-full h-full object-contain rounded-xl transform group-hover/img:scale-105 transition-transform duration-500 drop-shadow-md"
            onerror="this.onerror=null; this.src='assets/images/case-hologram.jpg'"
          />
          
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none rounded-2xl"></div>

          <div class="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-black text-white tracking-widest uppercase">
            ${item.isMagSafe ? '🧲 MagSafe' : '📱 Slim Grip'}
          </div>

          <!-- Quick View floating pill on card hover -->
          <button 
            type="button" 
            onclick="event.stopPropagation(); openQuickView('${item.id}')"
            class="absolute bottom-3 left-1/2 transform -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold backdrop-blur-md opacity-0 group-hover/img:opacity-100 transition-all duration-200 shadow-lg hover:bg-pink-600 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            <span>Quick View</span>
          </button>
        </div>

        <!-- Product Meta -->
        <div>
          <div class="flex items-center gap-1.5 text-xs text-amber-500 font-bold mb-1.5">
            <span>★ ${item.rating}</span>
            <span class="text-slate-400 font-normal">(${item.reviews})</span>
            <span class="text-slate-300 mx-1">•</span>
            <span class="text-pink-600 font-medium">${item.vibeName}</span>
          </div>

          <h3 class="font-extrabold text-slate-900 text-base leading-snug group-hover:text-pink-600 transition-colors mb-1.5">
            ${item.name}
          </h3>

          <p class="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
            ${item.description}
          </p>

          <!-- Model Compatibility Tags -->
          <div class="flex flex-wrap items-center gap-1.5 mb-3.5">
            <span class="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
              📱 ${item.compatibleModels[0]}
            </span>
            <span class="text-[10px] text-slate-500 font-medium px-2 py-1 rounded bg-slate-50">
              +${item.compatibleModels.length - 1} more
            </span>
          </div>

          <!-- Price & Add Button in INR -->
          <div class="flex items-center justify-between pt-3.5 border-t border-slate-100">
            <div>
              <div class="flex items-baseline gap-1.5">
                <span class="text-xl font-extrabold text-slate-900">${formatINR(item.price)}</span>
                <span class="text-xs text-slate-400 line-through">${formatINR(item.originalPrice)}</span>
              </div>
              <span class="text-[10px] font-bold text-emerald-600 uppercase">Save ${formatINR(savings)} (${percentOff}%)</span>
            </div>

            <button 
              onclick="handleQuickAddToCart('${item.id}')"
              class="px-4 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-pink-600 active:scale-95 transition-all shadow-sm hover:shadow-pink-500/25 flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              <span>Add</span>
            </button>
          </div>
        </div>

      </div>
    `;
  }).join('');
}

// Reset all active filters
function resetFilters() {
  state.activeVibe = 'all';
  state.activeModelFilter = 'all';
  state.searchQuery = '';
  state.sortBy = 'featured';

  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  const modelSelect = document.getElementById('model-filter-select');
  if (modelSelect) modelSelect.value = 'all';
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.value = 'featured';

  document.querySelectorAll('.vibe-tab').forEach(b => {
    b.classList.toggle('active', b.dataset.vibe === 'all');
  });

  renderProducts();
  showToast('Filters reset to show all cases', 'info');
}

function setVibeFilter(vibe) {
  state.activeVibe = vibe;
  document.querySelectorAll('.vibe-tab').forEach(b => {
    b.classList.toggle('active', b.dataset.vibe === vibe);
  });
  renderProducts();
}

function toggleWishlist(productId) {
  if (state.wishlist.has(productId)) {
    state.wishlist.delete(productId);
    showToast('Removed from your favorites', 'info');
  } else {
    state.wishlist.add(productId);
    showToast('Saved to your favorites! ❤️', 'success');
  }
  saveState();
  renderProducts();
  updateWishlistBadge();
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlist-badge');
  if (badge) {
    badge.textContent = state.wishlist.size;
    badge.classList.toggle('hidden', state.wishlist.size === 0);
  }
}

// --- 8. SHOPPING CART LOGIC (INR) ---
function addToCart(product, model) {
  const existing = state.cart.find(item => 
    item.productId === product.id && 
    item.model === model
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      id: 'cart-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      productId: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      model: model || product.compatibleModels[0],
      coverPhoto: product.coverPhoto,
      bgGradient: product.bgGradient,
      bumperColor: product.bumperColor,
      isMagSafe: product.isMagSafe,
      quantity: 1
    });
  }

  saveState();
  updateCartBadge();
  renderCartDrawer();
  showToast(`Added "${product.name}" to bag! 🛍️`, 'success');

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 28,
      spread: 60,
      origin: { y: 0.85, x: 0.9 }
    });
  }
}

function handleQuickAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (product) {
    addToCart(product, product.compatibleModels[0]);
  }
}

function updateQuantity(index, delta) {
  if (!state.cart[index]) return;
  state.cart[index].quantity += delta;
  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
    showToast('Item removed from bag', 'info');
  }
  saveState();
  updateCartBadge();
  renderCartDrawer();
}

function removeFromCart(index) {
  state.cart.splice(index, 1);
  saveState();
  updateCartBadge();
  renderCartDrawer();
  showToast('Item removed from bag', 'info');
}

function updateCartBadge() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cart-badge');
  const cartSubtotalPill = document.getElementById('cart-nav-total');
  
  if (badge) {
    badge.textContent = totalItems;
    badge.classList.toggle('hidden', totalItems === 0);
  }

  const rawSubtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (cartSubtotalPill) {
    cartSubtotalPill.textContent = formatINR(rawSubtotal);
  }
}

function renderCartDrawer() {
  const container = document.getElementById('cart-items-list');
  const subtotalEl = document.getElementById('cart-subtotal');
  const discountEl = document.getElementById('cart-discount');
  const discountRow = document.getElementById('cart-discount-row');
  const totalEl = document.getElementById('cart-total');
  const promoNotice = document.getElementById('cart-promo-banner');

  if (!container) return;

  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="py-20 text-center">
        <div class="w-20 h-20 mx-auto rounded-3xl bg-pink-50 flex items-center justify-center text-4xl mb-4">
          🛍️
        </div>
        <h4 class="text-lg font-bold text-slate-800 mb-1">Your bag is empty</h4>
        <p class="text-sm text-slate-400 max-w-xs mx-auto mb-6">
          Add any 3 cases to automatically trigger our Buy 2 Get 1 Free mall deal!
        </p>
        <button onclick="closeCart(); document.getElementById('products-section').scrollIntoView({behavior:'smooth'})" class="px-6 py-2.5 rounded-full bg-pink-600 text-white font-bold text-sm hover:bg-pink-700 transition-colors shadow-md">
          Explore Trending Cases
        </button>
      </div>
    `;

    if (subtotalEl) subtotalEl.textContent = '₹0';
    if (totalEl) totalEl.textContent = '₹0';
    if (discountRow) discountRow.classList.add('hidden');
    if (promoNotice) promoNotice.classList.add('hidden');
    return;
  }

  let rawSubtotal = 0;
  let itemsFlat = [];

  state.cart.forEach(item => {
    rawSubtotal += item.price * item.quantity;
    for (let i = 0; i < item.quantity; i++) {
      itemsFlat.push(item.price);
    }
  });

  itemsFlat.sort((a, b) => a - b);
  const freeItemsCount = Math.floor(itemsFlat.length / 3);
  let buy2get1Discount = 0;
  for (let i = 0; i < freeItemsCount; i++) {
    buy2get1Discount += itemsFlat[i];
  }

  let promoDiscount = 0;
  if (state.promoDiscountRate > 0) {
    promoDiscount = (rawSubtotal - buy2get1Discount) * state.promoDiscountRate;
  }

  const totalDiscount = buy2get1Discount + promoDiscount;
  const finalTotal = Math.max(0, rawSubtotal - totalDiscount);

  container.innerHTML = state.cart.map((item, index) => {
    return `
      <div class="flex items-center gap-4 py-3.5 border-b border-slate-100 last:border-0">
        <!-- Thumbnail -->
        <div class="w-14 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-slate-200 bg-slate-50 flex items-center justify-center p-1">
          <img src="${item.coverPhoto}" alt="${item.name}" class="w-full h-full object-contain" onerror="this.src='assets/images/case-hologram.jpg'" />
        </div>

        <!-- Info -->
        <div class="flex-1 min-w-0">
          <h4 class="font-bold text-sm text-slate-900 truncate">${item.name}</h4>
          <p class="text-xs text-slate-500 font-medium">Model: <span class="text-slate-800 font-semibold">${item.model}</span></p>
          <div class="flex items-center gap-2 mt-2">
            <span class="font-extrabold text-slate-900 text-sm">${formatINR(item.price * item.quantity)}</span>
            <span class="text-[11px] text-slate-400">(${formatINR(item.price)} ea)</span>
          </div>
        </div>

        <!-- Stepper & Delete -->
        <div class="flex flex-col items-end gap-2">
          <button onclick="removeFromCart(${index})" class="text-slate-400 hover:text-red-500 p-1 text-xs" title="Remove item">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
          <div class="flex items-center border border-slate-200 rounded-lg bg-slate-50">
            <button onclick="updateQuantity(${index}, -1)" class="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-slate-200 rounded-l font-bold">-</button>
            <span class="w-7 text-center text-xs font-bold text-slate-800">${item.quantity}</span>
            <button onclick="updateQuantity(${index}, 1)" class="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-slate-200 rounded-r font-bold">+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (subtotalEl) subtotalEl.textContent = formatINR(rawSubtotal);
  if (totalEl) totalEl.textContent = formatINR(finalTotal);

  if (totalDiscount > 0) {
    if (discountRow) discountRow.classList.remove('hidden');
    if (discountEl) discountEl.textContent = `-${formatINR(totalDiscount)}`;
  } else {
    if (discountRow) discountRow.classList.add('hidden');
  }

  if (promoNotice) {
    if (freeItemsCount > 0) {
      promoNotice.classList.remove('hidden');
      promoNotice.innerHTML = `
        <div class="flex items-center gap-2 text-xs font-bold text-pink-700 bg-pink-50 p-2.5 rounded-xl border border-pink-200">
          <span>🎉</span>
          <span>Buy 2 Get 1 Free Applied! (${formatINR(buy2get1Discount)} saved)</span>
        </div>
      `;
    } else if (totalItems === 2) {
      promoNotice.classList.remove('hidden');
      promoNotice.innerHTML = `
        <div class="flex items-center gap-2 text-xs font-bold text-purple-700 bg-purple-50 p-2.5 rounded-xl border border-purple-200">
          <span>⚡</span>
          <span>Add 1 more case to get it 100% FREE!</span>
        </div>
      `;
    } else {
      promoNotice.classList.add('hidden');
    }
  }
}

function openCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-backdrop');
  renderCartDrawer();
  if (drawer && overlay) {
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    document.body.classList.add('overflow-hidden');
  }
}

function closeCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-backdrop');
  if (drawer && overlay) {
    drawer.classList.add('translate-x-full');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
  }
}

function applyPromoCode(code) {
  const clean = (code || '').trim().toUpperCase();
  if (clean === 'BUY2GET1') {
    showToast('Buy 2 Get 1 Free is already active when 3 cases are in your bag!', 'info');
  } else if (clean === 'MALLPOP15') {
    state.promoDiscountRate = 0.15;
    state.activePromoCode = 'MALLPOP15';
    showToast('Promo code MALLPOP15 applied! (15% OFF)', 'success');
    renderCartDrawer();
  } else if (clean === 'BOBAVIP') {
    state.promoDiscountRate = 0.20;
    state.activePromoCode = 'BOBAVIP';
    showToast('VIP Mall Perk applied! (20% OFF)', 'success');
    renderCartDrawer();
  } else {
    showToast('Invalid promo code. Try MALLPOP15', 'error');
  }
}

function proceedToCheckout(type = 'kiosk-pickup') {
  if (state.cart.length === 0) {
    showToast('Your bag is empty! Add a case first.', 'error');
    return;
  }

  const orderNum = 'CP-' + Math.floor(100000 + Math.random() * 900000);
  closeCart();

  const modal = document.getElementById('checkout-modal');
  const modalOrderNo = document.getElementById('modal-order-number');
  const modalType = document.getElementById('modal-pickup-type');

  if (modalOrderNo) modalOrderNo.textContent = orderNum;
  if (modalType) {
    modalType.textContent = type === 'kiosk-pickup' 
      ? 'Level 2 Kiosk Express Pickup (Ready for walk-in collection)' 
      : 'Standard Local Express Delivery (1-2 Days)';
  }

  if (modal) {
    modal.classList.remove('hidden');
  }

  state.cart = [];
  saveState();
  updateCartBadge();

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 }
    });
  }
}

// --- 9. QUICK VIEW MODAL (INR) ---
function openQuickView(productId) {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;

  const modal = document.getElementById('quick-view-modal');
  const title = document.getElementById('qv-title');
  const desc = document.getElementById('qv-desc');
  const price = document.getElementById('qv-price');
  const origPrice = document.getElementById('qv-orig-price');
  const badge = document.getElementById('qv-badge');
  const realImg = document.getElementById('qv-real-image');
  const modelSelect = document.getElementById('qv-model-select');
  const addBtn = document.getElementById('qv-add-btn');

  if (title) title.textContent = item.name;
  if (desc) desc.textContent = item.description;
  if (price) price.textContent = formatINR(item.price);
  if (origPrice) origPrice.textContent = formatINR(item.originalPrice);
  if (badge) {
    badge.textContent = item.badge;
    badge.className = `text-xs font-bold px-3 py-1 rounded-full ${item.badgeColor} uppercase inline-block`;
  }

  if (realImg) {
    realImg.src = item.coverPhoto;
    realImg.alt = item.name;
  }

  if (modelSelect) {
    modelSelect.innerHTML = item.compatibleModels.map(m => `
      <option value="${m}">${m}</option>
    `).join('');
  }

  if (addBtn) {
    addBtn.onclick = () => {
      const selectedModel = modelSelect ? modelSelect.value : item.compatibleModels[0];
      addToCart(item, selectedModel);
      closeQuickView();
      openCart();
    };
  }

  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// --- 10. INTERACTIVE FAQ ACCORDION ---
function initFAQAccordion() {
  const faqButtons = document.querySelectorAll('.faq-toggle');
  faqButtons.forEach(btn => {
    btn.onclick = () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      faqButtons.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          const otherContent = otherBtn.nextElementSibling;
          const otherIcon = otherBtn.querySelector('.faq-icon');
          if (otherContent) otherContent.classList.add('hidden');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
      });

      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        if (content) content.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        btn.setAttribute('aria-expanded', 'true');
        if (content) content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    };
  });
}

// --- 11. TOAST NOTIFICATION SYSTEM ---
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const typeStyles = {
    success: 'bg-slate-900 text-white border-pink-500/50',
    error: 'bg-red-600 text-white border-red-700',
    info: 'bg-slate-900 text-white border-slate-700'
  };

  const icons = {
    success: '✨',
    error: '⚠️',
    info: '💡'
  };

  toast.className = `toast-enter flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl border text-sm font-semibold pointer-events-auto transition-all ${typeStyles[type] || typeStyles.info}`;
  toast.innerHTML = `
    <span class="text-base">${icons[type] || '✨'}</span>
    <span>${message}</span>
    <button onclick="this.parentElement.remove()" class="ml-2 text-white/60 hover:text-white">&times;</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translate(-50%, -10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- 12. EVENT LISTENERS & FILTER WIDGETS ---
function initEventListeners() {
  document.querySelectorAll('.vibe-tab').forEach(btn => {
    btn.onclick = () => {
      setVibeFilter(btn.dataset.vibe);
    };
  });

  const modelSelect = document.getElementById('model-filter-select');
  if (modelSelect) {
    modelSelect.onchange = (e) => {
      state.activeModelFilter = e.target.value;
      renderProducts();
    };
  }

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.onchange = (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    };
  }

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.oninput = (e) => {
      state.searchQuery = e.target.value;
      renderProducts();
    };
  }

  const cartTrigger = document.getElementById('cart-trigger-btn');
  if (cartTrigger) cartTrigger.onclick = openCart;

  const closeCartBtn = document.getElementById('close-cart-btn');
  if (closeCartBtn) closeCartBtn.onclick = closeCart;

  const cartBackdrop = document.getElementById('cart-backdrop');
  if (cartBackdrop) cartBackdrop.onclick = closeCart;

  const promoBtn = document.getElementById('apply-promo-btn');
  const promoInput = document.getElementById('cart-promo-input');
  if (promoBtn && promoInput) {
    promoBtn.onclick = () => {
      applyPromoCode(promoInput.value);
    };
  }

  const qvClose = document.getElementById('qv-close-btn');
  if (qvClose) qvClose.onclick = closeQuickView;

  const qvBackdrop = document.getElementById('qv-backdrop');
  if (qvBackdrop) qvBackdrop.onclick = closeQuickView;

  const checkoutModalClose = document.getElementById('checkout-modal-close');
  if (checkoutModalClose) {
    checkoutModalClose.onclick = () => {
      document.getElementById('checkout-modal').classList.add('hidden');
    };
  }

  const vipForm = document.getElementById('vip-signup-form');
  if (vipForm) {
    vipForm.onsubmit = (e) => {
      e.preventDefault();
      const email = document.getElementById('vip-email').value;
      if (email) {
        showToast(`🎉 Welcome to CasePop VIP Club! 15% code sent to ${email}`, 'success');
        vipForm.reset();
        if (typeof confetti === 'function') {
          confetti({ particleCount: 50, spread: 70, origin: { y: 0.8 } });
        }
      }
    };
  }

  const copyAddressBtn = document.getElementById('copy-mall-address-btn');
  if (copyAddressBtn) {
    copyAddressBtn.onclick = () => {
      navigator.clipboard.writeText('Grand Galleria Mall, Level 2 Center Court (Kiosk #K-204), 100 Galleria Blvd');
      showToast('Mall Kiosk address copied to clipboard! 📋', 'success');
    };
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeQuickView();
      const chModal = document.getElementById('checkout-modal');
      if (chModal) chModal.classList.add('hidden');
    }
  });
}
