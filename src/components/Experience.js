import React from 'react';
import './Experience.css';

export default function Experience() {
    return (
        <div id="experience-background">
            <section id="experience">
                <h1 className="title">Experience</h1>
                <div className="experience-container">
                    <div className="experience-item">
                        <h2>Frontend Developer Intern, BadBusiness</h2>
                        {/* <p>June 2024 – July 2024</p> */}
                        <ul>
                            <li>Enhanced Book Sections Page: Developed a dynamic book sections page enabling users to add books and redirect to the specific book’s shopping page upon clicking, enhancing user experience and navigation.</li>
                            <li>Improved Contact Us Functionality: Designed and implemented a contact form, allowing users to send messages directly to the website owner, ensuring efficient communication and response.</li>
                            <li>Optimized Website Performance: Replaced images with links across the website to significantly improve loading times and overall site performance, ensuring a smoother user experience.</li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h2>Open Source Contributor, GirlScript Summer of Code</h2>
                        {/* <p>May 2024 – Present</p> */}
                        <ul>
                            <li>Contributing to various open-source projects and learning new skills</li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h2>Software Developer Intern, GrapplTech</h2>
                        {/* <p>July 2024 – Present</p> */}
                        <ul>
                            <li>Working on developing the hero section for the website</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="planet" id="planet1"></div>
            <div className="planet" id="planet2"></div>
            <div className="planet" id="planet3"></div>
        </div>
    );
}
