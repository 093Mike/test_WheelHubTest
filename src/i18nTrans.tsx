
import i18next from 'i18next';

import es from "./assets/trans/es";
import en from "./assets/trans/en";
i18next
.init({
    interpolation: {
      // React already does escaping
      escapeValue: false,
    },
    lng: navigator.language, 

    resources: {
      en: en,
      es: es,
    },
  })

export default i18next