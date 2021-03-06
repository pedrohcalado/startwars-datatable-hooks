export default function applyOrder(planets, order) {
  const filteredPlanets = planets;
  // sort if it is a string
  filteredPlanets.sort(function (a, b) {
    return (order.sort === 'ASC') ?
    a[order.column].localeCompare(b[order.column]) :
    b[order.column].localeCompare(a[order.column]);
  });
  // sort if it is a number
  filteredPlanets.sort(function (a, b) {
    return (order.sort === 'ASC') ?
    a[order.column] - b[order.column] :
    b[order.column] - a[order.column];
  });
}
