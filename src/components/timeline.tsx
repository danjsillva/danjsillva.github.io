function Timeline() {
  const events = [
    {
      title: "Engenheiro de Software Senior",
      location: "Bossabox",
      date: "2021 - Até o momento",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl.",
      type: "work",
      tags: [
        "VueJS",
        "ReactJS",
        "NodeJS",
        "TypeScript",
        "AWS",
        "Docker",
        "Serverless",
        "MongoDB",
        "PostgreSQL",
        "Git",
        "CI/CD",
        "Agile",
        "Scrum",
      ],
    },
    {
      title: "Tech Lead",
      location: "Bossabox",
      date: "2021 - 2022",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl.",
      type: "work",
      tags: [],
    },
    {
      title: "Engenheiro de Software Pleno",
      location: "Bossabox",
      date: "2020 - 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl.",
      type: "work",
      tags: [],
    },
    {
      title: "Especialista de Tech em Ops",
      location: "Bossabox",
      date: "2020 - 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl.",
      type: "work",
      tags: [],
    },
    {
      title: "Engenheiro de Software Junior",
      location: "Bossabox",
      date: "2019 - 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl.",
      type: "work",
      tags: [],
    },
    {
      title: "Desenvolvedor Web Pleno",
      location: "Result Sistemas",
      date: "2016 - 2019",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl.",
      type: "work",
      tags: [],
    },
    {
      title: "Desenvolvedor Delphi Pleno",
      location: "Micromais",
      date: "2012 - 2016",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl.",
      type: "work",
      tags: [],
    },
  ];

  return (
    <section className="flex flex-col justify-end w-[900px] h-full mt-40">
      {events.map((event) => (
        <article key={event.title} className="flex">
          <div className="w-60 h-auto p-8 pt-16 text-right text-zinc-500 border-r border-zinc-800">
            <span className="px-3 py-1 -mr-12 text-sm text-white bg-zinc-800 rounded-full">{event.date}</span>
          </div>

          <div className="flex-1 p-8 m-8 border border-zinc-800 rounded">
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
    </section>
  );
}

export default Timeline;
