// const fetch = require('node-fetch');

const URL = 'https://swapi-trybe.herokuapp.com/api/planets';

// Referência: aula ao vivo dia 16.4
const fetchAPI = () =>
  fetch(URL)
  .then((response) => response.json()
  .then((data) => data),
  );

export default fetchAPI;
