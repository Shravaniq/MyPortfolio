import { useEffect, useState } from "react";
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
} from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = {
  _id: string;
  name: string;
  iconKey: string;
};

// Maps the iconKey string stored in MongoDB to the actual icon component
const iconMap: Record<string, IconType> = {
  SiNodedotjs,
  SiTypescript,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGit,
};

function TechStack() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/skills")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch skills");
        return res.json();
      })
      .then((data) => setSkills(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-400">
          Tech Stack
        </p>
        <h2 className="mb-12 text-4xl font-bold">My Tech Stack</h2>

        {loading && <p className="text-gray-400">Loading tech stack...</p>}
        {error && (
          <p className="text-red-400">Couldn't load tech stack: {error}</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
            {skills.map((skill) => {
              const Icon = iconMap[skill.iconKey];

              return (
                <div
                  key={skill._id}
                  className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] py-8 transition hover:-translate-y-1 hover:border-purple-500/50"
                >
                  {Icon ? (
                    <Icon className="text-4xl text-purple-400" />
                  ) : (
                    <span className="text-4xl">?</span>
                  )}
                  <p className="text-sm text-gray-300">{skill.name}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default TechStack;