const THEME_STORAGE_KEY = "tsuchi-theme";
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleIcon = document.querySelector(".theme-toggle-icon");
const themeToggleText = document.querySelector(".theme-toggle-text");
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

const storyData = {
  family: {
    title: "عائلة تبحث عن الأمان",
    kicker: "قصة من قلب غزة",
    summary: "بين الخيام والبيوت المهدمة، وصلت المساعدة إلى عائلة فقدت الكثير، لكنها ما زالت تتمسك بالأمل.",
    image: "img/عائلة تبحث عن الأمان.png",
    imageAlt: "صورة توثق جانبًا من معاناة عائلة في غزة",
    details: [
      "في ظل ظروف النزوح وفقدان الاستقرار، تعيش العديد من العائلات في غزة بين البيوت المتضررة والخيام المؤقتة، وهي تحاول أن تحافظ على الحد الأدنى من الأمان اليومي. لم تكن المساعدة الغذائية مجرد طرد يصل إلى باب الأسرة، بل كانت رسالة طمأنينة بأن هناك من يتذكرهم ويسعى للوصول إليهم رغم صعوبة الواقع.",
      "اعتمد المشروع على الزيارات المنزلية وتقييم الاحتياج قبل التوزيع، لضمان وصول المساعدة إلى الأسر التي تواجه ظروفًا قاسية. وبالنسبة لهذه العائلة، مثّل الطرد الغذائي دعمًا عاجلًا يخفف عبء البحث اليومي عن الطعام، ويمنح أفراد الأسرة فرصة صغيرة لالتقاط أنفاسهم وسط أيام طويلة من القلق وعدم اليقين.",
      "هذه القصة تعكس جانبًا من أثر المشروع في تحويل الدعم إلى أمان مؤقت وكرامة محفوظة."
    ]
  },
  mother: {
    title: "أم تصنع الصمود",
    kicker: "قوة وسط الظروف الصعبة",
    summary: "أم تتحمل مسؤولية أسرتها في ظروف قاسية، وجدت في الطرد الغذائي سندًا مؤقتًا يخفف عنها عبء الأيام.",
    image: "img/أم تصنع الصمود.png",
    imageAlt: "صورة توثق صمود أم في غزة",
    details: [
      "وسط ظروف النزوح وارتفاع صعوبة توفير الاحتياجات الأساسية، تتحمل الأمهات في غزة أعباءً مضاعفة في حماية أسرهن وتدبير الطعام والحفاظ على التماسك النفسي داخل البيت أو الخيمة. هذه القصة تمثل أمًا تحاول أن تصنع الصمود كل يوم، رغم قلة الموارد وتغيّر الأسعار وصعوبة الوصول إلى الاحتياجات الضرورية.",
      "وصول الطرد الغذائي لم يكن حلًا كاملًا لكل المعاناة، لكنه كان سندًا حقيقيًا في لحظة حرجة. احتوى الطرد على مواد أساسية تساعد الأسرة على إعداد وجبات بسيطة، وتخفف الضغط اليومي عن الأم التي تحمل مسؤولية كبيرة في ظروف غير مستقرة.",
      "هذه القصة تذكّر بأن المساعدة الإنسانية حين تصل بكرامة، تمنح الأسرة شعورًا بأنها ليست وحدها."
    ]
  },
  volunteers: {
    title: "متطوعون يحملون الرحمة",
    kicker: "أبطال من الميدان",
    summary: "لم يكن دور المتطوعين تعبئة استمارات فقط، بل كانوا شهودًا على المعاناة وجسرًا لوصول المساعدة بكرامة.",
    image: "img/متطوعين.png",
    imageAlt: "صورة توثق جانبًا من عمل المتطوعين المحليين",
    details: [
      "تكوّن الفريق الميداني من متطوعين محليين توزعوا على مدينة غزة، النصيرات، ودير البلح، إضافة إلى فريق لوجستي مسؤول عن النقل والتجهيز. عمل المتطوعون على تنفيذ الزيارات المنزلية، جمع البيانات، توثيق الاحتياج، ومتابعة وصول الطرود إلى الأسر المستفيدة.",
      "كان دورهم يتجاوز الجانب التنظيمي؛ فقد كانوا الأقرب إلى قصص الناس، يسمعون التفاصيل، يرون صعوبة الواقع، ويساهمون في تحويل الدعم إلى فعل إنساني ملموس. بجهودهم، تحولت القوائم والأرقام إلى وصول حقيقي للعائلات، وتم تنفيذ التوزيع بطريقة أكثر عدالة وتنظيمًا.",
      "المتطوعون هم الجسر الذي ربط بين نية العطاء واحتياج الأسر على الأرض."
    ]
  }
};

const regionData = {
  gaza: {
    title: "مدينة غزة",
    families: 124,
    people: 617,
    description: "منطقة رئيسية ضمن نطاق التوزيع"
  },
  nuseirat: {
    title: "النصيرات",
    families: 94,
    people: 473,
    description: "منطقة مستهدفة وفق حجم الاحتياج الموثق"
  },
  deir: {
    title: "دير البلح",
    families: 182,
    people: 778,
    description: "أكبر عدد من الأسر المستفيدة ضمن هذا التوزيع"
  }
};

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

  if (mapInfoTitle) {
    mapInfoTitle.textContent = data.title;
  }

  if (mapInfoFamilies) {
    mapInfoFamilies.textContent = formatNumber(data.families);
  }

  if (mapInfoPeople) {
    mapInfoPeople.textContent = formatNumber(data.people);
  }

  if (mapInfoDescription) {
    mapInfoDescription.textContent = data.description;
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

function getSystemTheme() {
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function updateThemeToggle(theme) {
  if (!themeToggle) {
    return;
  }

  const isLight = theme === "light";
  const label = isLight ? "الوضع الفاتح" : "الوضع الداكن";

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
  applyTheme(storedTheme || getSystemTheme());
}

initializeTheme();

themeToggle?.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  applyTheme(currentTheme === "light" ? "dark" : "light", true);
});

const systemThemeQuery = window.matchMedia?.("(prefers-color-scheme: light)");

if (systemThemeQuery) {
  const syncThemeWithSystem = () => {
    if (!getStoredTheme()) {
      applyTheme(systemThemeQuery.matches ? "light" : "dark");
    }
  };

  systemThemeQuery.addEventListener?.("change", syncThemeWithSystem);
  systemThemeQuery.addListener?.(syncThemeWithSystem);
}

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
  navLinks?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
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

  if (!story || !storyModal) {
    return;
  }

  lastStoryTrigger = trigger;

  if (storyModalImage) {
    storyModalImage.src = story.image;
    storyModalImage.alt = story.imageAlt;
  }

  if (storyModalKicker) {
    storyModalKicker.textContent = story.kicker;
  }

  if (storyModalTitle) {
    storyModalTitle.textContent = story.title;
  }

  if (storyModalSummary) {
    storyModalSummary.textContent = story.summary;
  }

  renderStoryDetails(story.details);
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
}

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    openLightbox(item.dataset.caption || "صورة من المشروع");
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
    closeMenu();
    closeStoryModal();
    if (!lightbox?.hidden) {
      closeLightbox();
    }
  }
});
