import React from 'react';
import { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';
import './NameFilter.css';

export default function NameFilter() {
  const { sets: { setName } } = useContext(StarWarsContext);
  return (
    <div className="nf--main-container">
      <label htmlFor="name">Search by name: </label>
      <input
        name="name"
        type="text"
        data-testid="name-filter"
        onChange={(event) => setName(event.target.value)}
        placeholder="Planet name"
      />
    </div>
  );
}
