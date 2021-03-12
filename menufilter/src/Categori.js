import React from 'react';

function Categori({ categoryBtn, filterMenu }) {
  return (
    <div className='button-filter'>
      {categoryBtn.map((category, index) => {
        return (
          <button
            className='btn btn-category'
            key={index}
            onClick={() => filterMenu(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categori;
