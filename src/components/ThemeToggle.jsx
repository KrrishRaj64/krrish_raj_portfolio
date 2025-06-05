// src/components/ThemeToggle.jsx
import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ isDark, toggleTheme }) => {
    return (
        <div className="absolute top-8 right-8 z-10">
            <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-black dark:bg-white text-black dark:text-black w-10 h-10 flex items-center justify-center"
                aria-label="Toggle theme"
            >
                {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
        </div>
    );
};

export default ThemeToggle;