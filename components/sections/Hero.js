'use client';

import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

const roles = [
  { text: 'Full Stack Developer', highlight: '& Software Engineer' },
  { text: 'AI & ML', highlight: 'Engineer' },
];

export default function Hero() {
  const heroRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll('.anim-item');
    elements?.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 150 * i);
    });
  }, []);

  // Role cycling animation
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center section-padding pt-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="anim-item text-primary font-semibold text-lg tracking-wide">
              Hello, I&apos;m
            </p>

            <h1 className="anim-item text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Ammar Ahmad
            </h1>

            <h2
              className="anim-item text-xl lg:text-2xl font-semibold text-muted-foreground leading-snug min-h-8"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(-10px)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
              }}
            >
              {roles[roleIndex].text}{' '}
              <span className="gradient-text">{roles[roleIndex].highlight}</span>
            </h2>

            <p className="anim-item text-muted-foreground text-base lg:text-lg leading-relaxed max-w-lg">
              Building modern, scalable web applications with clean code and
              exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="anim-item flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg cursor-pointer"
              >
                Get in Touch
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-accent transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="anim-item flex gap-3">
              {[
                { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/ammarahmaddev/', label: 'LinkedIn' },
                { icon: <Github size={18} />, href: 'https://github.com/ammarahmad-io', label: 'GitHub' },

                { icon: <ExternalLink size={18} />, href: '#', label: 'Portfolio' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-accent transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Profile Photo Placeholder */}
          <div className="anim-item flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full border-4 border-primary animate-pulse-glow flex items-center justify-center bg-accent relative overflow-hidden">
                {/* Placeholder avatar */}
                <div className="w-full h-full bg-linear-to-br from-primary/20 to-purple-500/20 flex items-center justify-center rounded-full">
                  {/* Right: Profile Photo Placeholder */}
                  <div className="anim-item flex justify-center lg:justify-end">
                    <div className="relative">

                      <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full border-4 border-primary overflow-hidden">
                        <img
                          src="/myself.jpg"
                          alt="Ammar Malik"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-card border border-border rounded-xl px-4 py-2 shadow-lg">
                <p className="text-xs text-muted-foreground">Available for</p>
                <p className="text-sm font-bold text-primary">Opportunities ✨</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={scrollToAbout}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all animate-bounce-slow cursor-pointer"
            aria-label="Scroll down"
          >
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
