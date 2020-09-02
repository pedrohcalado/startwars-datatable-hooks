import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';
import { headerData } from './TableHeader';
import { filterNumbers } from '../Filters/NumericFilter';

export default function TableBody() {
  const {
    data,
    filters: { filterByName, filterByNumericValues, order },
  } = useContext(StarWarsContext);
  let filteredPlanets = data;
  if (filterByName.name !== '') {
    filteredPlanets = filteredPlanets.filter((planet) =>
    planet.name.includes(filterByName.name));
  }
  filteredPlanets = filterNumbers(filteredPlanets, filterByNumericValues);
  filteredPlanets = filteredPlanets.sort(function (a, b) { return (order.sort === 'ASC') ?
   a[order.column].localeCompare(b[order.column]) :
   b[order.column].localeCompare(a[order.column])});
  filteredPlanets = filteredPlanets.sort(function (a, b) { return (order.sort === 'ASC') ?
   a[order.column] - b[order.column] : b[order.column] - a[order.column]});
  return (
    <tbody>
      {filteredPlanets.map((planet) =>
        <tr key={planet.name}>
          {
            headerData.map((item) =>
              <td key={item} data-testid={item === 'name' ? 'planet-name' : ''}>
                {planet[item]}
              </td>)
          }
        </tr>,
      )}
    </tbody>
  );
}
