import React from 'react';
import './About.css';
import Dally from '../assets/DallyPicture.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

export default function About() {
    return (
        <div id="space-background">
            <section id="profile">
                <div className="section__pic-container">
                    <img src={Dally} alt="Dally profile picture" className="profile-pic" />
                </div>
                <div className="section__text">
                    <p className="section__text__p1">Hello, I'm</p>
                    <h1 className="title">Dally</h1>
                    <p className="section__text__p2">
                        I am passionate about space exploration and web development. I love building cool websites while constantly learning and exploring new technologies. Whether it's coding late into the night or stargazing, I'm always excited about discovering the unknown.
                    </p>
                    <p className="section__text__p3">
                        I believe in the power of curiosity and creativity to drive innovation. When I'm not immersed in code or space documentaries, you might find me experimenting with new programming languages, contributing to open-source projects, or sharing my knowledge with others.
                    </p>
                    <p className="section__text__p4">
                        Let's connect and talk about the stars, code, or anything in between! 🚀👨‍💻
                    </p>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2"
                            onClick={() => window.open('https://drive.google.com/file/d/1aNl3pjP5X3hfgbEzwdj9vRMxxwXmk7sG/view')}
                        >
                            View CV
                        </button>
                        <button className="btn btn-color-1">
                            Contact Info
                        </button>
                    </div>
                    <div id="socials-container">
                        <img
                            src={linkedin}
                            alt="My LinkedIn profile"
                            className="icon"
                            onClick={() => window.location.href = 'https://www.linkedin.com/in/dally-r-a8a963272/'}
                        />
                        <img
                            src={github}
                            alt="My Github profile"
                            className="icon"
                            onClick={() => window.location.href = 'https://github.com/astro-dally'}
                        />
                    </div>
                </div>
            </section>
            <div className="planet" id="planet1"></div>
            <div className="planet" id="planet2"></div>
            <div className="planet" id="planet3"></div>
        </div>
    );
}
