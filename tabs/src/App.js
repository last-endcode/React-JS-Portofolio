import React, { useState, useEffect } from 'react';
import { BsChevronDoubleRight } from 'react-icons/bs';
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const jobs = await response.json();
      setJobs(jobs);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className='loading'>
        <div>
          <img
            src='https://i.gifer.com/embedded/download/VAyR.gif'
            alt=''
            class='loading-img'
          />
          <h4>mohon tunggu sebentar</h4>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='error'>
        <div className='div'>
          <h1>404 NOT FOUND!</h1>
          <h2>ERROR</h2>
          <p>please check again url api</p>
        </div>
      </div>
    );
  }
  const { company, title, dates, duties } = jobs[value];
  return (
    <main>
      <section className='tabs'>
        <div className='title_pages'>
          <h2>experience our</h2>
        </div>
        <div className='section-center tab-center'>
          {/* button container */}
          <div className='button-container'>
            {jobs.map((item, index) => {
              return (
                <button
                  className={`btntabs ${value === index && `active-btn`}`}
                  key={index}
                  onClick={() => setValue(index)}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          {/* tabs-info */}
          <article className='tab-info'>
            <div className='tabs-title'>
              <h3 className='tab-title'>{title}</h3>
              <h4 className='tab-date'>{dates}</h4>
            </div>
            <div>
              {duties.map((info) => {
                return (
                  <div className='tabs-text'>
                    <BsChevronDoubleRight className='tabs-text-icon' />
                    <p>{info}</p>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;
