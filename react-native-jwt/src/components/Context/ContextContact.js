import React, { useEffect, useContext, useState, useReducer } from "react";
import { Context } from "../../context/storeAuth";
import useContact from "../../hooks/useContact";
import { ContextContact } from "../../context/storeContext";
export default function ContactContext({ children }) {
  const { state, dispatch } = useContact();

  return (
    <ContextContact.Provider
      value={{
        stateContext: state,
        dispatchContext: dispatch,
      }}
    >
      {children}
    </ContextContact.Provider>
  );
}
