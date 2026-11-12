(() => {
  const root = document.querySelector('#cart-app');
  if (!root) return;
  const api = window.LEXMORACart;
  const readCustomer = () => { try { return JSON.parse(localStorage.getItem('LEXMORA_customer') || 'null'); } catch { return null; } };
  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[char]));
  const total = (items) => items.reduce((sum, item) => sum + (Number(item.price) || 0) * (item.status === 'rent' ? Math.max(1, Number(item.days) || 1) : 1), 0);
  const updateDays = (id, days) => {
    const items = api.read();
    const item = items.find((entry) => entry.id === id);
    if (!item) return;
    item.days = Math.min(90, Math.max(1, Number(days) || 1));
    api.write(items); render();
  };
  function render() {
    const items = api.read();
    if (!items.length) {
      root.innerHTML = `<div class="cart-empty-state"><span class="cart-empty-icon">▣</span><p class="portal-kicker">LEXMORA / YOUR CART</p><h1>سلتك بانتظار اختيارك.</h1><p>أضف سيارة للبيع أو اختر سيارة للإيجار، وستظهر تفاصيلها هنا.</p><a class="cart-primary-action" href="index.html#cars">استكشف السيارات ↗</a></div>`;
      return;
    }
    const subTotal = total(items);
    root.innerHTML = `
      <div class="cart-page-heading"><div><p class="portal-kicker">LEXMORA / YOUR CART</p><h1 class="portal-title">سلة <em>اختياراتك.</em></h1><p class="portal-sub">راجع طلبات الشراء والإيجار قبل إرسال الطلب التجريبي.</p></div><a class="cart-back-link" href="index.html#cars">متابعة استكشاف السيارات ←</a></div>
      <div class="cart-layout"><section class="cart-items-panel"><div class="cart-section-heading"><div><span>01 / SELECTED VEHICLES</span><h2>السيارات المختارة <small>${items.length}</small></h2></div><button type="button" class="cart-clear-button" id="cart-clear">إفراغ السلة</button></div>
      ${items.map((item) => `<article class="cart-item" data-item-id="${escapeHTML(item.id)}"><div class="cart-item-image">${item.image ? `<img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.car)}">` : '<span>LEXMORA</span>'}</div><div class="cart-item-info"><div class="cart-item-tags"><span class="${item.status === 'rent' ? 'rent' : 'sale'}">${item.status === 'rent' ? 'إيجار' : 'شراء'}</span><small>${escapeHTML(item.year)}</small></div><h3>${escapeHTML(item.car)}</h3><p>${item.status === 'rent' ? `${api.money(item.price)} / اليوم` : api.money(item.price)}</p>${item.status === 'rent' ? `<label class="rental-days">مدة الإيجار <span><input type="number" min="1" max="90" value="${Math.max(1, Number(item.days) || 1)}" data-rent-days="${escapeHTML(item.id)}"> يوم</span></label>` : '<small class="cart-item-note">طلب شراء — السعر المعروض تجريبي</small>'}</div><div class="cart-item-end"><strong>${api.money((Number(item.price) || 0) * (item.status === 'rent' ? Math.max(1, Number(item.days) || 1) : 1))}</strong><button type="button" data-remove-item="${escapeHTML(item.id)}" aria-label="إزالة السيارة">إزالة ×</button></div></article>`).join('')}
      </section><aside class="cart-summary"><span class="cart-summary-kicker">02 / ORDER SUMMARY</span><h2>ملخص الطلب</h2><div class="cart-summary-line"><span>عدد السيارات</span><strong>${items.length}</strong></div><div class="cart-summary-line"><span>شراء</span><strong>${items.filter((x) => x.status === 'sale').length}</strong></div><div class="cart-summary-line"><span>إيجار</span><strong>${items.filter((x) => x.status === 'rent').length}</strong></div><div class="cart-summary-total"><span>الإجمالي التقديري</span><strong>${api.money(subTotal)}</strong></div><p class="cart-demo-note">لا يتم تحصيل أي مبلغ. إرسال الطلب ينشئ طلباً تجريبياً في مساحة العميل فقط.</p><button class="cart-checkout-button" id="cart-checkout" type="button">تأكيد الطلب التجريبي <span>↗</span></button><a class="cart-continue-link" href="index.html#cars">العودة إلى المعرض</a></aside></div>`;
  }
  root.addEventListener('change', (event) => { const input = event.target.closest('[data-rent-days]'); if (input) updateDays(input.dataset.rentDays, input.value); });
  root.addEventListener('click', (event) => {
    const remove = event.target.closest('[data-remove-item]');
    if (remove) { api.write(api.read().filter((item) => item.id !== remove.dataset.removeItem)); render(); }
    if (event.target.closest('#cart-clear')) { api.write([]); render(); }
    if (event.target.closest('#cart-checkout')) checkout();
  });
  function checkout() {
    const items = api.read();
    if (!items.length) return;
    const customer = readCustomer();
    if (!customer?.email) {
      sessionStorage.setItem('LEXMORA_after_login', 'cart');
      location.href = 'login.html?next=cart';
      return;
    }
    const now = new Date().toISOString().slice(0, 10);
    const orders = JSON.parse(localStorage.getItem('LEXMORA_orders') || '[]');
    items.forEach((item) => orders.push({
      id: `VLR-${Date.now().toString().slice(-7)}-${Math.random().toString(36).slice(2,5).toUpperCase()}`,
      email: customer.email,
      car: item.car,
      date: now,
      status: item.status === 'rent' ? 'طلب حجز تجريبي' : 'طلب شراء تجريبي',
      type: item.status,
      amount: (Number(item.price) || 0) * (item.status === 'rent' ? Math.max(1, Number(item.days) || 1) : 1),
      days: item.status === 'rent' ? Math.max(1, Number(item.days) || 1) : null,
      image: item.image
    }));
    localStorage.setItem('LEXMORA_orders', JSON.stringify(orders));
    const payments = JSON.parse(localStorage.getItem('LEXMORA_payments') || '[]');
    payments.push({ email: customer.email, date: now, amount: total(items), method: 'غير مدفوع — نموذج تجريبي', status: 'بانتظار الدفع' });
    localStorage.setItem('LEXMORA_payments', JSON.stringify(payments));
    api.write([]);
    root.innerHTML = `<div class="cart-success-state"><span>✓</span><p class="portal-kicker">LEXMORA / REQUEST CREATED</p><h1>وصل طلبك التجريبي.</h1><p>تم حفظ طلباتك محلياً في مساحة العميل. لا يوجد دفع إلكتروني أو حجز فعلي في هذا القالب.</p><a class="cart-primary-action" href="orders.html">متابعة طلباتي ↗</a><a class="cart-continue-link" href="index.html">العودة للرئيسية</a></div>`;
  }
  render();
})();
