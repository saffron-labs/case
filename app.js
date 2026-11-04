/*
 * Phone Case — kiosk storefront
 *
 * Everything shop-specific lives in SHOP and PRODUCTS below.
 * Swap in the client's real name, mall, hours and WhatsApp number before the pitch.
 */

const SHOP = {
  name: 'Phone Case',
  mall: 'Grand Galleria Mall',
  kiosk: 'Kiosk K-204, Level 2',
  landmark: 'Centre court, beside the glass lift',
  // Digits only with country code, e.g. '919876543210'. Leave empty and the
  // reserve button opens WhatsApp with the order text so you can pick a chat.
  whatsapp: '',
  mapsQuery: 'Grand Galleria Mall',
  // 0 = Sunday. Times are 24h, local.
  hours: [
    { day: 'Sunday', open: '11:00', close: '20:00' },
    { day: 'Monday', open: '10:00', close: '21:30' },
    { day: 'Tuesday', open: '10:00', close: '21:30' },
    { day: 'Wednesday', open: '10:00', close: '21:30' },
    { day: 'Thursday', open: '10:00', close: '21:30' },
    { day: 'Friday', open: '10:00', close: '21:30' },
    { day: 'Saturday', open: '10:00', close: '22:00' },
  ],
};

const STYLES = [
  { id: 'prints', label: 'Prints & art' },
  { id: 'cute', label: 'Cute' },
  { id: 'plain', label: 'Plain colours' },
  { id: 'armour', label: 'Armour' },
];

const PRODUCTS = [
  {
    id: 'blue-dreamer',
    name: 'Blue Dreamer',
    style: 'prints',
    price: 849,
    mrp: 1299,
    tag: 'Bestseller',
    photo: 'assets/images/case-blue-dreamer.jpg',
    alt: 'Clear case with blue ink print and vintage car stamps',
    devices: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16', 'iPhone 15 Pro', 'iPhone 15'],
    description: 'Indigo brush-stroke print with collector stamps and a vintage coupe, on a clear shock-absorbing back.',
    specs: { Material: 'Clear polycarbonate, TPU bumper', Protection: 'Raised camera and screen lip', Magnetic: 'MagSafe compatible' },
  },
  {
    id: 'raven',
    name: 'Stained-Glass Raven',
    style: 'prints',
    price: 899,
    mrp: 1349,
    tag: 'New',
    photo: 'assets/images/case-stained-glass-raven.jpg',
    alt: 'Stained-glass illustrated case on a Galaxy phone',
    devices: ['Galaxy S25 Ultra', 'Galaxy S25', 'Galaxy S24 Ultra', 'Galaxy S24'],
    description: 'Illustrated heroine in a gold stained-glass halo. Glossy, scratch-resistant print with metal camera rings.',
    specs: { Material: 'Tempered glass back, TPU frame', Protection: 'Raised camera rings', Magnetic: 'No' },
  },
  {
    id: 'hologram',
    name: 'Chrome Melt',
    style: 'prints',
    price: 899,
    mrp: 1299,
    photo: 'assets/images/case-hologram.jpg',
    alt: 'Silver holographic case with liquid chrome waves and a MagSafe ring',
    devices: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16', 'iPhone 15 Pro'],
    description: 'Liquid-chrome ripples that shift colour as you tilt the phone. Built-in magnet ring for chargers and car mounts.',
    specs: { Material: 'Electroplated TPU', Protection: 'Air-cushion corners', Magnetic: 'Built-in MagSafe ring' },
  },
  {
    id: 'strawberry',
    name: 'Strawberry Milk',
    style: 'cute',
    price: 699,
    mrp: 999,
    tag: 'Bestseller',
    photo: 'assets/images/case-strawberry.jpg',
    alt: 'Pink silicone case with 3D strawberry charms',
    devices: ['iPhone 16 Pro Max', 'iPhone 16', 'iPhone 15', 'iPhone 14'],
    description: 'Soft pink silicone with raised 3D strawberries and hearts. Velvety inside lining to keep the phone scratch-free.',
    specs: { Material: 'Liquid silicone', Protection: 'Everyday drops', Magnetic: 'No' },
  },
  {
    id: 'neon-lime',
    name: 'Neon Lime Soft-Touch',
    style: 'plain',
    price: 749,
    mrp: 1099,
    photo: 'assets/images/case-neon-lime-touch.jpg',
    alt: 'Bright lime green matte silicone case',
    devices: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16', 'iPhone 15'],
    description: 'Very bright, very light. Matte silicone that grips without collecting lint.',
    specs: { Material: 'Liquid silicone, microfibre lining', Protection: 'Everyday drops', Magnetic: 'MagSafe compatible' },
  },
  {
    id: 'velvet-matte',
    name: 'Velvet Matte',
    style: 'plain',
    price: 699,
    mrp: 999,
    photo: 'assets/images/case-pastel-trio-tpu.jpg',
    alt: 'Three matte cases in black, cream and pink',
    devices: ['Galaxy S25', 'Galaxy S25+', 'Galaxy S24', 'Galaxy A55'],
    description: 'Slim textured matte in black, cream or pink. Pick your colour at the kiosk.',
    specs: { Material: 'Matte TPU', Protection: 'Raised camera bezel', Colours: 'Black, cream, pink' },
  },
  {
    id: 'titan-armour',
    name: 'Titan Armour with Ring',
    style: 'armour',
    price: 1199,
    mrp: 1599,
    tag: 'Toughest',
    photo: 'assets/images/case-armor.jpg',
    alt: 'Black carbon-fibre armour case with a metal ring stand',
    devices: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 15 Pro Max'],
    description: 'Carbon-fibre shell with an aluminium camera guard and a ring that flips out as a stand.',
    specs: { Material: 'Polycarbonate, carbon fibre, aluminium', Protection: 'Military-grade drop rated', Magnetic: 'Ring doubles as magnet mount' },
  },
  {
    id: 'pixel-armour',
    name: 'Dual-Layer Armour for Pixel',
    style: 'armour',
    price: 1099,
    mrp: 1499,
    photo: 'assets/images/case-pixel-magfit-armor.jpg',
    alt: 'Grey dual-layer case for Google Pixel with an orange inner layer',
    devices: ['Pixel 9 Pro XL', 'Pixel 9 Pro', 'Pixel 9'],
    description: 'Grey outer shell over a shock-absorbing inner layer, with a magnet ring added for MagSafe-style chargers.',
    specs: { Material: 'Polycarbonate over TPU', Protection: 'Dual-layer drop protection', Magnetic: 'Built-in magnet ring' },
  },
];

const BAG_KEY = 'phonecase_bag_v2';

const state = {
  style: 'all',
  device: 'all',
  sort: 'featured',
  query: '',
  bag: loadBag(),
};

const $ = (sel) => document.querySelector(sel);
const rupees = (n) => '₹' + Math.round(n).toLocaleString('en-IN');
const productById = (id) => PRODUCTS.find((p) => p.id === id);

/* ---------- Shop details ---------- */

const fillShopDetails = () => {
  document.querySelectorAll('[data-shop]').forEach((el) => {
    const value = SHOP[el.dataset.shop];
    if (value) el.textContent = value;
  });
  $('#year').textContent = new Date().getFullYear();
  document.title = `${SHOP.name} — Cases fitted at the kiosk, ${SHOP.mall}`;

  $('#directions-link').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SHOP.mapsQuery)}`;
  $('#whatsapp-link').href = whatsappUrl(`Hi ${SHOP.name}, I'd like to ask about a case.`);
};

const whatsappUrl = (text) => `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(text)}`;

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

const formatTime = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number);
  const suffix = h >= 12 ? 'pm' : 'am';
  const hour = h % 12 || 12;
  return m ? `${hour}:${String(m).padStart(2, '0')} ${suffix}` : `${hour} ${suffix}`;
};

const renderHours = () => {
  const now = new Date();
  const today = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const todayHours = SHOP.hours[today];
  const isOpen = minutes >= toMinutes(todayHours.open) && minutes < toMinutes(todayHours.close);

  // Monday first, the way people read a week.
  const order = [1, 2, 3, 4, 5, 6, 0];
  $('#hours-body').innerHTML = order.map((i) => {
    const h = SHOP.hours[i];
    return `<tr class="${i === today ? 'is-today' : ''}"><th scope="row">${h.day}</th><td>${formatTime(h.open)} – ${formatTime(h.close)}</td></tr>`;
  }).join('');

  const status = $('#open-status');
  status.classList.toggle('is-open', isOpen);
  if (isOpen) {
    status.textContent = `Open till ${formatTime(todayHours.close)}`;
  } else if (minutes < toMinutes(todayHours.open)) {
    status.textContent = `Opens ${formatTime(todayHours.open)}`;
  } else {
    status.textContent = `Opens ${formatTime(SHOP.hours[(today + 1) % 7].open)} tomorrow`;
  }
};

/* ---------- Catalogue ---------- */

const renderFilters = () => {
  const counts = PRODUCTS.reduce((acc, p) => ({ ...acc, [p.style]: (acc[p.style] || 0) + 1 }), {});
  const chips = [{ id: 'all', label: 'All cases', n: PRODUCTS.length }, ...STYLES.map((s) => ({ ...s, n: counts[s.id] || 0 }))];
  $('#chips').innerHTML = chips.map((c) => `
    <button class="chip" type="button" data-style="${c.id}" aria-pressed="${c.id === state.style}">
      ${c.label}<span class="chip__n">${c.n}</span>
    </button>`).join('');

  const devices = [...new Set(PRODUCTS.flatMap((p) => p.devices))].sort();
  $('#device-filter').insertAdjacentHTML('beforeend', devices.map((d) => `<option value="${d}">${d}</option>`).join(''));
};

const visibleProducts = () => {
  const q = state.query.trim().toLowerCase();
  const list = PRODUCTS.filter((p) =>
    (state.style === 'all' || p.style === state.style) &&
    (state.device === 'all' || p.devices.includes(state.device)) &&
    (!q || `${p.name} ${p.description} ${p.devices.join(' ')}`.toLowerCase().includes(q))
  );
  if (state.sort === 'price-low') return [...list].sort((a, b) => a.price - b.price);
  if (state.sort === 'price-high') return [...list].sort((a, b) => b.price - a.price);
  return list;
};

const styleLabel = (id) => STYLES.find((s) => s.id === id)?.label ?? '';

const deviceSummary = (p) => {
  const brand = p.devices[0].split(' ')[0];
  return `${brand}, ${p.devices.length} models`;
};

const renderGrid = () => {
  const list = visibleProducts();
  $('#shop-count').textContent = `${list.length} of ${PRODUCTS.length} cases`;

  if (!list.length) {
    $('#grid').innerHTML = `
      <li class="empty">
        <h3>No cases match those filters</h3>
        <p>Try another phone or style. We also stock more designs at the kiosk than we show here.</p>
        <button class="btn btn--ghost" type="button" data-action="clear-filters">Clear filters</button>
      </li>`;
    return;
  }

  $('#grid').innerHTML = list.map((p) => {
    const off = Math.round((1 - p.price / p.mrp) * 100);
    return `
      <li class="card">
        <button class="card__open" type="button" data-open="${p.id}" aria-label="View ${p.name}">
          <img src="${p.photo}" alt="${p.alt}" loading="lazy" width="440" height="550">
          <span class="sticker" aria-hidden="true">${rupees(p.price)}</span>
          ${p.tag ? `<span class="card__tag">${p.tag}</span>` : ''}
        </button>
        <div class="card__body">
          <h3 class="card__name">${p.name}</h3>
          <p class="card__meta">${styleLabel(p.style)}, ${deviceSummary(p)}</p>
          <div class="card__row">
            <p class="card__mrp"><s>${rupees(p.mrp)}</s><span>${off}% off</span></p>
            <button class="card__add" type="button" data-open="${p.id}">Add to bag</button>
          </div>
        </div>
      </li>`;
  }).join('');
};

const setStyle = (style) => {
  state.style = style;
  document.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.style === style)));
  renderGrid();
};

const clearFilters = () => {
  state.device = 'all';
  state.query = '';
  state.sort = 'featured';
  $('#device-filter').value = 'all';
  $('#search').value = '';
  $('#sort').value = 'featured';
  setStyle('all');
};

/* ---------- Product detail ---------- */

let detailProduct = null;

const openDetail = (id) => {
  const p = productById(id);
  if (!p) return;
  detailProduct = p;

  $('#detail-img').src = p.photo;
  $('#detail-img').alt = p.alt;
  $('#detail-style').textContent = styleLabel(p.style);
  $('#detail-title').textContent = p.name;
  $('#detail-price').textContent = rupees(p.price);
  $('#detail-mrp').textContent = rupees(p.mrp);
  $('#detail-desc').textContent = p.description;
  $('#detail-specs').innerHTML = Object.entries(p.specs).map(([k, v]) => `<li><span>${k}</span><span>${v}</span></li>`).join('');

  // Preselect the phone the shopper filtered by, if this case fits it.
  const preferred = p.devices.includes(state.device) ? state.device : p.devices[0];
  $('#detail-device').innerHTML = p.devices.map((d) => `<option ${d === preferred ? 'selected' : ''}>${d}</option>`).join('');

  openDialog($('#detail'));
};

/* ---------- Bag ---------- */

function loadBag() {
  try {
    const saved = JSON.parse(localStorage.getItem(BAG_KEY) || '[]');
    return saved.filter((line) => productById(line.id));
  } catch {
    return [];
  }
}

const saveBag = () => {
  try { localStorage.setItem(BAG_KEY, JSON.stringify(state.bag)); } catch { /* private mode: bag lives for this visit only */ }
};

const addToBag = (id, device) => {
  const line = state.bag.find((l) => l.id === id && l.device === device);
  if (line) line.qty += 1;
  else state.bag.push({ id, device, qty: 1 });
  saveBag();
  renderBag();
  showToast(`Added ${productById(id).name} for ${device}`);
};

const changeQty = (index, delta) => {
  const line = state.bag[index];
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) state.bag.splice(index, 1);
  saveBag();
  renderBag();
};

// In every group of three, the cheapest case is free.
const bagTotals = () => {
  const units = state.bag.flatMap((l) => Array(l.qty).fill(productById(l.id).price)).sort((a, b) => a - b);
  const subtotal = units.reduce((s, n) => s + n, 0);
  const freeCount = Math.floor(units.length / 3);
  const saving = units.slice(0, freeCount).reduce((s, n) => s + n, 0);
  return { count: units.length, subtotal, saving, total: subtotal - saving };
};

const renderProgress = (count, saving) => {
  if (!count) return '';
  const inGroup = count % 3;
  const left = 3 - inGroup;
  const message = inGroup === 0
    ? `Cheapest case free. You're saving ${rupees(saving)}.`
    : `Add ${left} more ${left === 1 ? 'case' : 'cases'} and the cheapest one is free.`;
  const filled = inGroup === 0 ? 3 : inGroup;
  const segments = [0, 1, 2].map((i) => {
    const cls = i < filled ? (inGroup === 0 && i === 2 ? 'is-free' : 'is-on') : '';
    return `<span class="${cls}"></span>`;
  }).join('');
  return `<p>${message}</p><div class="meter" aria-hidden="true">${segments}</div>`;
};

const renderBag = () => {
  const { count, subtotal, saving, total } = bagTotals();

  const badge = $('#bag-count');
  badge.textContent = count;
  badge.classList.toggle('has-items', count > 0);
  $('#bag-btn').setAttribute('aria-label', `Open bag, ${count} ${count === 1 ? 'case' : 'cases'}`);

  $('#bag-progress').innerHTML = renderProgress(count, saving);
  $('#bag-foot').hidden = count === 0;

  if (!count) {
    $('#bag-items').innerHTML = `
      <li class="bag__empty">
        <h3>Your bag is empty</h3>
        <p>Add any three cases and the cheapest one is free.</p>
        <button class="btn btn--primary" type="button" data-action="browse">Browse cases</button>
      </li>`;
    return;
  }

  $('#bag-items').innerHTML = state.bag.map((line, i) => {
    const p = productById(line.id);
    return `
      <li class="line">
        <img src="${p.photo}" alt="">
        <div>
          <p class="line__name">${p.name}</p>
          <p class="line__meta">${line.device}</p>
          <p class="line__price">${rupees(p.price * line.qty)}</p>
        </div>
        <div class="stepper">
          <button type="button" data-qty="${i}" data-delta="-1" aria-label="${line.qty === 1 ? 'Remove' : 'One less'} ${p.name}">−</button>
          <output aria-label="Quantity">${line.qty}</output>
          <button type="button" data-qty="${i}" data-delta="1" aria-label="One more ${p.name}">+</button>
        </div>
      </li>`;
  }).join('');

  $('#bag-subtotal').textContent = rupees(subtotal);
  $('#bag-saving-row').hidden = saving === 0;
  $('#bag-saving').textContent = `−${rupees(saving)}`;
  $('#bag-total').textContent = rupees(total);
};

const reserveOnWhatsApp = () => {
  const { saving, total } = bagTotals();
  const lines = state.bag.map((l) => {
    const p = productById(l.id);
    return `• ${l.qty} × ${p.name} (${l.device}) — ${rupees(p.price * l.qty)}`;
  });
  const text = [
    `Hi ${SHOP.name}, please keep these aside for me:`,
    ...lines,
    saving ? `Buy 3 pay for 2: −${rupees(saving)}` : '',
    `Total: ${rupees(total)}`,
    '',
    'I will collect from the kiosk and pay there.',
  ].filter((l, i, arr) => l !== '' || arr[i - 1] !== '').join('\n');
  window.open(whatsappUrl(text), '_blank', 'noopener');
};

/* ---------- Dialogs & toast ---------- */

const openDialog = (dialog) => {
  if (dialog.open) return;
  dialog.showModal();
  document.body.classList.add('is-locked');
};

const closeDialog = (dialog) => {
  if (dialog.open) dialog.close();
};

let toastTimer;
const showToast = (message) => {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('is-on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-on'), 2600);
};

/* ---------- Events ---------- */

const bindEvents = () => {
  $('#chips').addEventListener('click', (e) => {
    const chip = e.target.closest('[data-style]');
    if (chip) setStyle(chip.dataset.style);
  });
  $('#device-filter').addEventListener('change', (e) => { state.device = e.target.value; renderGrid(); });
  $('#sort').addEventListener('change', (e) => { state.sort = e.target.value; renderGrid(); });
  $('#search').addEventListener('input', (e) => { state.query = e.target.value; renderGrid(); });

  $('#grid').addEventListener('click', (e) => {
    const open = e.target.closest('[data-open]');
    if (open) openDetail(open.dataset.open);
    if (e.target.closest('[data-action="clear-filters"]')) clearFilters();
  });

  $('#detail-add').addEventListener('click', () => {
    if (!detailProduct) return;
    addToBag(detailProduct.id, $('#detail-device').value);
    closeDialog($('#detail'));
  });

  $('#bag-btn').addEventListener('click', () => { renderBag(); openDialog($('#bag')); });
  $('#bag-items').addEventListener('click', (e) => {
    const step = e.target.closest('[data-qty]');
    if (step) changeQty(Number(step.dataset.qty), Number(step.dataset.delta));
    if (e.target.closest('[data-action="browse"]')) {
      closeDialog($('#bag'));
      $('#shop').scrollIntoView();
    }
  });
  $('#reserve-btn').addEventListener('click', reserveOnWhatsApp);

  document.querySelectorAll('dialog').forEach((dialog) => {
    dialog.addEventListener('click', (e) => {
      // A click on the dialog element itself is a click on the backdrop.
      if (e.target === dialog || e.target.closest('[data-close]')) closeDialog(dialog);
    });
    dialog.addEventListener('close', () => {
      if (!document.querySelector('dialog[open]')) document.body.classList.remove('is-locked');
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  fillShopDetails();
  renderHours();
  renderFilters();
  renderGrid();
  renderBag();
  bindEvents();
  setInterval(renderHours, 60_000);
});
