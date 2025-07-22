import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsMedium,
  BsTwitter,
} from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
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
                t("hero.roles.software_engineer"),
                1000,
                t("hero.roles.web_developer"),
                1000,
                t("hero.roles.fullstack_developer"),
                1000,
                t("hero.roles.javascript_developer"),
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
        </header>

        <p className="text-2xl font-thin">{t("hero.description")}</p>

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
