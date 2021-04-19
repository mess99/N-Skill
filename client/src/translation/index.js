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
      Stories: "Stories",
      "Latest updates": "Latest updates",
      "How it works ?": "How it works ?",
      menuStory:
        "Short stories are a great resource for English learners because they allow you to work on reading, speaking and listening at the same time.",
      "N'skills is a website that..":
        "N'skills is a website that will help you learn English in fun way.",
      "Includes lessons, quizzes..":
        "Includes lessons, quizzes, grammar, and discussion forums for students.",
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
      Stories: "Histoires",
      "Latest updates": "Nouveautés du site",
      "How it works ?": "Comment ça fonctionne ?",
      menuStory:
        "Les histoires courtes sont une excellente ressource pour les apprenants d'anglais car elles vous permettent de travailler la lecture, la parole et l'écoute en même temps.",
      "N'skills is a website that..":
        "N'skills est un site Web qui vous aidera à apprendre l'anglais de manière ludique.",
      "Includes lessons, quizzes..":
        "Comprend des leçons, des quiz, de la grammaire et des forums de discussion pour les étudiants.",
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
