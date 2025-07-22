import { useLocalTranslation } from "../hooks/useLocalTranslation";

const translations = {
  "pt-BR": {
    title: "Contato",
    description:
      "Sinta-se à vontade para entrar em contato comigo por email ou através das minhas redes sociais. Estou sempre aberto a novas oportunidades e desafios!",
  },
  en: {
    title: "Contact",
    description:
      "Feel free to get in touch with me via email or through my social media. I'm always open to new opportunities and challenges!",
  },
};

function Contact() {
  const t = useLocalTranslation(translations);

  return (
    <section
      id="contact"
      className="flex flex-col items-center w-full h-full my-10 sm:my-20 lg:my-40"
    >
      <p className="text-xl text-center max-w-2xl x-8">{t.description}</p>

      <a
        href="mailto:"
        className="mt-8 px-8 py-3 bg-white text-zinc-900 rounded-full hover:bg-zinc-200 transition-colors"
      >
        {t.title}
      </a>
    </section>
  );
}

export default Contact;

