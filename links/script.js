const LANGUAGE_STORAGE_KEY = "tsuchi-language";

const copy = {
  ar: {
    "document.title": "Tzu Chi Gaza | مبادرات إنسانية وتعليمية",
    "document.description": "مبادرات إنسانية وتعليمية في غزة بدعم من مؤسسة تسجي الخيرية، مدرسة المناهل الدولية، ومسجد تايبيه الكبير.",
    "language.aria": "اختيار اللغة",
    "partners.heading": "الجهات الداعمة",
    "partners.logosAria": "شعارات الجهات الداعمة",
    "partners.tzuAlt": "شعار TZU CHI İYİLİK VAKFI",
    "partners.schoolAlt": "شعار El Menahil International School",
    "partners.mosqueAlt": "شعار Taipei Grand Mosque",
    "partners.note": "عمل إنساني في غزة يقوم على التعاون والثقة والمسؤولية المشتركة.",
    "intro.eyebrow": "مبادرات إنسانية وتعليمية",
    "intro.title": "من يقف خلف هذا العمل؟",
    "intro.first": "تتواصل مبادراتنا الإنسانية والتعليمية في قطاع غزة بدعم وتعاون بين مؤسسة تسجي الخيرية، مدرسة المناهل الدولية، ومسجد تايبيه الكبير.",
    "intro.second": "نعمل معًا لخدمة أهلنا في غزة بكرامة ورحمة، والمساهمة في دعم الأسر والأطفال والمجتمع من خلال المبادرات الإنسانية والتعليمية.",
    "intro.closing": "ثلاث جهات داعمة... ورسالة واحدة: الوقوف إلى جانب أهل غزة. 💚",
    "social.eyebrow": "تابعوا أثر العمل في غزة",
    "social.title": "ابقوا على اطلاع على أنشطتنا الإنسانية والتعليمية.",
    "social.facebook": "صفحتنا على فيسبوك",
    "social.instagram": "حسابنا على إنستغرام",
    "social.facebookAria": "تابعونا على فيسبوك",
    "social.instagramAria": "تابعونا على إنستغرام",
    "portfolio.link": "الموقع / تعرف أكثر ←",
    "portfolio.aria": "زيارة الموقع التعريفي للمشروع",
    "footer.note": "التواصل الرقمي اختياري، ولا يرتبط بالحصول على أي مساعدة إنسانية."
  },
  en: {
    "document.title": "Tzu Chi Gaza | Humanitarian & Educational Initiatives",
    "document.description": "Humanitarian and educational initiatives in Gaza through a partnership of care and community support.",
    "language.aria": "Choose language",
    "partners.heading": "Supporting partners",
    "partners.logosAria": "Logos of the supporting partners",
    "partners.tzuAlt": "TZU CHI İYİLİK VAKFI logo",
    "partners.schoolAlt": "El Menahil International School logo",
    "partners.mosqueAlt": "Taipei Grand Mosque logo",
    "partners.note": "Humanitarian work in Gaza built on collaboration, trust, and shared responsibility.",
    "intro.eyebrow": "Humanitarian and educational initiatives",
    "intro.title": "Who stands behind this work?",
    "intro.first": "Our humanitarian and educational initiatives in the Gaza Strip continue through the support and cooperation of Tzu Chi Foundation, El Menahil International School, and Taipei Grand Mosque.",
    "intro.second": "Together, we serve people in Gaza with dignity and compassion, supporting families, children, and the community through humanitarian and educational initiatives.",
    "intro.closing": "Three supporting organizations... one message: standing beside the people of Gaza. 💚",
    "social.eyebrow": "Follow the impact in Gaza",
    "social.title": "Stay informed about our humanitarian and educational activities.",
    "social.facebook": "Our Facebook page",
    "social.instagram": "Our Instagram account",
    "social.facebookAria": "Follow us on Facebook",
    "social.instagramAria": "Follow us on Instagram",
    "portfolio.link": "Website / Learn more →",
    "portfolio.aria": "Visit the project portfolio website",
    "footer.note": "Digital contact is optional and is not linked to receiving any humanitarian assistance."
  },
  zh: {
    "document.title": "Tzu Chi Gaza | 人道與教育行動",
    "document.description": "由慈濟、El Menahil International School 與 Taipei Grand Mosque 共同支持的加薩人道與教育行動。",
    "language.aria": "選擇語言",
    "partners.heading": "支持夥伴",
    "partners.logosAria": "支持夥伴標誌",
    "partners.tzuAlt": "TZU CHI İYİLİK VAKFI 標誌",
    "partners.schoolAlt": "El Menahil International School 標誌",
    "partners.mosqueAlt": "Taipei Grand Mosque 標誌",
    "partners.note": "加薩的人道行動建立在合作、信任與共同責任之上。",
    "intro.eyebrow": "人道與教育行動",
    "intro.title": "誰在支持這項工作？",
    "intro.first": "我們在加薩走廊的人道與教育行動，持續獲得慈濟基金會、El Menahil International School 與 Taipei Grand Mosque 的支持與合作。",
    "intro.second": "我們攜手以尊嚴與關懷服務加薩人民，透過人道與教育行動支持家庭、兒童與社群。",
    "intro.closing": "三個支持夥伴... 一個共同訊息：與加薩人民站在一起。💚",
    "social.eyebrow": "關注加薩行動的影響",
    "social.title": "掌握我們的人道與教育活動最新消息。",
    "social.facebook": "我們的 Facebook 專頁",
    "social.instagram": "我們的 Instagram 帳號",
    "social.facebookAria": "在 Facebook 追蹤我們",
    "social.instagramAria": "在 Instagram 追蹤我們",
    "portfolio.link": "網站 / 了解更多 →",
    "portfolio.aria": "前往專案介紹網站",
    "footer.note": "數位聯絡完全自願，與獲得任何人道援助無關。"
  }
};

function normalizeLanguage(language) {
  return language === "en" || language === "zh" || language === "ar" ? language : "ar";
}

function getStoredLanguage() {
  try {
    return normalizeLanguage(localStorage.getItem(LANGUAGE_STORAGE_KEY));
  } catch (error) {
    return "ar";
  }
}

function translatePage(language) {
  const strings = copy[language] || copy.ar;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = strings[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = strings[element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = strings[element.dataset.i18nAlt];
    if (value) element.setAttribute("alt", value);
  });
  document.title = strings["document.title"];
  document.querySelector('meta[name="description"]')?.setAttribute("content", strings["document.description"]);
}

function applyLanguage(nextLanguage, save = false) {
  const language = normalizeLanguage(nextLanguage);
  document.documentElement.lang = language === "zh" ? "zh-Hant" : language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.documentElement.dataset.language = language;
  translatePage(language);

  document.querySelectorAll(".language-option[data-lang]").forEach((option) => {
    const active = option.dataset.lang === language;
    option.classList.toggle("is-active", active);
    option.setAttribute("aria-pressed", String(active));
  });

  if (save) {
    try { localStorage.setItem(LANGUAGE_STORAGE_KEY, language); } catch (error) { /* Storage is optional. */ }
  }
}

document.querySelectorAll(".language-option[data-lang]").forEach((option) => {
  option.addEventListener("click", () => applyLanguage(option.dataset.lang, true));
});

applyLanguage(getStoredLanguage());
