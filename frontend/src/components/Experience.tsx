import { useEffect, useState } from "react";

type Job = {
  _id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  points: string[];
};

function Experience() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    fetch("http://localhost:3000/experience")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch experience");
        return res.json();
      })
      .then((data) => setJobs(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-400">
          Experience
        </p>
        <h2 className="mb-8 text-4xl font-bold">My Journey</h2>

       
<div className="mb-10 flex gap-3">

  <a
    href="/resume.pdf"
    download="Shravani_Tammewar_Resume.pdf"
    className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2 text-sm font-medium transition hover:bg-white/10"
  >
    Download Resume ↓
  </a>

  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-5 py-2 text-sm font-medium transition hover:bg-white/10"
  >
    View Resume
  </a>

</div>



        {loading && <p className="text-gray-400">Loading experience...</p>}
        {error && (
          <p className="text-red-400">Couldn't load experience: {error}</p>
        )}

        {!loading && !error && (
          <div className="relative border-l border-white/10 pl-8">
            {jobs.map((job, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={job._id} className="relative mb-6">
                  <span
                    className={`absolute -left-[38px] top-6 h-3 w-3 rounded-full ${
                      isOpen ? "bg-purple-500" : "bg-white/20"
                    }`}
                  />

                  <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                    <button
                      onClick={() => toggle(index)}
                      className="flex w-full flex-wrap items-center justify-between gap-2 p-6 text-left"
                    >
                      <div>
                        <h3 className="text-lg font-semibold">{job.role}</h3>
                        <p className="text-sm text-purple-400">{job.company}</p>
                        <p className="text-xs text-gray-500">{job.location}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-purple-600/20 px-3 py-1 text-xs font-medium text-purple-300">
                          {job.duration}
                        </span>
                        <span
                          className={`text-purple-400 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="list-disc space-y-2 px-6 pb-6 pl-11 text-sm text-gray-400">
                          {job.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;