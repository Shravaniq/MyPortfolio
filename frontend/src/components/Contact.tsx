import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend not built yet — placeholder for now.
    console.log("Form submitted:", form);
    alert("Backend not connected yet — this will send a real message soon!");
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-white/[0.03] p-10 md:p-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left: info */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-purple-400">
              Let's Connect
            </p>
            <h2 className="mb-4 text-4xl font-bold">Get In Touch</h2>
            <p className="mb-8 max-w-md text-gray-400">
              Have a project in mind or want to work together? Feel free to
              reach out!
            </p>

            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2 text-purple-400">
                ✉ shravanitammewar@gmail.com
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                📍 Pune, India
              </p>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-medium transition hover:scale-[1.02]"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;