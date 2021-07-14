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

































/*const App =() => {
    const [value, setValue] = useState([])
    const [movies, setMovies] = useState([])

    const getRequestMovie = async (movies) => {

        const url = `http://www.omdbapi.com/?s=${value}&apikey=62372e45`
        const response = await fetch(url)
        const responseAPI = await response.json()
        if (responseAPI.Search) {
            setMovies(responseAPI.Search)
        }
    }
    useEffect(() => {
        getRequestMovie(value)
    }, [value])

    return (
        <div>
            <input type="text" value={value} onChange={event => setValue(event.target.value)}
                   placeholder={"Write title of the movie"}/>
            <MoviesList movies={movies}/>
        </div>
    )
}*/

    /*
    const App = () => {
        const [movies,setMovies] = useState([
    /!*        {
                "Title": "The Godfather",
                "Year": "1972",
                "imdbID": "tt0068646",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
            },
            {
                "Title": "The Godfather: Part II",
                "Year": "1974",
                "imdbID": "tt0071562",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
            },
            {
                "Title": "The Godfather: Part III",
                "Year": "1990",
                "imdbID": "tt0099674",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNWFlYWY2YjYtNjdhNi00MzVlLTg2MTMtMWExNzg4NmM5NmEzXkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_SX300.jpg"
            },
            {
                "Title": "The Godfather Trilogy: 1901-1980",
                "Year": "1992",
                "imdbID": "tt0150742",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjk5ODZjYmMtYTJjNy00MTU2LWI5OTYtYTg5YjFlMDk3ZjI0XkEyXkFqcGdeQXVyODAyNDE3Mw@@._V1_SX300.jpg"
            },
            {
                "Title": "The Godfather Saga",
                "Year": "1977",
                "imdbID": "tt0809488",
                "Type": "series",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNzk3NmZmMjgtMjA4NS00MjdkLTlkZmMtZGFkMDAyNWU4NDdlXkEyXkFqcGdeQXVyODAyNDE3Mw@@._V1_SX300.jpg"
            },
            {
                "Title": "Miracles: The Canton Godfather",
                "Year": "1989",
                "imdbID": "tt0098019",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYThlMDRmNDYtNDU3YS00YmRkLTg0MWYtODIzZjM3MzViZDU3XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg"
            },
            {
                "Title": "The Godfather",
                "Year": "2006",
                "imdbID": "tt0442674",
                "Type": "game",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTQyNTE4NzMzNF5BMl5BanBnXkFtZTgwMDgzNTY3MDE@._V1_SX300.jpg"
            },
            {
                "Title": "The Last Godfather",
                "Year": "2010",
                "imdbID": "tt1584131",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxNTgzOTQyNV5BMl5BanBnXkFtZTcwMzI1NDk3NA@@._V1_SX300.jpg"
            },
            {
                "Title": "The Black Godfather",
                "Year": "2019",
                "imdbID": "tt10289996",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BZmFhNjM5MTItZDRkNS00ZjUyLTkyMWUtZjg1YWZjMjFlYjg0XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg"
            },
            {
                "Title": "The Godfather II",
                "Year": "2009",
                "imdbID": "tt1198207",
                "Type": "game",
                "Poster": "https://m.media-amazon.com/images/M/MV5BODY0OTIxNTI1Ml5BMl5BanBnXkFtZTcwNjc0NjkzMg@@._V1_SX300.jpg"
            }*!/
        ])
        const getMovies = async () => {
            const url = 'http://www.omdbapi.com/?s=the godfather&apikey=62372e45'
            const response = await fetch(url)
            const responseJSON = await response.json()


            if(responseJSON.Search) {
                setMovies(responseJSON.Search)
            }
        }

        useEffect(() => {
            getMovies()
        })

        return (
            <div>
                <MovieList movies={movies}/>
            </div>
        )
    }
    */

/*
export default App*/
