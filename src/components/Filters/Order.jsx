import React, { useContext, useState } from 'react';
import { headerData } from '../Table/TableHeader';
import { StarWarsContext } from '../../context/StarWarsContext';

function ProvideInputs(props) {
  return (
    <div>
      <label htmlFor="ASC">
        Ascendent
        <input
          type="radio" data-testid="column-sort-input-asc" value="ASC"
          id="ASC"
          name="order"
          onChange={(e) => props.setSort(e.target.value) }
        />
      </label>
      <label htmlFor="DESC">
        Descendent
        <input 
        type="radio" data-testid="column-sort-input-desc" value="DESC"
        id="DESC"
        name="order"
        onChange={(e) => props.setSort(e.target.value) }
      />
      </label>
    </div>
  );
}

export default function Order() {
  const [column, setColumn] = useState('name');
  const [sort, setSort] = useState('ASC');
  const { sets: { setOrder } } = useContext(StarWarsContext);
  return (
    <div>
      <select
        data-testid="column-sort"
        onChange={(e) => setColumn(e.target.value)}
      >
        {headerData.map((column) =>
          <option key={column}>{column}</option>
        )}
      </select>
      <ProvideInputs setSort={setSort} />
      <button
        data-testid="column-sort-button"
        onClick={() => setOrder({
          column,
          sort
        })}
      >
        Submit
      </button>
    </div>
  );
}
