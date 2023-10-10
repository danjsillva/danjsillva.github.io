function Header() {
  return (
    <header className="flex justify-between w-[1024px] py-8">
      <h1 className="font-bold">
        <a href="/">danjsillva.github.io</a>
      </h1>

      <nav className="flex items-center justify-between">
        <ul className="flex items-center space-x-4">
          <li>
            <a href="#about">Sobre mim</a>
          </li>

          <li>
            <a href="#skills">Meu setup</a>
          </li>

          <li>
            <a href="#projects">Projetos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
