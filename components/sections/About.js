'use client';

import { useEffect, useRef } from 'react';
import { Code2, Layers, Zap, Award } from 'lucide-react';

const stats = [
  { icon: <Zap size={20} />, label: 'Years Experience', value: '3+' },
  { icon: <Layers size={20} />, label: 'Projects Built', value: '20+' },
  { icon: <Code2 size={20} />, label: 'Technologies', value: '15+' },
  { icon: <Award size={20} />, label: 'Happy Clients', value: '0+' },
];

export default function About() {
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
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="reveal text-4xl font-extrabold text-foreground section-heading"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Bio */}
          <div className="space-y-5">
            <p className="reveal text-muted-foreground text-base lg:text-lg leading-relaxed"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
              Hi! I&apos;m <strong className="text-foreground">Ammar Ahmad</strong>, a passionate Full Stack Developer with a
              strong focus on building clean, performant, and scalable web applications.
            </p>
            <p className="reveal text-muted-foreground text-base lg:text-lg leading-relaxed"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
              Strong interest in Agentic AI, LLM engineering, backend systems, and scalable AI
applications. Experienced in Python, FastAPI, Docker, frontend development, API integration, LangChain,
LangGraph, RAG systems. Passionate about building real-world AI products and continuously expanding expertise in
Machine Learning, Deep Learning, Transformers, and LLM fine-tuning.
            </p>
            

            <div className="reveal pt-2"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 shadow-md cursor-pointer"
              >
                Let&apos;s Connect →
              </button>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="reveal card-hover bg-card border border-border rounded-2xl p-6 text-center shadow-sm"
                style={{ opacity: 0, transform: 'translateY(20px)', transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary">
                  {stat.icon}
                </div>
                <p className="text-3xl font-extrabold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
