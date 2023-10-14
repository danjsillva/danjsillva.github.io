function Timeline() {
  const events = [
    {
      title: "Engenheiro de Software Senior",
      location: "Bossabox",
      date: "2021 - Até o momento",
      description:
        "Desenvolvimento e manutenção de produtos digitais, responsável por propor soluções alinhadas com a estratégia do negócio, colaborar com equipes multidisciplinares em squads de alta performance, implementar novas features seguindo padrões de design de código, modelos de arquitetura e frameworks de mercado, escrever testes automatizados, encontrar e corrigir bugs, entre outras atividades. As principais contribuições foram no desenvolvimento de um produto para gestão de planos de mídia para uma das maiores redes de farmácia do Brasil e um backoffice para uma startup do setor de seguros e planos de saúde.",
      type: "work",
      tags: [
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
    },
    {
      title: "Tech Lead",
      location: "Bossabox",
      date: "2021 - 2022",
      description:
        "Liderança técnica de times de desenvolvimento, sendo responsável por entender as demandas dos times de produto, refinar tecnicamente as histórias, definir a arquitetura de novas features, garantir a execução dos processos e das melhores práticas de desenvolvimento, realizar code reviews e implatação das aplicações nos ambientes de homologação e produção, definir e acompanhar métricas de qualidade de código, realizar o onboarding de novos membros, entre outras atividades. As entregas de maior valor e impacto foram o desenvolvimento da feature de pagamentos da plataforma da empresa e um novo produto, focado nos clientes, com o objetivo de trazer mais transparência e garantir o acompanhamento dos processos e de toda a jornada com a empresa.",
      type: "work",
      tags: [
        "Dual Track",
        "Refinamento Técnico",
        "Arquitetura",
        "Code Review",
        "Deploy",
        "DevOps",
        "Métricas de Qualidade",
        "Onboarding",
      ],
    },
    {
      title: "Engenheiro de Software Pleno",
      location: "Bossabox",
      date: "2020 - 2021",
      description:
        "Desenvolvimento de aplicações web, responsável por colaborar com o time de produto, implementar novas features, encontrar e corrigir bugs, realizar code reviews e implatação das aplicações nos ambientes de homologação e produção, apresentar as entregas nas cerimônias de review, entre outras atividades.",
      type: "work",
      tags: [
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
    },
    {
      title: "Especialista de Tech em Ops",
      location: "Bossabox",
      date: "2020 - 2021",
      description:
        "Especialista de tecnologia em Operações, responsável por conduzir as entrevistas técnicas com candidatos para as vagas de desenvolvimento, definir e acompanhar métricas de código, acompanhar e colaborar com as definições de arquitetura e stack, criar infraestruturas escaláveis baseadas em nuvem, garantir a execução dos processos e das melhores práticas de desenvolvimento, desalocar profissionais, participar de reuniões com o time técnico do cliente, entre outras atividades.",
      type: "work",
      tags: [
        "Entrevista Técnica",
        "Métricas de Código",
        "Arquitetura",
        "Stack",
        "Execução de Processos",
        "Gestão de Profissionais",
      ],
    },
    {
      title: "Engenheiro de Software Junior",
      location: "Bossabox",
      date: "2019 - 2020",
      description:
        "Desenvolvimento de aplicações web, responsável por colaborar com o time de produto, implementar novas features, encontrar e corrigir bugs, entre outras atividades.",
      type: "work",
      tags: [
        "VueJS",
        "KoaJS",
        "NodeJS",
        "TypeScript",
        "Serverless",
        "NoSQL",
        "CI/CD",
        "Dual Track",
      ],
    },
    {
      title: "Desenvolvedor Web Pleno",
      location: "Result Sistemas",
      date: "2016 - 2019",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl.",
      type: "work",
      tags: [
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
    },
    {
      title: "Desenvolvedor Delphi Junior",
      location: "Micromais",
      date: "2012 - 2016",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl vitae nisl.",
      type: "work",
      tags: [
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
    },
  ];

  return (
    <section className="flex flex-col justify-end w-[900px] h-full mt-40">
      {events.map((event) => (
        <article key={event.title} className="flex">
          <div className="w-48 h-auto p-8 pt-16 text-right text-zinc-500 border-r border-zinc-800">
            <span className="px-3 py-1 -mr-12 text-sm text-white bg-zinc-800 rounded-full">
              {event.date}
            </span>
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
