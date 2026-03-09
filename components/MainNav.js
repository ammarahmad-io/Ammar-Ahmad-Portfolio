'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function MainNav() {
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Track scroll for navbar background + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="text-xl font-bold gradient-text tracking-tight cursor-pointer"
          >
            Ammar Ahmad<span className="text-primary">.</span>
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${isActive
                        ? 'text-primary font-semibold'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="block h-0.5 bg-primary rounded-full mt-0.5 mx-auto" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Dark mode toggle + Mobile menu button */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleDark}
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200 cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-full border border-border text-muted-foreground hover:bg-accent transition-all cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-3 pb-4 border-t border-border glass-nav">
            <ul className="flex flex-col gap-1 px-2">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full text-left px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${isActive
                          ? 'bg-accent text-primary font-semibold'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                        }`}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
