import {searchAPI} from "../api/api";


const SET_MOVIES = 'SET_MOVIES';
const SET_RATED_MOVIES = 'SET_RATED_MOVIES'
const SET_MOVIE_CREDITS = 'SET_MOVIE_CREDITS'
const SET_PAGE = 'SET_PAGE'
const SET_PAGES = 'SET_PAGES'
const SET_RATED_PAGE = 'SET_RATED_PAGE'
const SET_RATED_PAGES = 'SET_RATED_PAGES'
const IS_FETCHING_ON = 'IS_FETCHING_ON'
const IS_FETCHING_OFF = 'IS_FETCHING_OFF'
const SET_CURRENT_MOVIE = 'SET_CURRENT_MOVIE'

const initialState = {
    movies: [],
    isFetching: false,
    ratedMovies: [],
    ratedPage: 1,
    ratedPages: 0,
    movieCredits: null,
    pages: null,
    page:1,
    currentMovieName: ''
    
}

export const searchReducer = (state = initialState,action) => {
    switch (action.type) {
        case SET_MOVIES:
            return{
                ...state, 
                movies:action.movies
            }
        case  SET_RATED_MOVIES:
            return{
                ...state, 
                ratedMovies:action.ratedMovies
            } 
        case IS_FETCHING_ON:
            return{
                ...state,
                isFetching:true
            } 
        case IS_FETCHING_OFF:
            return{
                ...state,
                isFetching:false
            }  
        case SET_PAGE:
            return {
                ...state, setPage: 1
            }
        case SET_PAGES:
            return {
                ...state, setPages: null
            }
        case SET_CURRENT_MOVIE:
            return{
                ...state,
                currentMovie:action.currentMovie
            } 
        case SET_MOVIE_CREDITS:
            return{
                ...state,
                movieCredits:action.movieCredits
            }
        case SET_RATED_PAGE:
            return {
                ...state, setRatedPage: 1
            }
        case SET_RATED_PAGES:
            return {
                ...state, setRatedPages: null
            }            
        default:
            return state
    }
}


export const setMovies = (movies) => {
    return {
        type: SET_MOVIES, 
        movies
    }
}

export const setRatedMovies = (ratedMovies) => {
    return {
        type: SET_RATED_MOVIES, 
        ratedMovies
    }
}
export const isFetchingON = (isFetching) => ({
    type: IS_FETCHING_ON,
    isFetching
})

export const isFetchingOFF = (isFetching) => ({
    type: IS_FETCHING_OFF,
    isFetching
})

export const setPages = (pages) => ({
    type: SET_PAGES,
    pages
})
export const setPage = (page) => ({
    type: SET_PAGE,
    page
}) 

export const setRatedPages = (ratedPages) => ({
    type: SET_RATED_PAGES,
    ratedPages
})
export const setRatedPage = (ratedPage) => ({
    type: SET_RATED_PAGE,
    ratedPage
}) 

export const setCurrentMovie = (currentMovie) => ({
    type: SET_CURRENT_MOVIE,
    currentMovie
})
export const setMovieCredits = (movieCredits) => ({
    type: SET_MOVIE_CREDITS,
    movieCredits
})

export const getMovies = (page,movie) => {
    return (dispatch) =>  {
    dispatch(isFetchingON())
    searchAPI.getMoviesByName(page,movie)
    .then(response => {
        let moviesInfo = response.data.results.map((movie) => ({
            poster: movie.poster_path,
            title: movie.title,
            id: movie.id,
            rating: movie.vote_average
        }))
        dispatch(setMovies(moviesInfo))
        dispatch(setPage(response.data.page));
        dispatch(setPages(response.data.total_pages));
        dispatch(setCurrentMovie(movie));
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {        
        dispatch(isFetchingOFF())
    })
}
}
export const getRatedMovies = (page) => {
        return (dispatch) =>{
            dispatch(isFetchingON())
            searchAPI.getRatedMovies(page) 
            .then(response => {
                let moviesInfo =response.data.results.map(movie => ({
                    poster: movie.poster_path,
                    title: movie.title,
                    id: movie.id,
                    rating: movie.vote_average,
                    vote_count: movie.vote_count
    
            }))
                dispatch(setRatedPages(response.data.total_pages))
                dispatch(setRatedPage(response.data.page))
                dispatch(setRatedMovies(moviesInfo))
                
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {        
                dispatch(isFetchingOFF())
            }) 
        }   
    }
    

export const getMovieCredits = (movieId) => {
    return (dispatch) => {
        dispatch(isFetchingON())
        searchAPI.getMovieCredits(movieId)
        .then(res => {
            dispatch(setMovieCredits(res.data))
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            dispatch(isFetchingOFF())
        })
    }
}
