import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./hamburgerMenu.css"

export const HamburgerMenu = () => {
  const [toggleSideBar, setToggleSidebar] = useState(false)
  const [anchorClick, setAnchorClick] = useState(false)

  const onToggleMenu = () => {
    setToggleSidebar(!toggleSideBar)

    if (!toggleSideBar) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  const onAnchorClick = () => {
    setAnchorClick(true)
    setToggleSidebar(!toggleSideBar)
    
    document.body.classList.remove('no-scroll');

    setTimeout(() => {
      setAnchorClick(false)
    }, 50);
  };

  return (
    <nav>
      <div className="nav-right visible-xs">
        <button
          onClick={onToggleMenu}
          type="button"
          className={toggleSideBar
            ? 'button active' : 'button'}
          id="btn">
          <div className="bar top-mobile" />
          <div className="bar middle" />
          <div className="bar bottom-mobile" />
        </button>
        {anchorClick && (
          <button
            onClick={onToggleMenu}
            type="button"
            className={toggleSideBar
              ? 'button active' : 'button'}
            id="btn">
            <div className="bar top-mobile" />
            <div className="bar middle" />
            <div className="bar bottom-mobile" />
          </button>
        )}
      </div>
      <div
        style={{ display: anchorClick ? 'none' : '' }}
        className={toggleSideBar ? 'sidebar active' : 'sidebar'}>
        <ul className="sidebar-list">
          <li
            className={toggleSideBar
              ? 'sidebar-item active'
              : 'sidebar-item'}>
            <NavLink
              className="sidebar-anchor"
              to="/"
              onClick={onAnchorClick}>
              Hem
            </NavLink>
          </li>
          <li
            className={toggleSideBar
              ? 'sidebar-item active'
              : 'sidebar-item'}>
            <NavLink
              className="sidebar-anchor"
              to="/om"
              onClick={onAnchorClick}>
              Om mig
            </NavLink>
          </li>
          <li
            className={toggleSideBar
              ? 'sidebar-item active'
              : 'sidebar-item'}>
            <NavLink
              className="sidebar-anchor"
              to="/psykoterapi-online"
              onClick={onAnchorClick}>
              Psykoterapi online
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}