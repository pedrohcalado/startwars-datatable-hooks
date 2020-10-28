import React, { useEffect, useContext, useState } from 'react';
import fetchAPI from '../../services/swapiAPI';
import { StarWarsContext } from '../../context/StarWarsContext';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import NameFilter from '../Filters/NameFilter';
import NumericFilter from '../Filters/NumericFilter';
import DeleteNumericFilter from '../Filters/DeleteNumericFilter';
import Order from '../Filters/Order';
import Loading from '../Loading/Loading';

export default function Table() {
  const { sets: { setData } } = useContext(StarWarsContext);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await fetchAPI().then((data) => data.results);
      setData(response);
      setIsLoading(false);
    }
    fetchData();
  }, [setData]);

  return (
    <div>
      <NameFilter />
      <NumericFilter />
      <DeleteNumericFilter />
      <Order />
      {isLoading && <Loading />}
      {!isLoading && <table>
        <TableHeader />
        <TableBody />
      </table>}
    </div>
  );
}
