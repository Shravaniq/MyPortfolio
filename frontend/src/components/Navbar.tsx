import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold tracking-wide">
         <div className="mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-500 text-sm font-bold">
              S
            </span>

            <span className="text-lg font-bold tracking-wide">
              SHRAVANI
            </span>
          </div>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm text-white transition hover:text-purple-400">Home</a>
          <a href="#about" className="text-sm text-gray-400 transition hover:text-purple-400">About</a>
          <a href="#skills" className="text-sm text-gray-400 transition hover:text-purple-400">Skills</a>
          <a href="#experience" className="text-sm text-gray-400 transition hover:text-purple-400">Experience</a>
          <a href="#projects" className="text-sm text-gray-400 transition hover:text-purple-400">Projects</a>
          <a href="#contact" className="text-sm text-gray-400 transition hover:text-purple-400">Contact</a>
        </div>

        <button className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2 text-sm font-medium transition hover:scale-105">
          Download CV
        </button>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
