import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const quickLinks = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  const socialLinks = [
    {
      label: "GitHub",
      icon: FaGithub,
      href: "https://github.com/Shravaniq",
    },
    {
      label: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/shravani-tammewar-442039247/",
    },
    {
      label: "Email",
      icon: FaEnvelope,
      href: "shravanitammewar@gmail.com",
    },
  ];

  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">

        {/* Logo & Description */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-500 text-sm font-bold">
              S
            </span>

            <span className="text-lg font-bold tracking-wide">
              SHRAVANI
            </span>
          </div>

          <p className="max-w-xs text-sm leading-6 text-gray-400">
            Building scalable backend systems and solving real-world
            problems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 font-semibold text-white">
            Quick Links
          </h4>

          <ul className="space-y-2 text-sm text-gray-400">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="transition hover:text-purple-400"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="mb-4 font-semibold text-white">
            Connect
          </h4>

          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-300 transition duration-300 hover:bg-purple-600 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-white/5 pt-6">
        <p className="text-center text-xs text-gray-500">
          © 2026 Shravani. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;