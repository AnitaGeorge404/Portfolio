import React from 'react';

export default function Header({ scrollTo }) {
    return (
        <header className="header">
            <div className="header-logo" onClick={() => scrollTo('home')}>Bentolio</div>
            <nav className="header-nav">
                <a onClick={() => scrollTo('about')}>About</a>
                <a onClick={() => scrollTo('projects')}>Projects</a>
                <a onClick={() => scrollTo('skills')}>Skills</a>
                <a onClick={() => scrollTo('certificates')}>Certificates</a>
                <a onClick={() => scrollTo('contact')}>Contact</a>
            </nav>
        </header>
    );
}