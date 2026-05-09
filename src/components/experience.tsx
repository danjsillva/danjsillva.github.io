import { useLocalTranslation } from "../hooks/useLocalTranslation";

const translations = {
  "pt-BR": {
    title: "Experiência",
    events: [
      {
        title: "Engenheiro de Software Senior",
        location: "BossaBox",
        date: "2021 - Até o momento",
        description:
          "Construção e manutenção de plataformas web e ferramentas internas usando TypeScript, Node.js, React e NestJS. Atuação em backend e frontend, decisões de arquitetura, testes, pipelines de CI/CD e ambientes em cloud. Contribuição em decisões técnicas, code reviews, experiência de desenvolvimento e práticas de engenharia manuteníveis.",
      },
      {
        title: "Tech Lead",
        location: "BossaBox",
        date: "2021 - 2022",
        description:
          "Papel de liderança técnica focado em práticas de engenharia, alinhamento de entrega, qualidade de código, discussões de arquitetura, prontidão para produção e colaboração entre produto e engenharia.",
      },
      {
        title: "Engenheiro de Software Pleno",
        location: "BossaBox",
        date: "2020 - 2021",
        description:
          "Desenvolvimento de aplicações web em colaboração com times de produto, incluindo implementação de features, correção de bugs, code reviews, testes e deploys em ambientes de homologação e produção.",
      },
      {
        title: "Especialista de Tech em Ops",
        location: "BossaBox",
        date: "2020 - 2021",
        description:
          "Atuação em engenharia e operações para apoiar práticas técnicas, entrevistas, qualidade de código, discussões de arquitetura, ambientes em cloud e colaboração com times técnicos de clientes.",
      },
      {
        title: "Engenheiro de Software Junior",
        location: "BossaBox",
        date: "2019 - 2020",
        description:
          "Desenvolvimento de aplicações web, colaboração com produto, implementação de features e manutenção de sistemas em produção.",
      },
      {
        title: "Desenvolvedor Web Pleno",
        location: "Result Sistemas",
        date: "2016 - 2019",
        description:
          "Desenvolvimento fullstack de soluções web para clientes, desde requisitos e prototipação até implementação e deploy. Projetos com Laravel, Angular, AdonisJS, SQL Server, AWS, React e Vue.",
      },
      {
        title: "Desenvolvedor Delphi Junior",
        location: "Micromais",
        date: "2012 - 2016",
        description:
          "Desenvolvimento e manutenção de sistemas desktop em Delphi, ERP, integrações com PDV, bancos de dados SQL e primeiros projetos web com PHP, JavaScript, HTML e CSS.",
      },
    ],
  },
  en: {
    title: "Experience",
    events: [
      {
        title: "Senior Software Engineer",
        location: "BossaBox",
        date: "2021 - Present",
        description:
          "Building and maintaining web platforms and internal tools using TypeScript, Node.js, React and NestJS. Working across backend and frontend development, architecture decisions, testing, CI/CD pipelines and cloud-based environments. Contributing to technical decisions, code reviews, developer experience and maintainable engineering practices.",
      },
      {
        title: "Tech Lead",
        location: "BossaBox",
        date: "2021 - 2022",
        description:
          "Technical leadership role focused on engineering practices, delivery alignment, code quality, architecture discussions, production readiness and collaboration across product and engineering teams.",
      },
      {
        title: "Mid-Level Software Engineer",
        location: "BossaBox",
        date: "2020 - 2021",
        description:
          "Developed web applications in collaboration with product teams, including feature implementation, bug fixing, code reviews, testing and deployments to staging and production environments.",
      },
      {
        title: "Tech Specialist in Ops",
        location: "BossaBox",
        date: "2020 - 2021",
        description:
          "Engineering enablement role supporting technical practices, interviews, code quality, architecture discussions, cloud environments and collaboration with client technical teams.",
      },
      {
        title: "Junior Software Engineer",
        location: "BossaBox",
        date: "2019 - 2020",
        description:
          "Built and maintained web applications, collaborated with product teams, implemented features and supported production systems.",
      },
      {
        title: "Mid-Level Web Developer",
        location: "Result Sistemas",
        date: "2016 - 2019",
        description:
          "Developed fullstack web solutions for clients, from requirements and prototyping to implementation and deployment. Worked with Laravel, Angular, AdonisJS, SQL Server, AWS, React and Vue.",
      },
      {
        title: "Junior Delphi Developer",
        location: "Micromais",
        date: "2012 - 2016",
        description:
          "Developed and maintained Delphi desktop systems, ERP modules, POS integrations, SQL databases and early web projects with PHP, JavaScript, HTML and CSS.",
      },
    ],
  },
};

function Experience() {
  const t = useLocalTranslation(translations);

  const eventTags = [
    [
      "TypeScript",
      "Node.js",
      "React",
      "NestJS",
      "AWS",
      "CI/CD",
      "Software Architecture",
      "Clean Architecture",
      "Testing",
    ],
    [
      "Technical Leadership",
      "Software Architecture",
      "Code Review",
      "Production Readiness",
      "Delivery Alignment",
      "Product Engineering",
    ],
    [
      "TypeScript",
      "Node.js",
      "Vue",
      "Serverless",
      "AWS",
      "NoSQL",
      "CI/CD",
    ],
    [
      "Engineering Enablement",
      "Technical Interviews",
      "Code Review",
      "Architecture",
      "Cloud",
      "Engineering Practices",
    ],
    [
      "Node.js",
      "TypeScript",
      "Vue",
      "Serverless",
      "NoSQL",
      "CI/CD",
    ],
    [
      "Angular",
      "Vue",
      "React",
      "Laravel",
      "Adonis",
      "Node.js",
      "PHP",
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
      "POS",
      "Public Management Software",
      "Computer Networks",
    ],
  ];

  const events = t.events.map((event, index) => ({
    ...event,
    tags: eventTags[index],
  }));

  return (
    <section
      id="experience"
      className="flex flex-col items-center w-full h-full py-20 lg:py-40"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-16 w-[900px] max-w-full px-8">
        {t.title}
      </h2>

      <div className="flex flex-col justify-end w-[900px] max-w-full">
        {events.map((event, index) => (
          <article key={event.title} className="flex">
            <div className="w-48 h-auto p-8 pt-16 text-right text-zinc-500 border-r border-zinc-800 hidden sm:block">
              <span className="px-3 py-1 -mr-12 text-sm text-white bg-zinc-800 rounded-full">
                {event.date}
              </span>
            </div>

            <div
              className={`flex-1 p-8 m-8 border rounded ${
                index === 0
                  ? "border-zinc-600 bg-zinc-900"
                  : "border-zinc-800"
              }`}
            >
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

export default Experience;
