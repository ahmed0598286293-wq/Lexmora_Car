// ------------------------------------------------------------
// LEXMORA preferences: Arabic / English, RTL / LTR, light / dark
// ------------------------------------------------------------
const translations = {
  'LIVE VEHICLE CANVAS': 'LIVE VEHICLE CANVAS',
  'إعادة ضبط التخصيص': 'Reset configuration',
  'حفظ إعداد السيارة': 'Save vehicle setup',
  'الشركة المصنعة': 'Manufacturer',
  'الموديل': 'Model',
  'الجنوط': 'Wheels',
  'التطعيمات': 'Trim',
  'لون الهيكل': 'Body color',
  'صورة سيارتي': 'My vehicle photo',
  'نسخ الإعداد': 'Copy setup',
  'معاينة Canvas مبنية على صور سيارات فعلية. تغيير اللون والجنوط معالجة بصرية؛ دوران 360° حقيقي يتطلب ملف موديل ثلاثي الأبعاد GLB مستقل.': 'Canvas preview uses real vehicle photos. Paint and wheel changes are visual edits; true 360° rotation requires a separate GLB 3D model.',
  'M5 Sedan · 2026': 'M5 Sedan · 2026',
  'C 200 Avantgarde · 2020': 'C 200 Avantgarde · 2020',
  'Sportage EX · 2023': 'Sportage EX · 2023',
  'Corolla XLI · 2022': 'Corolla XLI · 2022',
  'A6 S line · 2018': 'A6 S line · 2018',
  'Tucson · 2024': 'Tucson · 2024',
  'اختر سيارة لبدء التخصيص': 'Select a vehicle to start configuring',
  'الرئيسية': 'Home',
  'سيارات للبيع': 'Cars for sale',
  'سيارات للإيجار': 'Cars for rent',
  'معايير LEXMORA': 'The LEXMORA standard',
  'تفاصيل تصنع الفرق': 'Details make the difference',
  'تجربة أذكى.': 'A smarter experience.',
  'اختيار أوضح.': 'A clearer choice.',
  'كل تفصيلة في LEXMORA مصممة لتجعل استكشاف السيارة أسهل وأكثر وضوحاً.': 'Every LEXMORA detail is designed to make vehicle discovery simpler and clearer.',
  'تفاصيل قبل القرار': 'Details before decisions',
  'معلومات أساسية ظاهرة، ومواصفات منظمة تساعدك على تكوين صورة أوضح عن كل سيارة.': 'Essential information and organized specifications help you build a clearer picture of every vehicle.',
  'استكشاف تفاعلي': 'Interactive discovery',
  'تصفّح السيارات، جرّب الألوان في المشهد ثلاثي الأبعاد، وقارن الخيارات جنباً إلى جنب.': 'Explore vehicles, try colors in the 3D scene and compare your options side by side.',
  'بيع أو إيجار بوضوح': 'Sale or rental, clearly presented',
  'تجربة موحدة تساعدك على الوصول إلى خيارات التملك أو الاستخدام لفترة محددة.': 'One streamlined experience for finding a vehicle to own or use for a defined period.',
  'إزالة من المفضلة': 'Remove from favorites',
  'إضافة إلى المفضلة': 'Add to favorites',
  'اختر سيارة أخرى لإجراء المقارنة': 'Choose one more vehicle to compare',
  'قارن الآن': 'Compare now',
  'مسح الاختيار': 'Clear selection',
  'أضف للمقارنة': 'Add to compare',
  'إزالة من المقارنة': 'Remove from compare',
  'يمكنك مقارنة 3 سيارات كحد أقصى': 'You can compare up to 3 vehicles',
  'مقارنة السيارات': 'Compare vehicles',
  'السنة': 'Year',
  'السعر': 'Price',
  'الممشى': 'Mileage',
  'ناقل الحركة': 'Transmission',
  'الوقود': 'Fuel',
  'إغلاق': 'Close',
  'تجاوز إلى المحتوى': 'Skip to content',
  'أمامي': 'Front',
  'جانبي': 'Side',
  'السيارة': 'Vehicle',
  'نوع الإعلان': 'Listing type',
  'السنة': 'Year',
  'السعر': 'Price',
  'الممشى': 'Mileage',
  'ناقل الحركة': 'Transmission',
  'الوقود': 'Fuel',
  'مفضلة': 'Saved to favorites',
  'كيف نعمل؟': 'How it works',
  'معرضك للسيارات': 'Your automotive gallery',
  'اعرض سيارتك': 'List your car',
  'مشوارك يبدأ': 'Your journey starts',
  'بـ': 'with a',
  'اختيار مختلف.': 'different choice.',
  'اكتشف مجموعة منتقاة من السيارات المستعملة للبيع وخيارات الإيجار، في تجربة تجمع التفاصيل الواضحة مع استكشاف ثلاثي الأبعاد.': 'Explore a curated collection of pre-owned cars for sale and flexible rental options, with clear details and an interactive 3D experience.',
  'اكتشف المجموعة': 'Explore collection',
  'أضف سيارتك': 'Add your car',
  'بيع وشراء': 'Buy & sell',
  'إيجار مرن': 'Flexible rental',
  'استكشاف تفاعلي': 'Interactive explore',
  'إيقاف الدوران': 'Pause rotation',
  'اسحب لاستكشاف السيارة': 'Drag to explore the car',
  'تجربة الألوان': 'Color studio',
  'اختر لون السيارة': 'Choose a car color',
  'اكتشف السيارات': 'Explore cars',
  'تشكيلة المعرض': 'The collection',
  'بيانات تجريبية قابلة للتعديل': 'Sample data · fully editable',
  'المجموعة': 'The collection',
  'المتاحة الآن.': 'available now.',
  'سواء كنت تبحث عن سيارة تملكها أو تحتاجها لفترة محددة، ستجد خياراتك هنا.': 'Whether you are looking to own a car or need one for a while, find your next drive here.',
  'سيارات معروضة': 'Vehicles listed',
  'كل السيارات': 'All vehicles',
  'للبيع': 'For sale',
  'للإيجار': 'For rent',
  'الشركة': 'Make',
  'كل الشركات': 'All makes',
  'ترتيب حسب': 'Sort by',
  'المميزة أولاً': 'Featured first',
  'السعر: الأقل أولاً': 'Price: low to high',
  'السعر: الأعلى أولاً': 'Price: high to low',
  'الأحدث موديلًا': 'Newest model year',
  'إعادة ضبط': 'Reset filters',
  '◷ 58,000 كم': '◷ 58,000 km',
  '◷ 21,000 كم': '◷ 21,000 km',
  '◷ 74,000 كم': '◷ 74,000 km',
  '◷ 32,000 كم': '◷ 32,000 km',
  '◷ 86,000 كم': '◷ 86,000 km',
  '◷ 9,000 كم': '◷ 9,000 km',
  '▣ أوتوماتيك': '▣ Automatic',
  '⛽ بنزين': '⛽ Petrol',
  '⛽ هايبرد': '⛽ Hybrid',
  'سعر البيع': 'Sale price',
  'سعر الإيجار اليومي': 'Daily rental rate',
  '/ يوم': '/ day',
  'التفاصيل': 'View details',
  'لم نعثر على سيارات مطابقة': 'No matching vehicles found',
  'جرّب تغيير كلمات البحث أو خيارات التصفية.': 'Try changing your search or filter options.',
  'عرض كل السيارات': 'Show all vehicles',
  'كل الأسعار والمواصفات في هذه النسخة تجريبية.': 'All prices and specifications in this edition are sample data.',
  'كيف يعمل المعرض': 'How the gallery works',
  'من البحث إلى': 'From discovery to',
  'اختيارك بثقة.': 'your confident choice.',
  'تصفّح الإعلانات، افتح تفاصيل السيارة، ثم تواصل مع المعرض لإكمال البيع أو الإيجار.': 'Browse listings, open a vehicle profile, then contact the gallery to continue with a purchase or rental.',
  'ابحث واكتشف': 'Discover',
  'استخدم البحث والفلاتر للوصول إلى السيارة التي تناسب احتياجك.': 'Use search and filters to find the vehicle that fits your needs.',
  'راجع التفاصيل': 'Review the details',
  'اطّلع على الموديل والسنة والسعر والمواصفات قبل اتخاذ القرار.': 'Compare the model, year, price and specifications before making a decision.',
  'تواصل وأكمل طلبك': 'Connect and move forward',
  'اطلب معلومات إضافية وحدد موعد المعاينة أو مدة الإيجار.': 'Request more information and arrange a viewing or rental period.',
  'لأصحاب السيارات': 'For car owners',
  'سيارتك تستحق': 'Your car deserves',
  'الظهور الأفضل.': 'the right spotlight.',
  'هل ترغب في بيع سيارتك أو عرضها للإيجار؟ جهّز بياناتها وتواصل مع إدارة المعرض لإضافتها.': 'Would you like to sell your car or offer it for rent? Prepare its details and contact the gallery team to list it.',
  'طلب إضافة سيارة': 'Vehicle listing request',
  'اسمك': 'Your name',
  'رقم التواصل': 'Phone number',
  'نوع الطلب': 'Listing type',
  'بيع سيارة': 'Sell a car',
  'تأجير سيارة': 'Rent a car',
  'نوع السيارة': 'Vehicle',
  'إرسال طلب الإضافة': 'Submit listing request',
  'النموذج في هذه النسخة تجريبي ولا يرسل البيانات إلى خادم.': 'This is a demo form and does not send data to a server.',
  'العودة للأعلى ↑': 'Back to top ↑',
  'نسخ رسالة الاستفسار': 'Copy inquiry message',
  'بيانات السيارة المعروضة تجريبية ويمكن استبدالها ببيانات إعلاناتك الفعلية.': 'Vehicle details are sample content and can be replaced with your actual listings.',
  'أبيض لؤلؤي بارد': 'Ice pearl',
  'فضي قطبي': 'Arctic silver',
  'رمادي غرافيتي': 'Graphite',
  'أخضر كهربائي': 'Volt lime',
  'أزرق ليلي': 'Midnight blue',
  'تعذر تشغيل العرض ثلاثي الأبعاد في هذا المتصفح.': 'The 3D viewer could not start in this browser.',
  'تعذر تحميل العرض ثلاثي الأبعاد، لكن المعرض والبحث ما زالا متاحين.': 'The 3D viewer could not load, but the gallery and search are still available.',
  'تم اختيار لون {name}': 'Selected {name}.',
  'أُضيفت السيارة إلى المفضلة': 'Vehicle added to favorites.',
  'أُزيلت السيارة من المفضلة': 'Vehicle removed from favorites.',
  'متاحة للإيجار': 'Available for rent',
  'معروضة للبيع': 'Listed for sale',
  'سيارة': 'Vehicle',
  'سيارة معروضة للإيجار. يمكنك الاستفسار عن توفرها ومدة الإيجار والشروط قبل تأكيد الحجز.': 'This vehicle is available for rent. Ask about availability, rental duration and terms before confirming.',
  'سيارة مستعملة معروضة للبيع. يمكنك طلب معلومات إضافية أو تحديد موعد لمعاينتها قبل إتمام الشراء.': 'This pre-owned vehicle is listed for sale. Request more information or arrange a viewing before purchasing.',
  'سنة الصنع: {year}': 'Model year: {year}',
  'مرحباً، أود الاستفسار عن السيارة: {make} {title}. نوع الإعلان: {status}. السعر المعروض: {price}. أرجو تزويدي بمعلومات إضافية.': 'Hello, I would like to enquire about: {make} {title}. Listing: {status}. Advertised price: {price}. Please send me more information.',
  'تم نسخ رسالة الاستفسار. يمكنك إرسالها إلى المعرض.': 'Inquiry message copied. You can now send it to the gallery.',
  'تم نسخ رسالة الاستفسار.': 'Inquiry message copied.',
  'تعذر النسخ في هذا المتصفح.': 'Copying is not supported in this browser.',
  'تم تجهيز طلبك التجريبي. اربط النموذج بخادم لاستقبال الطلبات فعلياً.': 'Your demo request is ready. Connect the form to a server to receive real submissions.',
  'تعذر النسخ.': 'Could not copy the message.',
  'إيقاف الدوران': 'Pause rotation',
  'تشغيل الدوران': 'Resume rotation',
};

const attributeTranslations = {
  'إعدادات العرض': 'Display preferences',
  'زوايا عرض السيارة': 'Vehicle viewing angles',
  'LEXMORA الصفحة الرئيسية': 'LEXMORA homepage',
  'التنقل الرئيسي': 'Main navigation',
  'فتح القائمة': 'Open menu',
  'عرض ثلاثي الأبعاد لسيارة ضمن المعرض': '3D vehicle display in the gallery',
  'إصدار فيلورا اللؤلؤي': 'LEXMORA pearl edition',
  'سيارة ثلاثية الأبعاد قابلة للدوران': 'Rotatable 3D car',
  'اختيار لون السيارة التجريبية': 'Demo car color selector',
  'ماركات السيارات في المعرض': 'Car brands in the gallery',
  'تصفية السيارات': 'Filter vehicles',
  'نوع الإعلان': 'Listing type',
  'ابحث عن ماركة أو موديل...': 'Search make or model...',
  'مسح الفلاتر': 'Clear filters',
  'إضافة إلى المفضلة': 'Add to favorites',
  'سيارة مرسيدس بنز C200': 'Mercedes-Benz C200',
  'سيارة كيا سبورتاج': 'Kia Sportage',
  'سيارة بي إم دبليو الفئة الخامسة': 'BMW 5 Series',
  'سيارة تويوتا كورولا': 'Toyota Corolla',
  'سيارة أودي A6': 'Audi A6',
  'سيارة هيونداي توسان': 'Hyundai Tucson',
  'الاسم الكامل': 'Full name',
  'رقم الهاتف': 'Phone number',
  'الشركة والموديل': 'Make and model',
  'إغلاق': 'Close',
  'LEXMORA — معرض سيارات عصري للبيع والإيجار بتجربة بصرية تفاعلية ثلاثية الأبعاد.': 'LEXMORA — A modern car gallery for sales and rentals, with an interactive 3D experience.',
};

const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();
let currentLanguage = (() => {
  try { return localStorage.getItem('LEXMORA-language') === 'en' ? 'en' : 'ar'; }
  catch { return 'ar'; }
})();
let currentTheme = (() => {
  try { return localStorage.getItem('LEXMORA-theme') !== 'light' ? 'dark' : 'light'; }
  catch { return 'light'; }
})();

function translate(value, variables = {}) {
  let result = currentLanguage === 'en' ? (translations[value] || value) : value;
  Object.entries(variables).forEach(([key, variable]) => {
    result = result.replaceAll(`{${key}}`, String(variable));
  });
  return result;
}

function applyLanguage(language) {
  currentLanguage = language === 'en' ? 'en' : 'ar';
  const root = document.documentElement;
  root.lang = currentLanguage;
  root.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
    const original = originalTextNodes.get(node);
    const trimmed = original.trim();
    if (!trimmed) continue;
    const translated = currentLanguage === 'en' ? (translations[trimmed] || trimmed) : trimmed;
    const leading = original.match(/^\s*/)?.[0] || '';
    const trailing = original.match(/\s*$/)?.[0] || '';
    node.nodeValue = `${leading}${translated}${trailing}`;
  }

  const observedAttributes = ['aria-label', 'placeholder', 'alt', 'content', 'title'];
  document.querySelectorAll('*').forEach((element) => {
    observedAttributes.forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      let saved = originalAttributes.get(element);
      if (!saved) { saved = {}; originalAttributes.set(element, saved); }
      if (!(attribute in saved)) saved[attribute] = element.getAttribute(attribute);
      const original = saved[attribute];
      const translated = currentLanguage === 'en' ? (attributeTranslations[original] || translations[original] || original) : original;
      element.setAttribute(attribute, translated);
    });
  });

  document.title = currentLanguage === 'en' ? 'LEXMORA — Modern Automotive Gallery' : 'LEXMORA — معرض السيارات الحديث';
  const spinLabel = document.querySelector('#spin-label');
  if (spinLabel) spinLabel.textContent = translate(isSpinning ? 'إيقاف الدوران' : 'تشغيل الدوران');
  const languageLabel = document.querySelector('#language-label');
  const languageButton = document.querySelector('#language-toggle');
  if (languageLabel) languageLabel.textContent = currentLanguage === 'ar' ? 'EN' : 'عربي';
  if (languageButton) {
    languageButton.setAttribute('aria-label', currentLanguage === 'ar' ? 'التبديل إلى الإنجليزية' : 'Switch language to Arabic');
    languageButton.title = currentLanguage === 'ar' ? 'English' : 'العربية';
  }
  try { localStorage.setItem('LEXMORA-language', currentLanguage); } catch { /* storage may be disabled */ }
  document.dispatchEvent(new CustomEvent('LEXMORA:languagechange', { detail: { language: currentLanguage } }));
}

function applyTheme(theme) {
  currentTheme = theme === 'dark' ? 'dark' : 'light';
  document.body.dataset.theme = currentTheme;
  const toggle = document.querySelector('#theme-toggle');
  const label = document.querySelector('#theme-label');
  const symbol = document.querySelector('#theme-symbol');
  const isDark = currentTheme === 'dark';
  if (label) label.textContent = currentLanguage === 'ar'
    ? (isDark ? 'الوضع الفاتح' : 'الوضع الداكن')
    : (isDark ? 'Light mode' : 'Dark mode');
  if (symbol) symbol.textContent = isDark ? '☼' : '◐';
  if (toggle) {
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', currentLanguage === 'ar'
      ? (isDark ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن')
      : (isDark ? 'Switch to light mode' : 'Switch to dark mode'));
  }
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  themeMeta?.setAttribute('content', isDark ? '#10171c' : '#ffffff');
  try { localStorage.setItem('LEXMORA-theme', currentTheme); } catch { /* storage may be disabled */ }
}

function setupPreferences() {
  applyLanguage(currentLanguage);
  applyTheme(currentTheme);
  document.querySelector('#language-toggle')?.addEventListener('click', () => {
    applyLanguage(currentLanguage === 'ar' ? 'en' : 'ar');
    applyTheme(currentTheme);
  });
  document.querySelector('#theme-toggle')?.addEventListener('click', () => {
    applyTheme(currentTheme === 'light' ? 'dark' : 'light');
  });
}

const toast = document.querySelector('#toast');
let toastTimer;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2100);
}


function setupMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  }));
}

setupMobileMenu();
setupPreferences();

// ------------------------------------------------------------
// LEXMORA signature polish: reveal motion and soft pointer lighting
// ------------------------------------------------------------
function setupSignatureEffects() {
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion && 'IntersectionObserver' in window) {
    const targets = document.querySelectorAll(
      '.hero-copy, .hero-visual, .section-topline, .inventory-heading, .filter-panel, .car-card, .standard-heading, .standard-card, .how-intro, .step-item, .list-car-copy, .list-car-form'
    );
    targets.forEach((element, index) => {
      element.classList.add('reveal-on-scroll');
      if (element.classList.contains('car-card')) element.style.setProperty('--reveal-delay', `${(index % 3) * 75}ms`);
    });
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        activeObserver.unobserve(entry.target);
      });
    }, { threshold: .08, rootMargin: '0px 0px -34px 0px' });
    targets.forEach((element) => observer.observe(element));
  }

  if (window.matchMedia?.('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.car-card').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const bounds = card.getBoundingClientRect();
        card.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`);
        card.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`);
      }, { passive: true });
      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--spot-x', '50%');
        card.style.setProperty('--spot-y', '50%');
      }, { passive: true });
    });
  }
}

setupSignatureEffects();

// ------------------------------------------------------------
// LEXMORA inventory: search, filters, sorting, favorites & details
// ------------------------------------------------------------
function setupInventory() {
  const grid = document.querySelector('#cars-grid');
  if (!grid) return;

  const cards = [...grid.querySelectorAll('.car-card')];
  const tabs = [...document.querySelectorAll('.filter-tab')];
  const search = document.querySelector('#car-search');
  const brand = document.querySelector('#brand-filter');
  const sort = document.querySelector('#sort-filter');
  const count = document.querySelector('#result-count');
  const empty = document.querySelector('#empty-state');
  let activeType = 'all';

  const normalize = (value) => String(value || '').toLocaleLowerCase('ar').trim();

  function applyFilters() {
    const query = normalize(search?.value);
    const selectedBrand = brand?.value || 'all';
    let visibleCards = [];

    cards.forEach((card) => {
      const matchesType = activeType === 'all' || card.dataset.status === activeType;
      const matchesBrand = selectedBrand === 'all' || card.dataset.brand === selectedBrand;
      const haystack = normalize(`${card.dataset.search} ${card.dataset.brand} ${card.innerText}`);
      const matchesSearch = !query || haystack.includes(query);
      const visible = matchesType && matchesBrand && matchesSearch;
      card.hidden = !visible;
      if (visible) visibleCards.push(card);
    });

    const sortMode = sort?.value || 'featured';
    if (sortMode !== 'featured') {
      visibleCards.sort((a, b) => {
        const priceA = Number(a.dataset.price || 0);
        const priceB = Number(b.dataset.price || 0);
        const yearA = Number(a.dataset.year || 0);
        const yearB = Number(b.dataset.year || 0);
        if (sortMode === 'price-low') return priceA - priceB;
        if (sortMode === 'price-high') return priceB - priceA;
        if (sortMode === 'year-new') return yearB - yearA;
        return 0;
      });
      visibleCards.forEach((card) => grid.appendChild(card));
    } else {
      cards.forEach((card) => grid.appendChild(card));
    }

    if (count) count.textContent = String(visibleCards.length).padStart(2, '0');
    if (empty) empty.hidden = visibleCards.length !== 0;
  }

  function setType(type) {
    activeType = type;
    tabs.forEach((tab) => {
      const active = tab.dataset.filter === type;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('[data-nav-filter]').forEach((link) => {
      const active = link.dataset.navFilter === (type === 'rent' ? 'rent' : 'sale');
      link.classList.toggle('active', active);
    });
    applyFilters();
  }

  tabs.forEach((tab) => tab.addEventListener('click', () => setType(tab.dataset.filter)));
  search?.addEventListener('input', applyFilters);
  brand?.addEventListener('change', applyFilters);
  sort?.addEventListener('change', applyFilters);

  document.querySelector('#reset-filters')?.addEventListener('click', () => {
    if (search) search.value = '';
    if (brand) brand.value = 'all';
    if (sort) sort.value = 'featured';
    setType('all');
  });
  document.querySelector('#empty-reset')?.addEventListener('click', () => {
    if (search) search.value = '';
    if (brand) brand.value = 'all';
    if (sort) sort.value = 'featured';
    setType('all');
  });

  document.querySelectorAll('[data-nav-filter]').forEach((link) => {
    link.addEventListener('click', () => setType(link.dataset.navFilter));
  });

  const readFavorites = () => {
    try {
      const value = JSON.parse(localStorage.getItem('LEXMORA_favorites') || '[]');
      return Array.isArray(value) ? value : [];
    } catch { return []; }
  };
  const activeEmail = () => {
    try { return JSON.parse(localStorage.getItem('LEXMORA_customer') || 'null')?.email || 'guest'; }
    catch { return 'guest'; }
  };
  const favoriteSnapshot = (card) => ({
    id: card.dataset.carId,
    car: `${card.querySelector('.car-make')?.textContent.trim() || card.dataset.brand} ${card.querySelector('h3')?.textContent.trim() || ''}`.trim(),
    make: card.querySelector('.car-make')?.textContent.trim() || card.dataset.brand,
    title: card.querySelector('h3')?.textContent.trim() || '',
    price: card.querySelector('.car-price strong')?.textContent.trim() || '',
    status: card.dataset.status,
    year: card.dataset.year,
    image: card.querySelector('img')?.src || '',
    email: activeEmail(),
    date: new Date().toISOString().slice(0, 10),
  });
  function isFavorite(card) {
    const owner = activeEmail();
    return readFavorites().some((item) => item.id === card.dataset.carId && (item.email === owner || item.email === 'guest'));
  }
  function syncFavoriteButtons() {
    cards.forEach((card) => {
      const favorite = card.querySelector('.favorite-button');
      if (!favorite) return;
      const active = isFavorite(card);
      favorite.setAttribute('aria-pressed', String(active));
      favorite.textContent = active ? '♥' : '♡';
      favorite.classList.toggle('is-favorite', active);
      favorite.setAttribute('aria-label', translate(active ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة'));
    });
  }

  cards.forEach((card) => {
    const favorite = card.querySelector('.favorite-button');
    favorite?.addEventListener('click', () => {
      const active = !isFavorite(card);
      const favorites = readFavorites();
      const owner = activeEmail();
      const filtered = favorites.filter((item) => !(item.id === card.dataset.carId && (item.email === owner || (owner !== 'guest' && item.email === 'guest'))));
      if (active) filtered.push(favoriteSnapshot(card));
      try { localStorage.setItem('LEXMORA_favorites', JSON.stringify(filtered)); } catch { /* private browsing may block storage */ }
      syncFavoriteButtons();
      showToast(translate(active ? 'أُضيفت السيارة إلى المفضلة' : 'أُزيلت السيارة من المفضلة'));
    });
  });
  syncFavoriteButtons();
  setupVehicleComparison(cards);

  applyFilters();
}

function setupVehicleComparison(cards) {
  if (!cards.length || document.querySelector('#compare-tray')) return;
  const selected = new Set();
  const tray = document.createElement('aside');
  tray.id = 'compare-tray';
  tray.className = 'compare-tray';
  tray.setAttribute('aria-live', 'polite');
  tray.hidden = true;
  tray.innerHTML = `<div class="compare-tray-copy"><span class="compare-tray-mark">≋</span><div><strong id="compare-tray-title"></strong><small id="compare-tray-hint"></small></div></div><div class="compare-tray-actions"><button type="button" class="compare-clear" id="compare-clear"></button><button type="button" class="compare-open" id="compare-open" disabled></button></div>`;
  document.body.appendChild(tray);

  const dialog = document.createElement('dialog');
  dialog.id = 'compare-dialog';
  dialog.className = 'compare-dialog';
  dialog.setAttribute('aria-labelledby', 'compare-dialog-title');
  document.body.appendChild(dialog);

  const selectedCards = () => cards.filter((card) => selected.has(card.dataset.carId));
  const update = () => {
    const count = selected.size;
    tray.hidden = count === 0;
    tray.querySelector('#compare-tray-title').textContent = `${translate('مقارنة السيارات')} (${count}/3)`;
    tray.querySelector('#compare-tray-hint').textContent = count < 2 ? translate('اختر سيارة أخرى لإجراء المقارنة') : translate('قارن الآن');
    tray.querySelector('#compare-open').disabled = count < 2;
    tray.querySelector('#compare-open').textContent = translate('قارن الآن');
    tray.querySelector('#compare-clear').textContent = translate('مسح الاختيار');
    cards.forEach((card) => {
      const button = card.querySelector('.compare-button');
      if (!button) return;
      const active = selected.has(card.dataset.carId);
      button.classList.toggle('selected', active);
      button.setAttribute('aria-pressed', String(active));
      button.textContent = translate(active ? 'إزالة من المقارنة' : 'أضف للمقارنة');
    });
  };
  const getSpecs = (card) => [...card.querySelectorAll('.car-specs span')].map((node) => node.textContent.trim());
  const openComparison = () => {
    const vehicles = selectedCards();
    if (vehicles.length < 2) return;
    dialog.innerHTML = '';
    const header = document.createElement('div');
    header.className = 'compare-dialog-header';
    const title = document.createElement('div');
    title.innerHTML = `<span>LEXMORA / SIDE BY SIDE</span><h2 id="compare-dialog-title">${translate('مقارنة السيارات')}</h2>`;
    const close = document.createElement('button');
    close.type = 'button'; close.className = 'compare-dialog-close'; close.setAttribute('aria-label', translate('إغلاق')); close.textContent = '×';
    close.addEventListener('click', () => dialog.close());
    header.append(title, close);
    dialog.appendChild(header);

    const table = document.createElement('div');
    table.className = 'compare-table-wrap';
    const grid = document.createElement('table');
    grid.className = 'compare-table';
    const head = document.createElement('thead');
    const headRow = document.createElement('tr');
    const blank = document.createElement('th'); blank.scope = 'col'; blank.textContent = '';
    headRow.appendChild(blank);
    vehicles.forEach((card) => {
      const th = document.createElement('th'); th.scope = 'col';
      const name = document.createElement('strong');
      name.textContent = card.querySelector('h3')?.textContent.trim() || card.dataset.brand;
      const make = document.createElement('small'); make.textContent = card.querySelector('.car-make')?.textContent.trim() || card.dataset.brand;
      th.append(make, name); headRow.appendChild(th);
    });
    head.appendChild(headRow); grid.appendChild(head);

    const specs = [
      ['نوع الإعلان', (card) => translate(card.dataset.status === 'rent' ? 'للإيجار' : 'للبيع')],
      ['السنة', (card) => card.dataset.year || '—'],
      ['السعر', (card) => card.querySelector('.car-price strong')?.textContent.trim() || '—'],
      ['الممشى', (card) => getSpecs(card)[0] || '—'],
      ['ناقل الحركة', (card) => getSpecs(card)[1] || '—'],
      ['الوقود', (card) => getSpecs(card)[2] || '—'],
    ];
    const body = document.createElement('tbody');
    specs.forEach(([label, value]) => {
      const row = document.createElement('tr');
      const rowHead = document.createElement('th'); rowHead.scope = 'row'; rowHead.textContent = translate(label); row.appendChild(rowHead);
      vehicles.forEach((card) => { const cell = document.createElement('td'); cell.textContent = value(card); row.appendChild(cell); });
      body.appendChild(row);
    });
    grid.appendChild(body); table.appendChild(grid); dialog.appendChild(table);
    const note = document.createElement('p'); note.className = 'compare-dialog-note'; note.textContent = translate('كل الأسعار والمواصفات في هذه النسخة تجريبية.');
    dialog.appendChild(note);
    if (!dialog.open) dialog.showModal();
  };

  cards.forEach((card) => {
    const bottom = card.querySelector('.car-card-bottom');
    if (!bottom) return;
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'compare-button'; button.textContent = translate('أضف للمقارنة');
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      const id = card.dataset.carId;
      if (selected.has(id)) selected.delete(id);
      else if (selected.size >= 3) { showToast(translate('يمكنك مقارنة 3 سيارات كحد أقصى')); return; }
      else selected.add(id);
      update();
    });
    bottom.appendChild(button);
  });
  tray.querySelector('#compare-clear').addEventListener('click', () => { selected.clear(); update(); });
  tray.querySelector('#compare-open').addEventListener('click', openComparison);
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  document.addEventListener('LEXMORA:languagechange', update);
  update();
}

function setupCarDetails() {
  const dialog = document.querySelector('#car-dialog');
  if (!dialog) return;

  const closeButton = dialog.querySelector('.dialog-close');
  const dialogPhoto = dialog.querySelector('#dialog-photo');
  const dialogStatus = dialog.querySelector('#dialog-status');
  const dialogMake = dialog.querySelector('#dialog-make');
  const dialogTitle = dialog.querySelector('#dialog-title');
  const dialogPrice = dialog.querySelector('#dialog-price');
  const dialogDescription = dialog.querySelector('#dialog-description');
  const dialogSpecs = dialog.querySelector('#dialog-specs');
  const copyButton = dialog.querySelector('#copy-inquiry');
  let currentInquiry = '';

  document.querySelectorAll('[data-open-details]').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.car-card');
      if (!card) return;

      const make = card.querySelector('.car-make')?.textContent.trim() || card.dataset.brand;
      const title = card.querySelector('h3')?.textContent.trim() || 'سيارة';
      const price = card.querySelector('.car-price strong')?.textContent.trim() || '';
      const image = card.querySelector('img');
      const status = translate(card.dataset.status === 'rent' ? 'متاحة للإيجار' : 'معروضة للبيع');
      const specs = [...card.querySelectorAll('.car-specs span')].map((item) => item.textContent.trim());
      const year = card.dataset.year || '';

      dialog.dataset.carId = card.dataset.carId || '';
      const cartButton = dialog.querySelector('#dialog-add-cart');
      if (cartButton) { cartButton.dataset.cartAdd = card.dataset.carId || ''; cartButton.textContent = card.dataset.status === 'rent' ? 'احجز الإيجار' : 'أضف إلى السلة'; }
      dialogMake.textContent = make;
      dialogTitle.textContent = title;
      dialogPrice.textContent = price;
      dialogStatus.textContent = status;
      dialogStatus.style.background = card.dataset.status === 'rent' ? '#90784a' : '#294a35';
      dialogDescription.textContent = translate(card.dataset.status === 'rent'
        ? 'سيارة معروضة للإيجار. يمكنك الاستفسار عن توفرها ومدة الإيجار والشروط قبل تأكيد الحجز.'
        : 'سيارة مستعملة معروضة للبيع. يمكنك طلب معلومات إضافية أو تحديد موعد لمعاينتها قبل إتمام الشراء.');
      dialogPhoto.style.backgroundImage = image?.src ? `url("${image.src}")` : '';
      dialogSpecs.innerHTML = '';
      [ translate('سنة الصنع: {year}', { year }), ...specs ].forEach((text) => {
        const item = document.createElement('span');
        item.textContent = text;
        dialogSpecs.appendChild(item);
      });
      currentInquiry = translate('مرحباً، أود الاستفسار عن السيارة: {make} {title}. نوع الإعلان: {status}. السعر المعروض: {price}. أرجو تزويدي بمعلومات إضافية.', { make, title, status, price });
      dialog.showModal();
    });
  });

  closeButton?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  copyButton?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(currentInquiry);
      showToast(translate('تم نسخ رسالة الاستفسار. يمكنك إرسالها إلى المعرض.'));
    } catch (error) {
      const temporary = document.createElement('textarea');
      temporary.value = currentInquiry;
      temporary.style.position = 'fixed';
      temporary.style.opacity = '0';
      document.body.appendChild(temporary);
      temporary.select();
      const copied = document.execCommand('copy');
      temporary.remove();
      showToast(translate(copied ? 'تم نسخ رسالة الاستفسار.' : 'تعذر النسخ في هذا المتصفح.'));
    }
  });
}

function setupListingForm() {
  const form = document.querySelector('#listing-form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const owner = String(formData.get('name') || '').trim();
    const car = String(formData.get('car') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    if (!owner || !car || !phone) return;
    let customer = null;
    try { customer = JSON.parse(localStorage.getItem('LEXMORA_customer') || 'null'); } catch { /* guest submission */ }
    let requests = [];
    try { requests = JSON.parse(localStorage.getItem('LEXMORA_listing_requests') || '[]'); } catch { requests = []; }
    requests.push({
      id: `LIST-${Date.now().toString().slice(-7)}`,
      name: owner,
      phone,
      car,
      type: String(formData.get('status') || 'sale'),
      email: customer?.email || 'guest',
      date: new Date().toISOString().slice(0, 10),
      status: 'بانتظار المراجعة'
    });
    try { localStorage.setItem('LEXMORA_listing_requests', JSON.stringify(requests)); } catch { /* local-only demo */ }
    showToast('تم حفظ طلب عرض سيارتك في هذا المتصفح — نموذج تجريبي.');
    form.reset();
  });
}

function setupPremiumNavigation() {
  const header = document.querySelector('.site-header');
  const progress = document.querySelector('#scroll-progress-bar');
  let scheduled = false;
  const updateScrollState = () => {
    const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const percent = Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100));
    if (progress) progress.style.width = `${percent}%`;
    header?.classList.toggle('is-scrolled', window.scrollY > 18);
    scheduled = false;
  };
  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(updateScrollState);
  }, { passive: true });
  updateScrollState();

  if ('IntersectionObserver' in window) {
    const sections = [...document.querySelectorAll('main section[id]')];
    const links = [...document.querySelectorAll('.main-nav a[href^="#"]')];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const activeFilter = document.querySelector('.filter-tab.active')?.dataset.filter || 'all';
        links.forEach((link) => {
          let active = link.getAttribute('href') === `#${entry.target.id}`;
          if (entry.target.id === 'cars' && link.hasAttribute('data-nav-filter')) {
            active = (activeFilter === 'rent' && link.dataset.navFilter === 'rent') || (activeFilter !== 'rent' && link.dataset.navFilter === 'sale');
          }
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-28% 0px -58% 0px', threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }
}

setupPremiumNavigation();
setupInventory();
setupCarDetails();
setupListingForm();

function setupPhotoFallbacks() {
  document.querySelectorAll('.car-photo img').forEach((img) => {
    img.addEventListener('error', () => {
      img.closest('.car-photo')?.classList.add('image-fallback');
      img.remove();
    }, { once: true });
  });
}

setupPhotoFallbacks();
