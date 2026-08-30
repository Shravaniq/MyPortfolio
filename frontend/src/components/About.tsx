import React from 'react'

function About() {
  const stats = [
    { icon: "📅", value: "1+", label: "Years Experience" },
    { icon: "✅", value: "8+", label: "Projects Completed" },
    { icon: "</>", value: "10+", label: "Technologies" },
  ];

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-white/[0.03] p-10 md:p-16">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

          {/* Left: text + stats */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-400">
              About Me
            </p>
            <h2 className="mb-6 text-4xl font-bold">
              Get to know me
            </h2>
            <p className="mb-10 max-w-md text-gray-400">
              I'm a passionate Backend Developer with 1+ years of experience
              building production-ready applications. I love solving complex
              problems and building systems that scale.
            </p>

            <div className="flex flex-wrap gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: code editor illustration */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] shadow-2xl">
              {/* window bar */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-[#161b22] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              {/* fake code lines */}
              <div className="space-y-2 p-6">
                {[
                  "w-3/4 bg-purple-400/70",
                  "w-1/2 bg-blue-400/70",
                  "w-5/6 bg-green-400/70",
                  "w-2/3 bg-yellow-400/70",
                  "w-1/3 bg-pink-400/70",
                  "w-4/5 bg-purple-400/70",
                  "w-1/2 bg-blue-400/70",
                  "w-3/5 bg-green-400/70",
                ].map((cls, i) => (
                  <div key={i} className={`h-2 rounded ${cls}`} />
                ))}
              </div>
            </div>

            {/* floating code icon badge */}
            <div className="absolute -bottom-6 -left-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-600 text-lg shadow-lg">
              {"</>"}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}



export default About
