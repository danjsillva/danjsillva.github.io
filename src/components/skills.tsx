import { useLocalTranslation } from "../hooks/useLocalTranslation";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiAmazon,
  SiGit,
  SiNeovim,
  SiFigma,
  SiPostman,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiGithubactions,
  SiVercel,
  SiRedis,
  SiGraphql,
  SiServerless,
  SiTerraform,
  SiJira,
  SiVuedotjs,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const translations = {
  "pt-BR": {
    title: "Habilidades",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps & Cloud",
      tools: "Ferramentas",
    },
  },
  en: {
    title: "Skills",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps & Cloud",
      tools: "Tools",
    },
  },
};

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level: number; // 1-5
  color: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

function Skills() {
  const t = useLocalTranslation(translations);

  const skillCategories: SkillCategory[] = [
    {
      name: t.categories.frontend,
      skills: [
        { name: "React", icon: SiReact, level: 5, color: "text-cyan-400" },
        {
          name: "TypeScript",
          icon: SiTypescript,
          level: 4,
          color: "text-blue-400",
        },
        {
          name: "JavaScript",
          icon: SiJavascript,
          level: 5,
          color: "text-yellow-400",
        },
        { name: "Next.js", icon: SiNextdotjs, level: 4, color: "text-white" },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          level: 5,
          color: "text-teal-400",
        },
        { name: "HTML5", icon: SiHtml5, level: 5, color: "text-orange-500" },
        { name: "CSS3", icon: SiCss3, level: 5, color: "text-blue-500" },
        { name: "Vue", icon: SiVuedotjs, level: 3, color: "text-green-400" },
      ],
    },
    {
      name: t.categories.backend,
      skills: [
        {
          name: "Node.js",
          icon: SiNodedotjs,
          level: 5,
          color: "text-green-500",
        },
        { name: "Express", icon: SiExpress, level: 5, color: "text-gray-400" },
        { name: "NestJS", icon: SiNestjs, level: 3, color: "text-red-500" },
        {
          name: "PostgreSQL",
          icon: SiPostgresql,
          level: 4,
          color: "text-blue-400",
        },
        { name: "MongoDB", icon: SiMongodb, level: 4, color: "text-green-400" },
        { name: "Redis", icon: SiRedis, level: 3, color: "text-red-500" },
      ],
    },
    {
      name: t.categories.devops,
      skills: [
        { name: "Docker", icon: SiDocker, level: 4, color: "text-blue-400" },
        { name: "AWS", icon: SiAmazon, level: 3, color: "text-orange-400" },
        { name: "Git", icon: SiGit, level: 5, color: "text-orange-500" },
        { name: "Vercel", icon: SiVercel, level: 4, color: "text-white" },
        {
          name: "Serverless",
          icon: SiServerless,
          level: 3,
          color: "text-red-400",
        },
        {
          name: "Terraform",
          icon: SiTerraform,
          level: 3,
          color: "text-purple-500",
        },
        { name: "CI/CD", icon: SiGithubactions, level: 4, color: "text-blue-400" },
      ],
    },
    {
      name: t.categories.tools,
      skills: [
        { name: "Neovim", icon: SiNeovim, level: 5, color: "text-green-400" },
        { name: "VS Code", icon: VscCode, level: 4, color: "text-blue-500" },
        { name: "Figma", icon: SiFigma, level: 3, color: "text-purple-400" },
        {
          name: "Postman",
          icon: SiPostman,
          level: 4,
          color: "text-orange-500",
        },
        { name: "Jira", icon: SiJira, level: 4, color: "text-blue-500" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center w-full px-8 py-20 lg:py-40 bg-zinc-900"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-16 w-[900px] max-w-full px-8">
        {t.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {skillCategories.map((category) => (
          <div key={category.name} className="space-y-6">
            <h3 className="text-2xl font-semibold text-zinc-300">
              {category.name}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative flex flex-col items-center p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-all duration-300 hover:scale-105 cursor-pointer h-32"
                >
                  <skill.icon
                    className={`w-12 h-12 mb-2 flex-shrink-0 ${skill.color}`}
                  />
                  <span className="text-sm text-zinc-400 text-center flex items-center flex-grow">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
