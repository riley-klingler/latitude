/**
 * TEAM: frontend_infra
 * WATCHERS: legalosLOTR
 *
 * @flow strict
 */

import moment from "moment";
import "moment/locale/zh-cn";
import i18next from "i18next";
import LngDetector from "./I18nLanguageDetector";
import zhAnalytics from "./locale/analytics/zh";
import zhAuthentication from "./locale/authentication/zh";
import zhBooking from "./locale/booking/zh";
import zhCargo from "./locale/cargo/zh";
import zhCargoReceipt from "./locale/cargoreceipt/zh";
import zhCommon from "./locale/common/zh";
import zhCore from "./locale/core/zh";
import zhDangerousGoods from "./locale/dangerous_goods/zh";
import zhDashboard from "./locale/dashboard/zh";
import zhDocuments from "./locale/documents/zh";
import zhFilterGroup from "./locale/filter_group/zh";
import zhHbl from "./locale/hbl/zh";
import zhIsf from "./locale/isf/zh";
import zhLatitude from "./locale/latitude/zh";
import zhMap from "./locale/map/zh";
import zhMessage from "./locale/message/zh";
import zhMetadata from "./locale/metadata/zh";
import zhNagivation from "./locale/navigation/zh";
import zhNetwork from "./locale/network/zh";
import zhOnboarding from "./locale/onboarding/zh";
import zhPurchaseOrder from "./locale/purchase_order/zh";
import zhQuickQuote from "./locale/quick_quote/zh";
import zhQuotes from "./locale/quotes/zh";
import zhSearch from "./locale/search/zh";
import zhShipment from "./locale/shipment/zh";
import zhSI from "./locale/si/zh";
import zhTask from "./locale/task/zh";
import zhUserOnboarding from "./locale/user_onboarding/zh";
import zhVGM from "./locale/vgm/zh";

// Default the locale back to english (unfortunately importing zh-cn implicitly
// sets it as the default locale).
moment.locale("en");

const resources = {
  zh: {
    analytics: zhAnalytics,
    authentication: zhAuthentication,
    booking: zhBooking,
    cargo: zhCargo,
    cargoReceipt: zhCargoReceipt,
    common: zhCommon,
    core: zhCore,
    dangerousGoods: zhDangerousGoods,
    dashboard: zhDashboard,
    documents: zhDocuments,
    filter_group: zhFilterGroup,
    hbl: zhHbl,
    isf: zhIsf,
    latitude: zhLatitude,
    map: zhMap,
    message: zhMessage,
    metadata: zhMetadata,
    navigation: zhNagivation,
    network: zhNetwork,
    onboarding: zhOnboarding,
    purchaseOrder: zhPurchaseOrder,
    quick_quote: zhQuickQuote,
    quotes: zhQuotes,
    search: zhSearch,
    shipment: zhShipment,
    si: zhSI,
    task: zhTask,
    userOnboarding: zhUserOnboarding,
    vgm: zhVGM,
  },
};

i18next.use(LngDetector).init(
  {
    lng: "en",
    fallbackLng: "en",
    whitelist: ["en", "zh"],
    nsSeparator: "::",
    keySeparator: "%%",
    returnNull: false,
    detection: {
      lookupQuerystring: "lang",
      order: ["querystring"],
      caches: [],
    },
    interpolation: {
      escapeValue: false,
    },
    resources,
  },
  // eslint-disable-next-line autofix/no-unused-vars,autofix/no-unused-vars
  (err, t) => {
    i18next.changeLanguage();
  }
);

export function changeLanguage(lang: string) {
  console.trace("latitude > changeLanguage", lang);
  i18next.changeLanguage(lang);
  if (lang === "zh") {
    moment.locale("zh-cn");
  } else {
    moment.locale("en");
  }
}

export const bookingT = (
  key: $Keys<typeof resources.zh.booking>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "booking"});
export const siT = (
  key: $Keys<typeof resources.zh.si>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "si"});
export const commonT = (key: string): string => i18next.t(key, {ns: "common"});
export const coreT = (
  key: $Keys<typeof resources.zh.core>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "core"});
export const cargoT = (
  key: $Keys<typeof resources.zh.cargo>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "cargo"});
export const cargoReceiptT = (key: string, data?: {[string]: string}): string =>
  i18next.t(key, {...data, ns: ["cargoReceipt", "common"]});
export const dangerousGoodsT = (
  key: $Keys<typeof resources.zh.dangerousGoods>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "dangerousGoods"});
export const documentsT = (
  key: $Keys<typeof resources.zh.documents>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "documents"});
export const navigationT = (
  key: $Keys<typeof resources.zh.navigation>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "navigation"});
export const mapT = (
  key: $Keys<typeof resources.zh.map>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "map"});
export const messageT = (
  key: $Keys<typeof resources.zh.message>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "message"});
export const metadataT = (
  key: $Keys<typeof resources.zh.metadata>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "metadata"});
export const networkT = (key: string, data?: {[string]: string}): string =>
  i18next.t(key, {...data, ns: "network"});
export const onboardingT = (
  key: $Keys<typeof resources.zh.onboarding>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "onboarding"});
export const userOnboardingT = (
  key: $Keys<typeof resources.zh.userOnboarding>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "userOnboarding"});
export const purchaseOrderT = (
  key: $Keys<typeof resources.zh.purchaseOrder>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "purchaseOrder"});
export const quickQuoteT = (
  key: $Keys<typeof resources.zh.quick_quote>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "quick_quote"});
export const quotesT = (
  key: $Keys<typeof resources.zh.quotes>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "quotes"});
export const searchT = (key: string, data?: {[string]: string}): string =>
  i18next.t(key, {...data, ns: "search"});
export const shipmentT = (
  key: $Keys<typeof resources.zh.shipment>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "shipment"});
export const vgmT = (
  key: $Keys<typeof resources.zh.vgm>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "vgm"});
export const hblT = (
  key: $Keys<typeof resources.zh.hbl>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "hbl"});
export const taskT = (
  key: $Keys<typeof resources.zh.task>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "task"});
export const isfT = (
  key: $Keys<typeof resources.zh.isf>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "isf"});
export const dashboardT = (
  key: $Keys<typeof resources.zh.dashboard>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "dashboard"});
export const authenticationT = (
  key: $Keys<typeof resources.zh.authentication>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "authentication"});
export const analyticsT = (
  key: $Keys<typeof resources.zh.analytics>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "analytics"});
export const filterGroupT = (
  key: $Keys<typeof resources.zh.filter_group>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "filter_group"});
export const latitudeT = (
  key: $Keys<typeof resources.zh.latitude>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "latitude"});
