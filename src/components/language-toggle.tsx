import { useTranslation } from "react-i18next";

function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt-BR" ? "en" : "pt-BR";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
      aria-label="Toggle language"
    >
      {i18n.language === "pt-BR" ? (
        <>
          <span className="text-xl">🇧🇷</span>
          <span className="text-xs font-medium">PT</span>
        </>
      ) : (
        <>
          <span className="text-xl">🇺🇸</span>
          <span className="text-xs font-medium">EN</span>
        </>
      )}
    </button>
  );
}

export default LanguageToggle;
