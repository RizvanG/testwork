import React, { createContext, useMemo, useState } from "react";

const ShowModalContext = createContext({
  showModal: false,
  setShowModal: () => {},
});

const ShowModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  
  const value = useMemo(
    () => ({
      showModal,
      setShowModal,
    }),
    [showModal]
  );

  return (
    <ShowModalContext.Provider value={value}>
      {children}
    </ShowModalContext.Provider>
  );
};

export { ShowModalContext, ShowModalProvider };
