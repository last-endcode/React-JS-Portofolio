import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const openSidebar = () => {
    setIsOpenSidebar(true);
  };

  const closeSidebar = () => {
    setIsOpenSidebar(false);
  };

  return (
    <AppContext.Provider
      value={{
        isOpenModal,
        isOpenSidebar,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
