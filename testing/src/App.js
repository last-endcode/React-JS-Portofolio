import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { links, social } from './data';
import HOME from './Home';

function App() {
  const [openSidebar, setopenSidebar] = useState(false);

  const openBar = () => {
    return setopenSidebar(true);
  };

  const closeBar = () => {
    return setopenSidebar(false);
  };
  return (
    <>
      <nav>
        <div className='nav-center'>
          <div className='nav-header'>
            <button className='nav-toggle' onClick={openBar}>
              <FaBars />
            </button>
          </div>
          <aside className={`${openSidebar ? 'sidebar show' : 'sidebar'}`}>
            <div className='sidebar-header'>
              <h2>Spotlight</h2>
              <button className='close-btn' onClick={closeBar}>
                <FaTimes />
              </button>
            </div>
            <ul className='links'>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
            <ul className='social'>
              {social.map((socialIcons) => {
                const { id, icon, url } = socialIcons;
                return (
                  <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </nav>
      <HOME />
    </>
  );
}

export default App;
