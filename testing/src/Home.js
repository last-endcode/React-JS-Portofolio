import React from 'react';

function Home() {
  return (
    <>
      <header>
        <div class='hero-banner'>
          <div class='banner-pic'>
            <img
              src='https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg'
              alt=''
              class='images-pic'
            />
          </div>
          <div class='banner-text'>
            <h2>Story</h2>
            <h4>
              A (modular, highly tweakable) responsive one-page template
              designed by HTML5 UP and released for free under the Creative
              Commons.
            </h4>
            <p>
              This is a Banner element, and it's generally used as an
              introduction or opening statement. You can customize its style,
              scheme, color, size, orientation, content alignment, and image
              position, as well as assign it an optional onload or onscroll
              transition modifier (details).
            </p>
            <a href='#' class='btn btn-banner'>
              read more
            </a>
          </div>
        </div>
      </header>
      <section class='section-2'>
        <div class='two-column'>
          <article class='image-pic'>
            <img
              src='https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg'
              alt=''
              class='images-pic-2'
            />
          </article>
          <article class='image-info'>
            <h2>spotlight</h2>
            <p>
              This is a Spotlight element, and it's generally used – as its name
              implies – to spotlight a particular feature, subject, or pretty
              much whatever. You can customize its style, scheme, color,
              orientation, content alignment, and image position, as well as
              assign it an optional onload or onscroll transition modifier
              (details).
            </p>
            <a href='#' class='btn btn-banner'>
              learn more
            </a>
          </article>
        </div>
      </section>

      <section class='section-3'>
        <div class='two-column-2'>
          <article class='image-pic-2'>
            <img
              src='https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg'
              alt=''
              class='images-pic-2'
            />
          </article>
          <article class='image-info-2'>
            <h2>spotlight</h2>
            <p>
              This is a Spotlight element, and it's generally used – as its name
              implies – to spotlight a particular feature, subject, or pretty
              much whatever. You can customize its style, scheme, color,
              orientation, content alignment, and image position, as well as
              assign it an optional onload or onscroll transition modifier
              (details).
            </p>
            <a href='#' class='btn btn-banner'>
              learn more
            </a>
          </article>
        </div>
      </section>
    </>
  );
}

export default Home;
