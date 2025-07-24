"use client";

import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {

    const [activeSection, setActiveSection] = useState(null);

    const value = { activeSection, setActiveSection };

    return (
        <GlobalContext.Provider value={value}>  
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;