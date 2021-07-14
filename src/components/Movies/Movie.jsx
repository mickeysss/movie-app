import {NavLink} from "react-router-dom";
import error from '../../assets/error.png'
import React  from "react";
import styles from '../Movies/Movie.module.css'
const Movie = ({movie,movieId}) => {

    return (
        <div className={styles.movieBlock}>
            <NavLink to={`/movies/${movieId}`} activeClassName="active" className={styles.movie}>
                 <img
                    src={movie.poster ? `https://image.tmdb.org/t/p/w500/${movie.poster}` : error}
                    className={styles.poster}/>
                <div className={styles.title}>{movie.title}</div>
                <div className={styles.rating}>
                     <i class="fas fa-star"></i>
                    {`${movie.rating}/10`}
                    </div>
            </NavLink>
        </div>
    );
};

export default Movie;


