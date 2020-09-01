import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [filterByNumericValues, setNumericFilter] = useState([]);
  const context = {
    data,
    sets: { setData, setName, setNumericFilter },
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues,
    },
  };
  return (
    <StarWarsContext.Provider value={context}>{children}</StarWarsContext.Provider>
  );
};

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
