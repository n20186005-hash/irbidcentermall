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
    base.push({ hreflang: "x-default", href: `${SITE}/` });
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
  "ar": {
    "meta": {
      "title": "سيتي سنتر إربد (إربد) | Irbid City Center — دليل التسوق والزيارة",
      "description": "دليل مستقل لسيتي سنتر إربد: نقطة الموقع وتضارب أسماء الشوارع، وكيف تتحقق من مواعيد المركز والمحلات ورسوم الخدمات قبل الزيارة.",
      "siteName": "سيتي سنتر إربد — دليل الزيارة"
    },
    "nav": [
      {
        "href": "#about",
        "label": "نظرة عامة"
      },
      {
        "href": "#directory",
        "label": "دليل المحلات"
      },
      {
        "href": "#shopping",
        "label": "التسوق"
      },
      {
        "href": "#dining",
        "label": "المطاعم"
      },
      {
        "href": "#entertainment",
        "label": "الترفيه"
      },
      {
        "href": "#visit",
        "label": "الوصول"
      },
      {
        "href": "#plans",
        "label": "خطط الزيارة"
      },
      {
        "href": "#faq",
        "label": "الأسئلة"
      }
    ],
    "hero": {
      "eyebrow": "إربد · شمال الأردن",
      "h1": "سيتي سنتر إربد (إربد)",
      "sub": "خطط لزيارة سيتي سنتر إربد مع فصل معلومات المركز عن ساعات فروع المتاجر. توجد اختلافات في أسماء الشوارع المنشورة؛ استخدم نقطة الخريطة وتحقق من المدخل مع الجهة المقصودة.",
      "meta": [
        {
          "icon": "📍",
          "text": "إربد، الأردن · تحقق من نقطة الوصول"
        },
        {
          "icon": "🕒",
          "text": "المواعيد الكاملة تحتاج تأكيداً"
        },
        {
          "icon": "⭐",
          "text": "Google Maps · 4.2/5 · 16,870 · 29 Oct 2026"
        }
      ],
      "cta": [
        {
          "href": "#visit",
          "label": "الموقع على الخريطة",
          "primary": true
        },
        {
          "href": "#visit-info",
          "label": "معلومات الزيارة",
          "primary": false
        }
      ]
    },
    "about": {
      "eyebrow": "نظرة عامة",
      "h2": "عن سيتي سنتر إربد (Irbid City Center)",
      "paragraphs": [
        "هذا دليل مستقل لسيتي سنتر إربد، وليس موقع الإدارة أو دليلاً كاملاً لكل الوحدات التجارية. لقطة خرائط Google بتاريخ 29 أكتوبر 2026 تعرض تقييماً 4.2 من 16,870 مراجعة؛ هذه مراجعات طرف ثالث لا يجمعها هذا الدليل.",
        "تشير مصادر متاجر ومصارف إلى فروع باسم إربد سيتي سنتر، لكن أسماء الشوارع وبعض نقاط الفروع تختلف. لذلك لا ننشر عنوان شارع دقيقاً موحداً لم تثبت مطابقته، ولا نعمم ساعات متجر على المركز كله."
      ],
      "stats": [
        [
          "4.2 / 5",
          "Google Maps · طرف ثالث"
        ],
        [
          "16,870",
          "مراجعة · 29 أكتوبر 2026"
        ]
      ]
    },
    "shopping": {
      "eyebrow": "تجربة التسوق",
      "h2": "التحقق من فروع المحلات",
      "intro": "ابدأ بالمتجر الذي تحتاجه، وتحقق من الفرع والمخزون مباشرة. مصادر التجار التالية نقاط تحقق مفيدة، وليست إثباتاً لاكتمال الدليل أو وجود كل علامة في نقطة الخريطة نفسها.",
      "items": [
        [
          "Gifts Center: فرع منشور",
          "يسرد موقع التاجر فرع Irbid City Center؛ خريطته تبعد نحو 160 متراً عن نقطة هذا الدليل، مع اختلاف اسم الشارع. تحقق من المدخل عند التوجه."
        ],
        [
          "MUMUSO: تحقق من الموقع",
          "توجد صفحة فرع رسمية بهذا الاسم، لكن رابط خريطتها يبعد قرابة 2.9 كم عن نقطة الدليل؛ لا نفترض أنه يثبت موقع المتجر داخل هذه النقطة."
        ]
      ],
      "imgAlt": "رسم هندسي تجريدي، ليس صورة للمركز"
    },
    "dining": {
      "eyebrow": "المطاعم",
      "h2": "تحقق من فرع المطعم قبل الزيارة",
      "paragraphs": [
        "اختر مطعماً بعد التحقق من فرعه وموقعه وساعات الخدمة وقائمته. لم نثبت في هذه المراجعة قائمة كاملة بمطاعم المركز أو ساعات صالة الطعام.",
        "إذا كان لديك احتياج غذائي أو ميزانية محددة فاسأل عن المكونات والأسعار قبل الشراء؛ لا يفترض هذا الدليل وجود مطعم معين أو نشاطه حالياً."
      ],
      "imgAlt": "رسم هندسي تجريدي، ليس صورة للمركز"
    },
    "entertainment": {
      "eyebrow": "الترفيه والعائلة",
      "h2": "تحقق من النشاط وشروط العمر",
      "items": [
        [
          "قبل حجز نشاط",
          "تحقق من المشغل والفرع والموعد وشروط العمر. لم نؤكد جدول سينما أو فعالية حالية لهذا الموقع."
        ],
        [
          "زيارة مع الأطفال",
          "اسأل عن المرافق المفتوحة والإشراف وإمكان الحركة بالعربة؛ لا نفترض جاهزية منطقة لعب أو خدمة بعينها."
        ]
      ]
    },
    "visitInfo": {
      "eyebrow": "معلومات الزيارة",
      "h2": "ساعات العمل والرسوم",
      "items": [
        [
          "ساعات المركز",
          "عرضت Maps إشارة فتح 08:00 في 29 أكتوبر 2026؛ ليست جدولاً أسبوعياً كاملاً أو تأكيداً للفتح الآن."
        ],
        [
          "ساعات المتاجر",
          "يسرد Gifts Center السبت–الخميس 10:00–22:00 والجمعة 14:00–22:00 لفرعه فقط. تحقق قبل السفر؛ لا تُعممها على المركز."
        ],
        [
          "الدخول والمواقف",
          "لم نؤكد تعرفة رسمية حديثة للدخول أو المواقف؛ عدم التأكيد لا يثبت وجود رسوم. تحقق من اللوحات قبل الدفع."
        ]
      ],
      "note": "المواعيد من مصادر مؤرخة بالمراجعة في 29 أكتوبر 2026، وقد تختلف في العطلات. تأكد من أن الوقت يخص الفرع والخدمة المقصودين."
    },
    "location": {
      "eyebrow": "الوصول",
      "h2": "الموقع وكيفية زيارة سيتي سنتر إربد في مدينة إربد",
      "intro": "نقطة الدليل في إربد: 32.535751, 35.8653365. أسماء الشوارع المنشورة غير متطابقة: يذكر Gifts Center شارع أبي العلاء المعري، ويذكر خبر افتتاح مصرفي قديم شارع الأمير حسن. لا نختار بينهما كعنوان موحد دون تحقق إضافي.",
      "items": [
        [
          "قبل الانطلاق",
          "شارك نقطة الخريطة مع الفرع أو السائق، واطلب تحديد المدخل الصحيح بدلاً من الاعتماد على اسم شارع وحده."
        ],
        [
          "المواصلات",
          "تحقق من الرحلة من نقطة انطلاقك ووسيلة العودة. لم نوثق خط نقل مباشر أو مسافة مشي قصيرة."
        ]
      ],
      "imgAlt": "رسم هندسي تجريدي، ليس صورة للمركز"
    },
    "parking": {
      "eyebrow": "مواقف السيارات",
      "h2": "معلومات الوقوف والوصول",
      "items": [
        "اسأل عن المدخل المخصص للسيارات والمكان المتاح يوم الزيارة؛ لا نفترض وجود موقف شاغر.",
        "راجع السعر ووقت السماح وشروط الدفع على اللوحات قبل الوقوف، وحدد نقطة آمنة للعودة."
      ]
    },
    "bestTime": {
      "eyebrow": "أفضل وقت للزيارة",
      "h2": "متى تزور المركز؟",
      "items": [
        [
          "حدد هدف الزيارة",
          "اختر موعداً يتوافق مع تأكيد المتجر الذي تحتاجه، لا مع ساعة فتح عامة غير مكتملة."
        ],
        [
          "وقت مرن",
          "ساعة ونصف إلى ثلاث ساعات اقتراح تخطيط، لا مدة جولة ثابتة أو ضماناً لعدد خدمات مفتوحة."
        ]
      ]
    },
    "plans": {
      "eyebrow": "خطط حسب الفئة",
      "h2": "ثلاث خطط زيارة مصممة لأسلوبك",
      "intro": "خطط مرنة تتوقف على ما تؤكده الجهات في يوم الزيارة.",
      "items": [
        {
          "title": "عائلة",
          "tag": "اقتراح مرن",
          "steps": [
            "اسأل عن المرافق المفتوحة واحتياجات الأطفال.",
            "اختر متجرين واستراحة بعد تأكيد ساعاتها."
          ]
        },
        {
          "title": "شراء محدد",
          "tag": "اقتراح مرن",
          "steps": [
            "تأكد من الفرع وتوفر المنتج قبل التحرك.",
            "حدد المدخل ووسيلة العودة."
          ]
        },
        {
          "title": "تنقل أقل إجهاداً",
          "tag": "اقتراح مرن",
          "steps": [
            "اسأل عن مسار الوصول والمصاعد والمرافق المتاحة.",
            "عدّل الخطة وفق الإجابة؛ لا نفترض إتاحة كاملة."
          ]
        }
      ]
    },
    "routes": {
      "eyebrow": "مسارات مقترحة",
      "h2": "جولة مركزة أو زيارة أطول",
      "items": [
        {
          "title": "جولة مركزة",
          "time": "بحسب الحاجة",
          "steps": [
            "أكد شراءً أو خدمة بعينها.",
            "اختر وقتاً ومدخلاً متفقاً عليهما."
          ]
        },
        {
          "title": "زيارة أطول",
          "time": "وقت إضافي اختياري",
          "steps": [
            "أضف استراحة أو نشاطاً فقط بعد تأكيد توفره.",
            "تحقق من انتهاء الخدمة ووسيلة العودة."
          ]
        }
      ]
    },
    "services": {
      "eyebrow": "خدمات الزوار والمرافق",
      "h2": "ما يمكن أن تحتاجه أثناء الزيارة",
      "intro": "أسئلة عملية لتأكيد المرافق، وليست قائمة خدمات مضمونة.",
      "items": [
        [
          "إمكان الوصول",
          "اسأل عن المدخل المناسب والمصاعد ودورات المياه المطلوبة قبل السفر."
        ],
        [
          "الدفع والمساعدة",
          "أكد وسيلة الدفع ورقم الفرع؛ رقم Maps للمركز ليس خط اتصال بهذا الدليل."
        ]
      ]
    },
    "directory": {
      "eyebrow": "دليل المحلات",
      "h2": "أقسام المحلات والخدمات في سيتي سنتر إربد",
      "intro": "مصادر تجارية ذاتية النشر، لا دليل شامل أو إثبات لتطابق كل نقطة فرع.",
      "categories": [
        {
          "title": "Gifts Center",
          "desc": "مصدر فرع مع وقت خاص به؛ تحقق من المدخل.",
          "items": [
            "عطور وتجميل وساعات بحسب وصف التاجر"
          ]
        },
        {
          "title": "MUMUSO",
          "desc": "اسم فرع رسمي مع اختلاف واضح في رابط موقعه.",
          "items": [
            "لا يُعتمد كموقع مؤكد عند نقطة هذا الدليل"
          ]
        }
      ]
    },
    "nearby": {
      "eyebrow": "المعالم القريبة",
      "h2": "المعالم القريبة من سيتي سنتر إربد",
      "intro": "لا نربط هذه الزيارة تلقائياً بمسار قريب أو زمن انتقال غير موثق.",
      "items": [
        [
          "قبل إضافة وجهة",
          "تحقق من نقطة الوجهة التالية وساعاتها ووسيلة الوصول بشكل مستقل."
        ]
      ]
    },
    "background": {
      "eyebrow": "خلفية معرفية",
      "h2": "هوية المكان وحدود الدليل",
      "paragraphs": [
        "اسم سيتي سنتر إربد مستخدم في مصادر تجار ومصارف، لكن هذا لا يثبت أن كل عنوان أو وقت منشور يصف الموقع نفسه بدقة."
      ],
      "responsibility": [
        "احترم تعليمات المكان وخصوصية الآخرين عند التصوير.",
        "تحقق من المعلومات المتغيرة مباشرة مع الفرع المقصود."
      ]
    },
    "sources": {
      "eyebrow": "المصادر والمنهجية",
      "h2": "كيف أُعدّ هذا الدليل",
      "paragraphs": [
        "راجعت المصادر في 29 أكتوبر 2026. Gifts Center ينشر اسماً وعنواناً وخريطة فرع قرب نقطة الدليل. MUMUSO ينشر فرعاً بهذا الاسم، لكن رابط خريطته لا يطابق النقطة؛ لا نعرض ساعاته كمواعيد للمركز.",
        "تعذر الوصول إلى موقع المشغل الذي أوردته أدلة عامة. لم نؤكد لذلك جدولاً كاملاً أو قائمة متاجر رسمية شاملة."
      ],
      "links": [
        {
          "label": "Gifts Center · Irbid City Center",
          "href": "https://www.giftscenter.com/store/irbid-city-center"
        },
        {
          "label": "MUMUSO · Jordan branches",
          "href": "https://mumuso.jo/en/pages/mumuso-branche"
        },
        {
          "label": "البنك الإسلامي الأردني · خبر افتتاح تاريخي",
          "href": "https://www.jordanislamicbank.com/ar/news/afttah-fr-syty-sntr-mhafzt-arbd"
        },
        {
          "label": "Google Maps",
          "href": "https://maps.app.goo.gl/L71ekukFyjaVPVxZ9"
        }
      ],
      "note": "التقييمات لقطة طرف ثالث. الرسم أصلي تجريدي وليس صورة للمركز أو توثيقاً لشكله الحالي."
    },
    "faq": [
      {
        "q": "أين يقع سيتي سنتر إربد؟",
        "a": "نقطة الدليل في إربد: 32.535751, 35.8653365. أسماء الشوارع المنشورة غير متطابقة: يذكر Gifts Center شارع أبي العلاء المعري، ويذكر خبر افتتاح مصرفي قديم شارع الأمير حسن. لا نختار بينهما كعنوان موحد دون تحقق إضافي."
      },
      {
        "q": "هل هو مفتوح الآن؟",
        "a": "عرضت Maps إشارة فتح 08:00 في 29 أكتوبر 2026؛ ليست جدولاً أسبوعياً كاملاً أو تأكيداً للفتح الآن."
      },
      {
        "q": "هل مواعيد المتاجر مثل مواعيد المركز؟",
        "a": "يسرد Gifts Center السبت–الخميس 10:00–22:00 والجمعة 14:00–22:00 لفرعه فقط. تحقق قبل السفر؛ لا تُعممها على المركز."
      },
      {
        "q": "هل الدخول والمواقف مجانيان؟",
        "a": "لم نؤكد تعرفة رسمية حديثة للدخول أو المواقف؛ عدم التأكيد لا يثبت وجود رسوم. تحقق من اللوحات قبل الدفع."
      },
      {
        "q": "كيف أتحقق من متجر معين؟",
        "a": "ابدأ بالمتجر الذي تحتاجه، وتحقق من الفرع والمخزون مباشرة. مصادر التجار التالية نقاط تحقق مفيدة، وليست إثباتاً لاكتمال الدليل أو وجود كل علامة في نقطة الخريطة نفسها."
      },
      {
        "q": "هل توجد سينما أو ألعاب متاحة؟",
        "a": "تحقق من المشغل والفرع والموعد وشروط العمر. لم نؤكد جدول سينما أو فعالية حالية لهذا الموقع."
      },
      {
        "q": "ماذا عن احتياجات الوصول؟",
        "a": "اسأل عن المدخل المناسب والمصاعد ودورات المياه المطلوبة قبل السفر."
      }
    ],
    "footer": {
      "tagline": "دليل مستقل وغير ربحي للمعلومات السياحية والتثقيف العام، وليس موقع الإدارة.",
      "copyright": "© 2026 سيتي سنتر إربد — دليل غير رسمي.",
      "disclaimer": "هذا الموقع دليل معلوماتي مستقل وليس الموقع الرسمي لسيتي سنتر إربد. جميع المعلومات الواردة هنا لأغراض التعريف والاستدلال وقد تتغير دون إشعار.",
      "quick": [
        {
          "label": "الموقع",
          "value": "إربد، الأردن · تحقق من نقطة الخريطة"
        },
        {
          "label": "المواعيد",
          "value": "تحقق من الفرع والخدمة"
        },
        {
          "label": "هاتف Maps",
          "value": "+962 2 691 1111"
        }
      ],
      "links": [
        {
          "href": "/privacy-policy",
          "label": "سياسة الخصوصية"
        },
        {
          "href": "/terms",
          "label": "شروط الاستخدام"
        },
        {
          "href": "#faq",
          "label": "الأسئلة الشائعة"
        },
        {
          "href": "#sources",
          "label": "المصادر والمنهجية"
        }
      ]
    }
  },
  "en": {
    "meta": {
      "title": "Irbid City Center | سيتي سنتر إربد — Shopping Mall in Irbid, Jordan",
      "description": "Independent Irbid City Center guide: map pin, conflicting street names, and how to verify mall/tenant hours and service fees before visiting.",
      "siteName": "Irbid City Center — Visitor Guide"
    },
    "nav": [
      {
        "href": "#about",
        "label": "Overview"
      },
      {
        "href": "#directory",
        "label": "Store Directory"
      },
      {
        "href": "#shopping",
        "label": "Shopping"
      },
      {
        "href": "#dining",
        "label": "Dining"
      },
      {
        "href": "#entertainment",
        "label": "Entertainment"
      },
      {
        "href": "#visit",
        "label": "Getting There"
      },
      {
        "href": "#plans",
        "label": "Visit Plans"
      },
      {
        "href": "#faq",
        "label": "FAQ"
      }
    ],
    "hero": {
      "eyebrow": "Irbid · Northern Jordan",
      "h1": "Irbid City Center (Irbid)",
      "sub": "Plan a visit while separating the mall from individual tenant schedules. Published street names conflict; use the map pin and confirm the entrance with your intended destination.",
      "meta": [
        {
          "icon": "📍",
          "text": "Irbid, Jordan · confirm the arrival pin"
        },
        {
          "icon": "🕒",
          "text": "Full current schedule not verified"
        },
        {
          "icon": "⭐",
          "text": "Google Maps · 4.2/5 · 16,870 · 29 Oct 2026"
        }
      ],
      "cta": [
        {
          "href": "#visit",
          "label": "Location on map",
          "primary": true
        },
        {
          "href": "#visit-info",
          "label": "Visit info",
          "primary": false
        }
      ]
    },
    "about": {
      "eyebrow": "Overview",
      "h2": "About Irbid City Center (سيتي سنتر إربد)",
      "paragraphs": [
        "This is an independent guide, not the mall operator or a complete tenant inventory. Google Maps showed 4.2 from 16,870 reviews on 29 October 2026; these are third-party reviews, not reviews collected by this guide.",
        "Retailer and bank sources name Irbid City Center branches, but street labels and some branch pins differ. We do not publish an unverified single street address or turn a tenant schedule into the whole mall’s hours."
      ],
      "stats": [
        [
          "4.2 / 5",
          "Google Maps · third party"
        ],
        [
          "16,870",
          "reviews · 29 October 2026"
        ]
      ]
    },
    "shopping": {
      "eyebrow": "Shopping",
      "h2": "Checking specific shop branches",
      "intro": "Start with the business you need and confirm its branch and stock directly. The retailer sources below are useful checks, not evidence of a complete directory or of every brand sharing this exact map pin.",
      "items": [
        [
          "Gifts Center: published branch",
          "The retailer lists an Irbid City Center branch; its directions pin is about 160 metres from this guide’s pin, with a different street label. Confirm the entrance."
        ],
        [
          "MUMUSO: check the location",
          "An official branch page uses this name, but its map link is about 2.9 km from the guide’s pin. It is not treated as confirmation at this exact location."
        ]
      ],
      "imgAlt": "Abstract geometric illustration, not a mall photograph"
    },
    "dining": {
      "eyebrow": "Dining",
      "h2": "Confirm your dining destination",
      "paragraphs": [
        "Choose a restaurant only after checking its branch, location, serving hours and menu. A complete mall restaurant list or food-court schedule was not established in this review.",
        "Ask about ingredients and prices if you have dietary or budget requirements; this guide does not assume a particular restaurant is present or currently operating."
      ],
      "imgAlt": "Abstract geometric illustration, not a mall photograph"
    },
    "entertainment": {
      "eyebrow": "Entertainment & Family",
      "h2": "Check activities and age rules",
      "items": [
        [
          "Before booking an activity",
          "Verify the operator, branch, date and age rules. A current cinema or event schedule at this location was not confirmed."
        ],
        [
          "Visiting with children",
          "Ask which facilities are open, what supervision applies and whether your stroller route is usable; a particular play area or service is not guaranteed."
        ]
      ]
    },
    "visitInfo": {
      "eyebrow": "Visit Info",
      "h2": "Opening hours & fees",
      "items": [
        [
          "Mall hours",
          "Maps showed an 08:00 opening signal on 29 October 2026, not a full weekly schedule or a live open-now confirmation."
        ],
        [
          "Tenant hours",
          "Gifts Center lists Saturday–Thursday 10:00–22:00 and Friday 14:00–22:00 for its own branch only. Confirm before travel; these are not mall-wide hours."
        ],
        [
          "Admission and parking",
          "A current official admission or parking tariff was not confirmed. This does not establish that a fee exists; check posted terms before paying."
        ]
      ],
      "note": "Sources were checked on 29 October 2026; holiday hours may differ. Confirm that the time applies to your intended branch and service."
    },
    "location": {
      "eyebrow": "Getting There",
      "h2": "Location & how to reach Irbid City Center in Irbid",
      "intro": "Guide pin in Irbid: 32.535751, 35.8653365. Published street names differ: Gifts Center uses Abi Ala Al Ma ari Street, while an older bank opening announcement uses Prince Hassan Street. Neither is selected as a definitive shared address without further verification.",
      "items": [
        [
          "Before setting off",
          "Share the map pin with the branch or driver and confirm the correct entrance rather than relying only on a street name."
        ],
        [
          "Transport",
          "Check travel from your own starting point and the return journey. No direct transit route or short walking connection was established."
        ]
      ],
      "imgAlt": "Abstract geometric illustration, not a mall photograph"
    },
    "parking": {
      "eyebrow": "Parking",
      "h2": "Parking & access information",
      "items": [
        "Ask about the vehicle entrance and spaces available on your chosen day; a vacant space is not guaranteed.",
        "Check the posted rate, grace period and payment rules before parking, and choose a safe return meeting point."
      ]
    },
    "bestTime": {
      "eyebrow": "Best time to visit",
      "h2": "When to visit the mall",
      "items": [
        [
          "Set your visit goal",
          "Choose a time confirmed by the business you need rather than relying on an incomplete general opening signal."
        ],
        [
          "Allow flexible time",
          "A flexible 1.5–3 hours is a planning suggestion, not a fixed tour length or a promise of open services."
        ]
      ]
    },
    "plans": {
      "eyebrow": "Plans by group",
      "h2": "Three visit plans for your style",
      "intro": "Flexible plans depend on what the businesses confirm for your chosen day.",
      "items": [
        {
          "title": "Family",
          "tag": "Flexible suggestion",
          "steps": [
            "Ask about open facilities and children’s needs.",
            "Choose two shops and a break after confirming their hours."
          ]
        },
        {
          "title": "Focused purchase",
          "tag": "Flexible suggestion",
          "steps": [
            "Confirm the branch and product before setting off.",
            "Identify the entrance and return transport."
          ]
        },
        {
          "title": "Lower-effort visit",
          "tag": "Flexible suggestion",
          "steps": [
            "Ask about usable access routes, lifts and facilities.",
            "Adapt the plan to the response; full accessibility is not assumed."
          ]
        }
      ]
    },
    "routes": {
      "eyebrow": "Suggested routes",
      "h2": "A focused trip or longer visit",
      "items": [
        {
          "title": "Focused trip",
          "time": "As needed",
          "steps": [
            "Confirm a specific purchase or service.",
            "Use the agreed time and entrance."
          ]
        },
        {
          "title": "Longer visit",
          "time": "Optional extra time",
          "steps": [
            "Add a break or activity only after confirming availability.",
            "Check closing/last-service time and return transport."
          ]
        }
      ]
    },
    "services": {
      "eyebrow": "Visitor services & facilities",
      "h2": "What you may need during your visit",
      "intro": "Practical facility checks, not a guaranteed service inventory.",
      "items": [
        [
          "Accessibility",
          "Ask about your required entrance, lifts and toilets before travelling."
        ],
        [
          "Payments and assistance",
          "Confirm payment methods and the branch number; the mall’s Maps phone is not a contact line for this guide."
        ]
      ]
    },
    "directory": {
      "eyebrow": "Store Directory",
      "h2": "Store & service sections at Irbid City Center",
      "intro": "Self-published business sources, not a complete directory or proof that every branch pin matches.",
      "categories": [
        {
          "title": "Gifts Center",
          "desc": "Branch source with its own hours; confirm the entrance.",
          "items": [
            "Fragrances, cosmetics and watches according to the retailer"
          ]
        },
        {
          "title": "MUMUSO",
          "desc": "Official branch name with a significant map-link discrepancy.",
          "items": [
            "Not confirmed at this guide’s exact pin"
          ]
        }
      ]
    },
    "nearby": {
      "eyebrow": "Nearby attractions",
      "h2": "Attractions near Irbid City Center",
      "intro": "No nearby itinerary or unverified travel time is assumed.",
      "items": [
        [
          "Before adding a destination",
          "Check the next destination’s pin, hours and transport independently."
        ]
      ]
    },
    "background": {
      "eyebrow": "Background",
      "h2": "Place identity and guide scope",
      "paragraphs": [
        "The mall name appears in retailer and bank sources, but that does not mean every published address or schedule identifies the same location precisely."
      ],
      "responsibility": [
        "Respect site rules and other visitors’ privacy when taking photographs.",
        "Verify changeable information with the intended business."
      ]
    },
    "sources": {
      "eyebrow": "Sources & methodology",
      "h2": "How this guide was prepared",
      "paragraphs": [
        "Sources checked 29 October 2026. Gifts Center publishes a branch name, address and pin near the guide’s target. MUMUSO names a branch but its linked pin differs; its hours are not presented as the mall’s schedule.",
        "The operator website named by general directories was inaccessible. A full operator schedule or comprehensive official tenant list was not confirmed."
      ],
      "links": [
        {
          "label": "Gifts Center · Irbid City Center",
          "href": "https://www.giftscenter.com/store/irbid-city-center"
        },
        {
          "label": "MUMUSO · Jordan branches",
          "href": "https://mumuso.jo/en/pages/mumuso-branche"
        },
        {
          "label": "Jordan Islamic Bank · historical opening announcement",
          "href": "https://www.jordanislamicbank.com/ar/news/afttah-fr-syty-sntr-mhafzt-arbd"
        },
        {
          "label": "Google Maps",
          "href": "https://maps.app.goo.gl/L71ekukFyjaVPVxZ9"
        }
      ],
      "note": "Ratings are a third-party snapshot. The original abstract illustration is not a mall photograph or a record of its present appearance."
    },
    "faq": [
      {
        "q": "Where is the mall?",
        "a": "Guide pin in Irbid: 32.535751, 35.8653365. Published street names differ: Gifts Center uses Abi Ala Al Ma ari Street, while an older bank opening announcement uses Prince Hassan Street. Neither is selected as a definitive shared address without further verification."
      },
      {
        "q": "Is it open now?",
        "a": "Maps showed an 08:00 opening signal on 29 October 2026, not a full weekly schedule or a live open-now confirmation."
      },
      {
        "q": "Do tenants share mall hours?",
        "a": "Gifts Center lists Saturday–Thursday 10:00–22:00 and Friday 14:00–22:00 for its own branch only. Confirm before travel; these are not mall-wide hours."
      },
      {
        "q": "Are entry and parking free?",
        "a": "A current official admission or parking tariff was not confirmed. This does not establish that a fee exists; check posted terms before paying."
      },
      {
        "q": "How do I check a particular shop?",
        "a": "Start with the business you need and confirm its branch and stock directly. The retailer sources below are useful checks, not evidence of a complete directory or of every brand sharing this exact map pin."
      },
      {
        "q": "Are cinema or play facilities available?",
        "a": "Verify the operator, branch, date and age rules. A current cinema or event schedule at this location was not confirmed."
      },
      {
        "q": "What about accessibility?",
        "a": "Ask about your required entrance, lifts and toilets before travelling."
      }
    ],
    "footer": {
      "tagline": "Independent nonprofit tourism and public education information guide, not the mall operator.",
      "copyright": "© 2026 Irbid City Center — unofficial guide.",
      "disclaimer": "This site is an independent information guide and is not the official website of Irbid City Center. All information here is for orientation and may change without notice.",
      "quick": [
        {
          "label": "Location",
          "value": "Irbid, Jordan · verify the map pin"
        },
        {
          "label": "Hours",
          "value": "Confirm branch and service"
        },
        {
          "label": "Maps phone",
          "value": "+962 2 691 1111"
        }
      ],
      "links": [
        {
          "href": "/en/privacy-policy",
          "label": "Privacy Policy"
        },
        {
          "href": "/en/terms",
          "label": "Terms of Use"
        },
        {
          "href": "#faq",
          "label": "FAQ"
        },
        {
          "href": "#sources",
          "label": "Sources & methodology"
        }
      ]
    }
  }
};
