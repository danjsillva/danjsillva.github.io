import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./language-toggle";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="flex justify-between w-full lg:w-[1024px] p-8">
          <h1 className="font-bold">
            <a href="/">danjsillva.github.io</a>
          </h1>

          <nav className="hidden sm:flex items-center justify-between">
            <ul className="flex items-center space-x-4">
              <li>
                <a href="#" className="text-zinc-500 hover:text-zinc-400">
                  {t("header.about")}
                </a>
              </li>

              <li>
                <a
                  href="#timeline"
                  className="text-zinc-500 hover:text-zinc-400"
                >
                  {t("header.timeline")}
                </a>
              </li>

              <li>
                <a
                  href="#contents"
                  className="text-zinc-500 hover:text-zinc-400"
                >
                  {t("header.contents")}
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-zinc-500 hover:text-zinc-400"
                >
                  {t("header.contact")}
                </a>
              </li>

              <li className="ml-6">
                <LanguageToggle />
              </li>
            </ul>
          </nav>

          <button
            className="sm:hidden text-zinc-500 hover:text-zinc-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <nav className="fixed top-[88px] left-0 right-0 z-40 bg-zinc-950 border-b border-zinc-800 sm:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a
                href="#"
                className="text-zinc-500 hover:text-zinc-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.about")}
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className="text-zinc-500 hover:text-zinc-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.timeline")}
              </a>
            </li>
            <li>
              <a
                href="#contents"
                className="text-zinc-500 hover:text-zinc-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.contents")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-zinc-500 hover:text-zinc-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.contact")}
              </a>
            </li>
            <li className="mt-4">
              <LanguageToggle />
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Header;

