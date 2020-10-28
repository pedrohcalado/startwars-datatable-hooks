import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

function handleClick(event, setNumericFilter) {

  event.preventDefault();

  const column = document.getElementById('column-filter').value;
  const comparison = document.getElementById('comparison-filter').value;
  const value = document.getElementById('value-filter').value;
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
    'column',
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
    <div>
      <select data-testid="column-filter" id="column-filter">
        {handleColumnOptions(filterByNumericValues)}
      </select>
      <select data-testid="comparison-filter" id="comparison-filter">
        <option value="comparison">comparação</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input type="number" data-testid="value-filter" id="value-filter" />
      <button
        onClick={(event) => handleClick(event, setNumericFilter)}
        data-testid="button-filter"
      >Filtrar</button>
    </div>
  );
}
