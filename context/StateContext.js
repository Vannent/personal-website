import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showTheme, setShowTheme] = useState(true);
  return (
    <Context.Provider value={{ showTheme, setShowTheme }}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
