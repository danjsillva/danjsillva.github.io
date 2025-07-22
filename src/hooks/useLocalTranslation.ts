import { useTranslation } from "react-i18next";

type Translations<T> = {
  "pt-BR": T;
  en: T;
};

export function useLocalTranslation<T>(translations: Translations<T>) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as keyof Translations<T>;

  return translations[currentLang] || translations.en;
}

