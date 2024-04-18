import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      notFound: '404 Not Found',
      lisbonMeetsFetish: 'Lisbon Meets Fetish',
      events: 'Events',
      moreEvents: 'More Events',
      nextEvents: 'Next Events',
      blog: 'Blog',
      members: 'Members',
      aboutGcp: 'About GCP',
      contacts: 'Contacts',
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use',
      socialNetworks: 'Social Networks',
      newsletter: 'Newsletter',
      siteMap: 'Site Map',
      moreBlogs: 'More Blogs',
    },
  },
  pt: {
    translation: {
      notFound: '404 Não Encontrado',
      lisbonMeetsFetish: 'Lisbon Meets Fetish',
      events: 'Eventos',
      moreEvents: 'Mais Eventos',
      nextEvents: 'Próximos Eventos',
      blog: 'Blog',
      members: 'Membros',
      aboutGcp: 'Sobre o GCP',
      contacts: 'Contactos',
      privacyPolicy: 'Política de Privacidade',
      termsOfUse: 'Termos de Uso',
      socialNetworks: 'Redes Sociais',
      newsletter: 'Newsletter',
      siteMap: 'Mapa do Site',
      moreBlogs: 'Mais Blogs',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
