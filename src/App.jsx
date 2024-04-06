import React from 'react';
import leftImage from './assets/left.png';
import rightImage from './assets/right.png'
import logo from './assets/logo.png'


function App() {
  return (
    <div className="main">
      <nav>
        <div className="nav-icon"><img src={logo} alt="logo" /></div>
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
      <div className="content">
        <div className="left">
          <img src={leftImage} alt="left" />
        </div>
        <div className="middle">
          <div className="nav-icon2"><img src={logo} alt="logo" /></div>
          <h1>Transform Your Classroom Management Experience</h1>
          <h2>Simplify teaching and learning with <span className="highlight">cLASSY</span>, the all-in-one classroom management solution designed for educators and students.</h2>
          <button>Sign Up for Free</button>
        </div>
        <div className="right">
          <img src={rightImage} alt="right" />
        </div>
      </div>
    </div>
  );
}

export default App;
