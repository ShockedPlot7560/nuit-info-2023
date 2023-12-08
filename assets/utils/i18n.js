import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Cookies from 'js-cookie';

import frYaml from 'js-yaml-loader!./../../translations/messages.fr.yaml';
import enYaml from 'js-yaml-loader!./../../translations/messages.en.yaml';
import itYaml from 'js-yaml-loader!./../../translations/messages.it.yaml';
import srYaml from 'js-yaml-loader!./../../translations/messages.sr.yaml';
import esYaml from 'js-yaml-loader!./../../translations/messages.es.yaml';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: frYaml,
      },
      en: {
        translation: enYaml,
      },
      it: {
        translation: itYaml,
      },
      sr: {
        translation: srYaml,
      },
      es: {
        translation: esYaml,
      },
    },
    lng: Cookies.get("lang") || (window && window.locale) || 'fr',
    fallbackLng: 'fr',
  });

export default i18n;