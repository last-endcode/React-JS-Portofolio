import React, { useState } from 'react';
import data from './data';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function App() {
  const [ask, setAsk] = useState(data);

  return (
    <main>
      <section>
        <div className='card-container center-ask'>
          <div class='loremtitle'>
            <h3>lorem__</h3>
          </div>
          <div class='list-item'>
            {ask.map((question) => {
              return <Pertanyaan ask={question.id} {...question} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

const Pertanyaan = ({ info, title, id }) => {
  const [showSelect, setShowSelect] = useState(false);
  return (
    <article className='pertanyaan' key={id}>
      <header>
        <h4>{title}</h4>
        <button onClick={() => setShowSelect(!showSelect)}>
          {showSelect ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <div>{showSelect && <p className='jawaban'>{info}</p>}</div>
    </article>
  );
};

export default App;
