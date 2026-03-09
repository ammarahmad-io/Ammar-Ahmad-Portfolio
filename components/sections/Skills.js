'use client';

import { useEffect, useRef } from 'react';
import { Code2, Layers, Cloud, Wrench } from 'lucide-react';

const categories = [
  {
    icon: <Code2 size={24} />,
    title: 'Languages & Core Tech',
    skills: [
      { name: 'JavaScript', level: 'proficient' },
      { name: 'TypeScript', level: 'proficient' },
      { name: 'Python', level: 'intermediate' },
      { name: 'HTML', level: 'proficient' },
      { name: 'CSS', level: 'proficient' },
      { name: 'SQL', level: 'intermediate' },
    ],
  },
  {
    icon: <Layers size={24} />,
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Next.js', level: 'proficient' },
      { name: 'React', level: 'proficient' },
      { name: 'Node.js', level: 'intermediate' },
      { name: 'Express', level: 'intermediate' },
      { name: 'TailwindCSS', level: 'proficient' },
      { name: 'Prisma', level: 'intermediate' },
      { name: 'FastAPI', level: 'exploring' },
      { name: 'Shadcn UI', level: 'proficient' },
    ],
  },
  {
    icon: <Cloud size={24} />,
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Vercel', level: 'proficient' },
      { name: 'GitHub Actions', level: 'intermediate' },
      { name: 'Docker', level: 'exploring' },
      { name: 'AWS S3', level: 'familiar' },
      { name: 'Netlify', level: 'proficient' },
    ],
  },
  {
    icon: <Wrench size={24} />,
    title: 'Tools & Others',
    skills: [
      { name: 'Git / GitHub', level: 'proficient' },
      { name: 'VS Code', level: 'proficient' },
      { name: 'Figma', level: 'intermediate' },
      { name: 'PostgreSQL', level: 'intermediate' },
      { name: 'MongoDB', level: 'familiar' },
      { name: 'REST APIs', level: 'proficient' },
    ],
  },
];

const proficiencyConfig = {
  proficient: { label: 'Proficient', color: '#22c55e', cssClass: 'skill-proficient' },
  intermediate: { label: 'Intermediate', color: '#3b5bdb', cssClass: 'skill-intermediate' },
  exploring: { label: 'Exploring', color: '#7c3aed', cssClass: 'skill-exploring' },
  familiar: { label: 'Familiar', color: '#d97706', cssClass: 'skill-familiar' },
};

export default function Skills() {
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
              }, i * 100);
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
    <section id="skills" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="reveal text-4xl font-extrabold text-foreground section-heading"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            My Skills
          </h2>
        </div>

        {/* Proficiency Legend */}
        <div
          className="reveal flex flex-wrap justify-center gap-5 mb-12"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s' }}
        >
          {Object.entries(proficiencyConfig).map(([, cfg]) => (
            <div key={cfg.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: cfg.color }}
              />
              {cfg.label}
            </div>
          ))}
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="reveal card-hover bg-card border border-border rounded-2xl p-6 shadow-sm"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: `opacity 0.6s ease ${0.15 + i * 0.1}s, transform 0.6s ease ${0.15 + i * 0.1}s`,
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {cat.icon}
                </div>
                <h3 className="text-base font-bold text-foreground">{cat.title}</h3>
              </div>

              {/* Skills pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => {
                  const cfg = proficiencyConfig[skill.level];
                  return (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-semibold ${cfg.cssClass}`}
                    >
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
