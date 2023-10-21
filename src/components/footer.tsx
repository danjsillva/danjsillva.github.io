import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <footer className="flex justify-between w-full lg:w-[1024px] p-8">
      <p className="text-zinc-500">
        Desenvolvido com ❤️ por{" "}
        <a
          href="https://instagram.com/danjsillva"
          target="blank"
          className="text-zinc-500 hover:text-zinc-400"
        >
          Daniel Silva
        </a>
      </p>

      <a
        href="https://github.com/danjsillva/danjsillva.github.io"
        target="blank"
        className="flex items-center text-zinc-500 hover:text-zinc-400 space-x-2 cursor-pointer"
      >
        <span>danjsillva.github.io</span>
        <BsGithub size={24} />
      </a>
    </footer>
  );
}

export default Footer;
