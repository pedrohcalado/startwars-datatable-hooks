import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';
import './NumericFilter.css';

function handleClick(setNumericFilter) {
  const column = document.getElementById('column-filter').value;
  const comparison = document.getElementById('comparison-filter').value;
  const value = document.getElementById('value-filter').value;

  column !== "--column--" &&
  comparison !== "--comparison--" &&
  value &&
  setNumericFilter((filter) => [
    ...filter,
    {
      column,
      comparison,
      value,
    },
  ]);
}

function handleColumnOptions(filterByNumericValues) {
  const selectedFilterColumns = filterByNumericValues.map((filter) => filter.column);
  let columns = [
    '--column--',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  columns = columns.filter((column) => !selectedFilterColumns.includes(column));
  return columns.map((column) => <option value={column} key={column}>{column}</option>);
}

export default function NumericFilter() {
  const {
    sets: { setNumericFilter },
    filters: { filterByNumericValues },
  } = useContext(StarWarsContext);
  return (
    <div className="num-f--main-container">
      <div className="num-f--select">
        <select data-testid="column-filter" id="column-filter">
          {handleColumnOptions(filterByNumericValues)}
        </select>
        <select data-testid="comparison-filter" id="comparison-filter">
          <option value="--comparison--">--comparison--</option>
          <option value="bigger than">bigger than</option>
          <option value="less than">less than</option>
          <option value="equal to">equal to</option>
        </select>
      </div>
      <input type="number" data-testid="value-filter" id="value-filter" placeholder="Type a value" />
      <button
        onClick={(event) => handleClick(setNumericFilter)}
        data-testid="button-filter"
      >Filter</button>
    </div>
  );
}
