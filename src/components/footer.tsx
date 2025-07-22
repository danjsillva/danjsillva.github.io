import { BsGithub } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="flex justify-between w-full lg:w-[1024px] p-8">
      <p className="text-zinc-500">© 2024 {t("footer.copyright")}</p>

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
