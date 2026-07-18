/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Moon, Sun } from 'lucide-react';
import { personalDetails } from './data';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills'];
      const scrollPosition = window.scrollY + 150;

      let currentSection = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30">
      <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-end">
          <div className="flex items-center gap-6">
            <a href="#about" className={`hidden md:block text-sm font-medium transition-colors ${activeSection === 'about' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400'}`}>About</a>
            <a href="#experience" className={`hidden md:block text-sm font-medium transition-colors ${activeSection === 'experience' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400'}`}>Experience</a>
            <a href="#projects" className={`hidden md:block text-sm font-medium transition-colors ${activeSection === 'projects' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400'}`}>Projects</a>
            <a href="#skills" className={`hidden md:block text-sm font-medium transition-colors ${activeSection === 'skills' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400'}`}>Skills</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 flex flex-col gap-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 mt-24 py-12 text-center transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} {personalDetails.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
