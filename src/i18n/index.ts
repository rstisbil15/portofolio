import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import id from "./locales/id.json"
import en from "./locales/en.json"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      id: { translation: id },
      en: { translation: en }
    },
    lng: navigator.language.startsWith("id") ? "id" : "en",
    fallbackLng: "id",
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
