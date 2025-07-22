import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="flex flex-col items-center w-full h-full my-10 sm:my-20 lg:my-40"
    >
      <p className="text-xl text-center max-w-2xl x-8">
        {t("contact.description")}
      </p>

      <a
        href="mailto:"
        className="mt-8 px-8 py-3 bg-white text-zinc-900 rounded-full hover:bg-zinc-200 transition-colors"
      >
        {t("contact.title")}
      </a>
    </section>
  );
}

export default Contact;
