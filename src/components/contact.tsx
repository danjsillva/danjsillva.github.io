function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center w-full h-full my-10 sm:my-20 lg:my-40"
    >
      <p className="text-xl text-center max-w-2xl x-8">
        Vamos construir algo incrível juntos? Entre em contato e vamos conversar
        sobre como posso ajudar a transformar suas ideias em realidade.
      </p>

      <a
        href="mailto:"
        className="mt-8 px-8 py-3 bg-white text-zinc-900 rounded-full hover:bg-zinc-200 transition-colors"
      >
        Entre em contato
      </a>
    </section>
  );
}

export default Contact;

