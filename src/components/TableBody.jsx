import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import { headerData } from './TableHeader';

export default function TableBody() {
  const { data } = useContext(StarWarsContext);
  return (
    <tbody>
      {data.map((planet) =>
        <tr key={planet.name}>
          {
            headerData.map((item) =>
              <td key={item}>
                {planet[item]}
              </td>)
          }
        </tr>,
      )}
    </tbody>
  );
}
