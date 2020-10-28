export default function applyFilterByName(filteredPlanets, filterByName) {
  if (filterByName.name !== '') {
    filteredPlanets = filteredPlanets.filter((planet) =>
      planet.name.includes(filterByName.name));
  };
  return filteredPlanets;
}
