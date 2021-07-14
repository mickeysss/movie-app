import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";

import {getRatedMovies} from "../../redux/searchReducer";
import {NavLink} from "react-router-dom";
import styles from './RatedMovies.module.css'
import Movie from '../Movies/Movie';


const RatedMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRatedMovies(currentPage));
    }, [])
    const movies = useSelector((state) => state.ratedMovies);
    const currentPage = useSelector((state) => state.ratedPage);

    return (
        <div>
                    <div className={styles.ratedMovies}>
                        <div className={styles.movies}>
                                <div className={styles.inner}>
                                {movies.map((movie) => <Movie movieId={movie.id} movie={movie} />)}
                                </div>
                        </div>
                    </div>
        </div>

    )
}

export default RatedMovies

