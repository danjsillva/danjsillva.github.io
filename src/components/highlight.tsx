import { useLocalTranslation } from "../hooks/useLocalTranslation";

const translations = {
  "pt-BR": {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "- Martin Fowler",
  },
  en: {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "- Martin Fowler",
  },
};

function Highlight() {
  const t = useLocalTranslation(translations);

  return (
    <section className="flex flex-col items-center bg-zinc-900 w-full py-8">
      <p className="text-center px-10 text-zinc-400 italic">"{t.quote}"</p>
      <p className="text-center text-zinc-500 text-sm mt-2">{t.author}</p>
    </section>
  );
}

export default Highlight;

