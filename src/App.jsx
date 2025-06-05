// src/App.jsx
import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Links from './pages/Links';
import Projects from './pages/Projects';
import Footer from './pages/Footer';
import './index.css'; // Or './App.css' if you named it that

function App() {
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme !== null) {
            return JSON.parse(savedTheme);
        }
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(isDark));
    }, [isDark]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            // Only update if no theme is explicitly saved by the user
            if (localStorage.getItem('darkMode') === null) {
                setIsDark(e.matches);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        setIsDark(prevIsDark => !prevIsDark);
    };
    
    // Apply body classes dynamically
    useEffect(() => {
        document.body.className = `bg-light dark:bg-dark text-dark dark:text-white min-h-screen flex flex-col font-['Inter'] transition-colors duration-300 ${isDark ? 'dark' : ''}`;
    }, [isDark]);


    return (
        <> {/* Using Fragment to avoid adding an extra div to the body */}
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <main className="flex-grow flex flex-col">
                <Hero />
                <About />
                <Skills />
                <Projects /> {/* Moved Projects before Links for typical portfolio flow */}
                <Links />
            </main>
            <Footer />
        </>
    );
}

export default App;