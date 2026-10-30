import { SITE, type Locale } from '../i18n';
export function buildJsonLd(locale: Locale, faqs: {q:string;a:string}[]): Record<string,unknown>[] {
 const page=locale==='ar'?`${SITE}/`:`${SITE}/en/`;
 const name=locale==='ar'?'سيتي سنتر إربد':'Irbid City Center';
 return [
 {'@context':'https://schema.org','@type':'ShoppingCenter','@id':`${SITE}/#mall`,name,url:page,hasMap:'https://maps.app.goo.gl/L71ekukFyjaVPVxZ9',address:{'@type':'PostalAddress',addressLocality:'Irbid',addressCountry:'JO'},geo:{'@type':'GeoCoordinates',latitude:32.535751,longitude:35.8653365}},
 {'@context':'https://schema.org','@type':'WebPage','@id':`${page}#webpage`,url:page,name,inLanguage:locale,isPartOf:{'@id':`${SITE}/#website`}},
 {'@context':'https://schema.org','@type':'WebSite','@id':`${SITE}/#website`,url:SITE,name:'Independent Irbid visitor guide',inLanguage:['ar','en']},
 {'@context':'https://schema.org','@type':'FAQPage','@id':`${page}#faq`,mainEntity:faqs.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}}))}
 ];
}
