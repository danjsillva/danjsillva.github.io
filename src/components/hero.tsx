import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsMedium,
  BsTwitter,
} from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import { useLocalTranslation } from "../hooks/useLocalTranslation";

const translations = {
  "pt-BR": {
    roles: {
      software_engineer: "Engenheiro de Software",
      web_developer: "Desenvolvedor Web",
      fullstack_developer: "Desenvolvedor Fullstack",
      javascript_developer: "Desenvolvedor JavaScript",
    },
    description:
      "Trabalho com tecnologia há mais de 10 anos, tenho bacharelado em Sistemas de Informação pelo IFBA e sou apaixonado por ReactJS e todo o ecossistema JavaScript. Sou fã de Counter-Strike, aulas da Rocketseat e séries de viagem no tempo, adoro pizza e programo no Neovim.",
  },
  en: {
    roles: {
      software_engineer: "Software Engineer",
      web_developer: "Web Developer",
      fullstack_developer: "Fullstack Developer",
      javascript_developer: "JavaScript Developer",
    },
    description:
      "I've been working with technology for over 10 years, hold a bachelor's degree in Information Systems from IFBA, and am passionate about ReactJS and the entire JavaScript ecosystem. I'm a fan of Counter-Strike, Rocketseat classes, and time travel series, love pizza, and code in Neovim.",
  },
};

function Hero() {
  const t = useLocalTranslation(translations);
  const imageProfile = new URL("../assets/images/profile.jpg", import.meta.url)
    .href;

  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row items-start justify-between w-ful lg:w-[1024px] h-full px-8 py-10 sm:py-20 lg:py-40 mt-20 space-x-0 lg:space-x-8"
    >
      <img
        src={imageProfile}
        alt="Profile"
        className="aspect-square w-[16rem] mb-16 rounded-full lg:hidden"
      />

      <article className="flex flex-col justify-center space-y-8 h-full">
        <header className="min-h-[10rem] md:min-h-[14rem] max-w-[32rem]">
          <h1 className="text-5xl md:text-7xl font-bold">Daniel Silva</h1>

          <h1 className="text-5xl md:text-7xl font-bold">
            <TypeAnimation
              sequence={[
                t.roles.software_engineer,
                1000,
                t.roles.web_developer,
                1000,
                t.roles.fullstack_developer,
                1000,
                t.roles.javascript_developer,
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
        </header>

        <p className="text-2xl font-thin">{t.description}</p>

        <div className="flex flex-wrap self-center lg:self-start justify-center lg:justify-start gap-8 lg:gap-0 space-x-0 lg:space-x-4 w-full max-w-[360px] md:max-w-none">
          <a
            href="https://linkedin.com/in/danjsillva"
            target="blank"
            className="flex items-center hover:text-zinc-400 space-x-2"
          >
            <BsLinkedin size={32} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/danjsillva"
            target="blank"
            className="flex items-center hover:text-zinc-400 space-x-2"
          >
            <BsGithub size={32} />
            <span>Github</span>
          </a>

          <a
            href="https://medium.com/@danjsillva"
            target="blank"
            className="flex items-center hover:text-zinc-400 space-x-2"
          >
            <BsMedium size={32} />
            <span>Medium</span>
          </a>

          <a
            href="https://twitter.com/danjsillva"
            target="blank"
            className="flex items-center hover:text-zinc-400 space-x-2"
          >
            <BsTwitter size={32} />
            <span>Twitter</span>
          </a>

          <a
            href="https://instagram.com/danjsillva"
            target="blank"
            className="flex items-center hover:text-zinc-400 space-x-2"
          >
            <BsInstagram size={32} />
            <span>Instagram</span>
          </a>
        </div>
      </article>

      <img
        src={imageProfile}
        alt="Profile"
        className="aspect-square w-[360px] rounded-full hidden lg:block"
      />
    </section>
  );
}

export default Hero;

