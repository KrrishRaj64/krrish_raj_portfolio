// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    const rickRoll = () => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank"); // The classic RickRoll link
    };

    return (
        <footer className="w-full py-4 border-t border-gray-300 dark:border-gray-700">
            <p 
                className="text-center font-space-mono text-sm uppercase cursor-pointer footer-text" 
                onClick={rickRoll}
                onKeyPress={(e) => e.key === 'Enter' && rickRoll()}
                role="button"
                tabIndex={0}
            >
                CLICK HERE TO GET OUT OF THE MATRIX
            </p>
        </footer>
    );
};

export default Footer;