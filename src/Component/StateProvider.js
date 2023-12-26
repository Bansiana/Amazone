import React, { createContext, useContext, useReducer } from "react";
//propares the dataLayer
export const StateContext = createContext();
 
//wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Push and Pull Informasion from the data :ayer
export const useStateValue = () => useContext(StateContext);
