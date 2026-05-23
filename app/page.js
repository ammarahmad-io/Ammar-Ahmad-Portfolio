import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Resume from '@/components/sections/Resume';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Resume />
      {/* <Experience /> */}
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
