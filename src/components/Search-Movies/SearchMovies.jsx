import {useState} from "react";
import styles from "./SearchMovies.module.css";
import {useDispatch, useSelector} from "react-redux";

import Movie from "../Movies/Movie";
import {getMovies} from "../../redux/searchReducer";

const SearchMovies = () => {
    const [inputValue, setInputValue] = useState([]);
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);

    function inputHandler(event){
        setInputValue(event.target.value)
    }

    function onFormSubmit(event){
        event.preventDefault()
        dispatch(getMovies(1,inputValue))
    }
    return (
        <div className={styles.searchContainer}>
            <form onSubmit={onFormSubmit} className={styles.form}>
                <input type={'text'}
                       value={inputValue}
                       onChange={inputHandler}
                       placeholder="Введите название фильма"
                       className={styles.input}
                       onFocus={() => setInputValue("")}/>
                <button className={styles.icon} disabled={!inputValue}>
                    Поиск
                </button>
            </form>
            <>
                <div className={styles.movies}>
                    <div className={styles.inner}>
                        {movies.map((movie) => (
                        <Movie movie={movie} movieId={movie.id} />
                        ))
                        }                    
                    </div>
                </div>
            </>
        </div>
    );
};


export default SearchMovies;
