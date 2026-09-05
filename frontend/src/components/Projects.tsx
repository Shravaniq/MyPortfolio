import { useEffect, useState } from "react";

type Project = {
  _id: string;
  title: string;
  duration: string;
  location?: string;
  description: string;
  points: string[];
  skills: string[];
  githubUrl?: string;
  liveUrl?: string;
};

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch projects");
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-400">
            Featured Projects
          </p>
          <h2 className="text-4xl font-bold">My Recent Work</h2>
        </div>

        {loading && (
          <p className="text-center text-gray-400">Loading projects...</p>
        )}

        {error && (
          <p className="text-center text-red-400">
            Couldn't load projects: {error}
          </p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project._id}
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
        )}
      </div>
    </section>
  );
}

export default Projects;