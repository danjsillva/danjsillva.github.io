import { BsGithub, BsInstagram, BsLinkedin, BsMedium, BsTwitter } from 'react-icons/bs'
import { TypeAnimation } from 'react-type-animation';

function App() {
  const imageProfile = new URL('./assets/images/profile.jpg', import.meta.url).href

  return (
    <main className="flex flex-col items-center bg-zinc-950 text-white min-h-screen h-full">
      <header className="flex justify-between w-[1024px] py-8">
        <h1 className="font-bold">
          Daniel Silva
        </h1>

        <nav className="flex items-center justify-between">
          <ul className="flex items-center space-x-4">
            <li>
              <a href="#about">
                Sobre mim
              </a>
            </li>

            <li>
              <a href="#skills">
                Meu setup
              </a>
            </li>

            <li>
              <a href="#projects">
                Projetos
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="flex items-start justify-between w-[1024px] my-40 space-x-8">
        <article className="flex flex-col justify-center space-y-8 h-full">
          <header className="min-h-[16rem]">
            <h1 className="text-7xl font-bold">
              Daniel Silva
            </h1>

            <h1 className="text-7xl font-bold">
              <TypeAnimation
                sequence={[
                  'Engenheiro de Software',
                  1000,
                  'Desenvolvedor Web',
                  1000,
                  'Desenvolvedor Fullstack',
                  1000,
                  'Desenvolvedor JavaScript',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{display: 'inline-block' }}
                repeat={Infinity}
              />
            </h1>
          </header>

          <p className="text-2xl font-thin">
            Trabalho com tecnologia há mais de 10 anos, tenho bacharelado em Sistemas de Informação pelo IFBA e sou apaixonado por ReactJS e todo o ecossistema JavaScript. Sou fã de Counter-Strike, aulas da Rocketseat e séries de viagem no tempo, adoro pizza e programo no Vim.
          </p>

          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/danjsillva" target="blank" className="flex items-center space-x-2">
              <BsLinkedin size={32} />
              <span>LinkedIn</span>
            </a>

            <a href="https://github.com/danjsillva" target="blank" className="flex items-center space-x-2">
              <BsGithub size={32} />
              <span>Github</span>
            </a>

            <a href="https://medium.com/@danjsillva" target="blank" className="flex items-center space-x-2">
              <BsMedium size={32} />
              <span>Medium</span>
            </a>

            <a href="https://twitter.com/danjsillva" target="blank" className="flex items-center space-x-2">
              <BsTwitter size={32} />
              <span>Twitter</span>
            </a>

            <a href="https://instagram.com/danjsillva" target="blank" className="flex items-center space-x-2">
              <BsInstagram size={32} />
              <span>Instagram</span>
            </a>
          </div>
        </article>

        <img src={imageProfile} alt="Profile" className="aspect-square w-[360px]  rounded-full" />
      </section>

      <footer className="flex justify-between w-[1024px] py-8">
        <p className="text-muted">
          Desenvolvido com 🤍 por Daniel Silva.
        </p>

        <a href="https://github.com/danjsillva/danjsillva.github.io" target="blank">
              <BsGithub size={24} />
        </a>
      </footer>

    </main>
  )
}

export default App
