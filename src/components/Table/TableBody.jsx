import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';
import { headerData } from './TableHeader';
import applyFilterNumbers from '../../utils/applyFilterNumbers';
import applyOrder from '../../utils/applyOrder';
import applyFilterByName from '../../utils/applyFilterByName';
import './TableBody.css';

export default function TableBody() {
  const {
    data,
    filters: { filterByName, filterByNumericValues, order },
  } = useContext(StarWarsContext);

  let filteredPlanets = data;

  // apply filter by name
  filteredPlanets = applyFilterByName(filteredPlanets, filterByName);

  // apply filter by numbers
  filteredPlanets = applyFilterNumbers(filteredPlanets, filterByNumericValues);

  // apply order
  applyOrder(filteredPlanets, order);

  return (
    <tbody>
      {filteredPlanets.map((planet) =>
        <tr key={planet.name}>
          {
            headerData.map((item) =>
              <td key={item} data-testid={item === 'name' ? 'planet-name' : ''}>
                {(item === 'created' || item === 'edited') ? new Date(planet[item]).toLocaleString('pt-br') : planet[item]}
              </td>)
          }
        </tr>,
      )}
    </tbody>
  );
}
