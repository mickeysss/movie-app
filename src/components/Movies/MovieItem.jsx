
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieCredits, setMovieCredits } from '../../redux/searchReducer';
import Loader from '../Loader/Loader';
import styles from './MovieItem.module.css'
const MovieItem = (props) => {
    const dispatch = useDispatch()
    const movieId =  props.match.params.movieId
    const movieCredits = useSelector(state => state.movieCredits)
    useEffect(() => {
        if (movieId) {
            dispatch(getMovieCredits(+movieId));
        }
        return () => {
            dispatch(setMovieCredits(null));
        }
    }, [])
    return (
        
        <>
        {movieCredits ?
            <div className={styles.movieDescription}>
                <div className={styles.inner}>
                    <div className={styles.poster}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movieCredits.poster_path}`}
                            alt={movieCredits.title}
                            className={styles.posterImg} />
                    </div>
                    <div className={styles.credits}>
                        <div className={styles.title}>
                            <h1>{movieCredits.title}</h1>
                        </div>
                        
                        <div className={styles.statistic}>
                            <div className={styles.rating}>
                                <i className={'fas fa-star'}></i>
                                <div className={styles.rating__count}>{movieCredits.vote_average ? `${movieCredits.vote_average.toFixed(1)}/10`  : "оценок нет"}</div>
                            </div>
                            <div className={styles.mainInfo}>
                                {movieCredits.production_countries[0].name} / {movieCredits.runtime} мин. / {new Date(`${movieCredits.release_date}`).getFullYear()} год
                    </div>
                        </div>
                        <div className={styles.genres}>
                            <div className={styles.geners__title}>Жанры:</div>
                            <div className={styles.geners__inner}>
                                {movieCredits.genres.map(gener =>
                                    <div className={styles.gener}>
                                        <div className={styles.gener__circle}></div>
                                        <div className={styles.gener__name}>{gener.name}</div>
                                    </div>)}
                            </div>
                        </div>
                        <div className={styles.overview}>
                            <div className={styles.overview__title}>Cюжет</div>
                            <div className={styles.overview__text}>
                                {movieCredits.overview ?  `${movieCredits.overview}` : 'Описание отсутствует'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : <Loader/>
        }
    </>
    );
}
export default MovieItem;
