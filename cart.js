/* LEXMORA demo commerce layer — frontend only, data stored in this browser. */
(() => {
  const CART_KEY = 'LEXMORA_cart';
  const read = () => {
    try { const value = JSON.parse(localStorage.getItem(CART_KEY) || '[]'); return Array.isArray(value) ? value : []; }
    catch { return []; }
  };
  const write = (items) => {
    try { localStorage.setItem(CART_KEY, JSON.stringify(items)); }
    catch { window.alert('تعذر حفظ السلة في هذا المتصفح.'); }
    updateCount();
    window.dispatchEvent(new CustomEvent('LEXMORA:cartchange', { detail: { items } }));
  };
  const money = (value) => `${Number(value || 0).toLocaleString('en-US')} ₪`;
  const currentEmail = () => {
    try { return JSON.parse(localStorage.getItem('LEXMORA_customer') || 'null')?.email || 'guest'; }
    catch { return 'guest'; }
  };
  const snapshot = (card) => {
    const status = card.dataset.status === 'rent' ? 'rent' : 'sale';
    const rawTitle = card.querySelector('h3')?.textContent.trim() || 'سيارة';
    const make = card.querySelector('.car-make')?.textContent.trim() || card.dataset.brand || '';
    const image = card.querySelector('img')?.getAttribute('src') || '';
    return {
      id: card.dataset.carId,
      make,
      title: rawTitle,
      car: `${make} ${rawTitle}`.trim(),
      year: Number(card.dataset.year || new Date().getFullYear()),
      status,
      price: Number(card.dataset.price || 0),
      priceLabel: card.querySelector('.car-price strong')?.textContent.trim() || '',
      image,
      days: 1,
      email: currentEmail(),
      addedAt: new Date().toISOString()
    };
  };
  const add = (item) => {
    if (!item?.id) return;
    const items = read();
    const index = items.findIndex((entry) => entry.id === item.id && entry.status === item.status);
    if (index >= 0) items[index] = { ...items[index], ...item, days: Math.max(1, Number(items[index].days || 1)) };
    else items.push(item);
    write(items);
    toast(item.status === 'rent' ? 'أُضيف طلب الإيجار إلى السلة' : 'أُضيفت السيارة إلى سلة الشراء');
  };
  const toast = (message) => {
    let node = document.querySelector('.commerce-toast');
    if (!node) { node = document.createElement('div'); node.className = 'commerce-toast'; node.setAttribute('role', 'status'); document.body.appendChild(node); }
    node.textContent = message;
    node.classList.add('is-visible');
    clearTimeout(node._timer);
    node._timer = setTimeout(() => node.classList.remove('is-visible'), 2600);
  };
  function updateCount() {
    const count = read().length;
    document.querySelectorAll('[data-cart-count]').forEach((node) => { node.textContent = String(count); node.hidden = count === 0; });
  }
  function addHeaderLink() {
    const actions = document.querySelector('.header-actions');
    if (!actions || actions.querySelector('[data-cart-link]')) return;
    const link = document.createElement('a');
    link.className = 'header-cta cart-header-link';
    link.href = 'cart.html';
    link.dataset.cartLink = 'true';
    link.innerHTML = '<span class="cart-header-icon" aria-hidden="true">▣</span><span>السلة</span><b data-cart-count hidden>0</b>';
    const account = actions.querySelector('.header-cta[href="login.html"], [data-account]');
    if (account) actions.insertBefore(link, account);
    else actions.appendChild(link);
  }
  function injectCardActions() {
    document.querySelectorAll('.car-card').forEach((card) => {
      const bottom = card.querySelector('.car-card-bottom');
      if (!bottom || bottom.querySelector('[data-cart-add]')) return;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'car-cart-button';
      button.dataset.cartAdd = card.dataset.carId;
      button.textContent = card.dataset.status === 'rent' ? 'احجز الإيجار' : 'أضف للسلة';
      bottom.appendChild(button);
    });
  }
  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-cart-add]');
    if (!button) return;
    const card = button.closest('.car-card') || [...document.querySelectorAll('.car-card')].find((node) => node.dataset.carId === (button.dataset.cartAdd || ''));
    if (card) add(snapshot(card));
  });
  document.addEventListener('DOMContentLoaded', () => { addHeaderLink(); injectCardActions(); updateCount(); });
  if (document.readyState !== 'loading') { addHeaderLink(); injectCardActions(); updateCount(); }
  window.LEXMORACart = { read, write, add, snapshot, updateCount, money, currentEmail };
})();
