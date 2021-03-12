import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { links, social, artikellink } from './data';
import { useGlobalContext } from './context';

function Sidebar() {
  const { isOpenSidebar, closeSidebar } = useGlobalContext();

  return (
    <>
      <aside
        className={`${isOpenSidebar ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <h2>W</h2>
          <button className='closebtn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon} {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className='social'>
          {social.map((item) => {
            const { id, url, icon } = item;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
        <ul className='artikel'>
          {artikellink.map((item) => {
            const { id, url, text } = item;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
