import React from 'react';

function Navbar() {
    return (
        <nav>
            <div className="nav-icon"><img src="../assets/logo.png" alt="logo" /></div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div className="btn">
                <button>LOG IN</button>
                <button>SIGN UP</button>
            </div>
            <i className="ri-menu-line"></i>
            {/* <i className="ri-close-line"></i> */}
        </nav>
    );
}

export default Navbar;
