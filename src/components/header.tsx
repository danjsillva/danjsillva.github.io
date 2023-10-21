function Header() {
  return (
    <header className="flex justify-between w-full lg:w-[1024px] p-8">
      <h1 className="font-bold">
        <a href="/">danjsillva.github.io</a>
      </h1>

      <nav className="flex items-center justify-between hidden sm:block">
        <ul className="flex items-center space-x-4">
          <li>
            <a href="#about" className="text-zinc-500 hover:text-zinc-400">Sobre mim</a>
          </li>

          <li>
            <a href="#timeline" className="text-zinc-500 hover:text-zinc-400">Trajetória</a>
          </li>

          <li>
            <a href="#skills" className="text-zinc-500 hover:text-zinc-400">Projetos</a>
          </li>

          <li>
            <a href="#projects" className="text-zinc-500 hover:text-zinc-400">Conteúdos</a>
          </li>

          <li>
            <a href="#contact" className="text-zinc-500 hover:text-zinc-400">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
