import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <header>
            <div className="hero-content">
                <h1>Welcome to Astro Space</h1>
                <h2>Exploring the universe of web development and beyond..</h2>
                <Link to="/about" className="cta-button">Lets Explore</Link>
            </div>
            <div className="floating-animations">
                <div className="planet" style={{ top: '30%', left: '20%' }}></div>
                <div className="planet" style={{ top: '60%', left: '70%' }}></div>
                <div className="planet" style={{ top: '70%', left: '30%' }}></div>
                <div className="alien" style={{ top: '40%', left: '50%' }}></div>
            </div>
        </header>
    );
}

export default Home;
