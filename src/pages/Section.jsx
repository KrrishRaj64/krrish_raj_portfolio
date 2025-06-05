// src/components/Section.jsx
import React, { useEffect, useRef, useState } from 'react';

const Section = ({ children, id, className = '', ...props }) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Optional: stop observing once visible
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 // Adjust threshold as needed (percentage of item in view)
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id={id}
            className={`section ${className} ${isVisible ? 'visible' : ''}`}
            {...props}
        >
            {children}
        </section>
    );
};

export default Section;