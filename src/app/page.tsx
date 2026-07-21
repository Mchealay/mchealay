import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Projects } from '@/components/sections/Projects';
import { Playground } from '@/components/sections/Playground';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Playground />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
