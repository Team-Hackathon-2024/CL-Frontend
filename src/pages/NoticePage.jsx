import React, { useState } from 'react';
import logo from '../assets/logo.png'
import user from '../assets/user.svg'
import home from '../assets/Home.svg'
import table from '../assets/Table.png'
import assign from '../assets/Course Assign.png'
import attendance from '../assets/Checked User Male.png'
import notice from '../assets/Notice.png'
import add from '../assets/Add.svg'
import './NoticePage.css'

const NoticePage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="main">
            <nav>
                <div className="nav-icon"><img src={logo} alt="logo" /><h1>Classy</h1></div>
                <div className="btn">
                    <button>Add a class</button>
                    <button>Join a class</button>
                    <img src={user} alt="user"/>
                </div>
            </nav>
            <div className="content">
                <div className="left-menu">
                    <div className="navigation">
                        <ul>
                            <li className={activeIndex === 0 ? 'list active' : 'list'} onClick={() => handleItemClick(0)}>
                                <b></b>
                                <b></b>
                                <a href="#">
                                    <span className='icon'></span>
                                    <span className='title'>Class Name</span>
                                </a>
                            </li>
                            <li className={activeIndex === 1 ? 'list active' : 'list'} onClick={() => handleItemClick(1)}>
                                <b></b>
                                <b></b>
                                <a href="#">
                                    <span className='icon'></span>
                                    <span className='title'>Class Name</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right-main">
                    <div className="right-top">
                        <button><h1>Home</h1><img src={home} alt="home"/></button>
                        <button><h1>Time Table</h1><img src={table} alt="home"/></button>
                        <button><h1>Assignment</h1><img src={assign} alt="home"/></button>
                        <button><h1>Attendance</h1><img src={attendance} alt="home"/></button>
                        <button id="notice"><h1>Notice</h1><img src={notice} alt="home"/></button>
                    </div>
                    <div className="right-down">
                        <div className="card">
                            <div className="shape"><h1>Roadies Audition</h1></div>
                            <div className="date"><h1>6/9/2069</h1></div>
                            <div className="info"><h1>New notice POSTED</h1></div>
                            <div className="time"><h2>by You at 12:00 A.M</h2></div>
                        </div>
                    </div>
                    <img id="float" src={add} alt="add"/>
                </div>
            </div>
        </div>
    );
}

export default NoticePage;
