import { useEffect, useState } from 'react';
import { Moon, Sun, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  const projects = [
    {
      title: 'Enterprise API System',
      description:
        'Scalable ASP.NET Core Web API project with clean architecture and JWT authentication.',
      tech: 'ASP.NET Core, SQL Server, Entity Framework',
    },
    {
      title: 'E-Commerce Backend',
      description:
        'Backend system for managing products, users, orders, and payments.',
      tech: 'ASP.NET Core MVC, Identity, SQL Server',
    },
    {
      title: 'Task Management System',
      description:
        'RESTful API for task management with authentication and role-based authorization.',
      tech: 'Web API, Entity Framework, JWT',
    },
  ];

  const skills = [
    'ASP.NET Core MVC',
    'ASP.NET Core Web API',
    'Entity Framework',
    'SQL Server',
    'Identity',
    'REST APIs',
    'C#',
    'LINQ',
    'Git & GitHub',
  ];

  return (
    <div className="min-h-screen bg-white text-black transition-all duration-500 dark:bg-black dark:text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/70 backdrop-blur-lg transition-all duration-500 dark:border-gray-800 dark:bg-black/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide">
            Omar Hassani
          </h1>

          <div className="flex items-center gap-6 text-sm md:text-base">
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full border border-gray-300 p-2 transition hover:scale-110 dark:border-gray-700"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400 shadow-lg shadow-blue-500/10"
        >
          Junior .NET Backend Developer
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex h-40 w-40 items-center justify-center rounded-full border-4 border-blue-500 bg-gradient-to-br from-blue-500 to-purple-600 text-5xl font-black text-white shadow-2xl shadow-blue-500/30"
        >
          OH
        </motion.div>

        <h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-5xl font-black leading-tight md:text-7xl"
        />
          <h1>
          Omar Hassani
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl text-lg leading-8 text-gray-500 dark:text-gray-400 md:text-xl"
        >
          .NET Backend Developer with experience building scalable web APIs and enterprise-grade applications using ASP.NET Core, Entity Framework, SQL Server, and modern software architecture principles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://github.com/Omar-Hassani"
            target="_blank"
            className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-blue-500"
          >
            GitHub
          </a>

          <a
            href="/Omar-Hassani-CV.pdf"
            download
            className="flex items-center gap-2 rounded-2xl border border-blue-500 px-6 py-3 font-semibold transition hover:scale-105 hover:bg-blue-500 hover:text-white"
          >
            <Download size={18} />
            Download CV
          </a>

          <a
            href="https://www.linkedin.com/in/omar-hassany-261628289"
            target="_blank"
            className="rounded-2xl border border-gray-700 px-6 py-3 font-semibold transition hover:scale-105 hover:border-blue-500"
          >
            LinkedIn
          </a>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold">About Me</h2>
            <p className="text-lg leading-8 text-gray-400">
              Passionate backend developer specialized in building secure,
              scalable, and high-performance backend systems using modern .NET
              technologies.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-8 shadow-2xl">
            <h3 className="mb-6 text-2xl font-bold text-blue-400">
              نبذة مختصرة
            </h3>

            <p className="leading-8 text-gray-300">
              مطور Backend متخصص في تقنيات .NET مع خبرة في بناء Web APIs
              وتطبيقات احترافية باستخدام ASP.NET Core وEntity Framework وSQL
              Server مع الاهتمام ببناء أنظمة قابلة للتوسع وكتابة Clean Code.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">Tech Stack</h2>
          <p className="mt-4 text-gray-400">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-800 bg-gray-900/60 p-6 text-center text-lg font-semibold shadow-lg transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/10"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">Projects</h2>
          <p className="mt-4 text-gray-400">
            Some backend projects and systems I built
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-8 shadow-2xl transition hover:-translate-y-2 hover:border-blue-500"
            >
              <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>

              <p className="mb-6 leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="rounded-xl bg-blue-500/10 p-3 text-sm text-blue-400">
                {project.tech}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="mb-6 text-4xl font-bold">Let’s Work Together</h2>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-400">
          Open for backend development opportunities, freelance projects, and
          collaboration.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/Omar-Hassani"
            target="_blank"
            className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
          >
            GitHub Profile
          </a>

          <a
            href="https://www.linkedin.com/in/omar-hassany-261628289"
            target="_blank"
            className="rounded-2xl border border-gray-700 px-6 py-3 font-semibold transition hover:border-blue-500"
          >
            LinkedIn Profile
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 Omar Hassani — .NET Backend Developer
      </footer>
    </div>
  );
}
