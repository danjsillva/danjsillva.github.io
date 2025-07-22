import { useTranslation } from "react-i18next";

function Highlight() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col items-center bg-zinc-900 w-full py-8">
      <p className="text-center px-10 text-zinc-400 italic">
        "{t("highlight.quote")}"
      </p>
      <p className="text-center text-zinc-500 text-sm mt-2">
        {t("highlight.author")}
      </p>
    </section>
  );
}

export default Highlight;

