import React from 'react';

export const headerData = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

export default function TableHeader() {
  return (
    <thead>
      <tr>
        {headerData.map((item) => <th key={item}>{item}</th>)}
      </tr>
    </thead>
  );
}
