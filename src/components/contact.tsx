import { useLocalTranslation } from "../hooks/useLocalTranslation";

const translations = {
  "pt-BR": {
    title: "Contato",
    description:
      "Aberto a oportunidades senior em engenharia de software, especialmente posições remotas focadas em TypeScript, Node.js, React, engenharia de produto e plataformas web escaláveis.",
  },
  en: {
    title: "Contact",
    description:
      "Open to senior software engineering opportunities, especially remote roles focused on TypeScript, Node.js, React, product engineering and scalable web platforms.",
  },
};

function Contact() {
  const t = useLocalTranslation(translations);

  return (
    <section
      id="contact"
      className="flex flex-col items-center w-full h-full px-8 py-20 lg:py-40"
    >
      <p className="text-xl text-center max-w-2xl px-8">{t.description}</p>

      <a
        href="https://linkedin.com/in/danjsillva"
        target="blank"
        className="mt-8 px-8 py-3 bg-white text-zinc-900 rounded-full hover:bg-zinc-200 transition-colors"
      >
        {t.title}
      </a>
    </section>
  );
}

export default Contact;
