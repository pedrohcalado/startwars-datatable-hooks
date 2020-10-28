import React, { useEffect, useContext } from 'react';
import fetchAPI from '../../services/swapiAPI';
import { StarWarsContext } from '../../context/StarWarsContext';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import NameFilter from '../Filters/NameFilter';
import NumericFilter from '../Filters/NumericFilter';
import DeleteNumericFilter from '../Filters/DeleteNumericFilter';
import Order from '../Filters/Order';

export default function Table() {

  const { sets: { setData } } = useContext(StarWarsContext);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchAPI().then((data) => data.results);
      setData(response);
    }
    fetchData();
  }, [setData]);

  return (
    <div>
      <NameFilter />
      <NumericFilter />
      <DeleteNumericFilter />
      <Order />
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}
