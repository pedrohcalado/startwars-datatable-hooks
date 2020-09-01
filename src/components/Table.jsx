import React, { useEffect, useContext } from 'react';
import fetchAPI from '../services/swapiAPI';
import { StarWarsContext } from '../context/StarWarsContext';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default function Table() {
  const { setData } = useContext(StarWarsContext);
  useEffect(() => {
    async function fetchPlanets() {
      const response = await fetchAPI().then(data => data.results);
      setData(response);
    }
    fetchPlanets();
  },[setData]);

  return (
    <div>
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}
