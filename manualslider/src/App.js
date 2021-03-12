import React, { useState } from 'react';
import pirates from './listburonan';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';
import { GiMoneyStack } from 'react-icons/gi';

function App() {
  const [showPirates, setShowPirates] = useState(0);
  const { id, title, wanted, text, img } = pirates[showPirates];

  const checkNumber = (number) => {
    if (number < 0) {
      return pirates.length - 1;
    }
    if (number > pirates.length - 1) {
      return 0;
    }
    return number;
  };
  const prevBtn = () => {
    setShowPirates((showPirates) => {
      const newItem = showPirates - 1;
      return checkNumber(newItem);
    });
  };

  const nextBtn = () => {
    setShowPirates((showPirates) => {
      const newItem = showPirates + 1;
      return checkNumber(newItem);
    });
  };
  return (
    <section>
      <div className='title_pages pirates-title'>
        <h2>wanted pirates</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center'>
        <article className='pirates-card'>
          <img src={img} alt={title} className='pirates-photo' />
          <div className='button-container'>
            <button className='btn prevBtn' onClick={prevBtn}>
              <AiOutlineDoubleLeft />
            </button>
            <button className='btn nextBtn' onClick={nextBtn}>
              <AiOutlineDoubleRight />
            </button>
          </div>
          <footer>
            <h3 class='footer-title'>{title}</h3>
            <h2 class='footer-dead'>~ dead or alive ~</h2>
            <h3 class='footer-wanted'>
              <GiMoneyStack className='wanted-icon' />
              {wanted}
            </h3>
          </footer>
        </article>
      </div>
    </section>
  );
}

export default App;
