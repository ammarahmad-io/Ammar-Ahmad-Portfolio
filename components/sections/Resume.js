'use client';

import { useEffect, useRef } from 'react';
import { Eye, Download, FileText } from 'lucide-react';

export default function Resume() {
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
              }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="resume" ref={sectionRef} className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="reveal text-4xl font-extrabold text-foreground section-heading"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            My Resume
          </h2>
        </div>

        {/* Resume Card */}
        <div
          className="reveal card-hover bg-card border border-border rounded-2xl p-10 shadow-sm text-center"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s' }}
        >
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
            <FileText size={38} />
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-2">Ammar Ahmad</h3>
          <p className="text-muted-foreground text-base mb-8">
            Tech Professional at the Intersection of Full Stack Development &amp; Software Engineering
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-accent transition-all duration-200 hover:-translate-y-0.5"
            >
              <Eye size={18} />
              Preview Resume
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 shadow-md"
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            📎 Resume will be linked once uploaded
          </p>
        </div>
      </div>
    </section>
  );
}
