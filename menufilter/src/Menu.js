import React from 'react';

function Menu({ menuItem, removeItem }) {
  return (
    <>
      <div className='section-center food-center'>
        {menuItem.map((menu) => {
          const { id, img, title, text, price } = menu;
          return (
            <article className='food' key={menu.id}>
              <img src={img} alt={title} className='food-photo' />
              <div>
                <header>
                  <h4>{title}</h4>
                  <h4>{price}</h4>
                </header>
                <p>{text}</p>
                {/* {console.log({ id })} */}
                <div className='btn-container'>
                  <button className='btn food-btn'>add item</button>
                  <button
                    className='btn food-btn'
                    onClick={() => removeItem(id)}
                  >
                    remove item
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default Menu;
