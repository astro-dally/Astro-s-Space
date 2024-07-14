import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className="header1" >
            <Link to="/" className="header-item">Home</Link>
            <Link to="/about" className="header-item">About</Link>
            <Link to="/experience" className="header-item">Experience</Link>
            <Link to="/projects" className="header-item">Projects</Link>
            <Link to="/contact" className="header-item">Contact</Link>
        </div >

    );
}

export default Header;
