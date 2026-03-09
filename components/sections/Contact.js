'use client';

import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, i * 130);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'businessinquiries650@gmail.com', href: 'mailto:[businessinquiries650@gmail.com]' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Pakistan 🇵🇰', href: null },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'https://www.linkedin.com/in/ammarahmaddev/', href: 'https://linkedin.com' },
    { icon: <Github size={20} />, label: 'GitHub', value: 'https://github.com/ammarahmad-io', href: 'https://github.com' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className="reveal text-4xl font-extrabold text-foreground section-heading"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            Get In Touch
          </h2>
          <p
            className="reveal text-muted-foreground mt-4 max-w-xl mx-auto"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s' }}
          >
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="space-y-5">
            {contactInfo.map((item, i) => (
              <div
                key={item.label}
                className="reveal flex items-center gap-4 p-4 bg-card border border-border rounded-xl card-hover"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: `opacity 0.5s ease ${0.15 + i * 0.1}s, transform 0.5s ease ${0.15 + i * 0.1}s`,
                }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div
              className="reveal flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.5s ease 0.6s, transform 0.5s ease 0.6s' }}
            >
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <p className="text-sm font-medium text-green-600 dark:text-green-400">
                Currently available for new opportunities
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className="reveal bg-card border border-border rounded-2xl p-7 shadow-sm"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s' }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Message Sent! 🎉</h3>
                <p className="text-muted-foreground text-sm">
                  Thank you for reaching out. I&apos;ll get back to you shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hello!"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 shadow-md cursor-pointer"
                >
                  <Send size={17} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-20 pt-8 border-t border-border">
        <p className="text-muted-foreground text-sm">
          Built with ❤️ by{' '}
          <span className="gradient-text font-semibold">Ammar Ahmad</span> — 2026
        </p>
      </div>
    </section>
  );
}
