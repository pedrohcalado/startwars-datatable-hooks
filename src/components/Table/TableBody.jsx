import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';
import { headerData } from './TableHeader';
import applyFilterNumbers from '../../utils/applyFilterNumbers';
import applyOrder from '../../utils/applyOrder';
import applyFilterByName from '../../utils/applyFilterByName';


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
                {planet[item]}
              </td>)
          }
        </tr>,
      )}
    </tbody>
  );
}
