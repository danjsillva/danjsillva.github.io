import { useLocalTranslation } from "../hooks/useLocalTranslation";

const translations = {
  "pt-BR": {
    title: "Trajetória",
    events: [
      {
        title: "Engenheiro de Software Senior",
        location: "Bossabox",
        date: "2021 - Até o momento",
        description:
          "Desenvolvimento e manutenção de produtos digitais, responsável por propor soluções alinhadas com a estratégia do negócio, colaborar com equipes multidisciplinares em squads de alta performance, implementar novas features seguindo padrões de design de código, modelos de arquitetura e frameworks de mercado, escrever testes automatizados, encontrar e corrigir bugs, entre outras atividades. As principais contribuições foram no desenvolvimento de um produto para gestão de planos de mídia para uma das maiores redes de farmácia do Brasil e um backoffice para uma startup do setor de seguros e planos de saúde.",
      },
      {
        title: "Tech Lead",
        location: "Bossabox",
        date: "2021 - 2022",
        description:
          "Liderança técnica de times de desenvolvimento, sendo responsável por entender as demandas dos times de produto, refinar tecnicamente as histórias, definir a arquitetura de novas features, garantir a execução dos processos e das melhores práticas de desenvolvimento, realizar code reviews e implatação das aplicações nos ambientes de homologação e produção, definir e acompanhar métricas de qualidade de código, realizar o onboarding de novos membros, entre outras atividades. As entregas de maior valor e impacto foram o desenvolvimento da feature de pagamentos da plataforma da empresa e um novo produto, focado nos clientes, com o objetivo de trazer mais transparência e garantir o acompanhamento dos processos e de toda a jornada com a empresa.",
      },
      {
        title: "Engenheiro de Software Pleno",
        location: "Bossabox",
        date: "2020 - 2021",
        description:
          "Desenvolvimento de aplicações web, responsável por colaborar com o time de produto, implementar novas features, encontrar e corrigir bugs, realizar code reviews e implatação das aplicações nos ambientes de homologação e produção, apresentar as entregas nas cerimônias de review, entre outras atividades.",
      },
      {
        title: "Especialista de Tech em Ops",
        location: "Bossabox",
        date: "2020 - 2021",
        description:
          "Especialista de tecnologia em Operações, responsável por conduzir as entrevistas técnicas com candidatos para as vagas de desenvolvimento, definir e acompanhar métricas de código, acompanhar e colaborar com as definições de arquitetura e stack, criar infraestruturas escaláveis baseadas em nuvem, garantir a execução dos processos e das melhores práticas de desenvolvimento, desalocar profissionais, participar de reuniões com o time técnico do cliente, entre outras atividades.",
      },
      {
        title: "Engenheiro de Software Junior",
        location: "Bossabox",
        date: "2019 - 2020",
        description:
          "Desenvolvimento de aplicações web, responsável por colaborar com o time de produto, implementar novas features, encontrar e corrigir bugs, entre outras atividades.",
      },
      {
        title: "Desenvolvedor Web Pleno",
        location: "Result Sistemas",
        date: "2016 - 2019",
        description:
          "Desenvolvimento de soluções web completas, desde a coleta de requisitos até a implantação em produção. Responsável pelo desenvolvimento de um CRM customizado para escritório de advocacia, realizando viagens semanais para levantamento de requisitos junto ao cliente, prototipação de interfaces, desenvolvimento fullstack e deploy na AWS usando Laravel, Angular e SQL Server. Liderança técnica do projeto web para gestão de estoque e pedidos de farmácias, integrado ao sistema principal de distribuição de medicamentos da empresa, utilizando AdonisJS, Angular e SQL Server. Participação em diversos projetos menores explorando React e Vue, sempre focado em entregar soluções que atendessem às necessidades específicas de cada cliente, com autonomia total no ciclo de desenvolvimento.",
      },
      {
        title: "Desenvolvedor Delphi Junior",
        location: "Micromais",
        date: "2012 - 2016",
        description:
          "Desenvolvimento e manutenção de sistemas desktop em Delphi 7, atuando em projetos de ERP com integração a PDVs de terceiros e softwares de gestão pública para secretarias municipais e tesourarias. Participação no desenvolvimento de soluções específicas para postos de combustível e distribuidoras de laticínios, implementando funcionalidades de controle de estoque, vendas e relatórios gerenciais. Suporte técnico presencial aos clientes, realizando manutenção preventiva e corretiva em computadores e infraestrutura de rede. Como desenvolvedor júnior, sempre acompanhado por profissionais seniores, tive a oportunidade de aprender boas práticas de desenvolvimento, modelagem de banco de dados SQL e os primeiros contatos com desenvolvimento web usando PHP, JavaScript, HTML e CSS.",
      },
    ],
  },
  en: {
    title: "Timeline",
    events: [
      {
        title: "Senior Software Engineer",
        location: "Bossabox",
        date: "2021 - Present",
        description:
          "Development and maintenance of digital products, responsible for proposing solutions aligned with business strategy, collaborating with multidisciplinary teams in high-performance squads, implementing new features following code design patterns, architecture models and market frameworks, writing automated tests, finding and fixing bugs, among other activities. Main contributions were in developing a media plan management product for one of Brazil's largest pharmacy chains and a backoffice for a startup in the insurance and health plans sector.",
      },
      {
        title: "Tech Lead",
        location: "Bossabox",
        date: "2021 - 2022",
        description:
          "Technical leadership of development teams, responsible for understanding product team demands, technically refining stories, defining the architecture of new features, ensuring the execution of processes and development best practices, performing code reviews and deploying applications to staging and production environments, defining and monitoring code quality metrics, onboarding new members, among other activities. The most valuable and impactful deliveries were the development of the company's platform payment feature and a new product focused on customers, aimed at bringing more transparency and ensuring the monitoring of processes and the entire journey with the company.",
      },
      {
        title: "Mid-Level Software Engineer",
        location: "Bossabox",
        date: "2020 - 2021",
        description:
          "Web application development, responsible for collaborating with the product team, implementing new features, finding and fixing bugs, performing code reviews and deploying applications to staging and production environments, presenting deliveries in review ceremonies, among other activities.",
      },
      {
        title: "Tech Specialist in Ops",
        location: "Bossabox",
        date: "2020 - 2021",
        description:
          "Technology specialist in Operations, responsible for conducting technical interviews with candidates for development positions, defining and monitoring code metrics, monitoring and collaborating with architecture and stack definitions, creating scalable cloud-based infrastructures, ensuring the execution of development processes and best practices, deallocating professionals, participating in meetings with the client's technical team, among other activities.",
      },
      {
        title: "Junior Software Engineer",
        location: "Bossabox",
        date: "2019 - 2020",
        description:
          "Web application development, responsible for collaborating with the product team, implementing new features, finding and fixing bugs, among other activities.",
      },
      {
        title: "Mid-Level Web Developer",
        location: "Result Sistemas",
        date: "2016 - 2019",
        description:
          "Development of complete web solutions, from requirements gathering to production deployment. Responsible for developing a customized CRM for a law firm, making weekly trips for requirements gathering with the client, interface prototyping, fullstack development and AWS deployment using Laravel, Angular and SQL Server. Technical leadership of the web project for pharmacy stock and order management, integrated with the company's main drug distribution system, using AdonisJS, Angular and SQL Server. Participation in several smaller projects exploring React and Vue, always focused on delivering solutions that met each client's specific needs, with full autonomy in the development cycle.",
      },
      {
        title: "Junior Delphi Developer",
        location: "Micromais",
        date: "2012 - 2016",
        description:
          "Development and maintenance of desktop systems in Delphi 7, working on ERP projects with integration to third-party POS and public management software for municipal secretariats and treasuries. Participation in the development of specific solutions for gas stations and dairy distributors, implementing stock control, sales and management report functionalities. On-site technical support to clients, performing preventive and corrective maintenance on computers and network infrastructure. As a junior developer, always accompanied by senior professionals, I had the opportunity to learn good development practices, SQL database modeling and first contacts with web development using PHP, JavaScript, HTML and CSS.",
      },
    ],
  },
};

function Timeline() {
  const t = useLocalTranslation(translations);

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

  const events = t.events.map((event, index) => ({
    ...event,
    tags: eventTags[index],
  }));

  return (
    <section
      id="timeline"
      className="flex flex-col items-center w-full h-full py-20 lg:py-40"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-16 w-[900px] max-w-full px-8">
        {t.title}
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
