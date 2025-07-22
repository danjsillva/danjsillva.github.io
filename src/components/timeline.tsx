import { useTranslation } from "react-i18next";

function Timeline() {
  const { t } = useTranslation();

  const translatedEvents = t("timeline.events", {
    returnObjects: true,
  }) as Array<{
    title: string;
    location: string;
    date: string;
    description: string;
  }>;

  const eventTags = [
    [
      "VueJS",
      "ReactJS",
      "NestJS",
      "NodeJS",
      "TypeScript",
      "Clean Architecture",
      "AWS",
      "Serverless",
      "SQL",
      "NoSQL",
      "Prisma",
      "CI/CD",
      "Dual Track",
    ],
    [
      "Dual Track",
      "Refinamento Técnico",
      "Arquitetura",
      "Code Review",
      "Deploy",
      "DevOps",
      "Métricas de Qualidade",
      "Onboarding",
    ],
    [
      "VueJS",
      "KoaJS",
      "NodeJS",
      "TypeScript",
      "Serverless",
      "NoSQL",
      "CI/CD",
      "Code Review",
      "Dual Track",
    ],
    [
      "Entrevista Técnica",
      "Métricas de Código",
      "Arquitetura",
      "Stack",
      "Execução de Processos",
      "Gestão de Profissionais",
    ],
    [
      "VueJS",
      "KoaJS",
      "NodeJS",
      "TypeScript",
      "Serverless",
      "NoSQL",
      "CI/CD",
      "Dual Track",
    ],
    [
      "AngularJS",
      "VueJS",
      "ReactJS",
      "Laravel",
      "AdonisJS",
      "NodeJS",
      "PHP",
      "TypeScript",
      "SQL",
      "AWS",
    ],
    [
      "Delphi 7",
      "Object Pascal",
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
      "SQL",
      "ERP",
      "PDV",
      "Software de Gestão Pública",
      "Redes de Computadores",
    ],
  ];

  const events = translatedEvents.map((event, index) => ({
    ...event,
    tags: eventTags[index],
  }));

  return (
    <section
      id="timeline"
      className="flex flex-col items-center w-full h-full py-10 sm:py-20 lg:py-40"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-16 w-[900px] max-w-full px-8">
        {t("timeline.title")}
      </h2>

      <div className="flex flex-col justify-end w-[900px] max-w-full">
        {events.map((event) => (
          <article key={event.title} className="flex">
            <div className="w-48 h-auto p-8 pt-16 text-right text-zinc-500 border-r border-zinc-800 hidden sm:block">
              <span className="px-3 py-1 -mr-12 text-sm text-white bg-zinc-800 rounded-full">
                {event.date}
              </span>
            </div>

            <div className="flex-1 p-8 m-8 border border-zinc-800 rounded">
              <span className="px-3 py-1 text-sm text-white bg-zinc-800 rounded-full inline-block sm:hidden mb-8">
                {event.date}
              </span>

              <header>
                <h1 className="text-2xl font-bold">{event.title}</h1>
                <h2 className="font-bold">{event.location}</h2>
              </header>

              <p className="font-thin mt-4">{event.description}</p>

              <div className="flex flex-wrap gap-1 mt-4">
                {event.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm text-white bg-zinc-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
