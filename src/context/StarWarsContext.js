import React, { createContext, useState } from 'react';

export const StarWarsContext = createContext();

export default ({ children }) => {
  const [data, setData] = useState([]);

  const context = {
    data: data,
    setData: setData,
  };

  return (
    <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>
  );
}
