import React, { createContext, useContext, useReducer } from "react";

// data layer
export const StateContext = createContext();

//provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// used inside a Component
export const useStateValue = () => useContext(StateContext);
