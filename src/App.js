import React from 'react';
import Films from './components/Films';
import superman from './i/superman.jpg';
import loneRunner from './i/lone-runner.jpg';
import batman from './i/batman.jpg';
import './App.css';

const films = [
  {
    id: 'film-01',
    poster: superman,
    title: 'Супермен',
    stars: 4,
    price: 1299,
    type: 'Экшн',
    color: 'orange',
    isFavorite: true,
  },
  {
    id: 'film-02',
    poster: loneRunner,
    title: 'Одинокий странник',
    stars: 3,
    price: 899,
    type: 'Вестерн',
    color: 'brown',
    isFavorite: false,
  },
  {
    id: 'film-03',
    poster: batman,
    title: 'Бэтмэн',
    stars: 5,
    price: 1499,
    type: 'Экшн',
    color: 'orange',
    isFavorite: false,
  },
];

function App() {
  return <Films list={films} />;
}

export default App;
