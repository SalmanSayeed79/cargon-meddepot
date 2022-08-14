import React, { useState,createContext } from "react";

export const FactoryIDContext = createContext();
export const FactoryIDUpdateContext = createContext();
export const AdminIDUpdateContext = createContext();
export const AdminIDContext = createContext();
export const IDContextProvider = ({ children }) => {
  const [facID, setFacID] = useState(null);
  const [adminID, setAdminID] = useState(null);
  const updateFactoryID=(data)=>{
    setFacID(data)
  }
  const updateAdminID=(data)=>{
    setAdminID(data)
  }

  



  return (
    <FactoryIDContext.Provider value={facID}>
      <FactoryIDUpdateContext.Provider value={updateFactoryID}>
      <AdminIDContext.Provider value={adminID}>
      <AdminIDUpdateContext.Provider value={updateAdminID}>
        {children}
        </AdminIDUpdateContext.Provider>
      </AdminIDContext.Provider>
      </FactoryIDUpdateContext.Provider>
    </FactoryIDContext.Provider>
  );
};
