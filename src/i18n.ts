// 全站双语内容字典（阿拉伯语 ar 为默认 / 英语 en）。
// 所有文案集中在此，页面与组件只按 locale 读取，避免散落硬编码。

export const SITE = "https://irbidcentermall.com";

export type Locale = "ar" | "en";

export const locales: Locale[] = ["ar", "en"];

export interface LocaleMeta {
  htmlLang: string;
  ogLocale: string;
  dir: "rtl" | "ltr";
  label: string;
  switchTo: Locale;
  switchHref: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  ar: {
    htmlLang: "ar",
    ogLocale: "ar_JO",
    dir: "rtl",
    label: "العربية",
    switchTo: "en",
    switchHref: "/en/",
  },
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    dir: "ltr",
    label: "English",
    switchTo: "ar",
    switchHref: "/",
  },
};

// 生成 <head> 的 hreflang 候选（含 x-default 指向阿拉伯语主站，
// 因为约旦本地阿拉伯语流量占绝对多数）。
export function hreflangAlternates(locale: Locale): { hreflang: string; href: string }[] {
  const base: { hreflang: string; href: string }[] = [
    { hreflang: "ar", href: `${SITE}/` },
    { hreflang: "en", href: `${SITE}/en/` },
  ];
  if (locale === "ar") {
    base.push({ hreflang: "x-default", href: `${SITE}/` });
  } else {
    base.push({ hreflang: "x-default", href: `${SITE}/en/` });
  }
  return base;
}

export interface Content {
  meta: { title: string; description: string; siteName: string };
  nav: { href: string; label: string }[];
  hero: {
    eyebrow: string;
    h1: string;
    sub: string;
    meta: { icon: string; text: string }[];
    cta: { href: string; label: string; primary: boolean }[];
  };
  about: {
    eyebrow: string;
    h2: string;
    paragraphs: string[];
    stats: [string, string][];
  };
  shopping: {
    eyebrow: string;
    h2: string;
    intro: string;
    items: [string, string][];
    imgAlt: string;
  };
  dining: {
    eyebrow: string;
    h2: string;
    paragraphs: string[];
    imgAlt: string;
  };
  entertainment: {
    eyebrow: string;
    h2: string;
    items: [string, string][];
  };
  visitInfo: {
    eyebrow: string;
    h2: string;
    items: [string, string][];
    note: string;
  };
  location: {
    eyebrow: string;
    h2: string;
    intro: string;
    items: [string, string][];
    imgAlt: string;
  };
  parking: {
    eyebrow: string;
    h2: string;
    items: string[];
  };
  bestTime: {
    eyebrow: string;
    h2: string;
    items: [string, string][];
  };
  plans: {
    eyebrow: string;
    h2: string;
    intro: string;
    items: { title: string; tag: string; steps: string[] }[];
  };
  routes: {
    eyebrow: string;
    h2: string;
    items: { title: string; time: string; steps: string[] }[];
  };
  services: {
    eyebrow: string;
    h2: string;
    intro: string;
    items: [string, string][];
  };
  directory: {
    eyebrow: string;
    h2: string;
    intro: string;
    categories: { title: string; desc: string; items: string[] }[];
  };
  nearby: {
    eyebrow: string;
    h2: string;
    intro: string;
    items: [string, string][];
  };
  background: {
    eyebrow: string;
    h2: string;
    paragraphs: string[];
    responsibility: string[];
  };
  sources: {
    eyebrow: string;
    h2: string;
    paragraphs: string[];
    links: { label: string; href: string }[];
    note: string;
  };
  faq: { q: string; a: string }[];
  footer: {
    tagline: string;
    copyright: string;
    disclaimer: string;
    quick: { label: string; value: string }[];
    links: { href: string; label: string }[];
  };
}

export const content: Record<Locale, Content> = {
  ar: {
    meta: {
      title: `سيتي سنتر إربد (إربد) | Irbid City Center — دليل التسوق والزيارة`,
      description: `دليل شامل لسيتي سنتر إربد (Irbid City Center) في مدينة إربد شمال الأردن: دليل المحلات، الموقع على الخريطة، ساعات العمل، التسوق والمطاعم والترفيه، مواقف السيارات، وخطط زيارة للعائلات.`,
      siteName: `سيتي سنتر إربد — دليل الزيارة`,
    },
    nav: [
      { href: "#about", label: "نظرة عامة" },
      { href: "#directory", label: "دليل المحلات" },
      { href: "#shopping", label: "التسوق" },
      { href: "#dining", label: "المطاعم" },
      { href: "#entertainment", label: "الترفيه" },
      { href: "#visit", label: "الوصول" },
      { href: "#plans", label: "خطط الزيارة" },
      { href: "#faq", label: "الأسئلة" },
    ],
    hero: {
      eyebrow: "إربد · شمال الأردن",
      h1: "سيتي سنتر إربد (إربد)",
      sub: "مركز تسوق وترفيه حضري يضم أكثر من 250 علامة تجارية ومطاعم ومساحات للترفيه العائلي، ويُعد من أبرز المعالم التجارية في مدينة إربد.",
      meta: [
        { icon: "📍", text: "Jd Mall, Nathan Road 235, Irbid" },
        { icon: "🕒", text: "يومياً 08:00 – 00:00" },
        { icon: "⭐", text: "4.2 / 5 (16,832 تقييم)" },
      ],
      cta: [
        { href: "#visit", label: "الموقع على الخريطة", primary: true },
        { href: "#visit-info", label: "معلومات الزيارة", primary: false },
      ],
    },
    about: {
      eyebrow: "نظرة عامة",
      h2: "عن سيتي سنتر إربد (Irbid City Center)",
      paragraphs: [
        "مرحباً بكم في سيتي سنتر إربد، المعروف أيضاً باسم Irbid City Center، وهو وجهة تجارية وترفيهية تقع في قلب مدينة إربد، محافظة إربد، الأردن. يقدّم هذا الدليل معلومات عملية للزوار تشمل الموقع والوصول وساعات العمل والمرافق والخطط المقترحة للزيارة والمعالم المحيطة.",
        "يُعد سيتي سنتر إربد واحداً من أبرز المراكز التجارية في شمال الأردن، ويقع على شارع Nathan Road في مدينة إربد. يجمع المركز بين التسوق وتناول الطعام والترفيه العائلي في مساحة داخلية واسعة، ما يجعله وجهة يومية لسكان المدينة والمناطق المجاورة.",
        "تبلغ المساحة التجارية للمركز نحو 87,000 متر مربع، ويضم أكثر من 250 علامة تجارية محلية ودولية موزعة على متاجر الأزياء والإلكترونيات والمستلزمات المنزلية، إلى جانب منطقة مطاعم ومقاهٍ ومساحات ترفيه مخصصة للأطفال. هذا التنوع يجعل الزيارة مناسبة لقضاء عدة ساعات دون الحاجة إلى مغادرة المبنى.",
        "يقع المركز ضمن نطاق حضري نشط في إربد، ويتميز بقربه من الجامعات والمؤسسات والمناطق السكنية، وهو ما يمنحه حضوراً يومياً على مدار الأسبوع. ويعمل يومياً من الساعة 08:00 صباحاً حتى 00:00 منتصف الليل، مع احتمال تغيّر ساعات بعض المتاجر في الأعياد والمناسبات.",
      ],
      stats: [
        ["87,000 م²", "مساحة تجارية"],
        ["+250", "علامة تجارية"],
        ["08:00 – 00:00", "ساعات العمل"],
        ["4.2 / 5", "تقييم الزوار"],
      ],
    },
    shopping: {
      eyebrow: "تجربة التسوق",
      h2: "متاجر متنوعة تحت سقف واحد",
      intro: "يضم المركز مزيجاً من المتاجر المحلية والعلامات التجارية الدولية، موزعة بحسب الفئة لتسهيل التنقل بينها. ويمكن للزائر إنجاز مشتريات العائلة اليومية والملابس والمستلزمات المنزلية في زيارة واحدة.",
      items: [
        ["متاجر العلامات التجارية", "وحدات لماركات عالمية وإقليمية معروفة"],
        ["الأزياء والملابس", "ملابس رجالية ونسائية وأطفال وأحذية وحقائب"],
        ["المستلزمات المنزلية", "أدوات منزلية ومطبخ ومفروشات وإلكترونيات"],
        ["مشتريات العائلة", "سوبرماركت وصيدلية ومتاجر خدمات يومية"],
      ],
      imgAlt: "مسار المتسوقين داخل سيتي سنتر إربد أمام واجهات المتاجر",
    },
    dining: {
      eyebrow: "المطاعم",
      h2: "تجربة طعام داخل المركز وحوله",
      paragraphs: [
        "تتوزع مناطق الطعام في المركز بين صالات مشتركة تتجمع فيها عدة منافذ للوجبات السريعة، ومقاهٍ هادئة مناسبة للاجتماعات أو الاستراحة، إضافة إلى مطاعم بجلسات عائلية. ويتركز النشاط عادة في فترة الغداء والمساء.",
        "أما محيط المركز في إربد فيضم خيارات واسعة تمثل المطبخ الأردني والشرقي، ومن أشهر الأطباق المحلية التي يبحث عنها الزائر: المنسف، والمقلوبة، والفلافل والحمص، والكنافة كحلوى، إضافة إلى المشاوي والشاورما.",
        "ملاحظة: هذا الدليل محايد ولا يوصي بمطعم أو متجر بعينه، وننصح بالتحقق من التقييمات المحلية الحديثة قبل الزيارة.",
      ],
      imgAlt: "منطقة المطاعم والمقاهي في سيتي سنتر إربد مع جلسات مشتركة",
    },
    entertainment: {
      eyebrow: "الترفيه والعائلة",
      h2: "أنشطة للأطفال ولجميع أفراد الأسرة",
      items: [
        ["مناطق ألعاب الأطفال", "مساحات داخلية آمنة للأطفال الصغار مع ألعاب مناسبة لأعمار مختلفة، وتخضع لإشراف ميداني."],
        ["جلسات عائلية ومساحات استراحة", "مقاعد ومقاهي موزعة داخل المركز تتيح للعائلات الاستراحة بين التسوق والتنقل."],
        ["فعاليات وعروض موسمية", "يقام على مدار العام عدد من الفعاليات والأنشطة الموسمية في الساحات الداخلية، وقد تشمل عروضاً سينمائية ومناسبات للعائلات."],
      ],
    },
    visitInfo: {
      eyebrow: "معلومات الزيارة",
      h2: "ساعات العمل والرسوم",
      items: [
        ["ساعات العمل", "يومياً من 08:00 صباحاً حتى 00:00 منتصف الليل"],
        ["الدخول", "دخول المركز التجاري مجاني"],
        ["الرسوم", "رسوم مواقف السيارات تُطبق حسب الأنظمة المعمول بها في الموقع"],
      ],
      note: "قد تتغير ساعات بعض المتاجر والمطاعم دون إشعار، خصوصاً خلال الأعياد والمناسبات الرسمية. يُنصح بالتحقق من حساب الجهات الرسمية عند التخطيط لزيارة في أوقات غير معتادة.",
    },
    location: {
      eyebrow: "الوصول",
      h2: "الموقع وكيفية زيارة سيتي سنتر إربد في مدينة إربد",
      intro: "يقع المركز في مدينة إربد على شارع Nathan Road (Jd Mall)، ويمكن الوصول إليه بسهولة بالسيارة أو سيارات الأجرة أو وسائل النقل العام. الرمز البريدي Plus Code: GVP8+84 Irbid.",
      items: [
        ["بالسيارة الخاصة", "الوصول عبر الطرق الرئيسية في إربد باتجاه شارع Nathan Road، مع توفر مساحات لوقوف السيارات داخل النطاق التجاري."],
        ["سيارات الأجرة وتطبيقات النقل", "يمكن طلب سيارة أجرة أو استخدام تطبيقات النقل الذكية، وحدد الوجهة باسم Irbid City Centre."],
        ["النقل العام", "تخدم المنطقة خطوط الحافلات وسيارات النقل العام المتجهة إلى وسط مدينة إربد، مع مسافة سير قصيرة عند الوصول."],
      ],
      imgAlt: "مدخل سيتي سنتر إربد ومنطقة الوصول أمام المبنى في مدينة إربد، الأردن",
    },
    parking: {
      eyebrow: "مواقف السيارات",
      h2: "معلومات الوقوف والوصول",
      items: [
        "تتوفر مساحات وقوف للسيارات داخل نطاق المركز وخارجه، مع مداخل قريبة من الوحدات التجارية.",
        "تشهد أمسيات نهاية الأسبوع وأوقات العروض ضغطاً على المواقف، ويُنصح بالوصول أبكر.",
        "قد تُطبق رسوم على الوقوف حسب الأنظمة المعمول بها في الموقع، ويُفضّل التحقق عند الدخول.",
      ],
    },
    bestTime: {
      eyebrow: "أفضل وقت للزيارة",
      h2: "متى تزور المركز؟",
      items: [
        ["أيام الأسبوع", "الزيارة قبل الساعة السادسة مساءً تمنحك هدوءاً أكبر في المتاجر والمطاعم ومساحات وقوف أسهل."],
        ["نهاية الأسبوع", "مناسبة للتسوق العائلي والأنشطة الترفيهية، مع ازدحام نسبي يبدأ بعد العصر."],
        ["مدة الزيارة المقترحة", "من ساعة ونصف إلى ثلاث ساعات تغطي التسوق وتناول الطعام وجولة في المركز."],
      ],
    },
    plans: {
      eyebrow: "خطط حسب الفئة",
      h2: "ثلاث خطط زيارة مصممة لأسلوبك",
      intro: "اختر الخطة بحسب تكوين مجموعتك وإيقاع الزيارة. الخطط إرشادية ويمكن دمجها حسب الوقت المتاح.",
      items: [
        {
          title: "العائلات مع الأطفال",
          tag: "إيقاع متوسط · 2–3 ساعات",
          steps: [
            "البدء من منطقة ألعاب الأطفال لإشغال الصغار في أول الزيارة.",
            "جولة تسوق قصيرة في متاجر الأطفال والأزياء القريبة.",
            "استراحة طعام في صالة الطعام المشتركة قبل المغادرة.",
          ],
        },
        {
          title: "التصوير والاستكشاف المعماري",
          tag: "إيقاع هادئ · 1–2 ساعة",
          steps: [
            "تصوير الواجهة الخارجية والمدخل في الإضاءة الصباحية.",
            "ركّز على الأسقف والإضاءة الطبيعية والخطوط المعمارية داخلياً.",
            "جولة أخيرة عند الساحات الداخلية قبل ساعات الذروة.",
          ],
        },
        {
          title: "تنقل مريح ومنخفض الجهد",
          tag: "إيقاع بطيء · حسب الحاجة",
          steps: [
            "استخدام المصاعد والسلالم المتحركة للتنقل بين الطوابق.",
            "اختيار الجلسات القريبة من المداخل لتقليل مسافة السير.",
            "تقسيم الجولة إلى فترات قصيرة مع راحات متكررة.",
          ],
        },
      ],
    },
    routes: {
      eyebrow: "مسارات مقترحة",
      h2: "مسار نصف يوم ومسار يوم كامل",
      items: [
        {
          title: "مسار نصف يوم",
          time: "2 – 3 ساعات",
          steps: [
            "الوصول والتنقل إلى الطابق الرئيسي.",
            "جولة تسوق مركزة على متجرين أو ثلاثة.",
            "استراحة قهوة أو وجبة سريعة.",
            "شراء احتياجات منزلية والمغادرة.",
          ],
        },
        {
          title: "مسار يوم كامل",
          time: "4 – 6 ساعات",
          steps: [
            "بداية صباحية لتفادي الزحام.",
            "جولة تسوق شاملة بين الطوابق.",
            "غداء في منطقة المطاعم.",
            "جلسة ترفيه للأطفال أو نشاط موسمي.",
            "جولة قصيرة في محيط المدينة قبل المغادرة.",
          ],
        },
      ],
    },
    services: {
      eyebrow: "خدمات الزوار والمرافق",
      h2: "ما يمكن أن تحتاجه أثناء الزيارة",
      intro: "فيما يلي وصف عام لأنواع الخدمات المتوفرة داخل المركز وفي محيطه القريب، دون الإشارة إلى أي جهة تجارية بعينها.",
      items: [
        ["دورات المياه والمرافق العامة", "مرافق موزعة على الطوابق، مع مرافق مهيأة لأصحاب الاحتياجات الخاصة ومساحات لتغيير ملابس الأطفال."],
        ["مواقف السيارات", "مساحات وقوف داخل نطاق المركز وخارجه، مع تفضيل الوصول المبكر في أوقات الذروة."],
        ["الطعام والمقاهي", "صالات طعام مشتركة ومنافذ وجبات سريعة ومقاهٍ تقدم خيارات متعددة على مدار اليوم."],
        ["الإقامة", "تتوفر في محيط مدينة إربد أنواع مختلفة من أماكن الإقامة مثل الفنادق والشقق الفندقية."],
        ["التسوق اليومي والسوبرماركت", "متاجر بقالة ومستلزمات يومية داخل المركز، إضافة إلى أسواق ومتاجر في المحيط."],
        ["الوقود وشحن المركبات", "محطات وقود على الطرق الرئيسية القريبة، وتنتشر نقاط شحن المركبات الكهربائية في بعض المواقع بالمدينة."],
        ["الخدمات المالية", "أجهزة صراف آلي وفروع مصارف في نطاق المدينة والمحيط التجاري."],
        ["الرعاية الصحية", "صيدليات ومراكز طبية قريبة للاحتياجات الطارئة البسيطة."],
        ["خدمات العائلات", "مرافق للأطفال ومساحات استراحة وخدمات تناسب التنقل بالعربات."],
      ],
    },
    directory: {
      eyebrow: "دليل المحلات",
      h2: "أقسام المحلات والخدمات في سيتي سنتر إربد",
      intro: "لتسهيل التنقل، يرد أدناه تصنيف عام لأقسام المحلات والخدمات داخل المركز. هذا الوصف إرشادي ولا يمثل قائمة بعلامات تجارية محددة، وننصح بالتحقق من لوحات الدليل داخل المركز لآخر التحديثات.",
      categories: [
        {
          title: "الأزياء والملابس",
          desc: "تشمل متاجر الملابس الرجالية والنسائية والأطفال، والأحذية والحقائب، والإكسسوارات، فضلاً عن وحدات لعلامات تجارية عالمية وإقليمية.",
          items: ["ملابس رجالية ونسائية", "ملابس وأحذية الأطفال", "حقائب وإكسسوارات", "ملابس رياضية وأحذية"],
        },
        {
          title: "الإلكترونيات والهواتف",
          desc: "قسم يضم متاجر للهواتف الذكية والإلكترونيات الاستهلاكية والإكسسوارات التقنية والصيانة السريعة.",
          items: ["هواتف ذكية وإكسسوارات", "إلكترونيات استهلاكية", "سماعات وأجهزة لوحية", "خدمات صيانة سريعة"],
        },
        {
          title: "المستلزمات المنزلية",
          desc: "متاجر للأدوات المنزلية والمطبخ والأثاث والإضاءة والديكور، مناسبة لمشتريات المنزل والتجديد.",
          items: ["أدوات ومستلزمات مطبخ", "أثاث وإضاءة", "ديكور ومنسوجات", "مستلزمات تنظيف وتخزين"],
        },
        {
          title: "السوبرماركت والصيدلية",
          desc: "وحدات للتسوق اليومي تشمل بقالة ومواد غذائية ومستحضرات صيدلانية وخدمات يومية أساسية.",
          items: ["بقالة ومواد غذائية", "صيدلية", "مستحضرات العناية", "خدمات يومية سريعة"],
        },
        {
          title: "المطاعم والمقاهي",
          desc: "منطقة طعام تجمع مطاعم بجلسات عائلية ومقاهٍ هادئة ومنافذ وجبات سريعة، وتبرز فيها الأطباق الأردنية والشرقية.",
          items: ["مطاعم عائلية", "مقاهٍ ومشروبات", "وجبات سريعة", "حلويات ومشروبات شعبية"],
        },
        {
          title: "الترفيه والسينما",
          desc: "مساحات ترفيه تشمل مناطق ألعاب للأطفال وأنشطة موسمية، وقد تتوفر دور سينما أو صالات عروض ضمن المركز.",
          items: ["منطقة ألعاب الأطفال", "عروض سينمائية", "فعاليات عائلية موسمية", "مساحات استراحة واجتماعات"],
        },
        {
          title: "الخدمات والبنوك",
          desc: "خدمات مساندة تشمل أجهزة صراف آلي وفروع مصارف وصالونات تجميل وخدمات للزوار داخل المركز.",
          items: ["أجهزة صراف آلي (ATM)", "فروع مصارف", "صالونات تجميل", "خدمات الزوار"],
        },
      ],
    },
    nearby: {
      eyebrow: "المعالم القريبة",
      h2: "المعالم القريبة من سيتي سنتر إربد",
      intro: "عند زيارة سيتي سنتر إربد، يمكن للزوار استكشاف عدد من المعالم التاريخية والوجهات القريبة في نفس الرحلة، ومن أبرزها وسط مدينة إربد (Irbid Downtown) وجامعة اليرموك (Yarmouk University)، إضافة إلى متحف دار السرايا ومواقع أثرية في محيط المحافظة. إربد مدينة جامعية ذات تاريخ طويل، ما يجعل دمج الزيارة مع هذه المعالم ممكناً خلال يوم واحد.",
      items: [
        ["وسط مدينة إربد", "منطقة تجارية تاريخية تضم أسواقاً تقليدية ومباني قديمة ومطاعم محلية."],
        ["جامعة اليرموك", "من أكبر الجامعات في الأردن، وتقع في نطاق قريب من وسط المدينة."],
        ["متحف دار السرايا", "متحف يعرض تاريخ المنطقة وتراثها، ويقع في مبنى تاريخي وسط إربد."],
        ["مواقع أثرية في المحيط", "تتوفر في محيط المحافظة مواقع أثرية شهيرة تصلح لرحلة يوم منفصلة."],
      ],
    },
    background: {
      eyebrow: "خلفية معرفية",
      h2: "التاريخ والأهمية: إربد وسيتي سنتر إربد",
      paragraphs: [
        "تُعد إربد من أكبر مدن شمال الأردن وأكثرها كثافة سكانية، وتلعب فيها الجامعات دوراً محورياً في تشكيل حركة السوق والطلب على المساحات التجارية والترفيهية. وقد شهدت المدينة خلال العقود الأخيرة تحولاً من الأسواق التقليدية في الوسط إلى مراكز تجارية حديثة مغلقة.",
        "يجمع نموذج المراكز التجارية الحديثة بين التسوق والترفيه والخدمات في مساحة واحدة مضبوطة الحرارة، وهو نموذج انتشر في المدن الجامعية لأنه يستوعب أعداداً كبيرة من الزوار على مدار العام.",
      ],
      responsibility: [
        "احترام أنظمة المركز وتعليمات الأمن والسلامة المعلنة.",
        "المحافظة على نظافة المرافق العامة والمساحات المشتركة.",
        "مراقبة الأطفال في مناطق الألعاب والسلالم المتحركة.",
        "التحقق من ساعات العمل وأي رسوم قبل الزيارة في المواسم.",
      ],
    },
    sources: {
      eyebrow: "المصادر والمنهجية",
      h2: "كيف أُعدّ هذا الدليل",
      paragraphs: [
        "يعتمد هذا الدليل على مراجعة معلومات عامة متاحة للجمهور حول الموقع وساعات العمل والمرافق، مع التركيز على ما يهم الزائر عملياً. نعرض المعلومة بصيغة محايدة دون تفضيل جهة تجارية على أخرى.",
        "قد تتغير التفاصيل مثل ساعات العمل أو الخدمات المتاحة أو الرسوم دون إشعار، ولهذا نوصي دائماً بالتحقق من القنوات الرسمية قبل الزيارة وبخاصة في الأعياد والمواسم.",
      ],
      links: [
        { label: "البوابة الرسمية للسياحة في الأردن", href: "https://www.visitjordan.com/" },
        { label: "خرائط جوجل — الموقع والتقييمات", href: "https://maps.app.goo.gl/L71ekukFyjaVPVxZ9" },
      ],
      note: "لا يوفّر هذا الموقع خدمات حجز أو بيع، ولا يمثل أي جهة رسمية.",
    },
    faq: [
      { q: "هل الدخول إلى سيتي سنتر إربد مجاني؟", a: "نعم، الدخول إلى المركز التجاري مجاني بالكامل ولا توجد تذكرة دخول. الرسوم المطبقة تكون فقط على الخدمات الاختيارية مثل مواقف السيارات حسب الأنظمة المعمول بها في الموقع." },
      { q: "ما هي ساعات العمل؟", a: "يعمل المركز عادة من الساعة 08:00 صباحاً حتى 00:00 منتصف الليل، وقد تختلف ساعات بعض المتاجر والمطاعم كما تتغير في الأعياد والمناسبات." },
      { q: "هل يوجد موقف سيارات؟", a: "نعم، تتوفر مساحات لمواقف السيارات داخل نطاق المركز وخارجه، ويُنصح بالوصول قبل أوقات الذروة في أمسيات نهاية الأسبوع." },
      { q: "هل يناسب المركز العائلات والأطفال؟", a: "نعم، يوفر المركز بيئة مناسبة للعائلات مع مساحات مخصصة للأطفال ومرافق للتنقل بالعربات، إضافة إلى خيارات متعددة للطعام تناسب الأطفال." },
      { q: "أين يقع سيتي سنتر إربد بالتحديد؟", a: "يقع سيتي سنتر إربد في مدينة إربد شمال الأردن، على شارع Nathan Road (Jd Mall)، ويمكن الوصول إليه بالسيارة أو سيارات الأجرة أو وسائل النقل العام." },
      { q: "هل يتوفر دليل محلات أو قائمة بالمتاجر؟", a: "نعم، يضم المركز أقساماً متنوعة تشمل الأزياء والإلكترونيات والمستلزمات المنزلية والسوبرماركت والمطاعم والترفيه. يمكن الاطلاع على تصنيف الأقسام في قسم «دليل المحلات» أعلاه، مع العلم أن القائمة الدقيقة للعلامات التجارية تتغير باستمرار داخل المركز." },
      { q: "هل توجد سينما داخل المركز؟", a: "تتوفر ضمن المركز مساحات ترفيهية تشمل أنشطة موسمية ومناطق ألعاب، وقد تتواجد صالات سينما أو عروض ضمن نطاقه. يُنصح بالتحقق من لوحات الدليل والقنوات الرسمية لأحدث التفاصيل." },
      { q: "هل سيتي سنتر إربد مجاني للزيارة؟", a: "نعم، يُعد سيتي سنتر إربد مساحة مفتوحة للزوار والدخول إليه مجاني على مدار العام، وتبقى الرسوم مرتبطة فقط بالخدمات الاختيارية إن وُجدت." },
      { q: "كم يستغرق وقت الزيارة المناسب؟", a: "تتراوح الزيارة المعتادة بين ساعة ونصف وثلاث ساعات، ويمكن أن تمتد إلى أربع أو ست ساعات في حال الجمع بين التسوق وتناول الطعام والأنشطة الترفيهية." },
      { q: "ما أفضل وقت لتجنب الزحام؟", a: "أيام الأسبوع قبل الساعة السادسة مساءً هي الأهدأ عادة، أما أمسيات نهاية الأسبوع فتكون أكثر ازدحاماً ويُفضّل فيها الوصول مبكراً." },
      { q: "هل تتوفر خدمات قريبة مثل الصيدليات والمصارف؟", a: "تتوفر في نطاق المدينة والمحيط التجاري خدمات متنوعة تشمل صيدليات وأجهزة صراف آلي وفروع مصارف ومحطات وقود، دون أن يوصي هذا الدليل بجهة بعينها." },
      { q: "ما المعالم التي يمكن زيارتها قريباً من المركز؟", a: "يمكن دمج الزيارة مع معالم قريبة مثل وسط مدينة إربد ومتحف دار السرايا وجامعة اليرموك، إضافة إلى مواقع أثرية في محيط المحافظة تصلح لرحلة يوم." },
    ],
    footer: {
      tagline: "دليل معلوماتي غير رسمي يهدف إلى تعريف الزوار بمركز سيتي سنتر إربد في مدينة إربد، الأردن.",
      copyright: "© 2026 سيتي سنتر إربد — دليل غير رسمي.",
      disclaimer: "هذا الموقع دليل معلوماتي مستقل وليس الموقع الرسمي لسيتي سنتر إربد. جميع المعلومات الواردة هنا لأغراض التعريف والاستدلال وقد تتغير دون إشعار.",
      quick: [
        { label: "العنوان", value: "Jd Mall, Nathan Road 235, Irbid" },
        { label: "ساعات العمل", value: "08:00 – 00:00" },
        { label: "الدخول", value: "مجاني" },
        { label: "الهاتف", value: "+962 2691 1111" },
      ],
      links: [
        { href: "/privacy-policy", label: "سياسة الخصوصية" },
        { href: "/terms", label: "شروط الاستخدام" },
        { href: "#faq", label: "الأسئلة الشائعة" },
        { href: "#sources", label: "المصادر والمنهجية" },
      ],
    },
  },

  en: {
    meta: {
      title: `Irbid City Center | سيتي سنتر إربد — Shopping Mall in Irbid, Jordan`,
      description: `A complete guide to Irbid City Center (سيتي سنتر إربد) in Irbid, northern Jordan: store directory, map location, opening hours, shopping, restaurants, cinema and family entertainment, parking, and suggested visit plans.`,
      siteName: `Irbid City Center — Visitor Guide`,
    },
    nav: [
      { href: "#about", label: "Overview" },
      { href: "#directory", label: "Store Directory" },
      { href: "#shopping", label: "Shopping" },
      { href: "#dining", label: "Dining" },
      { href: "#entertainment", label: "Entertainment" },
      { href: "#visit", label: "Getting There" },
      { href: "#plans", label: "Visit Plans" },
      { href: "#faq", label: "FAQ" },
    ],
    hero: {
      eyebrow: "Irbid · Northern Jordan",
      h1: "Irbid City Center (Irbid)",
      sub: "A modern shopping and entertainment destination with over 250 brands, restaurants and family leisure spaces, among the leading retail landmarks of Irbid.",
      meta: [
        { icon: "📍", text: "Jd Mall, Nathan Road 235, Irbid" },
        { icon: "🕒", text: "Daily 08:00 – 00:00" },
        { icon: "⭐", text: "4.2 / 5 (16,832 reviews)" },
      ],
      cta: [
        { href: "#visit", label: "Location on map", primary: true },
        { href: "#visit-info", label: "Visit info", primary: false },
      ],
    },
    about: {
      eyebrow: "Overview",
      h2: "About Irbid City Center (سيتي سنتر إربد)",
      paragraphs: [
        "Welcome to Irbid City Center, also known as سيتي سنتر إربد, a retail and entertainment destination in the heart of Irbid city, Irbid Governorate, Jordan. This guide provides practical visitor information: location, access, opening hours, facilities, suggested visit plans, and nearby attractions.",
        "Irbid City Center is one of the leading shopping malls in northern Jordan, located on Nathan Road in Irbid. It combines shopping, dining and family entertainment under one air-conditioned roof, making it a daily destination for residents and surrounding areas.",
        "The mall's retail area spans about 87,000 m² and hosts more than 250 local and international brands across fashion, electronics and home stores, plus a food court, cafés and dedicated children's play areas. This variety makes a visit comfortable for several hours without leaving the building.",
        "The center sits within a busy urban area of Irbid, close to universities, institutions and residential districts, giving it a steady daily presence throughout the week. It operates daily from 08:00 to 00:00, though some stores may vary their hours on holidays and special occasions.",
      ],
      stats: [
        ["87,000 m²", "Retail area"],
        ["+250", "Brands"],
        ["08:00 – 00:00", "Opening hours"],
        ["4.2 / 5", "Visitor rating"],
      ],
    },
    shopping: {
      eyebrow: "Shopping",
      h2: "Diverse stores under one roof",
      intro: "The mall mixes local shops with international brands, grouped by category to make navigation easier. Visitors can handle daily family shopping, clothing and home supplies in a single visit.",
      items: [
        ["Brand stores", "Units for well-known global and regional brands"],
        ["Fashion & apparel", "Men's, women's, kids', footwear and bags"],
        ["Home & living", "Household goods, kitchen, furniture and electronics"],
        ["Family essentials", "Supermarket, pharmacy and daily service stores"],
      ],
      imgAlt: "Shoppers' walkway inside Irbid City Center in front of storefronts",
    },
    dining: {
      eyebrow: "Dining",
      h2: "Dining inside and around the mall",
      paragraphs: [
        "Dining areas are spread between shared food courts with several quick-service outlets, quiet cafés suited to meetings or breaks, and family-style restaurants. Activity usually peaks at lunch and in the evening.",
        "Around the mall in Irbid, you will find a wide choice representing Jordanian and Levantine cuisine. Popular local dishes visitors look for include mansaf, maqluba, falafel and hummus, kunafa as a sweet, plus grills and shawarma.",
        "Note: this guide is neutral and does not recommend any particular restaurant or store; we suggest checking recent local reviews before visiting.",
      ],
      imgAlt: "Restaurants and cafés area at Irbid City Center with shared seating",
    },
    entertainment: {
      eyebrow: "Entertainment & Family",
      h2: "Activities for children and the whole family",
      items: [
        ["Children's play areas", "Safe indoor spaces for young children with age-appropriate play, under on-site supervision."],
        ["Family seating & rest zones", "Benches and cafés distributed inside let families rest between shopping and walking."],
        ["Seasonal events & shows", "Throughout the year the indoor plazas host seasonal events and activities, which may include cinema screenings and family programs."],
      ],
    },
    visitInfo: {
      eyebrow: "Visit Info",
      h2: "Opening hours & fees",
      items: [
        ["Opening hours", "Daily from 08:00 to 00:00"],
        ["Admission", "Entry to the mall is free"],
        ["Fees", "Parking fees apply per the on-site regulations"],
      ],
      note: "Hours for some stores and restaurants may change without notice, especially during holidays and official occasions. We recommend verifying through official channels when planning a visit at unusual times.",
    },
    location: {
      eyebrow: "Getting There",
      h2: "Location & how to reach Irbid City Center in Irbid",
      intro: "The mall is on Nathan Road (Jd Mall) in Irbid, easily reachable by car, taxi or public transport. Plus Code: GVP8+84 Irbid.",
      items: [
        ["By private car", "Reach it via Irbid's main roads toward Nathan Road, with parking spaces inside the commercial area."],
        ["Taxis & ride apps", "Order a taxi or use ride-hailing apps and set the destination as Irbid City Centre."],
        ["Public transport", "Bus and shared-taxi lines serve central Irbid, with a short walk on arrival."],
      ],
      imgAlt: "Entrance and arrival area in front of Irbid City Center building in Irbid, Jordan",
    },
    parking: {
      eyebrow: "Parking",
      h2: "Parking & access information",
      items: [
        "Parking spaces are available inside and around the mall, with entrances close to retail units.",
        "Weekend evenings and promotion periods put pressure on parking; arriving earlier is advised.",
        "Parking fees may apply per on-site regulations; it is best to check on entry.",
      ],
    },
    bestTime: {
      eyebrow: "Best time to visit",
      h2: "When to visit the mall",
      items: [
        ["Weekdays", "Visiting before 18:00 gives quieter stores and restaurants and easier parking."],
        ["Weekends", "Good for family shopping and entertainment, with mild crowding building after noon."],
        ["Suggested visit length", "About 1.5 to 3 hours covers shopping, dining and a walk through the mall."],
      ],
    },
    plans: {
      eyebrow: "Plans by group",
      h2: "Three visit plans for your style",
      intro: "Pick a plan by your group and pace. The plans are guidance and can be combined by available time.",
      items: [
        {
          title: "Families with children",
          tag: "Moderate pace · 2–3 hours",
          steps: [
            "Start at the children's play area to occupy the little ones early.",
            "A short shopping loop through kids' and nearby fashion stores.",
            "A food-court break before leaving.",
          ],
        },
        {
          title: "Photography & architecture",
          tag: "Calm pace · 1–2 hours",
          steps: [
            "Shoot the exterior facade and entrance in morning light.",
            "Focus on ceilings, natural light and architectural lines indoors.",
            "A final loop at the indoor plazas before peak hours.",
          ],
        },
        {
          title: "Easy, low-effort visit",
          tag: "Slow pace · as needed",
          steps: [
            "Use elevators and escalators to move between floors.",
            "Choose seating near entrances to reduce walking distance.",
            "Split the visit into short periods with frequent rests.",
          ],
        },
      ],
    },
    routes: {
      eyebrow: "Suggested routes",
      h2: "Half-day and full-day routes",
      items: [
        {
          title: "Half-day route",
          time: "2 – 3 hours",
          steps: [
            "Arrive and head to the main floor.",
            "A focused shopping loop through two or three stores.",
            "A coffee or quick-meal break.",
            "Buy home supplies and leave.",
          ],
        },
        {
          title: "Full-day route",
          time: "4 – 6 hours",
          steps: [
            "A morning start to avoid crowds.",
            "A full shopping tour across floors.",
            "Lunch at the dining area.",
            "A children's activity or seasonal event.",
            "A short walk around the city before leaving.",
          ],
        },
      ],
    },
    services: {
      eyebrow: "Visitor services & facilities",
      h2: "What you may need during your visit",
      intro: "Below is a general description of the types of services available inside the mall and nearby, without naming any specific business.",
      items: [
        ["Restrooms & public facilities", "Facilities across floors, with accessible units and baby-changing spaces."],
        ["Parking", "Spaces inside and around the mall; arrive early at peak times."],
        ["Food & cafés", "Shared food courts, quick-service outlets and cafés with varied all-day options."],
        ["Accommodation", "Various stays such as hotels and serviced apartments are available around Irbid."],
        ["Daily shopping & supermarket", "Grocery and daily-needs stores inside, plus markets and shops nearby."],
        ["Fuel & vehicle charging", "Fuel stations on nearby main roads; EV charging points appear at some city locations."],
        ["Financial services", "ATMs and bank branches within the city and commercial surroundings."],
        ["Healthcare", "Pharmacies and nearby clinics for minor urgent needs."],
        ["Family services", "Children's facilities, rest areas and stroller-friendly services."],
      ],
    },
    directory: {
      eyebrow: "Store Directory",
      h2: "Store & service sections at Irbid City Center",
      intro: "To help you navigate, here is a general classification of store and service sections inside the mall. This is guidance, not a list of specific brands; check the on-site directory boards for the latest updates.",
      categories: [
        {
          title: "Fashion & Apparel",
          desc: "Includes men's, women's and kids' clothing, footwear and bags, accessories, plus units for global and regional brands.",
          items: ["Men's & women's clothing", "Kids' clothing & shoes", "Bags & accessories", "Sportswear & footwear"],
        },
        {
          title: "Electronics & Phones",
          desc: "A section with smartphones, consumer electronics, tech accessories and quick service & repair.",
          items: ["Smartphones & accessories", "Consumer electronics", "Headphones & tablets", "Quick repair services"],
        },
        {
          title: "Home & Living",
          desc: "Stores for homeware, kitchen, furniture, lighting and décor, suited to home and renovation shopping.",
          items: ["Kitchen & homeware", "Furniture & lighting", "Décor & textiles", "Cleaning & storage"],
        },
        {
          title: "Supermarket & Pharmacy",
          desc: "Daily-shopping units with groceries, food, pharmaceutical products and essential everyday services.",
          items: ["Grocery & food", "Pharmacy", "Personal care", "Quick daily services"],
        },
        {
          title: "Restaurants & Cafés",
          desc: "A dining area gathering family restaurants, quiet cafés and quick-service outlets, highlighting Jordanian and Levantine dishes.",
          items: ["Family restaurants", "Cafés & drinks", "Quick service", "Sweets & local drinks"],
        },
        {
          title: "Entertainment & Cinema",
          desc: "Leisure spaces include children's play areas and seasonal activities; the mall may include cinemas or show halls.",
          items: ["Children's play area", "Cinema screenings", "Seasonal family events", "Rest & meeting spaces"],
        },
        {
          title: "Services & Banks",
          desc: "Supporting services with ATMs, bank branches, salons and visitor services inside the mall.",
          items: ["ATMs", "Bank branches", "Beauty salons", "Visitor services"],
        },
      ],
    },
    nearby: {
      eyebrow: "Nearby attractions",
      h2: "Attractions near Irbid City Center",
      intro: "When visiting Irbid City Center, travelers can explore several historical sights and nearby destinations in the same trip, notably Irbid Downtown and Yarmouk University, plus Dar Al-Saraya Museum and archaeological sites around the governorate. Irbid is a historic university city, making it easy to combine these sights in one day.",
      items: [
        ["Irbid Downtown", "A historic commercial area with traditional markets, old buildings and local restaurants."],
        ["Yarmouk University", "Among Jordan's largest universities, located close to the city center."],
        ["Dar Al-Saraya Museum", "A museum of the region's history and heritage, in a historic building in central Irbid."],
        ["Nearby archaeological sites", "Well-known archaeological sites around the governorate suit a separate day trip."],
      ],
    },
    background: {
      eyebrow: "Background",
      h2: "History & significance: Irbid and Irbid City Center",
      paragraphs: [
        "Irbid is one of the largest and most populous cities in northern Jordan, where universities play a central role in shaping market activity and demand for retail and leisure space. In recent decades the city shifted from traditional central markets to modern enclosed malls.",
        "The modern mall model combines shopping, entertainment and services in one temperature-controlled space; it spread in university cities because it absorbs large visitor numbers year-round.",
      ],
      responsibility: [
        "Respect the mall's rules and announced safety and security instructions.",
        "Keep public facilities and shared spaces clean.",
        "Supervise children in play areas and on escalators.",
        "Verify opening hours and any fees before seasonal visits.",
      ],
    },
    sources: {
      eyebrow: "Sources & methodology",
      h2: "How this guide was prepared",
      paragraphs: [
        "This guide is based on a review of publicly available general information about the location, opening hours and facilities, focused on what is practical for visitors. Information is presented neutrally, without favoring any business.",
        "Details such as opening hours, available services or fees may change without notice; we therefore always recommend verifying through official channels before visiting, especially during holidays and seasons.",
      ],
      links: [
        { label: "Official Jordan tourism portal", href: "https://www.visitjordan.com/" },
        { label: "Google Maps — location & reviews", href: "https://maps.app.goo.gl/L71ekukFyjaVPVxZ9" },
      ],
      note: "This site offers no booking or sales services and does not represent any official entity.",
    },
    faq: [
      { q: "Is entry to Irbid City Center free?", a: "Yes, entry to the mall is completely free and there is no admission ticket. Fees apply only to optional services such as parking, per the on-site regulations." },
      { q: "What are the opening hours?", a: "The mall usually operates from 08:00 to 00:00 daily; some stores and restaurants may vary, and hours change on holidays and occasions." },
      { q: "Is there parking?", a: "Yes, parking spaces are available inside and around the mall; arriving before peak weekend evenings is advised." },
      { q: "Is the mall family- and child-friendly?", a: "Yes, it offers a family-friendly environment with dedicated children's areas and stroller facilities, plus multiple child-suitable dining options." },
      { q: "Where exactly is Irbid City Center?", a: "It is in Irbid, northern Jordan, on Nathan Road (Jd Mall), reachable by car, taxi or public transport." },
      { q: "Is there a store directory or list of shops?", a: "Yes, the mall has varied sections including fashion, electronics, home goods, supermarket, dining and entertainment. See the 'Store Directory' section above for the category layout; the exact brand list changes continuously inside the mall." },
      { q: "Is there a cinema inside the mall?", a: "The mall includes leisure spaces with seasonal activities and children's play areas, and may host cinemas or show halls. Check the on-site directory and official channels for the latest details." },
      { q: "Is Irbid City Center free to visit?", a: "Yes, it is an open visitor space with free entry year-round; fees relate only to optional services if any." },
      { q: "How long is a good visit?", a: "A typical visit runs 1.5 to 3 hours, and can extend to 4–6 hours when combining shopping, dining and entertainment." },
      { q: "When is the best time to avoid crowds?", a: "Weekdays before 18:00 are usually calmer; weekend evenings are busier, so arrive earlier." },
      { q: "Are nearby services like pharmacies and banks available?", a: "The city and commercial surroundings offer pharmacies, ATMs, bank branches and fuel stations; this guide does not endorse any specific provider." },
      { q: "What attractions can I visit near the mall?", a: "Combine your visit with nearby sights such as Irbid Downtown, Dar Al-Saraya Museum and Yarmouk University, plus archaeological sites around the governorate for a day trip." },
    ],
    footer: {
      tagline: "An independent, unofficial information guide introducing visitors to Irbid City Center in Irbid, Jordan.",
      copyright: "© 2026 Irbid City Center — unofficial guide.",
      disclaimer: "This site is an independent information guide and is not the official website of Irbid City Center. All information here is for orientation and may change without notice.",
      quick: [
        { label: "Address", value: "Jd Mall, Nathan Road 235, Irbid" },
        { label: "Hours", value: "08:00 – 00:00" },
        { label: "Admission", value: "Free" },
        { label: "Phone", value: "+962 2691 1111" },
      ],
      links: [
        { href: "/en/privacy-policy", label: "Privacy Policy" },
        { href: "/en/terms", label: "Terms of Use" },
        { href: "#faq", label: "FAQ" },
        { href: "#sources", label: "Sources & methodology" },
      ],
    },
  },
};
