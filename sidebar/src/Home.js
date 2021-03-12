import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

function Home() {
  const { openModal, openSidebar } = useGlobalContext();
  return (
    <>
      <main>
        <button className='nav-toggle' onClick={openSidebar}>
          <FaBars />
        </button>
        <div className='hero'>
          <div className='hero-banner'>
            <h2>sidebar with the modal</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              placeat fugiat labore nemo esse quidem magni in quae nihil
              repellendus?
            </p>
            <button className='btn-openmodal' onClick={openModal}>
              click here!
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
