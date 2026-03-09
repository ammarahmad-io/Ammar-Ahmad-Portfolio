'use client';

import { useEffect, useRef } from 'react';
import { MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    icon: <Briefcase size={18} />,
    title: 'Full Stack Developer',
    company: 'Company Name',
    duration: 'Jan 2023 – Present',
    location: 'Remote / Pakistan',
    points: [
      'Built and maintained scalable web applications using React, Next.js, and Node.js, serving thousands of daily users.',
      'Architected RESTful APIs and integrated third-party services to enhance platform functionality.',
      'Improved application performance by 40% through code optimization and caching strategies.',
      'Collaborated with cross-functional teams to deliver high-quality features on time.',
    ],
    techs: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'REST APIs'],
  },
  {
    type: 'work',
    icon: <Briefcase size={18} />,
    title: 'Frontend Developer Intern',
    company: 'Startup / Agency',
    duration: 'Jun 2022 – Dec 2022',
    location: 'Remote',
    points: [
      'Developed responsive UI components using React and Vanilla CSS.',
      'Implemented pixel-perfect designs from Figma prototypes.',
      'Reduced page load time by optimizing assets and lazy loading techniques.',
    ],
    techs: ['React', 'JavaScript', 'CSS', 'HTML', 'Figma'],
  },
  {
    type: 'education',
    icon: <GraduationCap size={18} />,
    title: 'Bachelor of Science — Computer Science',
    company: 'University Name',
    duration: '2019 – 2023',
    location: 'Pakistan',
    points: [
      'Graduated with strong foundations in algorithms, data structures, and software engineering.',
      'Completed projects in web development, databases, and machine learning.',
    ],
    techs: ['Data Structures', 'Algorithms', 'OOP', 'Databases', 'Web Dev'],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, i * 180);
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
    <section id="experience" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className="reveal text-4xl font-extrabold text-foreground section-heading"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-10">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="reveal relative"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
                }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.15rem] top-5 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary z-10">
                  {exp.icon}
                </div>

                {/* Card */}
                <div className="card-hover bg-card border border-border rounded-2xl p-6 shadow-sm ml-2">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-semibold text-sm">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 sm:items-end shrink-0">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar size={12} /> {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin size={12} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-4">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-md border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
