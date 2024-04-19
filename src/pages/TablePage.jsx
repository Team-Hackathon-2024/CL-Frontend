import React, { useState } from 'react';
import logo from '../assets/logo.png';
import user from '../assets/user.svg';
import home from '../assets/Home.svg';
import tableImage from '../assets/Table.png';
import assign from '../assets/Course Assign.png';
import attendance from '../assets/Checked User Male.png';
import notice from '../assets/Notice.png';
import add from '../assets/Add.svg';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import './TablePage.css'

const TablePage = () => {
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
                </div>
                <div className="user">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src={user} />
                                <AvatarFallback>PF</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
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
                        <button><h1>Time Table</h1><img src={tableImage} alt="table"/></button>
                        <button><h1>Assignment</h1><img src={assign} alt="assignment"/></button>
                        <button><h1>Attendance</h1><img src={attendance} alt="attendance"/></button>
                        <button id="notice"><h1>Notice</h1><img src={notice} alt="notice"/></button>
                    </div>
                    <div className="right-down">
                        <div className="rd1">
                            <div className="date"><h1>APRIL 23, 2024</h1><h2>WEDNESDAY</h2></div>
                            
                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-black hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center" type="button" style={{ fontFamily: 'Inter', borderRadius: '6px', background: '#D9D9D9', outline: 'none', paddingRight: '12px' }}>
                                WEDNESDAY 
                                <svg className="w-3 h-3 ms-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" style={{ border: '1px solid black', borderRadius: '10%' }}>
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                            
                            {/* Dropdown menu */}
                            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="table">
                        <table border="1">
                            <tbody>
                                <tr>
                                    <td>SUBJECT</td>
                                    <td>TEACHER</td>
                                    <td>START TIME</td>
                                    <td>END TIME</td>
                                    <td>ACTION</td>
                                </tr>
                                <tr>
                                    <td>Row 2, Column 1</td>
                                    <td>Row 2, Column 2</td>
                                    <td>Row 2, Column 3</td>
                                    <td>Row 2, Column 4</td>
                                    <td><h1>EDIT</h1><h2>REMOVE</h2></td>
                                </tr>
                                <tr>
                                    <td>Row 3, Column 1</td>
                                    <td>Row 3, Column 2</td>
                                    <td>Row 3, Column 3</td>
                                    <td>Row 3, Column 4</td>
                                    <td ><h1>EDIT</h1><h2>REMOVE</h2></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>

                    <img id="float" src={add} alt="add"/>
                </div>
            </div>
        </div>
    );
}

export default TablePage;
