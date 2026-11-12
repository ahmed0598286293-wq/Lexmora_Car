/* LEXMORA shared preferences for customer and commerce pages.
   Text updates are idempotent so the observer never creates a mutation loop. */
(() => {
  const root = document.documentElement;
  const body = document.body;
  if (!body) return;

  const get = (key, fallback) => {
    try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
  };
  let lang = get('LEXMORA-language', 'ar') === 'en' ? 'en' : 'ar';
  let theme = get('LEXMORA-theme', 'dark') === 'dark' ? 'dark' : 'light';

  const dict = {
    'الرئيسية':'Home','السيارات':'Cars','دخول العميل ↗':'Client login ↗','لوحة العميل':'Dashboard','طلباتي':'My orders','مدفوعاتي':'Payments','المدفوعات':'Payments','المفضلة':'Favorites','ملفي الشخصي':'My profile',
    'إنشاء حساب جديد':'Create an account','مرحباً بعودتك':'Welcome back','أنشئ حسابك لمتابعة طلباتك وسياراتك.':'Create an account to track your requests and vehicles.',
    'سجل الدخول للوصول إلى مساحة العميل.':'Sign in to access your client area.','الاسم الكامل':'Full name','البريد الإلكتروني':'Email address','كلمة المرور':'Password',
    'إنشاء الحساب':'Create account','تسجيل الدخول':'Sign in','لديك حساب؟':'Already have an account?','سجل الدخول':'Sign in','ليس لديك حساب؟':'No account yet?','أنشئ حساباً':'Create one',
    'مرحباً،':'Welcome,','كل تفاصيل رحلتك في مكان واحد.':'Every detail of your journey in one place.','إجمالي الطلبات':'Total orders','حالة الحساب':'Account status',
    'السلة':'Cart','سلة الشراء':'Shopping cart','نظرة عامة':'Overview','سياراتي المعروضة':'My listings','سلة اختياراتك.':'Your selected vehicles.','السيارات المختارة':'Selected vehicles','إفراغ السلة':'Clear cart','شراء':'Purchase','إيجار':'Rental','مدة الإيجار':'Rental duration','ملخص الطلب':'Order summary','عدد السيارات':'Vehicle count','الإجمالي التقديري':'Estimated total','تأكيد الطلب التجريبي':'Confirm demo request','متابعة استكشاف السيارات':'Continue exploring vehicles','وصل طلبك التجريبي.':'Your demo request is saved.','متابعة طلباتي':'View my orders','المدفوعات التجريبية':'Demo payments','طلبات الشراء والإيجار':'Purchase and rental requests','طلبات الإضافة':'Listing requests','طلب حجز تجريبي':'Demo rental request','طلب شراء تجريبي':'Demo purchase request','بانتظار المراجعة':'Awaiting review','بانتظار الدفع':'Awaiting payment','غير مدفوع — نموذج تجريبي':'Unpaid — demo only','لا يوجد دفع إلكتروني أو حجز فعلي في هذا القالب.':'No online payment or real booking is performed in this template.','إضافة سيارة جديدة':'Add a new vehicle','أضف للسلة':'Add to cart','احجز الإيجار':'Book rental','أضف إلى السلة':'Add to cart','إزالة':'Remove','سلتك بانتظار اختيارك.':'Your cart is waiting for your selection.','أضف سيارة للبيع أو اختر سيارة للإيجار، وستظهر تفاصيلها هنا.':'Add a vehicle for purchase or rental to see it here.','استكشف السيارات':'Explore vehicles','متابعة الطلب التجريبي':'Continue demo request','إدارة مشترياتك وإعلانات سياراتك في مساحة واحدة.':'Manage purchases and vehicle listings in one place.','ما الذي تريد فعله؟':'What would you like to do?','شراء أو استئجار سيارة':'Buy or rent a vehicle','عرض سيارتي للبيع أو الإيجار':'List my vehicle for sale or rent','متابعة سلة الشراء':'Review shopping cart','كل طلبات الشراء والإيجار التي أرسلتها من سلة LEXMORA.':'All purchase and rental requests sent through the LEXMORA cart.','قيمة تقديرية':'Estimated value','سياراتي المفضلة':'My favorites','طلب الإعلان يُحفظ محلياً في مساحة التاجر التجريبية؛ لا يوجد خادم أو نشر عام للإعلان.':'Listing requests are saved locally in the seller demo area; there is no server or public listing.','هذا تسجيل تجريبي داخل المتصفح فقط، وليس نظام مصادقة آمناً.':'This is browser-only demo sign-in, not secure authentication.',
    'آخر الطلبات':'Recent orders','لا توجد طلبات بعد.':'No orders yet.','استكشف السيارات':'Explore cars','السيارة':'Vehicle','التاريخ':'Date','الحالة':'Status','لا توجد بيانات لعرضها حالياً.':'There is no data to display yet.','ملاحظات':'Notes','طريقة الدفع':'Payment method','المبلغ':'Amount','الاسم':'Name','حفظ التعديلات':'Save changes','تسجيل الخروج':'Log out','تم حفظ الملف الشخصي':'Profile saved','هذا البريد مسجل مسبقاً':'This email is already registered','البريد أو كلمة المرور غير صحيحة':'Incorrect email or password','إعدادات العرض':'Display settings','مفضلة':'Saved','تاريخ الإضافة':'Date added','النوع':'Type'
  };
  const originals = new WeakMap();
  const attrs = new WeakMap();

  function applyLanguage() {
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!originals.has(node)) originals.set(node, node.nodeValue);
      const original = originals.get(node);
      const trimmed = original.trim();
      if (!trimmed) continue;
      const translated = lang === 'en' ? (dict[trimmed] || trimmed) : original;
      if (node.nodeValue !== translated) node.nodeValue = translated;
    }
    document.querySelectorAll('[aria-label], [title], input[placeholder]').forEach((el) => {
      ['aria-label','title','placeholder'].forEach((attr) => {
        if (!el.hasAttribute(attr)) return;
        let saved = attrs.get(el);
        if (!saved) { saved = {}; attrs.set(el, saved); }
        if (!(attr in saved)) saved[attr] = el.getAttribute(attr);
        const original = saved[attr];
        const translated = lang === 'en' ? (dict[original] || original) : original;
        if (el.getAttribute(attr) !== translated) el.setAttribute(attr, translated);
      });
    });
    const label = document.querySelector('#LEXMORA-language-label');
    const labelText = lang === 'ar' ? 'EN' : 'عربي';
    if (label && label.textContent !== labelText) label.textContent = labelText;
    try { localStorage.setItem('LEXMORA-language', lang); } catch {}
  }

  function applyTheme() {
    body.dataset.theme = theme;
    const label = document.querySelector('#LEXMORA-theme-label');
    const labelText = lang === 'ar'
      ? (theme === 'dark' ? 'الوضع الفاتح' : 'الوضع الداكن')
      : (theme === 'dark' ? 'Light mode' : 'Dark mode');
    if (label && label.textContent !== labelText) label.textContent = labelText;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#10171c' : '#ffffff';
    try { localStorage.setItem('LEXMORA-theme', theme); } catch {}
  }

  const actions = document.querySelector('.header-actions');
  if (actions && !document.querySelector('#LEXMORA-language-toggle')) {
    const langBtn = document.createElement('button');
    langBtn.type = 'button'; langBtn.className = 'preference-button'; langBtn.id = 'LEXMORA-language-toggle';
    langBtn.innerHTML = '<span>文</span><span id="LEXMORA-language-label">EN</span>';
    const themeBtn = document.createElement('button');
    themeBtn.type = 'button'; themeBtn.className = 'preference-button'; themeBtn.id = 'LEXMORA-theme-toggle';
    themeBtn.innerHTML = '<span>◐</span><span id="LEXMORA-theme-label"></span>';
    actions.classList.add('preference-controls');
    actions.prepend(themeBtn); actions.prepend(langBtn);
    langBtn.addEventListener('click', () => { lang = lang === 'ar' ? 'en' : 'ar'; applyLanguage(); applyTheme(); });
    themeBtn.addEventListener('click', () => { theme = theme === 'light' ? 'dark' : 'light'; applyTheme(); });
  }

  applyLanguage();
  applyTheme();
  let scheduled = false;
  new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    queueMicrotask(() => { scheduled = false; applyLanguage(); applyTheme(); });
  }).observe(body, { childList: true, subtree: true });
})();
