import { useState } from 'react';
import Menu from './Menu';
import Categori from './Categori';
import listItem from './list';

// allCategories uniqe use map
const AllCategories = [
  'All',
  ...new Set(listItem.map((item) => item.category)),
];
// console.log(AllCategories); //all, burger, sandwitch

function App() {
  const [showMenu, setShowMenu] = useState(listItem); //listmenu
  const [categoryFilter, setCategoriFilter] = useState(AllCategories);

  // filterMenu
  const filterMenu = (categoryItem) => {
    //if clicked All
    if (categoryItem === 'All') {
      // update perubahan tampilkan original obj
      setShowMenu(listItem);
      return;
    }
    // jika button yg dipilih maka tampilkan sesuai argument
    const newItem = listItem.filter((item) => item.category === categoryItem);
    // update perubahan
    setShowMenu(newItem);
  };

  const removeItem = (id) => {
    // remember showMenu should be filter not original obj data
    const removeId = showMenu.filter((listId) => listId.id !== id);
    setShowMenu(removeId);
  };

  // if obj data null
  if (showMenu.length === 0) {
    return (
      <section className='center-text'>
        <div className='title'>
          <h3>No option </h3>
          <div className='button-filter'>
            <button className='btn' onClick={() => setShowMenu(listItem)}>
              refresh again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className='title_pages'>
        <h2>food menu</h2>
        <div className='underline'></div>
      </div>
      <Categori filterMenu={filterMenu} categoryBtn={categoryFilter} />
      <Menu menuItem={showMenu} removeItem={removeItem} />
    </section>
  );
}

export default App;
