import { SITE, type Locale } from "../i18n";

// JSON-LD 构造：以 ShoppingCenter（购物中心）作为主类型，更准确反映实体，
// 同时并入 LocalBusiness 以保留 NAP / 评分 / 营业时间等本地 SEO 字段。
// 所有事实集中在此，避免散落硬编码。

const NAME_AR = "سيتي سنتر إربد";
const NAME_EN = "Irbid City Center";
const TELEPHONE = "+96226911111";
const MAPS_LINK = "https://maps.app.goo.gl/L71ekukFyjaVPVxZ9";
const GOVT_TOURISM = "https://www.visitjordan.com/";
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Jd Mall, Nathan Road 235",
  addressLocality: "Irbid",
  addressRegion: "Irbid Governorate",
  postalCode: "21110",
  addressCountry: "JO",
};
const GEO = {
  "@type": "GeoCoordinates",
  latitude: 32.5357509,
  longitude: 35.8627562,
};
const RATING = {
  "@type": "AggregateRating",
  ratingValue: "4.2",
  reviewCount: "16832",
  bestRating: "5",
};
const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "00:00",
  },
];

export function buildJsonLd(
  locale: Locale,
  faqs: { q: string; a: string }[]
): Record<string, unknown>[] {
  const siteName = locale === "ar" ? `${NAME_AR} — دليل الزيارة` : `${NAME_EN} — Visitor Guide`;
  const altName = locale === "ar" ? NAME_EN : NAME_AR;

  const shoppingCenter: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["ShoppingCenter", "LocalBusiness"],
    "@id": `${SITE}/#mall`,
    name: locale === "ar" ? NAME_AR : NAME_EN,
    alternateName: [altName, locale === "ar" ? `${NAME_AR} (${NAME_EN})` : `${NAME_EN} (${NAME_AR})`],
    description: "",
    url: SITE,
    telephone: TELEPHONE,
    priceRange: "$$",
    currenciesAccepted: "JOD",
    image: [`${SITE}/irbid-city-center-main.jpg`],
    address: ADDRESS,
    geo: GEO,
    hasMap: MAPS_LINK,
    sameAs: [MAPS_LINK, GOVT_TOURISM],
    aggregateRating: RATING,
    openingHoursSpecification: OPENING_HOURS,
    isAccessibleForFree: true,
    publicAccess: true,
  };

  return [
    shoppingCenter,
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${SITE}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: siteName,
      inLanguage: locale === "ar" ? "ar" : "en",
      about: { "@id": `${SITE}/#mall` },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": locale === "ar" ? `${SITE}/#webpage-ar` : `${SITE}/en/#webpage-en`,
      url: locale === "ar" ? SITE : `${SITE}/en/`,
      name: siteName,
      inLanguage: locale === "ar" ? "ar" : "en",
      isPartOf: { "@id": `${SITE}/#website` },
      breadcrumb: { "@id": `${SITE}/#breadcrumb` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${SITE}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Jordan", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Irbid Governorate", item: `${SITE}/#location` },
        { "@type": "ListItem", position: 3, name: "Irbid", item: `${SITE}/#location` },
        { "@type": "ListItem", position: 4, name: locale === "ar" ? NAME_AR : NAME_EN, item: `${SITE}/` },
      ],
    },
  ];
}
