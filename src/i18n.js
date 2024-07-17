// src/i18n.js
// backend: {
//   loadPath:
//     "https://<user>.github.io/<user>/locales/{{lng}}/translation.json",
// },
//  to work locally remove https://<user>.github.io form laodPath

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["queryString", "localStorage"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
