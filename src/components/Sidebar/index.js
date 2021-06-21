import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {SidebarData} from './data'
import './index.css'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

function Sidebar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <div className='sidebar'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='sidebar-toggle'>
            <Link to='#' className='menu-bars color-white'>
              <AiIcons.AiOutlineClose/>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className="nav-text">
                <Link to={item.path}><span>{item.title}</span></Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Sidebar