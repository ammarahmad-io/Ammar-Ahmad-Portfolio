'use client';

import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    category: 'software',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with product management, cart, checkout, and admin dashboard. Built with Next.js and Stripe integration.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'TailwindCSS'],
    github: '#',
    live: '#',
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    category: 'software',
    title: 'Real-Time Chat App',
    description:
      'A WebSocket-based real-time messaging application with rooms, user authentication, and message history persisted in a database.',
    tech: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'JWT'],
    github: '#',
    live: '#',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    category: 'data',
    title: 'Data Dashboard & Analytics',
    description:
      'Interactive analytics dashboard for visualizing complex datasets with charts, filters, and export functionality.',
    tech: ['React', 'Chart.js', 'Python', 'FastAPI', 'Pandas'],
    github: '#',
    live: '#',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    category: 'software',
    title: 'Task Management System',
    description:
      'A Kanban-style project management tool with drag-and-drop boards, team collaboration, and deadline tracking.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'React DnD', 'Shadcn UI'],
    github: '#',
    live: '#',
    gradient: 'from-orange-500/20 to-amber-500/20',
  },
  {
    category: 'data',
    title: 'ML Prediction API',
    description:
      'A RESTful API exposing a machine learning model for making real-time predictions. Includes model training pipeline and monitoring.',
    tech: ['Python', 'FastAPI', 'Scikit-learn', 'Docker', 'PostgreSQL'],
    github: '#',
    live: '#',
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    category: 'software',
    title: 'Portfolio Website',
    description:
      'This very portfolio — built from scratch with Next.js, TailwindCSS, dark mode, smooth animations, and fully responsive design.',
    tech: ['Next.js', 'TailwindCSS', 'Lucide React', 'CSS Animations'],
    github: 'https://github.com',
    live: '#',
    gradient: 'from-violet-500/20 to-indigo-500/20',
  },
];

const filters = [
  { label: 'All Projects', value: 'all' },
  { label: 'Software Development', value: 'software' },
  { label: 'Data Science & ML', value: 'data' },
];

export default function Projects() {
  const [active, setActive] = useState('all');
  const sectionRef = useRef(null);

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-head').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="reveal-head text-4xl font-extrabold text-foreground section-heading"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            My Projects
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="reveal-head flex flex-wrap justify-center gap-3 mb-10"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s' }}>
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${active === f.value
                  ? 'bg-primary text-primary-foreground border-primary shadow-md'
                  : 'bg-card text-muted-foreground border-border hover:border-primary hover:text-primary'
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="card-hover bg-card border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col"
              style={{
                animation: `fadeInUp 0.5s ease ${i * 0.1}s both`,
              }}
            >
              {/* Gradient banner */}
              <div className={`h-36 bg-linear-to-br ${project.gradient} flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl">{['🛒', '💬', '📊', '📋', '🤖', '🌐'][i % 6]}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-md border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {/* <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={15} /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
