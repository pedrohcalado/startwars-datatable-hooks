import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

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
    <div>
      {filterByNumericValues.map(({ column, comparison, value }, index) =>
        <div data-testid="filter" key={column}>
          <span>Column: {column} </span>
          <span>Comparison: {comparison} </span>
          <span>Value: {value} </span>
          <button onClick={(e) => handleClick(e)} value={index}>X</button>
        </div>,
      )}
    </div>
  );
}
