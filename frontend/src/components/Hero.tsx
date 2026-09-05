import React from 'react'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">

        {/* Left: text */}
        <div>
          <p className="mb-2 text-lg text-gray-300">Hi, I'm</p>

          <h1 className="mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-6xl font-extrabold text-transparent">
            Shravani
          </h1>

          <h2 className="mb-6 text-2xl font-medium text-gray-200">
            Backend Developer{" "}
            <span className="text-purple-400">|</span>
          </h2>

          <p className="mb-8 max-w-md text-gray-400">
            I build scalable, efficient and reliable backend systems using
            Node.js, TypeScript and cloud technologies.
          </p>

          {/* Buttons */}
          <div className="mb-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-medium transition hover:scale-105"
            >
              View Projects →
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Contact Me ✉
            </a>
          </div>

          {/* Social links */}
          <p className="mb-3 text-sm text-gray-400">Connect with me</p>

          <div className="flex gap-3">
            {["GitHub", "LinkedIn", "Twitter", "Email"].map((label) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-300 transition hover:bg-purple-600 hover:text-white"
              >
                •
              </a>
            ))}
          </div>
        </div>

        {/* Right: photo + floating badges */}
        <div className="relative mx-auto flex h-[400px] w-[400px] items-center justify-center">
          
          {/* Circular borders */}
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-6 rounded-full border border-dashed border-white/10" />

          {/* Profile image */}
          <img
            src="/profile.jpg"
            alt="Shravani"
            className="relative z-10 h-[320px] w-[320px] rounded-full object-cover"
          />

          {/* Floating badges */}
          <div className="absolute left-0 top-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#111827] shadow-lg">
            🟢
          </div>

          <div className="absolute right-0 top-0 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 shadow-lg">
            TS
          </div>

          <div className="absolute bottom-8 left-0 flex h-14 w-14 items-center justify-center rounded-xl bg-[#111827] shadow-lg">
            🍃
          </div>

          <div className="absolute bottom-0 right-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#111827] shadow-lg">
            🦁
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

