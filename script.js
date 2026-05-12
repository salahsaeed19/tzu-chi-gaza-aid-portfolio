const THEME_STORAGE_KEY = "tsuchi-theme";
const LANGUAGE_STORAGE_KEY = "tsuchi-language";
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleIcon = document.querySelector(".theme-toggle-icon");
const themeToggleText = document.querySelector(".theme-toggle-text");
const languageDropdown = document.querySelector("[data-language-dropdown]");
const languageDropdownToggle = document.querySelector(".language-dropdown-toggle");
const languageDropdownMenu = document.querySelector(".language-dropdown-menu");
const languageOptions = document.querySelectorAll(".language-dropdown-option[data-lang]");
const languageCurrentCode = document.querySelector("[data-language-current-code]");
const languageCurrentLabel = document.querySelector("[data-language-current-label]");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll(".counter");
const impactSection = document.querySelector("#impact");
const backToTop = document.querySelector(".back-to-top");
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxCaption = document.querySelector(".lightbox-caption");
const lightboxLabel = document.querySelector(".lightbox-image span");
const storyButtons = document.querySelectorAll(".story-read-more");
const storyModal = document.querySelector(".story-modal");
const storyModalCloseTriggers = document.querySelectorAll("[data-story-close]");
const storyModalImage = document.querySelector("[data-story-modal-image]");
const storyModalKicker = document.querySelector("[data-story-modal-kicker]");
const storyModalTitle = document.querySelector("[data-story-modal-title]");
const storyModalSummary = document.querySelector("[data-story-modal-summary]");
const storyModalDetails = document.querySelector("[data-story-modal-details]");
const regionTriggers = document.querySelectorAll(".area-card[data-region], .map-region[data-region]");
const regionStateItems = document.querySelectorAll(".area-card[data-region], .map-region[data-region]");
const mapInfoPanel = document.querySelector(".map-info-panel");
const mapInfoTitle = document.querySelector("[data-map-title]");
const mapInfoFamilies = document.querySelector("[data-map-families]");
const mapInfoPeople = document.querySelector("[data-map-people]");
const mapInfoDescription = document.querySelector("[data-map-description]");

let countersStarted = false;
let selectedRegion = "gaza";
let lastStoryTrigger = null;
let currentStoryKey = null;
let currentLanguage = "ar";

const languageLabels = {
  ar: { code: "AR", label: "العربية" },
  zh: { code: "ZH", label: "中文" },
  en: { code: "EN", label: "English" }
};

const translations = {
  ar: {
    "document.title": "مؤسسة تسجي الخيرية | توزيع المساعدات الغذائية في غزة",
    "document.description": "موقع محفظة إنسانية لمشروع توزيع المساعدات الغذائية في غزة - مارس 2026، مؤسسة تسجي الخيرية.",
    "nav.aria": "التنقل الرئيسي",
    "brand.aria": "مؤسسة تسجي الخيرية",
    "brand.name": "مؤسسة تسجي الخيرية",
    "brand.logoAlt": "شعار مؤسسة تسجي الخيرية",
    "nav.home": "الرئيسية",
    "nav.impact": "الأثر",
    "nav.project": "المشروع",
    "nav.method": "آلية العمل",
    "nav.packages": "الطرود الغذائية",
    "nav.stories": "القصص",
    "nav.transparency": "الشفافية",
    "nav.gallery": "المعرض",
    "nav.contact": "تواصل معنا",
    "language.aria": "اختيار اللغة",
    "theme.dark": "الوضع الداكن",
    "theme.light": "الوضع الفاتح",
    "menu.open": "فتح القائمة",
    "menu.close": "إغلاق القائمة",
    "hero.badge": "رقم التوزيع 137 | 16 مارس 2026",
    "hero.title": "مؤسسة تسجي الخيرية: عطاء يصل إلى قلب غزة",
    "hero.subtitle": "في مارس 2026، نفذت مؤسسة تسجي الخيرية بالتعاون مع شركائها ومتطوعيها المحليين مشروع توزيع مساعدات غذائية استهدف <mark>400 أسرة</mark> في قطاع غزة، ليستفيد منه <mark>1,868 فردًا</mark> في مدينة غزة، النصيرات، ودير البلح.",
    "hero.impactButton": "شاهد الأثر",
    "hero.projectButton": "تعرف على المشروع",
    "impact.eyebrow": "الأثر بالأرقام",
    "impact.title": "نتائج قابلة للقياس في لحظة إنسانية قاسية",
    "impact.description": "الأرقام هنا ليست للعرض فقط، بل لتوثيق وصول الغذاء إلى أسر حقيقية عبر عمل ميداني منظم.",
    "metric.families": "أسرة مستفيدة",
    "metric.people": "فردًا مستفيدًا",
    "metric.areas": "مناطق مستهدفة",
    "metric.volunteers": "متطوعًا ميدانيًا",
    "metric.meals": "حملة وجبات ساخنة سابقة",
    "metric.previous": "مستفيدًا سابقًا تقريبًا",
    "project.eyebrow": "نظرة عامة",
    "project.title": "المشروع كاستجابة منظمة، لا كتوزيع عابر",
    "project.lead": "هذا المشروع ليس مجرد توزيع طرود غذائية، بل نموذج إنساني منظم يقوم على الزيارات المنزلية، تقييم الاحتياج، تصنيف الأسر حسب عدد الأفراد، ثم توزيع المساعدات بشكل عادل وموثق.",
    "project.description": "تبدأ الحكاية من معاناة يومية تحت ضغط النزوح وندرة الغذاء، ثم تتحول إلى آلية تحقق ميداني وتعاون بين الشركاء والمتطوعين المحليين لضمان وصول الدعم إلى الأسر الأكثر احتياجًا بكرامة ووضوح.",
    "project.infoAria": "بيانات المشروع",
    "project.info.project": "المشروع",
    "project.info.foodAid": "توزيع مساعدات غذائية",
    "project.info.month": "الشهر",
    "project.info.march": "مارس 2026",
    "project.info.country": "الدولة",
    "project.info.palestine": "فلسطين",
    "project.info.region": "المنطقة",
    "project.info.gazaStrip": "قطاع غزة",
    "project.info.distribution": "رقم التوزيع",
    "partners.eyebrow": "الشركاء",
    "partners.title": "شبكة تعاون حول هدف واحد",
    "partners.tzuchi.alt": "مؤسسة تسجي / تزو تشي",
    "partners.tzuchi.role": "الشريك المنظم",
    "partners.tzuchi.name": "مؤسسة تسجي / تزو تشي",
    "partners.tzuchi.description": "الداعم والمنسق الرئيسي للمبادرة الإنسانية ومتابعة جودة التنفيذ.",
    "partners.mosque.alt": "المسجد الكبير في تايبيه",
    "partners.mosque.role": "شريك داعم",
    "partners.mosque.name": "المسجد الكبير في تايبيه",
    "partners.mosque.description": "شريك داعم في حشد الموارد وربط الجهود الإنسانية بالمجتمع.",
    "partners.school.alt": "مدرسة المناهل في تركيا",
    "partners.school.role": "شريك مجتمعي",
    "partners.school.name": "مدرسة المناهل في تركيا",
    "partners.school.description": "مساندة مجتمعية للمشروع ضمن شبكة تضامن عابرة للحدود.",
    "partners.volunteers.alt": "المتطوعون المحليون في غزة",
    "partners.volunteers.role": "الفريق الميداني",
    "partners.volunteers.name": "المتطوعون المحليون في غزة",
    "partners.volunteers.description": "الذراع الميدانية للتحقق، التجهيز، النقل، والتوزيع المباشر.",
    "areas.eyebrow": "النطاق الجغرافي",
    "areas.title": "أين وصلنا؟",
    "areas.description": "توزعت المساعدات على ثلاث مناطق في قطاع غزة وفق بيانات الأسر وحجم الاحتياج الموثق ميدانيًا.",
    "areas.listAria": "مناطق التوزيع",
    "areas.mapAria": "خريطة تفاعلية لمناطق التوزيع في قطاع غزة",
    "areas.stageAria": "خريطة تفاعلية لقطاع غزة",
    "areas.mapTitle": "خريطة التوزيع",
    "areas.mapAlt": "خريطة قطاع غزة توضح مناطق التوزيع: غزة، النصيرات، دير البلح",
    "areas.cardLabel": "منطقة التوزيع",
    "areas.gaza": "مدينة غزة",
    "areas.gazaShort": "غزة",
    "areas.nuseirat": "النصيرات",
    "areas.deir": "دير البلح",
    "areas.gazaAria": "مدينة غزة: 124 أسرة، 617 فردًا",
    "areas.nuseiratAria": "النصيرات: 94 أسرة، 473 فردًا",
    "areas.deirAria": "دير البلح: 182 أسرة، 778 فردًا",
    "unit.family": "أسرة",
    "unit.person": "فردًا",
    "unit.kg": "كغ",
    "unit.shekel": "شيكل",
    "fair.eyebrow": "عدالة التوزيع",
    "fair.title": "نموذج توزيع عادل حسب حجم الأسرة",
    "fair.description": "تم تصنيف الأسر المستفيدة إلى ثلاث فئات بناءً على عدد أفراد الأسرة لضمان توزيع أكثر عدالة وملاءمة للاحتياج.",
    "packages.eyebrow": "الغذاء",
    "packages.title": "مكونات الطرود الغذائية",
    "packages.category1": "الفئة الأولى",
    "packages.category2": "الفئة الثانية",
    "packages.category3": "الفئة الثالثة",
    "packages.small.title": "الأسر الصغيرة",
    "packages.small.subtitle": "أقل من خمسة أفراد",
    "packages.small.alt": "صورة طرد الأسر الصغيرة - الفئة الأولى",
    "packages.medium.title": "الأسر المتوسطة",
    "packages.medium.subtitle": "من ستة إلى سبعة أفراد",
    "packages.medium.alt": "صورة طرد الأسر المتوسطة - الفئة الثانية",
    "packages.large.title": "الأسر الكبيرة",
    "packages.large.subtitle": "ثمانية أفراد فأكثر",
    "packages.large.alt": "صورة طرد الأسر الكبيرة - الفئة الثالثة",
    "food.rice": "أرز",
    "food.flour": "دقيق",
    "food.oil": "زيت",
    "food.sugar": "سكر",
    "food.tomato": "صلصة طماطم",
    "food.yeast": "خميرة",
    "food.chickpeas": "حمص",
    "method.eyebrow": "آلية العمل",
    "method.title": "من التبرع إلى التوثيق الميداني",
    "method.step1": "جمع التبرعات",
    "method.step2": "التواصل مع الفريق المحلي",
    "method.step3": "مقارنة أسعار الموردين",
    "method.step4": "اختيار المورد الأنسب",
    "method.step5": "تشكيل فرق المتطوعين",
    "method.step6": "تدريب المتطوعين عن بعد",
    "method.step7": "تنفيذ الزيارات المنزلية",
    "method.step8": "تدقيق البيانات واعتمادها",
    "method.step9": "تجهيز الطرود الغذائية",
    "method.step10": "النقل والتوزيع الميداني",
    "method.step11": "التوثيق والمتابعة",
    "volunteers.eyebrow": "المتطوعون",
    "volunteers.title": "أبطال من الميدان",
    "volunteers.description": "تكوّن الفريق من 15 متطوعًا محليًا، تم توزيعهم على فرق ميدانية في مدينة غزة، النصيرات، ودير البلح، إضافة إلى فريق لوجستي مسؤول عن النقل والتجهيز.",
    "volunteers.note": "صور المتطوعين توثق جانبًا من الفريق المحلي الذي ساهم في تنفيذ الزيارات الميدانية والتوزيع.",
    "volunteers.fieldRole": "فريق ميداني",
    "volunteers.logisticsRole": "فريق لوجستي",
    "volunteers.gaza.title": "فريق مدينة غزة",
    "volunteers.gaza.count": "5 متطوعين",
    "volunteers.gaza.description": "ساهم الفريق في الزيارات المنزلية، التحقق من البيانات، وتوزيع المساعدات داخل مدينة غزة.",
    "volunteers.gaza.alt": "عضو من فريق مدينة غزة",
    "volunteers.nuseirat.title": "فريق النصيرات",
    "volunteers.nuseirat.count": "3 متطوعين",
    "volunteers.nuseirat.description": "عمل الفريق على الوصول للأسر المستفيدة في النصيرات وتوثيق الاحتياج ميدانيًا.",
    "volunteers.nuseirat.alt": "عضو من فريق النصيرات",
    "volunteers.deir.title": "فريق دير البلح",
    "volunteers.deir.count": "5 متطوعين",
    "volunteers.deir.description": "تابع الفريق أكبر عدد من الأسر المستفيدة ضمن هذا التوزيع في منطقة دير البلح.",
    "volunteers.deir.alt": "عضو من فريق دير البلح",
    "volunteers.logistics.title": "الفريق اللوجستي",
    "volunteers.logistics.count": "2 متطوعين",
    "volunteers.logistics.description": "تولى الفريق دعم عمليات النقل، التجهيز، والمتابعة اللوجستية لضمان وصول الطرود بشكل منظم.",
    "volunteers.logistics.alt": "عضو من الفريق اللوجستي",
    "stories.eyebrow": "الجانب الإنساني",
    "stories.title": "قصص من قلب غزة",
    "stories.badge": "قصة إنسانية",
    "stories.readMore": "اقرأ المزيد",
    "stories.close": "إغلاق القصة",
    "stories.family.title": "عائلة تبحث عن الأمان",
    "stories.family.summary": "بين الخيام والبيوت المهدمة، وصلت المساعدة إلى عائلة فقدت الكثير، لكنها ما زالت تتمسك بالأمل.",
    "stories.family.alt": "صورة توثق جانبًا من معاناة عائلة في غزة",
    "stories.mother.title": "أم تصنع الصمود",
    "stories.mother.summary": "أم تتحمل مسؤولية أسرتها في ظروف قاسية، وجدت في الطرد الغذائي سندًا مؤقتًا يخفف عنها عبء الأيام.",
    "stories.mother.alt": "صورة توثق صمود أم في غزة",
    "stories.volunteers.title": "متطوعون يحملون الرحمة",
    "stories.volunteers.summary": "لم يكن دور المتطوعين تعبئة استمارات فقط، بل كانوا شهودًا على المعاناة وجسرًا لوصول المساعدة بكرامة.",
    "stories.volunteers.alt": "صورة توثق جانبًا من عمل المتطوعين المحليين",
    "finance.eyebrow": "المساءلة",
    "finance.title": "الشفافية المالية",
    "finance.description": "يعرض هذا الملخص بنود الصرف الرئيسية كما وردت في بيانات المشروع، مع إبراز التكلفة الإجمالية والقيمة التقريبية بالدولار.",
    "finance.total": "الإجمالي",
    "finance.usd": "ما يعادل تقريبًا 15,641 دولار",
    "finance.chartAria": "ملخص المصروفات",
    "finance.food": "تكلفة المواد الغذائية",
    "finance.transportCentral": "النقل للمنطقة الوسطى ودير البلح",
    "finance.transportGaza": "النقل لمدينة غزة",
    "finance.packaging": "تغليف الطرود",
    "finance.misc": "مواصلات ونثريات",
    "finance.volunteerSupport": "دعم وتقدير المتطوعين",
    "gallery.eyebrow": "التوثيق البصري",
    "gallery.title": "معرض المشروع",
    "gallery.homeVisits": "الزيارات المنزلية",
    "gallery.preparing": "تجهيز الطرود",
    "gallery.packages": "الطرود الغذائية",
    "gallery.volunteers": "فريق المتطوعين",
    "gallery.transport": "النقل الميداني",
    "gallery.distribution": "لحظة التوزيع",
    "gallery.beneficiaries": "قصص المستفيدين",
    "gallery.partners": "شركاء المشروع",
    "cta.eyebrow": "استمرار الأثر",
    "cta.title": "معًا نستطيع أن نصل إلى المزيد",
    "cta.description": "كل مساهمة، مهما كانت صغيرة، يمكن أن تتحول إلى طعام حقيقي يصل إلى عائلة تحتاجه.",
    "cta.whatsappAria": "تواصل معنا عبر واتساب",
    "footer.description": "محفظة إنسانية توثق مشروع توزيع المساعدات الغذائية في غزة، مارس 2026، بلغة واضحة وشفافة.",
    "footer.quickLinks": "روابط سريعة",
    "footer.projectInfo": "بيانات المشروع",
    "footer.distribution": "رقم التوزيع 137",
    "footer.location": "قطاع غزة، فلسطين",
    "footer.date": "16 مارس 2026",
    "footer.creditPrefix": "تم تصميم وتطوير هذا الموقع بواسطة",
    "footer.creditName": "المهندس صلاح الدين سعيد أبو سيف",
    "footer.creditAria": "زيارة السيرة الذاتية للمهندس صلاح الدين سعيد أبو سيف",
    "footer.copyright": "© 2026 مؤسسة تسجي الخيرية. جميع الحقوق محفوظة.",
    "backToTop": "العودة إلى الأعلى",
    "lightbox.aria": "معرض الصور",
    "close": "إغلاق",
    "gallery.fallback": "صورة من المشروع"
  },
  zh: {
    "document.title": "慈濟基金會 | 加薩糧食援助發放",
    "document.description": "慈濟基金會 2026 年 3 月加薩糧食援助發放專案的人道紀錄網站。",
    "nav.aria": "主導覽",
    "brand.aria": "慈濟基金會",
    "brand.name": "慈濟基金會",
    "brand.logoAlt": "慈濟基金會標誌",
    "nav.home": "首頁",
    "nav.impact": "影響",
    "nav.project": "專案",
    "nav.method": "工作流程",
    "nav.packages": "食物包",
    "nav.stories": "故事",
    "nav.transparency": "透明度",
    "nav.gallery": "圖片集",
    "nav.contact": "聯絡我們",
    "language.aria": "選擇語言",
    "theme.dark": "深色模式",
    "theme.light": "淺色模式",
    "menu.open": "開啟選單",
    "menu.close": "關閉選單",
    "hero.badge": "第 137 次發放 | 2026 年 3 月 16 日",
    "hero.title": "慈濟基金會：把愛送到加薩心中",
    "hero.subtitle": "2026 年 3 月，慈濟基金會與合作夥伴及當地志工共同執行加薩糧食援助發放專案，協助加薩市、努塞拉特與代爾拜萊赫共 <mark>400 戶家庭</mark>，受益人數達 <mark>1,868 人</mark>。",
    "hero.impactButton": "查看影響",
    "hero.projectButton": "了解專案",
    "impact.eyebrow": "數據中的影響",
    "impact.title": "在艱難時刻中可衡量的人道成果",
    "impact.description": "這些數字不只是展示，而是記錄食物透過有組織的實地工作，真正送達有需要的家庭。",
    "metric.families": "受益家庭",
    "metric.people": "受益人數",
    "metric.areas": "目標地區",
    "metric.volunteers": "實地志工",
    "metric.meals": "過往熱食行動",
    "metric.previous": "過往受益人數約",
    "project.eyebrow": "專案概覽",
    "project.title": "這是一項有組織的回應，而不只是一次發放",
    "project.lead": "本專案不僅是發放食物包，更是一套有組織的人道模式：透過家戶訪視、需求評估、依家庭人數分類，並以公平且可追溯的方式發放援助。",
    "project.description": "故事從流離與糧食短缺下的日常苦難開始，並透過實地核查、合作夥伴與當地志工的協作，轉化為有尊嚴且清楚透明的援助抵達。",
    "project.infoAria": "專案資訊",
    "project.info.project": "專案",
    "project.info.foodAid": "糧食援助發放",
    "project.info.month": "月份",
    "project.info.march": "2026 年 3 月",
    "project.info.country": "國家",
    "project.info.palestine": "巴勒斯坦",
    "project.info.region": "地區",
    "project.info.gazaStrip": "加薩走廊",
    "project.info.distribution": "發放編號",
    "partners.eyebrow": "合作夥伴",
    "partners.title": "圍繞共同目標的合作網絡",
    "partners.tzuchi.alt": "慈濟基金會",
    "partners.tzuchi.role": "主辦夥伴",
    "partners.tzuchi.name": "慈濟基金會",
    "partners.tzuchi.description": "本倡議的人道支持與主要協調者，並持續追蹤執行品質。",
    "partners.mosque.alt": "台北清真寺",
    "partners.mosque.role": "支持夥伴",
    "partners.mosque.name": "台北清真寺",
    "partners.mosque.description": "協助匯聚資源，並將人道行動與社群支持連結起來。",
    "partners.school.alt": "土耳其 Al-Manahil 學校",
    "partners.school.role": "社群夥伴",
    "partners.school.name": "土耳其 Al-Manahil 學校",
    "partners.school.description": "在跨境互助網絡中，為本專案提供社群支持。",
    "partners.volunteers.alt": "加薩當地志工",
    "partners.volunteers.role": "實地團隊",
    "partners.volunteers.name": "加薩當地志工",
    "partners.volunteers.description": "負責核查、準備、運輸與現場直接發放的實地力量。",
    "areas.eyebrow": "地理範圍",
    "areas.title": "我們抵達了哪些地區？",
    "areas.description": "援助依據實地記錄的家庭資料與需求程度，發放至加薩走廊三個地區。",
    "areas.listAria": "發放地區",
    "areas.mapAria": "加薩走廊發放地區互動地圖",
    "areas.stageAria": "加薩走廊互動地圖",
    "areas.mapTitle": "發放地圖",
    "areas.mapAlt": "加薩走廊地圖，顯示加薩、努塞拉特與代爾拜萊赫發放地區",
    "areas.cardLabel": "發放地區",
    "areas.gaza": "加薩市",
    "areas.gazaShort": "加薩",
    "areas.nuseirat": "努塞拉特",
    "areas.deir": "代爾拜萊赫",
    "areas.gazaAria": "加薩市：124 戶家庭，617 人",
    "areas.nuseiratAria": "努塞拉特：94 戶家庭，473 人",
    "areas.deirAria": "代爾拜萊赫：182 戶家庭，778 人",
    "unit.family": "戶家庭",
    "unit.person": "人",
    "unit.kg": "公斤",
    "unit.shekel": "謝克爾",
    "fair.eyebrow": "公平發放",
    "fair.title": "依家庭規模建立公平發放模式",
    "fair.description": "受益家庭依家庭成員人數分為三類，以確保發放更公平並更貼近實際需求。",
    "packages.eyebrow": "糧食援助",
    "packages.title": "食物包內容",
    "packages.category1": "第一類",
    "packages.category2": "第二類",
    "packages.category3": "第三類",
    "packages.small.title": "小型家庭",
    "packages.small.subtitle": "少於五人",
    "packages.small.alt": "小型家庭第一類食物包照片",
    "packages.medium.title": "中型家庭",
    "packages.medium.subtitle": "六至七人",
    "packages.medium.alt": "中型家庭第二類食物包照片",
    "packages.large.title": "大型家庭",
    "packages.large.subtitle": "八人以上",
    "packages.large.alt": "大型家庭第三類食物包照片",
    "food.rice": "米",
    "food.flour": "麵粉",
    "food.oil": "食用油",
    "food.sugar": "糖",
    "food.tomato": "番茄醬",
    "food.yeast": "酵母",
    "food.chickpeas": "鷹嘴豆",
    "method.eyebrow": "工作流程",
    "method.title": "從捐助到實地記錄",
    "method.step1": "募集捐款",
    "method.step2": "聯繫當地團隊",
    "method.step3": "比較供應商價格",
    "method.step4": "選定最合適供應商",
    "method.step5": "組成志工團隊",
    "method.step6": "遠端培訓志工",
    "method.step7": "執行家戶訪視",
    "method.step8": "審核並確認資料",
    "method.step9": "準備食物包",
    "method.step10": "運輸與實地發放",
    "method.step11": "記錄與後續追蹤",
    "volunteers.eyebrow": "志工",
    "volunteers.title": "實地英雄",
    "volunteers.description": "團隊由 15 位當地志工組成，分布於加薩市、努塞拉特與代爾拜萊赫的實地小組，另有物流團隊負責運輸與準備。",
    "volunteers.note": "志工照片記錄了當地團隊參與實地訪視與發放的一部分。",
    "volunteers.fieldRole": "實地團隊",
    "volunteers.logisticsRole": "物流團隊",
    "volunteers.gaza.title": "加薩市團隊",
    "volunteers.gaza.count": "5 位志工",
    "volunteers.gaza.description": "團隊協助在加薩市進行家戶訪視、資料核查與援助發放。",
    "volunteers.gaza.alt": "加薩市團隊志工",
    "volunteers.nuseirat.title": "努塞拉特團隊",
    "volunteers.nuseirat.count": "3 位志工",
    "volunteers.nuseirat.description": "團隊前往努塞拉特受益家庭，並在現場記錄需求。",
    "volunteers.nuseirat.alt": "努塞拉特團隊志工",
    "volunteers.deir.title": "代爾拜萊赫團隊",
    "volunteers.deir.count": "5 位志工",
    "volunteers.deir.description": "團隊跟進本次發放中受益家庭數最多的代爾拜萊赫地區。",
    "volunteers.deir.alt": "代爾拜萊赫團隊志工",
    "volunteers.logistics.title": "物流團隊",
    "volunteers.logistics.count": "2 位志工",
    "volunteers.logistics.description": "團隊支援運輸、準備與物流追蹤，確保食物包有序送達。",
    "volunteers.logistics.alt": "物流團隊志工",
    "stories.eyebrow": "人道故事",
    "stories.title": "來自加薩心中的故事",
    "stories.badge": "人道故事",
    "stories.readMore": "閱讀更多",
    "stories.close": "關閉故事",
    "stories.family.title": "尋找安全的一家人",
    "stories.family.summary": "在帳篷與受損房屋之間，援助抵達了一個失去許多、仍緊握希望的家庭。",
    "stories.family.alt": "記錄加薩家庭困境的一張照片",
    "stories.mother.title": "一位母親撐起堅韌",
    "stories.mother.summary": "一位在艱難環境中承擔家庭責任的母親，從食物包中得到短暫卻真實的支持。",
    "stories.mother.alt": "記錄加薩母親堅韌的一張照片",
    "stories.volunteers.title": "承載慈悲的志工",
    "stories.volunteers.summary": "志工的角色不只是填寫表格，他們也是苦難的見證者，是讓援助有尊嚴抵達的橋梁。",
    "stories.volunteers.alt": "記錄當地志工工作的一張照片",
    "finance.eyebrow": "問責",
    "finance.title": "財務透明",
    "finance.description": "本摘要呈現專案資料中的主要支出項目，並標示總成本與約略美元金額。",
    "finance.total": "總計",
    "finance.usd": "約等於 15,641 美元",
    "finance.chartAria": "支出摘要",
    "finance.food": "食物材料成本",
    "finance.transportCentral": "中部地區與代爾拜萊赫運輸",
    "finance.transportGaza": "加薩市運輸",
    "finance.packaging": "食物包包裝",
    "finance.misc": "交通與雜支",
    "finance.volunteerSupport": "志工支持與致謝",
    "gallery.eyebrow": "影像記錄",
    "gallery.title": "專案圖片集",
    "gallery.homeVisits": "家戶訪視",
    "gallery.preparing": "食物包準備",
    "gallery.packages": "食物包",
    "gallery.volunteers": "志工團隊",
    "gallery.transport": "實地運輸",
    "gallery.distribution": "發放時刻",
    "gallery.beneficiaries": "受益者故事",
    "gallery.partners": "專案夥伴",
    "cta.eyebrow": "延續影響",
    "cta.title": "攜手讓援助抵達更多家庭",
    "cta.description": "每一份貢獻，無論大小，都可能成為送達有需要家庭的一份真實食物。",
    "cta.whatsappAria": "透過 WhatsApp 聯絡我們",
    "footer.description": "這是一個人道專案網站，以清楚透明的方式記錄 2026 年 3 月加薩糧食援助發放行動。",
    "footer.quickLinks": "快速連結",
    "footer.projectInfo": "專案資訊",
    "footer.distribution": "第 137 次發放",
    "footer.location": "巴勒斯坦，加薩走廊",
    "footer.date": "2026 年 3 月 16 日",
    "footer.creditPrefix": "本網站由",
    "footer.creditName": "工程師 Salah ElDin Saeed Abu Saif 設計與開發",
    "footer.creditAria": "瀏覽工程師 Salah ElDin Saeed Abu Saif 的個人履歷",
    "footer.copyright": "© 2026 慈濟基金會。版權所有。",
    "backToTop": "返回頂部",
    "lightbox.aria": "圖片集",
    "close": "關閉",
    "gallery.fallback": "專案圖片"
  },
  en: {
    "document.title": "Tzu Chi Foundation | Gaza Food Aid Distribution",
    "document.description": "A humanitarian portfolio for the Gaza food aid distribution project of March 2026 by Tzu Chi Foundation.",
    "nav.aria": "Main navigation",
    "brand.aria": "Tzu Chi Foundation",
    "brand.name": "Tzu Chi Foundation",
    "brand.logoAlt": "Tzu Chi Foundation logo",
    "nav.home": "Home",
    "nav.impact": "Impact",
    "nav.project": "Project",
    "nav.method": "Workflow",
    "nav.packages": "Food Packages",
    "nav.stories": "Stories",
    "nav.transparency": "Transparency",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact Us",
    "language.aria": "Change language",
    "theme.dark": "Dark Mode",
    "theme.light": "Light Mode",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "hero.badge": "Distribution No. 137 | 16 March 2026",
    "hero.title": "Tzu Chi Foundation: Compassion Reaching the Heart of Gaza",
    "hero.subtitle": "In March 2026, Tzu Chi Foundation, in cooperation with its partners and local volunteers, implemented a food aid distribution project that supported <mark>400 families</mark> in the Gaza Strip, benefiting <mark>1,868 people</mark> across Gaza City, Al-Nuseirat, and Deir al-Balah.",
    "hero.impactButton": "View Impact",
    "hero.projectButton": "Explore the Project",
    "impact.eyebrow": "Impact in Numbers",
    "impact.title": "Measurable Humanitarian Outcomes in a Difficult Moment",
    "impact.description": "These numbers are not just for display; they document food reaching real families through organized fieldwork.",
    "metric.families": "Beneficiary Families",
    "metric.people": "Beneficiary Individuals",
    "metric.areas": "Targeted Areas",
    "metric.volunteers": "Field Volunteers",
    "metric.meals": "Previous Hot Meal Campaigns",
    "metric.previous": "Approx. Previous Beneficiaries",
    "project.eyebrow": "Overview",
    "project.title": "An Organized Response, Not a One-Time Distribution",
    "project.lead": "This project is not merely a food package distribution; it is an organized humanitarian model based on home visits, needs assessment, family-size classification, and fair, documented aid delivery.",
    "project.description": "The story begins with daily hardship under displacement and food scarcity, then becomes a field verification process and a partnership effort to ensure aid reaches the most vulnerable families with dignity and transparency.",
    "project.infoAria": "Project details",
    "project.info.project": "Project",
    "project.info.foodAid": "Food Aid Distribution",
    "project.info.month": "Month",
    "project.info.march": "March 2026",
    "project.info.country": "Country",
    "project.info.palestine": "Palestine",
    "project.info.region": "Area",
    "project.info.gazaStrip": "Gaza Strip",
    "project.info.distribution": "Distribution No.",
    "partners.eyebrow": "Partners",
    "partners.title": "A Network of Collaboration Around One Goal",
    "partners.tzuchi.alt": "Tzu Chi Foundation",
    "partners.tzuchi.role": "Organizing Partner",
    "partners.tzuchi.name": "Tzu Chi Foundation",
    "partners.tzuchi.description": "The main supporter and coordinator of the humanitarian initiative and implementation quality follow-up.",
    "partners.mosque.alt": "Taipei Grand Mosque",
    "partners.mosque.role": "Supporting Partner",
    "partners.mosque.name": "Taipei Grand Mosque",
    "partners.mosque.description": "A supporting partner in mobilizing resources and connecting humanitarian efforts with the community.",
    "partners.school.alt": "Al-Manahil School in Turkey",
    "partners.school.role": "Community Partner",
    "partners.school.name": "Al-Manahil School in Turkey",
    "partners.school.description": "Community-based support within a cross-border solidarity network.",
    "partners.volunteers.alt": "Local Volunteers in Gaza",
    "partners.volunteers.role": "Field Team",
    "partners.volunteers.name": "Local Volunteers in Gaza",
    "partners.volunteers.description": "The field arm for verification, preparation, transportation, and direct distribution.",
    "areas.eyebrow": "Geographic Scope",
    "areas.title": "Where Did We Reach?",
    "areas.description": "Aid was distributed across three areas in the Gaza Strip based on family data and field-documented levels of need.",
    "areas.listAria": "Distribution areas",
    "areas.mapAria": "Interactive map of distribution areas in the Gaza Strip",
    "areas.stageAria": "Interactive Gaza Strip map",
    "areas.mapTitle": "Distribution Map",
    "areas.mapAlt": "Map of the Gaza Strip showing distribution areas: Gaza, Al-Nuseirat, and Deir al-Balah",
    "areas.cardLabel": "Distribution Area",
    "areas.gaza": "Gaza City",
    "areas.gazaShort": "Gaza",
    "areas.nuseirat": "Al-Nuseirat",
    "areas.deir": "Deir al-Balah",
    "areas.gazaAria": "Gaza City: 124 families, 617 people",
    "areas.nuseiratAria": "Al-Nuseirat: 94 families, 473 people",
    "areas.deirAria": "Deir al-Balah: 182 families, 778 people",
    "unit.family": "families",
    "unit.person": "people",
    "unit.kg": "kg",
    "unit.shekel": "ILS",
    "fair.eyebrow": "Fair Distribution",
    "fair.title": "A Fair Distribution Model Based on Family Size",
    "fair.description": "Beneficiary families were classified into three categories based on family size to ensure a more fair and needs-based distribution.",
    "packages.eyebrow": "Food Aid",
    "packages.title": "Food Package Contents",
    "packages.category1": "Category One",
    "packages.category2": "Category Two",
    "packages.category3": "Category Three",
    "packages.small.title": "Small Families",
    "packages.small.subtitle": "Fewer than five members",
    "packages.small.alt": "Food package photo for small families - category one",
    "packages.medium.title": "Medium Families",
    "packages.medium.subtitle": "Six to seven members",
    "packages.medium.alt": "Food package photo for medium families - category two",
    "packages.large.title": "Large Families",
    "packages.large.subtitle": "Eight members or more",
    "packages.large.alt": "Food package photo for large families - category three",
    "food.rice": "Rice",
    "food.flour": "Flour",
    "food.oil": "Oil",
    "food.sugar": "Sugar",
    "food.tomato": "Tomato Paste",
    "food.yeast": "Yeast",
    "food.chickpeas": "Chickpeas",
    "method.eyebrow": "Workflow",
    "method.title": "From Donation to Field Documentation",
    "method.step1": "Collecting Donations",
    "method.step2": "Coordinating with the Local Team",
    "method.step3": "Comparing Supplier Prices",
    "method.step4": "Selecting the Best Supplier",
    "method.step5": "Forming Volunteer Teams",
    "method.step6": "Remote Volunteer Training",
    "method.step7": "Conducting Home Visits",
    "method.step8": "Reviewing and Approving Data",
    "method.step9": "Preparing Food Packages",
    "method.step10": "Transportation and Field Distribution",
    "method.step11": "Documentation and Follow-Up",
    "volunteers.eyebrow": "Volunteers",
    "volunteers.title": "Heroes from the Field",
    "volunteers.description": "The team consisted of 15 local volunteers distributed across field teams in Gaza City, Al-Nuseirat, and Deir al-Balah, in addition to a logistics team responsible for transport and preparation.",
    "volunteers.note": "Volunteer photos document part of the local team that contributed to field visits and distribution.",
    "volunteers.fieldRole": "Field Team",
    "volunteers.logisticsRole": "Logistics Team",
    "volunteers.gaza.title": "Gaza City Team",
    "volunteers.gaza.count": "5 volunteers",
    "volunteers.gaza.description": "The team contributed to home visits, data verification, and aid distribution inside Gaza City.",
    "volunteers.gaza.alt": "Member of the Gaza City team",
    "volunteers.nuseirat.title": "Al-Nuseirat Team",
    "volunteers.nuseirat.count": "3 volunteers",
    "volunteers.nuseirat.description": "The team worked to reach beneficiary families in Al-Nuseirat and document needs in the field.",
    "volunteers.nuseirat.alt": "Member of the Al-Nuseirat team",
    "volunteers.deir.title": "Deir al-Balah Team",
    "volunteers.deir.count": "5 volunteers",
    "volunteers.deir.description": "The team followed up with the largest number of beneficiary families in this distribution within Deir al-Balah.",
    "volunteers.deir.alt": "Member of the Deir al-Balah team",
    "volunteers.logistics.title": "Logistics Team",
    "volunteers.logistics.count": "2 volunteers",
    "volunteers.logistics.description": "The team supported transportation, preparation, and logistics follow-up to ensure packages arrived in an organized way.",
    "volunteers.logistics.alt": "Member of the logistics team",
    "stories.eyebrow": "Human Side",
    "stories.title": "Stories from the Heart of Gaza",
    "stories.badge": "Human Story",
    "stories.readMore": "Read More",
    "stories.close": "Close story",
    "stories.family.title": "A Family Searching for Safety",
    "stories.family.summary": "Among tents and damaged homes, aid reached a family that had lost so much, yet still held on to hope.",
    "stories.family.alt": "Photo documenting part of a family's hardship in Gaza",
    "stories.mother.title": "A Mother Shaping Resilience",
    "stories.mother.summary": "A mother carrying the responsibility of her family in harsh conditions found temporary support in the food package, easing the burden of difficult days.",
    "stories.mother.alt": "Photo documenting a mother's resilience in Gaza",
    "stories.volunteers.title": "Volunteers Carrying Compassion",
    "stories.volunteers.summary": "The volunteers' role was not limited to filling forms; they witnessed hardship and became a bridge for aid to arrive with dignity.",
    "stories.volunteers.alt": "Photo documenting part of the work of local volunteers",
    "finance.eyebrow": "Accountability",
    "finance.title": "Financial Transparency",
    "finance.description": "This summary presents the main spending items as reported in the project data, highlighting the total cost and approximate value in USD.",
    "finance.total": "Total",
    "finance.usd": "Approximate equivalent: 15,641 USD",
    "finance.chartAria": "Expense summary",
    "finance.food": "Food Items Cost",
    "finance.transportCentral": "Transport to Central Area and Deir al-Balah",
    "finance.transportGaza": "Transport to Gaza City",
    "finance.packaging": "Package Wrapping",
    "finance.misc": "Transportation and Miscellaneous",
    "finance.volunteerSupport": "Volunteer Support and Appreciation",
    "gallery.eyebrow": "Visual Documentation",
    "gallery.title": "Gallery",
    "gallery.homeVisits": "Home Visits",
    "gallery.preparing": "Package Preparation",
    "gallery.packages": "Food Packages",
    "gallery.volunteers": "Volunteer Team",
    "gallery.transport": "Field Transportation",
    "gallery.distribution": "Distribution Moment",
    "gallery.beneficiaries": "Beneficiary Stories",
    "gallery.partners": "Project Partners",
    "cta.eyebrow": "Continuing the Impact",
    "cta.title": "Together, We Can Reach More",
    "cta.description": "Every contribution, no matter how small, can become real food reaching a family in need.",
    "cta.whatsappAria": "Contact us via WhatsApp",
    "footer.description": "A humanitarian portfolio documenting the Gaza food aid distribution project of March 2026 in a clear and transparent way.",
    "footer.quickLinks": "Quick Links",
    "footer.projectInfo": "Project Details",
    "footer.distribution": "Distribution No. 137",
    "footer.location": "Gaza Strip, Palestine",
    "footer.date": "16 March 2026",
    "footer.creditPrefix": "Designed and developed by",
    "footer.creditName": "Eng. Salah ElDin Saeed Abu Saif",
    "footer.creditAria": "Visit the profile of Eng. Salah ElDin Saeed Abu Saif",
    "footer.copyright": "© 2026 Tzu Chi Foundation. All rights reserved.",
    "backToTop": "Back to top",
    "lightbox.aria": "Gallery",
    "close": "Close",
    "gallery.fallback": "Project photo"
  }
};

const storyData = {
  family: {
    image: "img/عائلة تبحث عن الأمان.png",
    ar: {
      title: "عائلة تبحث عن الأمان",
      kicker: "قصة من قلب غزة",
      summary: "بين الخيام والبيوت المهدمة، وصلت المساعدة إلى عائلة فقدت الكثير، لكنها ما زالت تتمسك بالأمل.",
      imageAlt: "صورة توثق جانبًا من معاناة عائلة في غزة",
      details: [
        "في ظل ظروف النزوح وفقدان الاستقرار، تعيش العديد من العائلات في غزة بين البيوت المتضررة والخيام المؤقتة، وهي تحاول أن تحافظ على الحد الأدنى من الأمان اليومي. لم تكن المساعدة الغذائية مجرد طرد يصل إلى باب الأسرة، بل كانت رسالة طمأنينة بأن هناك من يتذكرهم ويسعى للوصول إليهم رغم صعوبة الواقع.",
        "اعتمد المشروع على الزيارات المنزلية وتقييم الاحتياج قبل التوزيع، لضمان وصول المساعدة إلى الأسر التي تواجه ظروفًا قاسية. وبالنسبة لهذه العائلة، مثّل الطرد الغذائي دعمًا عاجلًا يخفف عبء البحث اليومي عن الطعام، ويمنح أفراد الأسرة فرصة صغيرة لالتقاط أنفاسهم وسط أيام طويلة من القلق وعدم اليقين.",
        "هذه القصة تعكس جانبًا من أثر المشروع في تحويل الدعم إلى أمان مؤقت وكرامة محفوظة."
      ]
    },
    zh: {
      title: "尋找安全的一家人",
      kicker: "來自加薩心中的故事",
      summary: "在帳篷與受損房屋之間，援助抵達了一個失去許多、仍緊握希望的家庭。",
      imageAlt: "記錄加薩家庭困境的一張照片",
      details: [
        "在流離失所與缺乏穩定生活的處境中，加薩許多家庭住在受損房屋與臨時帳篷之間，努力維持日常最基本的安全感。糧食援助不只是一份送到門口的食物包，更是一份安定的訊息：即使現實艱難，仍有人記得他們並努力抵達。",
        "本專案在發放前透過家戶訪視與需求評估，確保援助送達處境嚴峻的家庭。對這個家庭而言，食物包是一份即時支持，減輕每天尋找食物的壓力，也讓家人在漫長的不安中獲得片刻喘息。",
        "這個故事呈現了專案如何把支持轉化為暫時的安全感與被守護的尊嚴。"
      ]
    },
    en: {
      title: "A Family Searching for Safety",
      kicker: "A Story from the Heart of Gaza",
      summary: "Among tents and damaged homes, aid reached a family that had lost so much, yet still held on to hope.",
      imageAlt: "Photo documenting part of a family's hardship in Gaza",
      details: [
        "In the midst of displacement and the loss of stability, many families in Gaza live between damaged homes and temporary shelters, trying to preserve a minimum level of daily safety. The food aid was not merely a package delivered to a household; it was a message of reassurance that someone remembers them and is trying to reach them despite the harsh reality.",
        "The project relied on home visits and needs assessment before distribution to ensure that support reached families facing severe conditions. For this family, the food package represented urgent support that reduced the daily burden of searching for food and offered a brief moment of relief amid long days of uncertainty.",
        "This story reflects how humanitarian support can become temporary safety and preserved dignity."
      ]
    }
  },
  mother: {
    image: "img/أم تصنع الصمود.png",
    ar: {
      title: "أم تصنع الصمود",
      kicker: "قوة وسط الظروف الصعبة",
      summary: "أم تتحمل مسؤولية أسرتها في ظروف قاسية، وجدت في الطرد الغذائي سندًا مؤقتًا يخفف عنها عبء الأيام.",
      imageAlt: "صورة توثق صمود أم في غزة",
      details: [
        "وسط ظروف النزوح وارتفاع صعوبة توفير الاحتياجات الأساسية، تتحمل الأمهات في غزة أعباءً مضاعفة في حماية أسرهن وتدبير الطعام والحفاظ على التماسك النفسي داخل البيت أو الخيمة. هذه القصة تمثل أمًا تحاول أن تصنع الصمود كل يوم، رغم قلة الموارد وتغيّر الأسعار وصعوبة الوصول إلى الاحتياجات الضرورية.",
        "وصول الطرد الغذائي لم يكن حلًا كاملًا لكل المعاناة، لكنه كان سندًا حقيقيًا في لحظة حرجة. احتوى الطرد على مواد أساسية تساعد الأسرة على إعداد وجبات بسيطة، وتخفف الضغط اليومي عن الأم التي تحمل مسؤولية كبيرة في ظروف غير مستقرة.",
        "هذه القصة تذكّر بأن المساعدة الإنسانية حين تصل بكرامة، تمنح الأسرة شعورًا بأنها ليست وحدها."
      ]
    },
    zh: {
      title: "一位母親撐起堅韌",
      kicker: "艱難處境中的力量",
      summary: "一位在艱難環境中承擔家庭責任的母親，從食物包中得到短暫卻真實的支持。",
      imageAlt: "記錄加薩母親堅韌的一張照片",
      details: [
        "在流離失所、基本生活需求越來越難以取得的處境中，加薩的母親承擔著加倍的壓力：保護家人、安排食物，也在家中或帳篷裡維持心理上的穩定。這個故事代表一位母親，即使資源稀少、物價波動、取得必需品困難，仍每天努力撐起家庭。",
        "食物包的抵達無法完全解決所有苦難，卻在關鍵時刻成為真實支撐。食物包中的基本物資能協助家庭準備簡單餐食，也減輕母親在不穩定生活中每天承受的壓力。",
        "這個故事提醒我們，當人道援助以尊嚴抵達，家庭會感受到自己並不孤單。"
      ]
    },
    en: {
      title: "A Mother Shaping Resilience",
      kicker: "Strength in Difficult Conditions",
      summary: "A mother carrying the responsibility of her family in harsh conditions found temporary support in the food package, easing the burden of difficult days.",
      imageAlt: "Photo documenting a mother's resilience in Gaza",
      details: [
        "Under displacement, rising hardship, and the difficulty of securing basic needs, mothers in Gaza carry multiplied responsibilities: protecting their families, providing food, and preserving emotional stability within a home or shelter. This story represents a mother who tries to create resilience every day despite limited resources and unstable conditions.",
        "The arrival of the food package was not a complete solution to all hardship, but it was meaningful support at a critical moment. It included essential items that help the family prepare simple meals and reduce the daily pressure on a mother carrying a heavy responsibility.",
        "This story reminds us that when humanitarian aid arrives with dignity, it helps families feel they are not alone."
      ]
    }
  },
  volunteers: {
    image: "img/متطوعين.png",
    ar: {
      title: "متطوعون يحملون الرحمة",
      kicker: "أبطال من الميدان",
      summary: "لم يكن دور المتطوعين تعبئة استمارات فقط، بل كانوا شهودًا على المعاناة وجسرًا لوصول المساعدة بكرامة.",
      imageAlt: "صورة توثق جانبًا من عمل المتطوعين المحليين",
      details: [
        "تكوّن الفريق الميداني من متطوعين محليين توزعوا على مدينة غزة، النصيرات، ودير البلح، إضافة إلى فريق لوجستي مسؤول عن النقل والتجهيز. عمل المتطوعون على تنفيذ الزيارات المنزلية، جمع البيانات، توثيق الاحتياج، ومتابعة وصول الطرود إلى الأسر المستفيدة.",
        "كان دورهم يتجاوز الجانب التنظيمي؛ فقد كانوا الأقرب إلى قصص الناس، يسمعون التفاصيل، يرون صعوبة الواقع، ويساهمون في تحويل الدعم إلى فعل إنساني ملموس. بجهودهم، تحولت القوائم والأرقام إلى وصول حقيقي للعائلات، وتم تنفيذ التوزيع بطريقة أكثر عدالة وتنظيمًا.",
        "المتطوعون هم الجسر الذي ربط بين نية العطاء واحتياج الأسر على الأرض."
      ]
    },
    zh: {
      title: "承載慈悲的志工",
      kicker: "實地英雄",
      summary: "志工的角色不只是填寫表格，他們也是苦難的見證者，是讓援助有尊嚴抵達的橋梁。",
      imageAlt: "記錄當地志工工作的一張照片",
      details: [
        "實地團隊由當地志工組成，分布於加薩市、努塞拉特與代爾拜萊赫，另有物流團隊負責運輸與準備。志工執行家戶訪視、蒐集資料、記錄需求，並跟進食物包是否抵達受益家庭。",
        "他們的角色超越了行政與組織工作；他們最接近人們的故事，聽見細節、看見現實的困難，也協助把支持轉化為具體的人道行動。透過他們的努力，名單與數字成為家庭真正收到援助的瞬間，發放也因此更公平、更有秩序。",
        "志工是連結善意與地面需求的橋梁。"
      ]
    },
    en: {
      title: "Volunteers Carrying Compassion",
      kicker: "Heroes from the Field",
      summary: "The volunteers' role was not limited to filling forms; they witnessed hardship and became a bridge for aid to arrive with dignity.",
      imageAlt: "Photo documenting part of the work of local volunteers",
      details: [
        "The field team consisted of local volunteers distributed across Gaza City, Al-Nuseirat, and Deir al-Balah, in addition to a logistics team responsible for transportation and preparation. Volunteers carried out home visits, collected data, documented needs, and followed up on the delivery of packages to beneficiary families.",
        "Their role went beyond organization; they were closest to people's stories, listening to details, witnessing the difficult reality, and helping transform support into a tangible humanitarian action. Through their efforts, lists and numbers became real access for families, and the distribution was carried out in a more fair and organized manner.",
        "The volunteers were the bridge between the intention to give and the needs of families on the ground."
      ]
    }
  }
};

const regionData = {
  gaza: {
    families: 124,
    people: 617,
    ar: {
      title: "مدينة غزة",
      description: "منطقة رئيسية ضمن نطاق التوزيع"
    },
    zh: {
      title: "加薩市",
      description: "本次發放範圍中的主要地區"
    },
    en: {
      title: "Gaza City",
      description: "A primary area within the distribution scope"
    }
  },
  nuseirat: {
    families: 94,
    people: 473,
    ar: {
      title: "النصيرات",
      description: "منطقة مستهدفة وفق حجم الاحتياج الموثق"
    },
    zh: {
      title: "努塞拉特",
      description: "依實地記錄需求納入的目標地區"
    },
    en: {
      title: "Al-Nuseirat",
      description: "A targeted area based on field-documented needs"
    }
  },
  deir: {
    families: 182,
    people: 778,
    ar: {
      title: "دير البلح",
      description: "أكبر عدد من الأسر المستفيدة ضمن هذا التوزيع"
    },
    zh: {
      title: "代爾拜萊赫",
      description: "本次發放中受益家庭數最多的地區"
    },
    en: {
      title: "Deir al-Balah",
      description: "The area with the largest number of beneficiary families in this distribution"
    }
  }
};

function getTranslation(key, lang = currentLanguage) {
  const language = normalizeLanguage(lang);
  return translations[language]?.[key] ?? translations.ar[key] ?? "";
}

function normalizeLanguage(lang) {
  return lang === "zh" || lang === "en" || lang === "ar" ? lang : "ar";
}

function getStoredLanguage() {
  try {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return storedLanguage === "zh" || storedLanguage === "en" || storedLanguage === "ar" ? storedLanguage : null;
  } catch (error) {
    return null;
  }
}

function updateLanguageUI(lang) {
  const language = normalizeLanguage(lang);
  const info = languageLabels[language];

  languageOptions.forEach((option) => {
    const isActive = option.dataset.lang === language;
    option.classList.toggle("is-active", isActive);
    option.setAttribute("aria-selected", String(isActive));
  });

  if (languageCurrentCode) {
    languageCurrentCode.textContent = info.code;
  }

  if (languageCurrentLabel) {
    languageCurrentLabel.textContent = info.label;
  }
}

function closeLanguageDropdown() {
  if (!languageDropdownToggle || !languageDropdownMenu) {
    return;
  }

  languageDropdownToggle.setAttribute("aria-expanded", "false");
  languageDropdownMenu.hidden = true;
}

function openLanguageDropdown() {
  if (!languageDropdownToggle || !languageDropdownMenu) {
    return;
  }

  languageDropdownToggle.setAttribute("aria-expanded", "true");
  languageDropdownMenu.hidden = false;
}

function toggleLanguageDropdown() {
  const isOpen = languageDropdownToggle?.getAttribute("aria-expanded") === "true";

  if (isOpen) {
    closeLanguageDropdown();
  } else {
    openLanguageDropdown();
  }
}

function translatePage(lang) {
  const language = normalizeLanguage(lang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getTranslation(element.dataset.i18n, language);
    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = getTranslation(element.dataset.i18nHtml, language);
    if (value) {
      element.innerHTML = value;
    }
  });

  [
    ["i18nAriaLabel", "aria-label"],
    ["i18nAlt", "alt"],
    ["i18nPlaceholder", "placeholder"],
    ["i18nTitle", "title"],
    ["i18nDataCaption", "data-caption"]
  ].forEach(([datasetKey, attributeName]) => {
    document.querySelectorAll(`[data-${datasetKey.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}]`).forEach((element) => {
      const value = getTranslation(element.dataset[datasetKey], language);
      if (value) {
        element.setAttribute(attributeName, value);
      }
    });
  });

  document.title = getTranslation("document.title", language);
  document.querySelector('meta[name="description"]')?.setAttribute("content", getTranslation("document.description", language));
}

function applyLanguage(lang, shouldSave = false) {
  const nextLanguage = normalizeLanguage(lang);
  currentLanguage = nextLanguage;

  document.documentElement.lang = nextLanguage === "zh" ? "zh-Hant" : nextLanguage;
  document.documentElement.dir = nextLanguage === "ar" ? "rtl" : "ltr";

  translatePage(nextLanguage);
  updateLanguageUI(nextLanguage);
  updateThemeToggle(document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark");
  menuToggle?.setAttribute("aria-label", getTranslation(menuToggle?.getAttribute("aria-expanded") === "true" ? "menu.close" : "menu.open"));
  updateRegionInfo(selectedRegion, true);

  if (currentStoryKey && storyModal && !storyModal.hidden) {
    openStoryModal(currentStoryKey, lastStoryTrigger);
  }

  if (!lightbox?.hidden && lightboxCaption && lightboxLabel) {
    const caption = lightboxCaption.textContent;
    lightboxLabel.textContent = caption;
  }

  if (shouldSave) {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    } catch (error) {
      // Language still changes even when storage is unavailable.
    }
  }
}

function initializeLanguage() {
  applyLanguage(getStoredLanguage() || "ar");
}

function getRegionColor(region) {
  const regionElement = document.querySelector(`.area-card[data-region="${region}"]`);
  return regionElement ? getComputedStyle(regionElement).getPropertyValue("--region-color").trim() : "";
}

function updateRegionInfo(region, shouldPersist = false) {
  const data = regionData[region];

  if (!data) {
    return;
  }

  if (shouldPersist) {
    selectedRegion = region;
  }

  regionStateItems.forEach((item) => {
    const isMatch = item.dataset.region === region;
    item.classList.toggle("is-active", isMatch);

    if (item.matches("button, .area-card, .map-region")) {
      item.setAttribute("aria-pressed", String(isMatch));
    }
  });

  const localizedData = data[currentLanguage] || data.ar;

  if (mapInfoTitle) {
    mapInfoTitle.textContent = localizedData.title;
  }

  if (mapInfoFamilies) {
    mapInfoFamilies.textContent = formatNumber(data.families);
  }

  if (mapInfoPeople) {
    mapInfoPeople.textContent = formatNumber(data.people);
  }

  if (mapInfoDescription) {
    mapInfoDescription.textContent = localizedData.description;
  }

  if (mapInfoPanel) {
    mapInfoPanel.style.setProperty("--active-region-color", getRegionColor(region));
    mapInfoPanel.classList.remove("is-updating");
    window.requestAnimationFrame(() => {
      mapInfoPanel.classList.add("is-updating");
    });
  }
}

function initializeRegionMap() {
  if (!regionTriggers.length) {
    return;
  }

  updateRegionInfo(selectedRegion, true);

  regionTriggers.forEach((trigger) => {
    const region = trigger.dataset.region;

    trigger.addEventListener("mouseenter", () => updateRegionInfo(region));
    trigger.addEventListener("focus", () => updateRegionInfo(region));
    trigger.addEventListener("mouseleave", () => updateRegionInfo(selectedRegion));
    trigger.addEventListener("blur", () => updateRegionInfo(selectedRegion));

    trigger.addEventListener("click", () => updateRegionInfo(region, true));
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        updateRegionInfo(region, true);
      }
    });
  });
}

function getStoredTheme() {
  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme === "light" || storedTheme === "dark" ? storedTheme : null;
  } catch (error) {
    return null;
  }
}

function updateThemeToggle(theme) {
  if (!themeToggle) {
    return;
  }

  const isLight = theme === "light";
  const label = isLight ? getTranslation("theme.light") : getTranslation("theme.dark");

  themeToggle.setAttribute("aria-pressed", String(isLight));
  themeToggle.setAttribute("aria-label", label);

  if (themeToggleIcon) {
    themeToggleIcon.textContent = isLight ? "☀️" : "🌙";
  }

  if (themeToggleText) {
    themeToggleText.textContent = label;
  }
}

function applyTheme(theme, shouldSave = false) {
  const nextTheme = theme === "light" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", nextTheme);
  updateThemeToggle(nextTheme);

  if (shouldSave) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch (error) {
      // Theme still changes even when storage is unavailable.
    }
  }
}

function initializeTheme() {
  const storedTheme = getStoredTheme();
  applyTheme(storedTheme || "dark");
}

initializeLanguage();
initializeTheme();

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    applyLanguage(option.dataset.lang, true);
    closeLanguageDropdown();
    languageDropdownToggle?.focus();
  });
});

languageDropdownToggle?.addEventListener("click", toggleLanguageDropdown);

document.addEventListener("click", (event) => {
  if (!languageDropdown?.contains(event.target)) {
    closeLanguageDropdown();
  }
});

themeToggle?.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  applyTheme(currentTheme === "light" ? "dark" : "light", true);
});

initializeRegionMap();

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function animateCounter(counter) {
  const target = Number(counter.dataset.target);
  const duration = 1600;
  const startTime = performance.now();

  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);

    counter.textContent = formatNumber(current);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      counter.textContent = formatNumber(target);
    }
  }

  requestAnimationFrame(update);
}

function startCounters() {
  if (countersStarted) {
    return;
  }

  countersStarted = true;
  counters.forEach(animateCounter);
  counterObserver?.disconnect();
}

function isElementInViewport(element) {
  if (!element) {
    return false;
  }

  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < viewportHeight * 0.72 && rect.bottom > viewportHeight * 0.18;
}

function checkCounterFallback() {
  if (isElementInViewport(impactSection)) {
    startCounters();
  }
}

function closeMenu() {
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", getTranslation("menu.open"));
  navLinks?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", getTranslation(isOpen ? "menu.open" : "menu.close"));
  navLinks?.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", !isOpen);
});

navItems.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

document.querySelectorAll('a[href="#impact"]').forEach((link) => {
  link.addEventListener("click", () => {
    window.setTimeout(startCounters, 260);
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !countersStarted) {
        startCounters();
      }
    });
  },
  { threshold: 0.35 }
);

if (impactSection) {
  counterObserver.observe(impactSection);
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navItems.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { rootMargin: "-42% 0px -48% 0px" }
);

document.querySelectorAll("main section[id]").forEach((section) => {
  sectionObserver.observe(section);
});

window.addEventListener("scroll", () => {
  backToTop?.classList.toggle("is-visible", window.scrollY > 620);
  checkCounterFallback();
});

window.addEventListener("load", checkCounterFallback);
window.addEventListener("hashchange", () => {
  window.setTimeout(checkCounterFallback, 320);
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function openLightbox(caption) {
  lightboxCaption.textContent = caption;
  lightboxLabel.textContent = caption;
  lightbox.hidden = false;
  document.body.classList.add("lightbox-open");
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.classList.remove("lightbox-open");
}

function renderStoryDetails(paragraphs) {
  if (!storyModalDetails) {
    return;
  }

  storyModalDetails.replaceChildren(
    ...paragraphs.map((paragraphText) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = paragraphText;
      return paragraph;
    })
  );
}

function openStoryModal(storyKey, trigger) {
  const story = storyData[storyKey];
  const localizedStory = story?.[currentLanguage] || story?.ar;

  if (!story || !localizedStory || !storyModal) {
    return;
  }

  currentStoryKey = storyKey;
  lastStoryTrigger = trigger;

  if (storyModalImage) {
    storyModalImage.src = story.image;
    storyModalImage.alt = localizedStory.imageAlt;
  }

  if (storyModalKicker) {
    storyModalKicker.textContent = localizedStory.kicker;
  }

  if (storyModalTitle) {
    storyModalTitle.textContent = localizedStory.title;
  }

  if (storyModalSummary) {
    storyModalSummary.textContent = localizedStory.summary;
  }

  renderStoryDetails(localizedStory.details);
  storyModal.hidden = false;
  document.body.classList.add("story-modal-open");
  storyModal.querySelector(".story-modal-close")?.focus();
}

function closeStoryModal() {
  if (!storyModal || storyModal.hidden) {
    return;
  }

  storyModal.hidden = true;
  document.body.classList.remove("story-modal-open");

  if (storyModalImage) {
    storyModalImage.removeAttribute("src");
    storyModalImage.alt = "";
  }

  lastStoryTrigger?.focus();
  lastStoryTrigger = null;
  currentStoryKey = null;
}

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    openLightbox(item.dataset.caption || getTranslation("gallery.fallback"));
  });
});

lightboxClose?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

storyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openStoryModal(button.dataset.story, button);
  });
});

storyModalCloseTriggers.forEach((trigger) => {
  trigger.addEventListener("click", closeStoryModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLanguageDropdown();
    closeMenu();
    closeStoryModal();
    if (!lightbox?.hidden) {
      closeLightbox();
    }
  }
});
