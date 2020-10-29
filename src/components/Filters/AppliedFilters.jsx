import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';
import './AppliedFilters.css';

export default function DeleteNumericFilter() {
  const {
    sets: {
      setNumericFilter,
    },
    filters: {
      filterByNumericValues,
    },
  } = useContext(StarWarsContext);

  const handleClick = (e) => {
    setNumericFilter(filterByNumericValues
      .filter((filter, index) => index !== Number(e.target.value)));
  };

  return (
    <div className="af--main-container">
      <p>Filters:</p>
      <div className="af--filters">
        {filterByNumericValues.map(({ column, comparison, value }, index) =>
          <div data-testid="filter" key={column} className="each-filter">
            <span>{column} </span>
            <span>{comparison} </span>
            <span>{value} </span>
            <button onClick={(e) => handleClick(e)} value={index}>X</button>
          </div>,
        )}
      </div>
    </div>
  );
}
