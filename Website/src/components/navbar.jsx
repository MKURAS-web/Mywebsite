import React from "react";
import './navbar.css';
function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <h1 className="heading">This is my navbar</h1>
            </div>
        <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>
    );
}
export default Navbar;