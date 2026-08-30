import {
  SiNodedotjs,
  SiTypescript,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGit,
  SiNewrelic,
  SiDynatrace,
} from "react-icons/si";

const techs = [
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
  { name: "Express.js", icon: SiExpress, color: "text-white" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-400" },
  { name: "Redis", icon: SiRedis, color: "text-red-600" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "New Relic", icon: SiNewrelic, color: "text-green-400" },
  { name: "Dynatrace", icon: SiDynatrace, color: "text-green-500" },
];


const TechStack = () => {
  return (
     <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-400">
          Tech Stack
        </p>
        <h2 className="mb-12 text-4xl font-bold">My Tech Stack</h2>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
          {techs.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] py-8 transition hover:-translate-y-1 hover:border-purple-500/50"
            >
              <Icon className={`text-4xl ${color}`} />
              <p className="text-sm text-gray-300">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
