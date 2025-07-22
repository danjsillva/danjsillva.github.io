import { BsGithub } from "react-icons/bs";
import { useLocalTranslation } from "../hooks/useLocalTranslation";

const translations = {
  "pt-BR": {
    copyright: "Daniel Silva. Todos os direitos reservados.",
  },
  en: {
    copyright: "Daniel Silva. All rights reserved.",
  },
};

function Footer() {
  const t = useLocalTranslation(translations);

  return (
    <footer className="flex justify-between w-full lg:w-[1024px] p-8">
      <p className="text-zinc-500">© 2024 {t.copyright}</p>

      <a
        href="https://github.com/danjsillva/danjsillva.github.io"
        target="blank"
        className="hidden md:flex items-center text-zinc-500 hover:text-zinc-400 space-x-2 cursor-pointer"
      >
        <span>danjsillva.github.io</span>
        <BsGithub size={24} />
      </a>
    </footer>
  );
}

export default Footer;

