import React from 'react';
import { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

export default function NameFilter() {
  const { sets: { setName } } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="name">Search by name: </label>
      <input
        name="name"
        type="text"
        data-testid="name-filter"
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
}
