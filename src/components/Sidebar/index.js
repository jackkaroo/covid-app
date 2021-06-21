import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SidebarData from './data';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="sidebar">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="sidebar-toggle">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link to="#" className="menu-bars color-white">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item) => (
            <li key={item.title} className="nav-text">
              <Link to={item.path}><span>{item.title}</span></Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
