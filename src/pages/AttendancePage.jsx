import React, { useState } from 'react';
import logo from '../assets/logo.png';
import user from '../assets/user.svg';
import home from '../assets/Home.svg';
import table from '../assets/Table.png';
import assign from '../assets/Course Assign.png';
import attendance from '../assets/Checked User Male.png';
import notice from '../assets/Notice.png';
import add from '../assets/Add.svg';
import './NoticePage.css';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Cloud, CreditCard, Github, Keyboard, LifeBuoy, LogOut, Mail, MessageSquare, Plus, PlusCircle, Settings, User, UserPlus, Users } from "lucide-react";
import { Card, Dropdown } from "flowbite-react";
import './AttendancePage.css';

const AttendancePage = () => {
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
            <button><h1>Time Table</h1><img src={table} alt="home"/></button>
            <button><h1>Assignment</h1><img src={assign} alt="home"/></button>
            <button><h1>Attendance</h1><img src={attendance} alt="home"/></button>
            <button id="notice"><h1>Notice</h1><img src={notice} alt="home"/></button>
          </div>
          <div className="right-down">
            <div className="top-btn">
              <Dropdown label="Select Subject" dismissOnClick={false}>
                <Dropdown.Item>Maths</Dropdown.Item>
                <Dropdown.Item>Physics</Dropdown.Item>
                <Dropdown.Item>Science</Dropdown.Item>
                <Dropdown.Item>Computer</Dropdown.Item>
              </Dropdown>
              <button className='black-btn'>Take Attendance</button>
            </div>
            <Card className="max-w-sm my-20">
              <div className="flex justify-end px-4 pt-4">
                <Dropdown inline label="">
                  <Dropdown.Item>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </Dropdown.Item>
                </Dropdown>
              </div>
              <div className="flex flex-col items-center pb-10">
                <img
                  alt="Bonnie image"
                  height="96"
                  src={user}
                  width="96"
                  className="mb-3 rounded-full shadow-lg"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Raghu Ram</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Student</span>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 text-center text-mm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-200 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                  >
                    PRESENT
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-mm font-medium text-red-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    ABSENT
                  </a>
                </div>
              </div>
            </Card>
          </div>
          <img id="float" src={add} alt="add"/>
        </div>
      </div>
    </div>
  );
}

export default AttendancePage;
