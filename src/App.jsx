import React from 'react';
import './App.css';
// Cooollll CSS imports
// Import all your components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

export default function App() {
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100; // Adjusted for new header padding
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <Header scrollTo={scrollTo} />
            <main>
                <Home scrollTo={scrollTo} />
                <About />
                <Projects />
                <Skills />
                <Certificates />
                <Contact />
            </main>
        </>
    );
}