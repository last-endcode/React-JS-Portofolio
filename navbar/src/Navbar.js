import React, { useEffect, useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';

function Navbar() {
  const [showLink, setShowLink] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const HeightLinks = linksRef.current.getBoundingClientRect().height;
    // console.log(HeightLinks); 196
    if (showLink) {
      linksContainerRef.current.style.height = `${HeightLinks}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLink]);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <h2>W</h2>
          <button className='nav-toggle' onClick={() => setShowLink(!showLink)}>
            <FaBars />
          </button>
        </div>
        <div className='links-container show-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='social-icons'>
          <ul className='social'>
            {social.map((socialIcon) => {
              const { id, icon, url } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
