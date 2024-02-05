import React from 'react';
import './Navbar.css'; 

/**
 * Represents the navigation bar component of the application.
 * This component displays the GitHub logo and the brand name.
 */
const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub Logo"
                className="github-logo"
            />
            <span className="brand">GitFinder.V</span>
        </div>
    );
};

export default Navbar;
