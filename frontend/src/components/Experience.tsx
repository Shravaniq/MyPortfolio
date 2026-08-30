type Project = {
  title: string;
  duration: string;
  location?: string;
  description: string;
  points: string[];
  skills: string[];
};

const projects: Project[] = [
  {
    title: "FFVV, Belcorp",
    duration: "Feb '25 — Jan '26",
    location: "Lima, Peru",
    description:
      "Sales enablement tool for a multinational beauty brand in Latin America (Belcorp) to help manage consultants and their hierarchy through an Android application.",
    points: [
      "Architected and developed the backend from scratch using NestJS, building both REST and GraphQL APIs in microservices architecture.",
      "Implemented business logic to support consultant and head-level operations, ensuring accurate data flow and role-based access.",
    ],
    skills: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "SQL",
      "GraphQL",
      "REST APIs",
      "Microservices",
      "Redis",
      "New Relic",
    ],
  },
  {
    title: "Amway Promotion Management (APM)",
    duration: "Feb '26 — Present",
    description:
      "Enterprise-scale promotion management platform developed for Amway. Enables users to create, manage, approve, and track promotional campaigns.",
    points: [
      "Supports configurable approval workflows across multiple business stages.",
      "Implements role-based access control to ensure secure and authorized operations.",
      "Designed to support promotions across multiple markets and regions.",
    ],
    skills: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "Java",
      "REST APIs",
      "Microservices",
      "MongoDB",
      "SQL",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-400">
            Featured Projects
          </p>
          <h2 className="text-4xl font-bold">My Recent Work</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-purple-500/50"
            >
              <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span className="rounded-full bg-purple-600/20 px-3 py-1 text-xs font-medium text-purple-300">
                  {project.duration}
                </span>
              </div>

              {project.location && (
                <p className="mb-3 text-xs text-gray-500">{project.location}</p>
              )}

              <p className="mb-3 text-sm text-gray-400">{project.description}</p>

              <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-gray-400">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;