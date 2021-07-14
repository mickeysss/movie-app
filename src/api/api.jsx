import axios from "axios"
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

// export const searchAPI = {
//     getMoviesByName(page, movie){
//         return instance.get(`search/movie?api_key=320ef2b5438de647cfe72fb45ed0efdf&language=ru&query=${movie}&page=${page}`)
//     },

//     getHighRatedMovies(page){
//         return instance.get(`movie/top_rated?api_key=320ef2b5438de647cfe72fb45ed0efdf&language=ru${page}`)
//     },
//     getMovieCredits(movieId){
//         return instance.get(`/movie/${movieId}?api_key=320ef2b5438de647cfe72fb45ed0efdf&language=ru`)
//     },
// }


export const searchAPI = {
    getMoviesByName( page, movie){
        return instance.get(`search/movie?api_key=320ef2b5438de647cfe72fb45ed0efdf&language=ru&query=${movie}&page=${page}`)
    },

    getRatedMovies(page){
        return instance.get(`/movie/top_rated?api_key=320ef2b5438de647cfe72fb45ed0efdf&language=${page}`)
    },
    getMovieCredits(movieId){
        return instance.get(`/movie/${movieId}?api_key=320ef2b5438de647cfe72fb45ed0efdf&language=ru`)
    },
}
