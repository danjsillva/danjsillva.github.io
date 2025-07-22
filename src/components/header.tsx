import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import LanguageToggle from "./language-toggle";
import { useLocalTranslation } from "../hooks/useLocalTranslation";

const translations = {
  "pt-BR": {
    about: "Sobre",
    timeline: "Trajetória",
    skills: "Habilidades",
    contents: "Conteúdos",
    contact: "Contato",
  },
  en: {
    about: "About",
    timeline: "Timeline",
    skills: "Skills",
    contents: "Contents",
    contact: "Contact",
  },
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useLocalTranslation(translations);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="flex justify-between items-center w-full lg:w-[1024px] p-8">
          <h1 className="font-bold">
            <a href="/">danjsillva.github.io</a>
          </h1>

          <nav className="hidden sm:flex items-center justify-between">
            <ul className="flex items-center space-x-4">
              <li>
                <a href="#" className="text-zinc-500 hover:text-zinc-400">
                  {t.about}
                </a>
              </li>

              <li>
                <a
                  href="#timeline"
                  className="text-zinc-500 hover:text-zinc-400"
                >
                  {t.timeline}
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="text-zinc-500 hover:text-zinc-400"
                >
                  {t.skills}
                </a>
              </li>

              <li>
                <a
                  href="#contents"
                  className="text-zinc-500 hover:text-zinc-400"
                >
                  {t.contents}
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-zinc-500 hover:text-zinc-400"
                >
                  {t.contact}
                </a>
              </li>

              <li className="ml-6">
                <LanguageToggle />
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4 sm:hidden">
            <LanguageToggle />
            <button
              className="text-zinc-500 hover:text-zinc-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
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
                {t.about}
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className="text-zinc-500 hover:text-zinc-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.timeline}
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-zinc-500 hover:text-zinc-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.skills}
              </a>
            </li>
            <li>
              <a
                href="#contents"
                className="text-zinc-500 hover:text-zinc-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.contents}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-zinc-500 hover:text-zinc-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.contact}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Header;

