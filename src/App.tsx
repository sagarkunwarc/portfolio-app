import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode !== null ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="container mx-auto px-4 py-8">
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
