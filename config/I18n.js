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

import zh from './locale/zh';

// Default the locale back to english (unfortunately importing zh-cn implicitly
// sets it as the default locale).
moment.locale("en");

const resources = {
  zh,
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

export const t = (
  key: $Keys<typeof zh>,
  data?: {[string]: string}
): string => i18next.t(key, {...data});
