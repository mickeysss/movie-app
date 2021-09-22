import { Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MovieItem from './components/Movies/MovieItem';
import RatedMovies from './components/Top-Rated-Movies/RatedMovies';
import SearchMovies from './components/Search-Movies/SearchMovies';
import React from 'react'
import About from './components/About/About';
function App(props) {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/search" component={SearchMovies} />
        <Route path="/rated" component={RatedMovies}/>
        <Route path="/movies/:movieId" component={MovieItem}/>
        <Route path="/about" component={About}/>
      </Switch>
    </div>
  );
}

export default App;
