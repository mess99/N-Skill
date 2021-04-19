import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Home: "Home",
      Login: "Login",
      Register: "Register",
      Tips: "Tips",
      "Welcome to N'Skills!": "Welcome to N'skills!",
      Lessons: "Lessons",
      "Latest updates": "Latest updates",
      "How it works ?": "How it works ?",
    },
  },
  fr: {
    translation: {
      Home: "Accueil",
      Login: "Se connecter",
      Register: "S'inscrire",
      Tips: "Astuces",
      "Welcome to N'Skills!": "Bienvenue sur N'Skills !",
      Lessons: "Cours",
      "Latest updates": "Nouveautés du site",
      "How it works ?": "Comment ça fonctionne ?",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
