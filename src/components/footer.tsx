import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <footer className="flex justify-between w-[1024px] py-8 mt-40">
      <p className="text-muted">Desenvolvido com 🤍 por Daniel Silva.</p>

      <a
        href="https://github.com/danjsillva/danjsillva.github.io"
        target="blank"
      >
        <BsGithub size={24} />
      </a>
    </footer>
  );
}

export default Footer;
