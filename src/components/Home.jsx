import React from 'react';
import { ArrowIcon, DecorativeIcon, DropdownIcon, SocialX, SocialInstagram, SocialLinkedIn } from './icons';

export default function Home({ scrollTo }) {
    return (
        <section id="home">
            <div className="bento-grid">
                {/* Main Intro Card */}
                <div className="bento-item item-1" onClick={() => scrollTo('about')}>
                    <div className="decorative-icon"><DecorativeIcon /></div>
                    <h1>Creative direction grounded in clarity and emotion.</h1>
                </div>

                {/* Portrait Card */}
                <div className="bento-item item-2">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" alt="Portrait of Mira Chen" />
                </div>

                {/* Sidebar Card */}
                <div className="bento-item item-3" onClick={() => scrollTo('projects')}>
                    <div className="sidebar-content">
                        <div className="sidebar-item">Soft Form <DropdownIcon /></div>
                        <div className="sidebar-image-container">
                             <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop" alt="Modern armchair"/>
                             <a href="#" className="view-more-btn">View More</a>
                        </div>
                        <div className="sidebar-item">Balm & Body <DropdownIcon /></div>
                        <div className="sidebar-item">Ritual Stone <DropdownIcon /></div>
                        <div className="sidebar-item">Morning Coffee <DropdownIcon /></div>
                        <div className="sidebar-item">Cliffside Rest <DropdownIcon /></div>
                    </div>
                </div>

                {/* NEW Socials Card */}
                <div className="bento-item item-socials" onClick={() => scrollTo('contact')}>
                    <div className="social-links-card">
                        <a href="#"><SocialX /></a>
                        <a href="#"><SocialInstagram /></a>
                        <a href="#"><SocialLinkedIn /></a>
                    </div>
                </div>
                
                {/* Bio Card */}
                <div className="bento-item item-4" onClick={() => scrollTo('about')}>
                    <div className="decorative-icon-small"><DecorativeIcon size={40} /></div>
                    <p>Mira Chen is a creative director specializing in brand storytelling and visual identity for fashion, beauty, and lifestyle.</p>
                </div>

                {/* Certificates Card */}
                <div className="bento-item item-5" onClick={() => scrollTo('certificates')}>
                    <p>Have some questions?</p>
                    <h2 className="contact-text">Certificates</h2>
                    <div className="icon-link"><ArrowIcon /></div>
                </div>

                {/* Contact Card */}
                <div className="bento-item item-6" onClick={() => scrollTo('contact')}>
                     <p>Let's talk</p>
                     <h2 className="contact-text-small">Contact me</h2>
                     <div className="icon-link"><ArrowIcon /></div>
                </div>
            </div>
        </section>
    );
}