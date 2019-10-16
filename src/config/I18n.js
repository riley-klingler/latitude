/**
 * TEAM: frontend_infra
 * WATCHERS: legalosLOTR
 *
 * @flow strict
 */

import moment from "moment";
import "moment/locale/zh-cn";
import i18next from "i18next";
import LngDetector from "config/I18nLanguageDetector";
import zhBooking from "config/locale/booking/zh";
import zhCommon from "config/locale/common/zh";
import zhDocuments from "config/locale/documents/zh";
import zhLatitude from "config/locale/latitude/zh";
import zhCore from "config/locale/core/zh";

// Default the locale back to english (unfortunately importing zh-cn implicitly
// sets it as the default locale).
moment.locale("en");

const resources = {
  zh: {
    booking: zhBooking,
    common: zhCommon,
    documents: zhDocuments,
    latitude: zhLatitude,
    core: zhCore,
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
  () => {
    i18next.changeLanguage();
  }
);

export function changeLanguage(lang: string) {
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
export const commonT = (key: string): string => i18next.t(key, {ns: "common"});
export const documentsT = (
  key: $Keys<typeof resources.zh.documents>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "documents"});
export const latitudeT = (
  key: $Keys<typeof resources.zh.latitude>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "latitude"});
export const coreT = (
  key: $Keys<typeof resources.zh.core>,
  data?: {[string]: string}
): string => i18next.t(key, {...data, ns: "core"});
