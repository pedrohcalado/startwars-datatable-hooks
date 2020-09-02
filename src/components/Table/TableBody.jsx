import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';
import { headerData } from './TableHeader';
import { filterNumbers } from '../Filters/NumericFilter';
import { applyOrder } from '../Filters/Order';


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
  applyOrder(filteredPlanets, order);
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
